import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import { graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const IndexPage = ({data}) => {

  const sells = data.allMerukariSentenceJson.edges.filter(edge => edge.node.type === 0);
  const buys = data.allMerukariSentenceJson.edges.filter(edge => edge.node.type === 1);
  
  const [isBuyMode, setBuyMode] = useState(false);
  const itemsToDisplay = isBuyMode ? buys : sells;

  return (
    <div className="container mt-5">
        <h1>メルカリテンプレートコピー</h1>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label={isBuyMode ? "購入モード" : "販売モード"}
            onChange={() => setBuyMode(!isBuyMode)}
          />
        </Form>
        
        <div className="mt-4">
          {
            itemsToDisplay.map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <button className="btn btn-primary m-2" onClick={() => navigator.clipboard.writeText(item.node.text)}>
                  {item.node.title}
                </button>
              </div>
            ))
          }
        </div>
    </div>
  );
}

export const query = graphql`
  query {
    allMerukariSentenceJson {
      edges {
        node {
          id
          title
          text
          type
        }
      }
    }
  }
`
export default IndexPage;
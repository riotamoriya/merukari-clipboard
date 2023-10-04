/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  pathPrefix: "/merukari-clipboard",
  siteMetadata: {
    title: `merukari-clipboard`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-mdx", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages",
    }, 
    
    `gatsby-transformer-json`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `merukari-clipboard`,
        short_name: `merukari-clipboard`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // このパスはあなたの画像に基づいています。
      },
    },
    `gatsby-plugin-offline`,  // この行を追加
  ]
};
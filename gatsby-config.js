/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imgs`,
        path: `${__dirname}/src/imgs/`,
      }
    },
    // `gatsby-plugin-sharp`,
    // `gatsby-transformer-sharp`,
    ],
    siteMetadata: {
      title: 'Cake',
      description: 'Site for the recipies of delicious cakes',
      contact: '@sweetcake'
    }
}

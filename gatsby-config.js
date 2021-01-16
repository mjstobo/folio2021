/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Matthew Stobo - Full-stack Developer`,
    description: "Full-stack Developer from Melbourne, Australia",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "mjstobo.com",
        protocol: "https",
        hostname: "www.mjstobo.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-135652591-1", // Google Analytics / GA
        ],
      },
    },
  ],
}

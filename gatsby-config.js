


module.exports = {
  pathPrefix: `/mayfes2021`,
  siteMetadata: {
    siteUrl: "https://dp9.tokyo/mayfes2021",
    title: "mayfes2021",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-JKDYN06Z5D",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

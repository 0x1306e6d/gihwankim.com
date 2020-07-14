module.exports = {
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-138964328-3",
      },
    },
  ],
}

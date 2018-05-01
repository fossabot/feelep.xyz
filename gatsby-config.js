module.exports = {
  siteMetadata: {
    title: `feelep.xyz`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    { resolve: 'gatsby-transformer-remark' },
    { resolve: 'gatsby-plugin-netlify' }
  ],
}

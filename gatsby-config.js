const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

console.log('CONTENTFUL_SPACE_ID', CONTENTFUL_SPACE_ID);
console.log('CONTENTFUL_ACCESS_TOKEN', CONTENTFUL_ACCESS_TOKEN);

module.exports = {
  siteMetadata: {
    title: `feelep.xyz`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        host: `preview.contentful.com`,
      },
    },
    { resolve: 'gatsby-transformer-remark' },
    { resolve: 'gatsby-plugin-netlify' }
  ],
}

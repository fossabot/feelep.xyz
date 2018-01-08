const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN_PRODUCTION,
  CONTENTFUL_ACCESS_TOKEN_PREVIEW,
  CONTEXT
} = process.env;

// Use Contentful preview locally and for Netlify branch deploys
const isProduction = CONTEXT === 'production';
const CONTENTFUL_HOST = isProduction ? null : 'preview.contentful.com';
const CONTENTFUL_ACCESS_TOKEN = isProduction ? CONTENTFUL_ACCESS_TOKEN_PRODUCTION : CONTENTFUL_ACCESS_TOKEN_PREVIEW;

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
        host: CONTENTFUL_HOST,
      },
    },
    { resolve: 'gatsby-transformer-remark' },
    { resolve: 'gatsby-plugin-netlify' }
  ],
}

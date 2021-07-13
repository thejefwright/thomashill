module.exports = {
  siteMetadata: {
    title: 'ThomasHillGardening',
    siteUrl: 'https://thomashillgardendesign.com',
    instagram: '@gardenguy04107',
    image: './src/images/house2.jpg',
    description: 'The best garden deisgn in Maine',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter', //TODO: Fix title
    desc: 'A new blog',
  },
  pathPrefix: '/gatsby',
  plugins: [
    // Makes Gatsby work with Helmet
    'gatsby-plugin-react-helmet',

    //Fetches images
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },

    //Makes filesystem src available in datalayer
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },

    // Manipulates images
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    // Use markdown files
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!--- end --->',
      },
    },
  ],
}

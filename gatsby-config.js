module.exports = {
  siteMetadata: {
    title: "Creasanit - Plomberie en aquitaine",
    author: "Guillaume Vincent",
    description: "Creasanit - Plomberie en aquitaine, realisation de salle de bain, toilette."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

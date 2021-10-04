require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    organizaton: "Missie Tumor Onbekend",
    title: `Steun Missie Tumor Onbekend`,
    siteUrl: "https://steunmissietumoronbekend.nl/",
    description: `Missie Tumor Onbekend zet zich in voor betere toegang tot zorg, informatie en baanbrekend onderzoek voor patiënten met uitgezaaide kanker van een onbekende primaire tumor (PTO). Laten we gezamenlijk het onbekende bekend maken, door steun aan de Missie`,
    twitterSite: "https://twitter.com/tumoronbekend",
    twitterDescription: 'Missie Tumor Onbekend zet zich in voor betere toegang tot zorg, informatie en baanbrekend onderzoek voor patiënten met uitgezaaide kanker van een onbekende primaire tumor (PTO).',
    author: `Joey Grolleman`,

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/defaultPage`, `/donatePage`, `/projectPage`]
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://steunmissietumoronbekend.nl",
        sitemap: "https://steunmissietumoronbekend.nl/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-gatsby-cloud`,
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://www.missietumoronbekend.nl/wordpress/gatsby/graphql`,
      },

      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NFS3PP9",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "SMTO_Datalayer" },
        dataLayerName: "GTM-NFS3PP9",
        routeChangeEventName: "SMTO_ChangeEvent",
      },
    },
  ],
}

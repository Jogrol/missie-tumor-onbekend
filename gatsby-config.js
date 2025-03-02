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
    twitterDescription:
      "Missie Tumor Onbekend zet zich in voor betere toegang tot zorg, informatie en baanbrekend onderzoek voor patiënten met uitgezaaide kanker van een onbekende primaire tumor (PTO).",
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
        excludes: [`/defaultPage`, `/donatePage`, `/projectPage`],
      },
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
    `gatsby-transformer-json`,
    {
      /**
       * Source filesystem plugin to source data from the filesystem
       * We're using this to source our local JSON data
       */
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NFS3PP9",
        includeInDevelopment: false,
        dataLayerName: "dataLayer",
      },
    },
  ],
}

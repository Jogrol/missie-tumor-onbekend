const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const {
    data: {
      allWpPage: { nodes: contentPages },
      allWpPost: { edges: contentPosts },
    },
  } = await graphql(`
    query ALL_CONTENT_NODES {
      allWpPage {
        nodes {
          uri
          nodeType
          id
          title
          isFrontPage
          content
          status
        }
      }
      allWpPost {
        edges {
          node {
            id
            uri
            title
            content
          }
        }
      }
    }
  `)

  await Promise.all(
    contentPosts.map(async edge => {
      const { id, uri } = edge.node

      await actions.createPage({
        component: resolve("./src/pages/postPage.js"),
        path: `${uri}`,
        context: {
          id: id,
        },
      })
    }),

    contentPages.map(async ({ uri, id, title }) => {
      const pageType = {
        Home: resolve(`./src/pages/homePage.js`),
        "Steun ons": resolve(`./src/pages/donatePage.js`),
        "PROJECT A": resolve(`./src/pages/projectPage.js`),
        Patiëntenverhalen: resolve("./src/pages/storiesPage.js"),
        default: resolve(`./src/pages/defaultPage.js`),
      }

      await actions.createPage({
        component: pageType[title] ? pageType[title] : pageType.default,
        path: `${uri}`,
        context: {
          id: id,
        },
      })
    })
  )
}

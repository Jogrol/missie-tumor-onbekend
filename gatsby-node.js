const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  // TODO, Create template in WP for support page
  const SUPPORT_TITLE = "Steun ons"

  // Helpers
  const isSupportProjectPage = title => {
    return title.includes("project")
  }

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

    contentPages.map(async node => {
      const { uri, id, isFrontPage, title } = node

      const projectPage = resolve(`./src/pages/projectPage.js`)
      const donatePage = resolve(`./src/pages/donatePage.js`)
      const defaultPage = resolve(`./src/pages/defaultPage.js`)
      const homePage = resolve(`./src/pages/homePage.js`)

      // should be better
      const createComponentFactory = title => {
        if (title === SUPPORT_TITLE) {
          return donatePage
        }
        if (isSupportProjectPage(title)) {
          return projectPage
        }

        return defaultPage
      }

      await actions.createPage({
        component: createComponentFactory(title),
        path: `${uri}`,
        context: {
          id: id,
        },
      })
    })
  )
}

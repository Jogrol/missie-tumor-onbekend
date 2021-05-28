import { resolve } from `path`

export async function createPages({ actions, graphql }) {
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
    contentPosts.map(async (edge) => {
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
      const projectPage = resolve(`./src/pages/projectPage.js`)
      const donatePage = resolve(`./src/pages/donatePage.js`)
      const defaultPage = resolve(`./src/pages/defaultPage.js`)
      const homePage = resolve(`./src/pages/homePage.js`)

      // Todo, should come from WP
      const pageType = {
        Home: homePage,
        "Steun ons": donatePage,
        "PROJECT A": projectPage,
      }

      await actions.createPage({
        component: pageType[title] ?? defaultPage,
        path: `${uri}`,
        context: {
          id: id,
        },
      })
    })
  )
}

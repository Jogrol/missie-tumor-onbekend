const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const {
    data: {
      allWpPage: { nodes: contentNodes },
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
        }
      }
    }
  `)

  await Promise.all(
    contentNodes.map(async node => {
      const { uri, id, isFrontPage } = node

      const defaultPage = resolve(`./src/pages/defaultPage.js`)
      const homePage = resolve(`./src/pages/homePage.js`)

      await actions.createPage({
        component: isFrontPage ? homePage : defaultPage,
        path: `${uri}`,
        context: {
          id: id,
        },
      })
    })
  )
}

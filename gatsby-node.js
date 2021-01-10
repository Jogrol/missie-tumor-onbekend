const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  // TODO, Create template in WP for support page
  const SUPPORT_TITLE = "Steun ons"

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
          status
        }
      }
    }
  `)

  await Promise.all(
    contentNodes.map(async node => {
      const { uri, id, isFrontPage, title } = node

      const donatePage = resolve(`./src/pages/donatePage.js`)
      const defaultPage = resolve(`./src/pages/defaultPage.js`)
      const homePage = resolve(`./src/pages/homePage.js`)

      const createComponentFactory = title => {
        return title === SUPPORT_TITLE ? donatePage : defaultPage
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

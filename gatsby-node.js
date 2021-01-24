const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  // TODO, Create template in WP for support page
  const SUPPORT_TITLE = "Steun ons"
  const isSupportProjectPage = title => {
    return title.includes("project")
  }

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

      const projectPage = resolve(`./src/pages/projectPage.js`)
      const donatePage = resolve(`./src/pages/donatePage.js`)
      const defaultPage = resolve(`./src/pages/defaultPage.js`)
      const homePage = resolve(`./src/pages/homePage.js`)

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

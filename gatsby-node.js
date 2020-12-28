const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
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
    contentNodes.map(async (node, index) => {
      const { uri, title, content, id, isFrontPage } = node

      const perPage = 10
      const page = index + 1
      const offset = perPage * index

      const defaultPage = resolve(`./src/pages/defaultPage.js`)
      const homePage = resolve(`./src/pages/homePage.js`)

      console.log("check", id, isFrontPage)
      await actions.createPage({
        component: isFrontPage ? homePage : defaultPage,
        path: `${uri}`,
        context: {
          id: id,
          // page: page,
          // offset: offset,
          // totalPages: contentNodes.length,
          // title,
          // content,
        },
      })
    })
  )
}

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
          content
        }
      }
    }
  `)

  await Promise.all(
    contentNodes.map(async (node, index) => {
      const { uri, title, content, id } = node

      const perPage = 10
      const page = index + 1
      const offset = perPage * index

      await actions.createPage({
        component: resolve(`./src/pages/page.js`),
        path: `${uri}`,
        context: {
          firstId: id,
          page: page,
          offset: offset,
          totalPages: contentNodes.length,
          title,
          content,
        },
      })
    })
  )
}

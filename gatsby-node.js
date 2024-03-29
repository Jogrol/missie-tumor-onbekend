const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const {
    data: {
      allWpPage: { nodes: contentPages },
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
    contentPages.map(async ({ uri, id, title }) => {
      const pageType = {
        "Steun Missie Tumor Onbekend": resolve(`./src/pages/donatePage.tsx`),
        Fondsenwervingsbeleid: resolve(`./src/pages/defaultPage.tsx`),
        "Bedankt voor uw donatie": resolve(`./src/pages/defaultPage.tsx`),
        "Privacy & cookie verklaring": resolve(`./src/pages/defaultPage.tsx`),
        default: resolve(`./src/pages/projectPage.tsx`),
      }

      await actions.createPage({
        component: pageType[title] ? pageType[title] : pageType.default,
        path: uri.replace("/steun-missie-tumor-onbekend/", "/"),
        context: {
          id: id,
        },
      })
    })
  )
}

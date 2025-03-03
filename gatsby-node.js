const { resolve } = require(`path`)

// Create pages from our JSON data
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Create a simple test page to verify our setup is working
  createPage({
    path: "/test-page",
    component: resolve(`./src/pages/defaultPage.tsx`),
    context: {
      id: "page-1",
    },
  })

  try {
    const result = await graphql(`
      query ALL_CONTENT_NODES {
        allWordpressDataJson {
          nodes {
            id
            uri
            title
          }
        }
      }
    `)

    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    // Check if we have data
    if (!result.data || !result.data.allWordpressDataJson || !result.data.allWordpressDataJson.nodes) {
      reporter.info('No WordPress data nodes found')
      return
    }

    const contentPages = result.data.allWordpressDataJson.nodes

    await Promise.all(
      contentPages.map(async ({ uri, id, title }) => {
        if (!uri) {
          reporter.warn(`Page with id ${id} has no URI, skipping`)
          return
        }

        const pageType = {
          "Steun Missie Tumor Onbekend": resolve(`./src/pages/donatePage.tsx`),
          "Informatievoorziening & bewustwording": resolve(`./src/pages/projectPage.tsx`),
          "Ondersteunen van wetenschappelijk onderzoek": resolve(`./src/pages/projectPage.tsx`),
          "Verbetering inzet zorg": resolve(`./src/pages/projectPage.tsx`),
          Fondsenwervingsbeleid: resolve(`./src/pages/defaultPage.tsx`),
          "Bedankt voor uw donatie": resolve(`./src/pages/defaultPage.tsx`),
          "Privacy & cookie verklaring": resolve(`./src/pages/defaultPage.tsx`),
          default: resolve(`./src/pages/defaultPage.tsx`),
        }

        const path = uri.replace("/steun-missie-tumor-onbekend/", "/")
        reporter.info(`Creating page: ${path} with template: ${pageType[title] || pageType.default}`)

        await createPage({
          component: pageType[title] ? pageType[title] : pageType.default,
          path: path,
          context: {
            id: id,
          },
        })
      })
    )
  } catch (error) {
    reporter.panicOnBuild(`Error while creating pages: ${error}`)
  }
}



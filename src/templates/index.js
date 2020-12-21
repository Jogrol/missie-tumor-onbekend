import React from "react"
import { graphql, Link, navigate } from "gatsby"
// import Img from "gatsby-image"
// import ReactPaginate from "react-paginate"

import Layout from "../components/layout"
// import { normalizePath } from "../utils/get-url-path"

export default ({ data, pageContext }) => (
  <Layout>
    <div>
      <h2>pageContext</h2>
      <span>{JSON.stringify(pageContext)}</span>
    </div>
  </Layout>
)

// export const query = graphql`
//   fragment Thumbnail on File {
//     childImageSharp {
//       fluid(maxWidth: 500) {
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//   }

//   query HomePage($offset: Int!, $perPage: Int!) {
//     allWpPost(
//       limit: $perPage
//       skip: $offset
//       filter: { nodeType: { in: ["Post", "Page", "Alot"] } }
//       sort: { fields: date, order: DESC }
//     ) {
//       nodes {
//         uri
//         title
//         featuredImage {
//           node {
//             remoteFile {
//               ...Thumbnail
//             }
//           }
//         }
//       }
//     }
//   }
// `

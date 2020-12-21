import React from "react"
import Layout from "../components/layout"

const Post = ({ data }) => {
  return (
    <Layout>
      <h2>Post</h2>
      <h5>{data.page.title}</h5>
      <div>{JSON.stringify(data)}</div>
    </Layout>
  )
}

export default Post

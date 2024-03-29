import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const doc = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{doc.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: doc.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data,location }) => {
  const post = data.markdownRemark
  console.log(location)
  return (
    <Layout location={location} crumbLabel={location.pathname.substring(location.pathname.lastIndexOf("/")+1)}>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($fileAbsolutePath: String!) {
    markdownRemark(fileAbsolutePath:  { eq: $fileAbsolutePath } ) {
      html
      headings {
        value
      }
      frontmatter {
        title
      }
    }
  }
`
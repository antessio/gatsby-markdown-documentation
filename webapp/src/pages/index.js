import React from "react"
import { graphql,Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default ({ data,location }) => {

  return (
    <Layout crumbLabel="Home" location={location}>
      <div>
        <h1
          css={css`
          color: rgb(112, 114, 114);
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Documentation Index
        </h1>
        {data.allDirectory.edges.sort((e1,e2)=>e1.node.relativePath.localeCompare(e2.node.relativePath)).map(({ node }) => (
          <div key={node.id}>
        
              
            <h3>
            <Link
              // to={node.fields.slug.slice(0,-1)+".md"}
              to={node.relativePath}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
            {node.relativePath}
            {/* {node.headings.length>0?node.headings[0].value:"mammt"} */}
            </Link>
            </h3>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query{
  allDirectory(filter: {absolutePath: {regex: "//app/webapp/content/\\\\w+$/"}}) {
    edges {
      node {
        absolutePath
        relativeDirectory
        base
        relativePath
        root
        uid
      }
    }
    totalCount
  }
}
`
// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           headings{
//             value
//           }
//           fields{
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `
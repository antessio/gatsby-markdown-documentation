import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data,location }) => {
  const docs = data.allSitePage.nodes;
  console.log(location)
  const currentPath = location.pathname.slice(1);
  return (
    <Layout location={location} crumbLabel={currentPath}>
      <div>
        <h2>{currentPath}</h2>
      
        <ul>
          {docs && docs.sort((d1,d2)=>d1.isDirectory?-1:1).map(d=>(
            <li key={d.path}>
              <Link to={d.path}>
                {d.path.replace("/"+d.context.relativeDirectory+"/","")} 
              </Link>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pathGlob: String!)  {
    allSitePage(filter:{ path:{ glob: $pathGlob} }) {
      nodes{
        path
        context{
          slug
          pathGlob
          isDirectory
          relativeDirectory
          fileAbsolutePath
        }
      }
    }
  }
`
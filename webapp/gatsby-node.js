const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFile(filter: {ext: {eq: ".md"}}) {
        edges {
          node {
            absolutePath
            relativePath
            relativeDirectory
          }
        }
      }
    }
  `)
const directoriesResult = await graphql(`
  query{
    allDirectory(filter: {absolutePath: {regex: "//app/webapp/content.*/"}}) {
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
    }
  }
  `)
  directoriesResult.data.allDirectory.edges.forEach( ({node})=>{
    if(node.relativePath!=''){
      createPage({
        path: node.relativePath,
        component: path.resolve(`./src/templates/section-index.js`),
        context: {
          isDirectory: true,
          slug: node.relativePath,
          pathGlob: "/"+node.relativePath+"/*",
          relativeDirectory: node.relativeDirectory,
          fileAbsolutePath: node.absolutePath
        },
      })   
    }
  }
  )
  result.data.allFile.edges.forEach(({ node }) => {
        createPage({
      path: node.relativePath.replace("#","\#"),
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        isDirectory: false,
        slug: node.relativePath,
        relativeDirectory: node.relativeDirectory,
        pathGlob: "/"+node.relativePath+"*",
        fileAbsolutePath: node.absolutePath
      },
    })
  })
}
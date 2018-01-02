const path = require('path')
const pathToArticle = path.resolve('./src/pages/blog/Article.js')

const createArticlesFromMarkdown = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const posts = await graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            date
            path
            title
            summary
            tags
          }
        }
      }
    }
  }`)

  if (posts.errors) throw new Error(posts.errors)

  const { edges: articles } = posts.data.allMarkdownRemark
  articles.map(({ node: article }) => createPage({
    path: article.frontmatter.path,
    component: pathToArticle
  }))
}

exports.createPages = createArticlesFromMarkdown

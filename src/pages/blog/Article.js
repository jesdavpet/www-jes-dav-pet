import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Article = ({ data, location }) => {
  const { markdownRemark: article } = data
  const { html: __html } = article
  const { title, date } = article.frontmatter

  return <div>
    <Helmet title={title} />

    <h2>{title}</h2>

    <article dangerouslySetInnerHTML={{ __html }} />
  </div>
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path } }) {
      html
      frontmatter {
        title
        date
        path
        tags
        summary
      }
    }
  }
`

export default Article

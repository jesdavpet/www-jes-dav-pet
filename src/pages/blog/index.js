import React from 'react'
import Link from 'gatsby-link'

import ArticleSummary from './ArticleSummary.component'

const IndexPage = ({ data }) => {
  const { edges = [] } = data.allMarkdownRemark
  const articles = edges
    .map(({ node: article }) => article)
    .filter(article => !!article)
  const hasArticles = articles.length > 0

  return hasArticles
    ? <div>
        {articles.map((article, i) =>
          <ArticleSummary key={`article-summary-${i}`} article={article} />)}
      </div>
    : <div>NO ARTICLES !!!</div>
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
            summary
            date
          }
        }
      }
    }
  }
`

export default IndexPage
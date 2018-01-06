import React from 'react'
import Link from 'gatsby-link'
import { pipe } from 'ramda'

import AllTags from './AllTags.component'
import ArticleSummary from './ArticleSummary.component'

const extractQueryResults = ({ data }) => {
  const { edges = [] } = data.allMarkdownRemark

  const articles = edges
    .map(({ node: article }) => article)
    .filter(article => !!article)

  const tags = articles
    .reduce((t, a) => t.concat(a.frontmatter.tags), [])
    .reduce((t, a) => t.includes(a) ? t : t.concat(a), [])

  return { articles, tags }
}

const IndexPage = ({ articles = [], tags = [] }) => {
  const NO_ARTICLES = <div>NO ARTICLES !!!</div>

  return <div>
    <AllTags tags={tags} />
    {articles.map((article, i) =>
      <ArticleSummary key={`article-summary-${i}`} article={article} />)}
  </div>
}

const Index = pipe(extractQueryResults, IndexPage)

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

export default Index

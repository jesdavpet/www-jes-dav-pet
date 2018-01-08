import graphql from 'graphql-tag'
import {
  always, flatten, isNil, lensPath, lensProp, map,
  pathOr, pipe, reject, uniq, view, when
} from 'ramda'

const edges = pathOr([], [`data`, `allMarkdownRemark`, `edges`])
const nodes = pathOr(null, [`node`])
const tags = pathOr(null, [`frontmatter`, `tags`])

const getArticles = pipe(edges, map(nodes), reject(isNil))
const getTags = pipe(getArticles, map(tags), flatten, uniq, reject(isNil))

export const IndexQuery = graphql`
query IndexQuery {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date
          title
          path
          summary
          tags
        }
      }
    }
  }
}`

export const extractResults = results => ({
  articles: getArticles(results),
  tags: getTags(results)
})

export default { IndexQuery, extractResults }

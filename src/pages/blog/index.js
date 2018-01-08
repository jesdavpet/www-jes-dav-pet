import React from 'react'
import Link from 'gatsby-link'
import { pipe } from 'ramda'

import BlogMarkdown from './BlogMarkdown.graphql'

import AllTags from './AllTags.component'
import ArticleSummary from './ArticleSummary.component'
import TableOfContents from './TableOfContents.component'

const Index = ({ articles, tags }) =>
  <div>
    <AllTags tags={tags} />
    <TableOfContents articles={articles} />
  </div>

export const query = BlogMarkdown.IndexQuery
export default pipe(BlogMarkdown.extractResults, Index)

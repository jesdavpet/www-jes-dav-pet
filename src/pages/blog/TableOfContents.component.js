import React from 'react'

import ArticleSummary from './ArticleSummary.component'

class TableOfContents extends React.Component {
  render () {
    const articles = this.props.articles

    if (articles.length > 0) return <div>
      {articles.map((article, i) =>
        <ArticleSummary key={`article-summary-${i}`} article={article} />)
      }
    </div>

    return <h2>NO CONTENT !!!</h2>
  }
}

export default TableOfContents

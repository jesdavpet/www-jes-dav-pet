import React from 'react'
import Link from 'gatsby-link'
import Tag from './Tag.component'

class ArticleSummary extends React.Component {
  render () {
    const { path, title, summary, date, tags } = this.props.article.frontmatter

    return <dl>
      <dt>
        <h4 className="display-4">
          <Link to={path}>{title}</Link>
        </h4>
      </dt>

      <dd>
        <div>{summary}</div>
        {tags.map((tag, i) => <Tag key={`tag-${date}-${i}`} tag={tag} />)}
      </dd>
    </dl>
  }
}

export default ArticleSummary

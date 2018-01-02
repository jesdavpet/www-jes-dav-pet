import React from 'react'
import Link from 'gatsby-link'

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
        {tags
          ? <div>
              {tags.map((tag, i) => (
                <span key={`tag-${date}-${i}`} className="badge badge-light">
                  {tag}
                </span>
              ))}
            </div>
          : ``
        }
      </dd>
    </dl>
  }
}

export default ArticleSummary

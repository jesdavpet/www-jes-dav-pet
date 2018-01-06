import React from 'react'

import Tag from './Tag.component'

class AllTags extends React.Component {
  render () {
    const tags = this.props.tags || []
    return <ul>
      {tags.map((tag, i) => <li key={`all-tags-${i}`}><Tag tag={tag} /></li>)}
    </ul>
  }
}

export default AllTags

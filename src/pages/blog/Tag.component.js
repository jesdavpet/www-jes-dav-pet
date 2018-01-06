import React from 'react'

class Tag extends React.Component {
  render () {
    const tag = this.props.tag
    return <span className="badge badge-light">{tag}</span>
  }
}

export default Tag

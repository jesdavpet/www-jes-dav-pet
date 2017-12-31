import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { socialIcons, DEFAULT_ICON } from '../data/socialIcons'

const linkStyle = { color: `#ffffff` }

const matchSocialIcon = (url) => {
  const [match] = socialIcons.filter(b => url.includes(b.urlFragment))
  return match ? match.icon : DEFAULT_ICON
}

class SocialLink extends React.Component {
  render () {
    const {url, title} = this.props
    return <a style={linkStyle} className="nav-link" href={url}>
      <FontAwesomeIcon icon={matchSocialIcon(url)} />{title}
    </a>
  }
}

export default SocialLink

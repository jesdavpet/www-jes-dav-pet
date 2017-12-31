import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import SocialLink from './SocialLink.component'
import socialLinks from '../data/socialLinks'

class SocialAccounts extends React.Component {
  render () {
    return <span className="display-4">
      <ul className="nav nav-fill">
        {socialLinks.map((a, i) =>
          <li key={`social-link-${i}`} className="nav-item">
            <SocialLink url={a.url} title={a.title} />
          </li>
        )}
      </ul>
    </span>
  }
}

export default SocialAccounts

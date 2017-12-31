import React from 'react'
import Link from 'gatsby-link'

import Logo from './Logo.component'
import SocialAccounts from './SocialAccounts.component'

const mainContainerStyle = { minHeight: `100vh` }
const headerStyle = { paddingTop: `15vh`, paddingLeft: `15vw`, minHeight: `30vh` }
const footerStyle = { paddingTop: `20vh`, minHeight: `50vh` }

const IndexPage = () => (
  <main style={mainContainerStyle} className="row">
    <header style={headerStyle} className="col-12 col-sm-8 col-md-6">
      <Logo />
    </header>

    <footer style={footerStyle} className="col-12">
      <SocialAccounts />
    </footer>
  </main>
)

export default IndexPage

import React from 'react'
import Link from 'gatsby-link'

import Logo from '../components/Logo'
import SocialAccounts from '../components/SocialAccounts'

const mainContainerStyle = { minHeight: `100vh` }
const headerStyle = { paddingTop: `10vh`, paddingLeft: `10vw`, minHeight: `40vh` }
const footerStyle = { paddingTop: `20vh`, minHeight: `50vh` }

const IndexPage = () => (
  <main style={mainContainerStyle} className="container-fluid row">
    <header style={headerStyle} className="col-12 col-md-6">
      <Logo />
    </header>

    <footer style={footerStyle} className="col-12">
      <SocialAccounts />
    </footer>
  </main>
)

export default IndexPage

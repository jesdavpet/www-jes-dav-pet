import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="@jesdavpet"
      meta={[
        { name: `description`, content: `Hi, I'm Jesse David Peterson (@jesdavpet), a software developer from Canada.` },
        { name: `keywords`, content: `JavaScript, React, Node, Angualr, jQuery, Java, Clojure, ClojureScript, Functional Programming, DevOps, SQL, PostgreSQL, OSS, Open Source Software, Progressive Web Applications` },
        { name: `theme-color`, content: `#002938` }
      ]}
    />

    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" />

    <div className="container-fluid">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = { children: PropTypes.func }

export default TemplateWrapper

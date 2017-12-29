import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="@jesdavpet"
      meta={[
        { name: `description`, content: `Hi, I'm Jesse David Peterson (@jesdavpet), a software developer from Canada.` },
        { name: `keywords`, content: `JavaScript, React, Node, Angualr, jQuery, Java, Clojure, ClojureScript, Functional Programming, DevOps, SQL, PostgreSQL, OSS, Open Source Software, Progressive Web Applications` },
        { name: `theme-color`, content: `#173D4C` }
      ]}
    />

    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = { children: PropTypes.func }

export default TemplateWrapper

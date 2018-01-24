import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'normalize.css'
import './index.css'

const pageContainer = {
  maxWidth: '500px',
  padding: '1rem 1.5rem',
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
    title='philip harrison @feelepxyz'
    />
    <div style={pageContainer}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

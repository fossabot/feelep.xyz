import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'normalize.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
    title='philip harrison @feelepxyz'
    />
    <div className='pageContainer'>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

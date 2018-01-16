import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'normalize.css'
import './index.css'

const Header = () => (
  <div className='headerContainer'>
    <p className='headerTitle'>philip harrison ± philip[at]mailharrison.com</p>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='philip harrison'
      meta={[
        { name: 'description', content: '' },
      ]}
    />
    <Header />
    <div className='pageContainer'>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

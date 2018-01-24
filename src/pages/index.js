import React from 'react'
import Link from 'gatsby-link';

import {Divider} from '../components/divider';

import {CONTACT_EMAIL} from '../constants'

const IndexPage = () => (
  <div>
    <h1>👋 i'm philip harrison, a software engineer living in stockholm.</h1>
    <h1>recently built web products and helped people grow at <a href="https://gocardless.com/about/">gocardless</a>.</h1>
    <h1>interested in how we live, work and play together.</h1>
    <h1><Link to="/about/">about ⟶</Link></h1>
    <Divider />
    <p>
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
    </p>
    <p>
      <a href='https://www.linkedin.com/in/feelepxyz/'>linkedin</a>
    </p>
    <p>
      <a href='https://github.com/feelepxyz'>github</a>
    </p>
  </div>
)

export default IndexPage

import React from 'react'

import {Divider} from '../components/divider';

import {CONTACT_EMAIL} from '../constants'

const AboutPage = () => (
  <div>
    <p>
      found myself back in stockholm after some time in london working
      for <a href="https://gocardless.com/about/">gocardless</a>.
    </p>
    <p>
      joined a team of six trying to make sense of direct debit payments (autogiro),
      an accidental pivot from payments for teams no one seemed to want.
      none of us had any experience in finance, yet we somehow managed
      to grow the company to around 120 people during my time there.
    </p>
    <p>
      started with an ambiguous role as first designer/front end developer
      and ended up working on all sides of the product and company culture.
    </p>
    <p>
      count myself lucky to have experienced how working with the right
      people is more important than finding something that looks
      interesting from the outside.
    </p>
    <p>
      full resume on <a href="https://www.linkedin.com/in/feelepxyz/">linkedin</a>.
    </p>
    <p>
      spent my early years surrounded by strange and beautiful architecture
      in järna, sweden. you might have found me climbing a tree or applying
      heat paste on CPUs.
    </p>
    <p>
      currently taking time off exploring different fringes
      and learning about interesting ways to live,
      work and play.
    </p>

    <p>some thoughts that have stuck around:</p>
    <ul>
      <li><a href="https://meaningness.com/">meaningness</a></li>
      <li><a href="https://www.goodreads.com/book/show/21981628-how-do-you-feel">how do you feel?</a></li>
      <li><a href="https://www.goodreads.com/book/show/25942786-the-mind-illuminated">mind illuminated</a></li>
      <li><a href="https://www.goodreads.com/book/show/1020273.Time_to_Think">time to think</a></li>
      <li><a href="https://www.goodreads.com/book/show/18554985-the-systems-view-of-life">systems view of life</a></li>
      <li><a href="https://www.goodreads.com/book/show/12935037-principles">principles</a></li>
    </ul>
    <Divider />
    <p>
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
    </p>
    <p>
      <a href="https://github.com/feelepxyz/feelep.xyz">website source</a>
    </p>
  </div>
)

export default AboutPage

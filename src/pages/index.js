import React from 'react'

const contactEmail = 'philip@mailharrison.com';
const contactLabel = 'philip[at]mailharrison.com';

const ObfuscatedMailTo = (props) => {
  const handleEmail = (event) => {
    event.preventDefault();
    window.location.href = `mailto:${props.email}`;
  };

  return (
    <a onClick={handleEmail} href={`mailto:${props.label}`}>
      {props.label}
    </a>
  );
};

const IndexPage = () => (
  <div>
    <h1 className='heroTitle'>👋 i'm philip harrison, a software engineer based in stockholm.</h1>
    <h1 className='heroTitle'>recently built web products and helped people grow at <a href="https://gocardless.com">gocardless</a>.</h1>
    <h1 className='heroTitle'>interested in how we live, work and play together.</h1>
    <div className='footer'>
      <span className='footer__link'>
        <ObfuscatedMailTo email={contactEmail} label={contactLabel} />
      </span>
      <span className='footer__link'>
        <a href='https://www.linkedin.com/in/feelepxyz/'>linkedin</a>
      </span>
      <span className='footer__link'>
        <a href='https://github.com/feelepxyz'>github</a>
      </span>
    </div>
  </div>
)

export default IndexPage

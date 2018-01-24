import React from 'react'

const divider = {
  height: '1rem',
  background: 'rgb(200, 200, 200)',
  background: 'linear-gradient(45deg, rgb(233, 233, 233), rgb(200, 200, 200))',
  margin: '1rem 0',
};

export const Divider = ({ children }) => (
  <div style={divider} />
)

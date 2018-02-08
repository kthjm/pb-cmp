import React from 'react'
import { render } from 'react-dom'
import Component from '../src'

window.addEventListener('load', () =>
  render(<Component />, document.getElementById('app'))
)

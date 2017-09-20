import React from 'react'
import { render } from 'react-dom'

import './static/css/index.scss'

class Hello extends React.Component {
  render() {
    return (
      <p>hello world</p>
    )
  }
}

render(
  <Hello/>,
  document.getElementById('root')
)

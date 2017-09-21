import React from 'react'
import { render } from 'react-dom'
import Header from 'base/header'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}

render(
  <Main/>,
  document.getElementById('root')
)

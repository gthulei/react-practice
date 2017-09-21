import React from 'react'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      login: false
    }
  }

  render() {
    return (
      <div>
        {
          this.state.login
            ? this.props.children
            : <div>正在加载...</div>
        }
      </div>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        login: true
      })
    }, 2000)
  }
}

export default App
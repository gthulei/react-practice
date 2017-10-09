import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userinfoActions from 'reduxs/actions/userinfo'
import {localStorageSet,localStorageGet} from 'util/util'

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
    let city = localStorageGet('CIPY');
    if(!city){
      city = '上海';
      localStorageSet('CIPY',city);
    }
    // redux 参数设置
    this.props.userinfoActions.update({
      city: city
    })
    this.setState({
      login: true
    })
  }
}


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoActions:bindActionCreators(userinfoActions,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
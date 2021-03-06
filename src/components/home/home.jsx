import React from 'react'
import { connect } from 'react-redux'
import HomeHeaer from 'base/home-heaer/home-heaer'
import Swipe from './subpage/swipe'
import Advertising from './subpage/advertising'
import List from './subpage/list'
import './home.scss'

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeaer city={this.props.userinfo.city}/>
        <Swipe/>
        <Advertising/>
        <List city={this.props.userinfo.city}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
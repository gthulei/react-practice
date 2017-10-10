import React from 'react'
import {Link, hashHistory} from 'react-router'
import { connect } from 'react-redux'
import Search from 'base/search/search'
import './home-heaer.scss'

class HomeHeaer extends React.Component {
  constructor(props,context){
    super(props,context);
  }
  render() {
    return (
      <div className='home-heaer'>
        <div className='home-heaer-left'>
          <Link to="/city">
          <span className='font-14'>
            {this.props.city}
            <i className='icon-angle-down font-14'></i>
          </span>
          </Link>
        </div>
        <Search enterHandle={this.enterHandle.bind(this)}/>
        <div className='home-heaer-right' onClick={this.goBack.bind(this)}>
            <i className='icon-user font-14'></i>
        </div>
      </div>
    )
  }
  // 接受子组件参数
  enterHandle(value) {
    if(!value)return;
    hashHistory.push(`/produce/${value}`)
  }

  goBack() {
    if (this.props.login.isLogin){
      hashHistory.push('/userHome');
    }else {
      hashHistory.push('/login');
    }
  }
}
function mapStateToProps(state) {
  return {
    login:state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeHeaer)

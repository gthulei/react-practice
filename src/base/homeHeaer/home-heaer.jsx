import React from 'react'
import {Link, hashHistory} from 'react-router'

import Search from 'base/search/search'
import './home-heaer.scss'

class HomeHeaer extends React.Component {
  render() {
    return (
      <div className='home-heaer'>
        <div className='home-heaer-left'>
          <Link to="/city">
          <span>
            北京
            <i className='icon-angle-down'></i>
          </span>
          </Link>
        </div>
        <Search enterHandle={this.enterHandle.bind(this)}/>
        <div className='home-heaer-right'>
          <Link to="/userHome">
            <i className='icon-user'></i>
          </Link>
        </div>
      </div>
    )
  }
  // 接受子组件参数
  enterHandle(value) {
    if(!value)return;
    hashHistory.push(`/produce/${value}`)
  }
}

export default HomeHeaer
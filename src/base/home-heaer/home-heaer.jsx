import React from 'react'
import {Link, hashHistory} from 'react-router'

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
        <div className='home-heaer-right'>
          <Link to="/userHome">
            <i className='icon-user font-14'></i>
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
import React from 'react'
import './search.scss'

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div className='search'>
        <input type="text"
               placeholder="请输入关键字"
               onChange={this.changeValue.bind(this)}
               onKeyUp={this.keyupValue.bind(this)}/>
      </div>
    )
  }

  changeValue(e) {
    // 监听值变化
    this.setState({
      value: e.target.value
    });
  }

  keyupValue(e) {
    // 监控 enter 事件
    if (e.keyCode !== 13) {
      return
    }
    // 传递参数父组件
    this.props.enterHandle(e.target.value);
  }
}

export default Search
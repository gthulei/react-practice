import React from 'react'
import HomeHeaer from 'base/home-heaer/home-heaer'
import List from './subpage/list'
class Produce extends React.Component {
  render() {
    return (
      <div>
        <HomeHeaer isCity='true'/>
        <List id={this.props.params.id}/>
      </div>
    )
  }
}

export default Produce
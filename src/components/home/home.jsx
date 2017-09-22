import React from 'react'
import HomeHeaer from 'base/homeHeaer/home-heaer'
import Swipe from './subpage/swipe'
class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeaer city='北京'/>
        <Swipe/>
      </div>
    )
  }
}

export default Home
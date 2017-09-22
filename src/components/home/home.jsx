import React from 'react'
import HomeHeaer from 'base/homeHeaer/home-heaer'
import Swipe from './subpage/swipe'
import Advertising from './subpage/advertising'
import './home.scss'

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeaer city='北京'/>
        <Swipe/>
        <Advertising/>
      </div>
    )
  }
}

export default Home
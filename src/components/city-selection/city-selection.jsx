import React from 'react'
import Header from 'base/header/header'
import CurrentCity from 'base/current-city/current-city'
import CityList from './subpage/city-list'
import './index.scss'
class CitySelection extends React.Component {
  render() {
    return (
      <div>
        <Header title='北京'/>
        <CurrentCity cityName='北京'/>
        <CityList chengCity={this.chengCity.bind(this)}/>
      </div>
    )
  }
  chengCity(city){
    console.log(city);
  }
}

export default CitySelection
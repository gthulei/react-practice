import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userinfoActions from 'reduxs/actions/userinfo'
import Header from 'base/header/header'
import CurrentCity from 'base/current-city/current-city'
import CityList from './subpage/city-list'
import {localStorageSet} from 'util/util'
import './index.scss'
class CitySelection extends React.Component {
  render() {
    return (
      <div>
        <Header title={this.props.userinfo.city}/>
        <CurrentCity cityName={this.props.userinfo.city}/>
        <CityList chengCity={this.chengCity.bind(this)}/>
      </div>
    )
  }
  chengCity(city){
    // redux 参数设置
    this.props.userinfoActions.update({
      city: city
    })
    localStorageSet('CIPY',city);
  }
}

function mapStateToProps(state) {
  return {
    userinfo:state.userinfo
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
)(CitySelection)

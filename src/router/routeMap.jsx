import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from 'components/index'
import Home from 'components/home/home'
import City from 'components/city-selection/city-selection'
import Produce from 'components/produce/produce'
import produceDetail from 'components/produce-detail/produce-detail'
import UserHome from 'components/user-home/user-home'
import Login from 'components/login/login'
import NotFound from 'components/notFound/notFound'

class RouterMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/city' component={City}/>
          <Route path='/produce' component={Produce}/>
          <Route path='/produce-detail' component={produceDetail}/>
          <Route path='/userHome' component={UserHome}/>
          <Route path='/login' component={Login}/>
          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

export default RouterMap

import React from 'react'
import { render } from 'react-dom'
import fastclick from 'fastclick'
import { hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import RouteMap from './router/routeMap'

import 'static/css/index.scss'

fastclick.attach(document.body)

// 创建 Redux 的 store 对象
const store = configureStore()

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)

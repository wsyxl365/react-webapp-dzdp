import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'

import './static/css/common.less'
import './static/css/font.css'

// 创建 Redux 的 store.js 对象
const store = configureStore()

import RouteMap from './router/routeMap'


render(
    <Provider store={store}>
        <div>
            <RouteMap history={hashHistory}/>
        </div>
    </Provider>,
    document.getElementById('root')
)

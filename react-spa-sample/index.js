import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import client from 'axios'
import thunk from 'redux-thunk'
import { AppContainer } from 'react-hot-loader'
import { routerMiddleware } from 'react-router-redux'

import App from './App'
import reducer from './reducer'

const history = createHistory()
const thunkWithClient = thunk.withExtraArgument(client)
const store = createStore(reducer, applyMiddleware(routerMiddleware(history), thunkWithClient))

const render = Component => {
    ReactDOM.render(
        <AppContainer warnings={false}>
            <Provider store={store}>
                <Component history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => { render(App) })
}

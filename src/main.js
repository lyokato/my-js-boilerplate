import React from 'react'
import { compose, createStore, applyMiddleware } from 'redux'
import logger       from 'redux-logger'
import ReactDOM     from 'react-dom'
import { Provider } from 'react-redux'
import thunk        from 'redux-thunk'

import persistState, { mergePersistedState } from 'redux-localstorage'
import filter  from 'redux-localstorage-filter'
import adapter from 'redux-localstorage/lib/adapters/localStorage'

import App         from './containers/App'
import rootReducer from './reducers'

const middleware = process.env.NODE_ENV == 'production' ? 
  [ thunk ] :
  [ thunk, logger() ]

const reducer = compose(
  mergePersistedState()
)(rootReducer)

const storage = compose(
  filter("authen")
)(adapter(window.localStorage))

const createPersistentStore = compose(
  persistState(storage, 'my-storage-key'),
  applyMiddleware(...middleware)
)(createStore)

const store = createPersistentStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("content")
)

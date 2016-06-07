import * as types from '../constants/ActionTypes'

const checkResponseStatus = function(res) {
  if (!res.ok) {
    throw Error(res.statusText)
  }
  return res
}

const onAPIFailed = function(dispatch) {
  return err => {
      dispatch() 
  }
}

export function login(username, password) {
  return dispatch => {
    // notify starting API request
    //dispatch() 
    return fetch(LOGIN_ENDPOINT)
    .then(checkResponseStatus)
    .then(res => res.json())
    .then(json => dispatch(receiveLoginSuccess()))
    .catch(onAPIFailed(dispatch))
  }
}

store.dispatch(
  makeASandwichWithSecretSauce('My wife')
).then(() => {
  console.log('Done!')
})

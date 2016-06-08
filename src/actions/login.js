import * as types from '../constants/ActionTypes'

/*
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
*/

function receivedAuthToken(token, username) {
  return {
    type: types.LOGIN_COMPLETED, 
    token: token,
    username: username
  }
}

export function login(username, password) {
  return dispatch => {
    dispatch({type: types.LOGIN_REQUESTED})
    setTimeout(() => {
      dispatch(receivedAuthToken("dummy-token", "dummy-username")) 
    }, 1000)
    /*
    return fetch(LOGIN_ENDPOINT)
    .then(checkResponseStatus)
    .then(res => res.json())
    .then(json => dispatch(receiveLoginSuccess()))
    .catch(onAPIFailed(dispatch))
    */
  }
}

export function logout() {
  return dispatch => {
    dispatch({type: types.LOGOUT_REQUESTED})
    setTimeout(() => {
      dispatch({
        type: types.LOGOUT_COMPLETED 
      }) 
    }, 1000)
  }
}

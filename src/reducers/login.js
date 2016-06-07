import {
  LOGIN_REQUESTED,
  LOGIN_COMPLETED,
  LOGIN_FAILED
} from '../constants/ActionTypes'

const initialState = {
  loggedIn: false,
  auth_token: "",
  username: ""
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return Object.assign({}, state, {
        loggedIn: false,
        auth_token: "",
        username: ""
      })
    case LOGIN_COMPLETED: 
      return Object.assign({}, state, {
        loggedIn: true,
        auth_token: action.token,
        username: action.username
      })
    case LOGIN_FAILED: 
      return Object.assign({}, state, {
        loggedIn: false,
        auth_token: "",
        username: ""
      })
    default:
      return state
  }
}

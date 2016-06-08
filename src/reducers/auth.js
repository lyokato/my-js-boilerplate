import {
  LOGIN_REQUESTED,
  LOGIN_COMPLETED,
  LOGIN_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_COMPLETED,
  LOGOUT_FAILED
} from '../constants/ActionTypes'

const initialState = {
  inProgress: false,
  loggedIn: false,
  auth_token: "",
  username: ""
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return Object.assign({}, state, {
        inProgress: true,
        loggedIn: false,
        auth_token: "",
        username: ""
      })
    case LOGIN_COMPLETED: 
      return Object.assign({}, state, {
        inProgress: false,
        loggedIn: true,
        auth_token: action.token,
        username: action.username
      })
    case LOGIN_FAILED: 
      return Object.assign({}, state, {
        inProgress: false,
        loggedIn: false,
        auth_token: "",
        username: ""
      })
    case LOGOUT_REQUESTED:
      return Object.assign({}, state, {
        inProgress: true,
      })
    case LOGOUT_COMPLETED: 
      return Object.assign({}, state, {
        inProgress: false,
        loggedIn: false,
        auth_token: "",
        username: ""
      })
    case LOGOUT_FAILED: 
      return Object.assign({}, state, {
        inProgress: false,
      })

    default:
      return state
  }
}

import {
  LOGIN_REQUESTED,
  LOGIN_COMPLETED,
  LOGIN_FAILED
} from '../constants/ActionTypes'

const initialState = {
  token: ""
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return Object.assign({}, state, {
        token: "" 
      })
    case LOGIN_COMPLETED: 
      return Object.assign({}, state, {
        token: action.token 
      })
    case LOGIN_FAILED: 
      return Object.assign({}, state, {
        token: ""
      })
    default:
      return state
  }
}

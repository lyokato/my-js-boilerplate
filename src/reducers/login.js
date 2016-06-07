import {
  LOGIN_COMPLETED,
} from '../constants/ActionTypes'

const initialState = {
  token: ""
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_COMPLETED: 
      return {
        token: action.token 
      }
    default:
      return state
  }
}

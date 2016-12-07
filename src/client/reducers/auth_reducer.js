import { FETCH_VOTES, CAST_VOTE } from '../actions/types'
export default function(state={}, action){
  switch (action.type) {
    case FETCH_VOTES:
      return {...state, message: action.payload.message}
    case CAST_VOTE:
      return { ...state, castvote: action.payload}
  }
  return state;
}

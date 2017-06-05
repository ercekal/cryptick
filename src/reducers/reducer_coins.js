import { FETCH_COINS } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COINS:
    return {...state, coins: action.payload };
  }
  return state;
}

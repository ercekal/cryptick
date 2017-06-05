import axios from 'axios'
import coinsData from '../data.json'

export const FETCH_COINS = 'FETCH_COINS';
export const SELECTED_COIN = 'SELECTED_COIN';
export const SEARCH_TERM = 'SEARCH_TERM';

export function fetchCoins() {
  return  {
    type: FETCH_COINS,
    payload: coinsData
  }
}

export function selectCoin(title) {
  return  {
    type: SELECTED_COIN,
    payload: title
  }
}

export function searchCoins(term) {
  return  {
    type: SEARCH_TERM,
    payload: term
  }
}


// return dispatch => {
//   axios.get("https://www.worldcoinindex.com/apiservice/json?key=Ftinz4RIXcufLiWGooKxzUgdc")
//   .then((res) => {
//     dispatch({
//       type: FETCH_COINS,
//       payload: res.data
//     })
//   })
// }

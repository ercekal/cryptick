import axios from 'axios'
import coinsData from '../data.json'
import portfolio from '../portfolio.json'

export const FETCH_COINS = 'FETCH_COINS';
export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
export const SELECTED_COIN = 'SELECTED_COIN';
export const SEARCH_TERM = 'SEARCH_TERM';

export function fetchCoins() {
  return dispatch => {
    axios.get("https://www.worldcoinindex.com/apiservice/json?key=Ftinz4RIXcufLiWGooKxzUgdc")
    .then((res) => {
      dispatch({
        type: FETCH_COINS,
        payload: res.data
      })
    })
  }
}

export function fetchPortfolio() {
  return  {
    type: FETCH_PORTFOLIO,
    payload: portfolio
  }
}

// return  {
//   type: FETCH_COINS,
//   payload: coinsData
// }

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

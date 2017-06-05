import { combineReducers } from 'redux';
import CoinsReducer from './reducer_coins';
import SearchReducer from './reducer_search';


const rootReducer = combineReducers({
  coins: CoinsReducer,
  search: SearchReducer
});

export default rootReducer;

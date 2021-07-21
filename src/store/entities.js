import { combineReducers } from "redux";
import bookReducer from './books'
import orderReducer from './orders'
import cartReduxer from './cart'
const entities=combineReducers({
books:bookReducer,
orders:orderReducer,
cart:cartReduxer
})
export default entities;
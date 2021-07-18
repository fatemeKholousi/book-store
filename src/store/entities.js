import { combineReducers } from "redux";
import bookReducer from './books'
import orderReducer from './orders'

const entities=combineReducers({
books:bookReducer,
orders:orderReducer
})
export default entities;
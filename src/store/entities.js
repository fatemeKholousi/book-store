import { combineReducers } from "redux";
import bookReducer from './books'
import orderReducer from './orders'
import cartReducer from './cart'

import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
  }

  const entities=combineReducers({
    books:bookReducer,
    orders:orderReducer,
    cart:cartReducer
    })

// const entities=combineReducers({
// books:bookReducer,
// orders:orderReducer,
// cart:cartReduxer
// })

export default persistReducer(persistConfig,entities)
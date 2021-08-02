import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from './reducer'
import api from './middleware/api'
import { persistStore } from 'redux-persist'

const store = configureStore( {reducer,middleware:[...getDefaultMiddleware(),api]} )
export const persistor=persistStore(store)
export default store;

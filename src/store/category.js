import { createSlice } from "@reduxjs/toolkit";
import {apiCallBegan} from './api'

const slice=createSlice({
    name:'categories',
    initialState:{
    list:[],item:[]},
    reducers:{
        categoriesReceived: (state, action) => {state.list = action.payload},
        categoryReceived: (state, action) => {state.item = action.payload},

    }
})
export default slice.reducer
export const {categoriesReceived,categoriesFailed,categoryReceived} =slice.actions
const url='/categories'

export const loadCategories = () => (dispatch, getState) => {
    return dispatch(
      apiCallBegan({
      url,
      onSuccess: categoriesReceived.type,
    }))
  }


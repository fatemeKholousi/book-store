import { createSlice } from "@reduxjs/toolkit";
import {apiCallBegan} from './api'

const slice =createSlice({
    name:'orders',
    initialState:{
        list:[], 
        loading:false,
        addedItems:[],
        total:0,
    },
reducers:{
  ordersRequested: (state, action) => {
    state.loading = true;
  },
  ordersReceived : (state, action) => {
    state.list = action.payload;
    state.loading = false;
  },
  ordersRequestFailed: (state, action) => {
    state.loading = false;
  },
  orderAdded:(state,action)=>{},


       // resolveBug (command) - bugResolved (event)
       orderDelivered: (state, action) => {
      // const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
      // bugs.list[index].deliveryStatus = true;
    }
}
})
export const {orderAdded,ordersReceived ,ordersRequested,ordersRequestFailed,orderDelivered}=slice.actions
export default slice.reducer

const url = "/orders";
export const loadOrders = () => (dispatch, getState) => {
 dispatch(
    apiCallBegan({
      url,
      onStart: ordersRequested.type,
      onSuccess: ordersReceived.type,
      onError: ordersRequestFailed.type
    })
  );
};

export const deliveredOrder = id =>
  apiCallBegan({
    // /bugs
    // PATCH /bugs/1
    url: `${url}/${id}`,
        method: "patch",
    data: { deliveryStatus: true },
    onSuccess: orderDelivered.type
  });

import { createSlice } from "@reduxjs/toolkit";
import {apiCallBegan} from './api'

const slice =createSlice({
    name:'orders',
    initialState:{
        list:[], 
        loading:false,
        addedItems:[],
        resultFlag:false
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

  orderAdded:(state,action)=>{
    state.addedItems.push(
      action.payload )
  },


       // resolveBug (command) - bugResolved (event)
orderDelivered: (state, action) => {
      // const index = state.list.findIndex(bug => bug.id === action.payload.id);
      // state.list[index].deliveryStatus = true;
      console.log("ادیت شد")
    },

  paymentResultIsTrue(state, action){
    state.resultFlag=true
  },
  
  paymentResultIsFalse(state, action){
    state.resultFlag=false
  }


}
})
export const {orderAdded,ordersReceived ,ordersRequested,ordersRequestFailed,orderDelivered,paymentResultIsFalse,paymentResultIsTrue}=slice.actions
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

 export const addOrder = order =>
 apiCallBegan({
   url,
   method: "post",
   data: order,
   onSuccess: orderAdded.type
 });


// export const deliveredOrder = id =>
//   apiCallBegan({
//     // /bugs
//     // PATCH /bugs/1
//     url: `${url}/${id}`,
//         method: "put",
//     data: { deliveryStatus: true },
//     onSuccess: orderDelivered.type
//   });
  export const deliveredOrder=(id,order) => apiCallBegan({
    url:url+'/'+id ,
    method: "put",
    data:order,
    onSuccess: orderDelivered.type
  })
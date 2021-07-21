import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'cart',
  initialState:{
    counter:0,
    totalPrice:0,
      list:[]
    // productId:0,
    // productName:'',
    // productPrice:0,
    // productQuantityOrdered:0,  
  },

  reducers: {
      //Cart Badge
    counterAddedToCart: (state) => {
        state.counter +=1
      },
      //Add P
    productAddedToCart: (state,action) => 
    {
        state.list.push(action.payload);
    state.totalPrice+=+(action.payload.price) * action.payload.quantity
    },
        //Remove P
    productRemovedFromCart: (state, action) => {
        state.list=state.list.filter(item => item.id!==action.payload.id)

    //   state.value += action.payload
    state.counter -=1
    },
  },
})

// Action creators are generated for each case reducer function
export const {counterAddedToCart,productAddedToCart,productRemovedFromCart  } = counterSlice.actions

export default counterSlice.reducer
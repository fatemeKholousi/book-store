import { createSelector, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import {apiCallBegan} from './api'

const slice=createSlice({
name:'books',
initialState:{
    list:[],
    loading:false,
    lastFetch:null,
},
reducers:{
   bookAdded:(state,action)=>{
            state.list.push(action.payload)},

    bookPicked: (books, action) => {
      books.list = action.payload;
    },
    bookUpdated:(state,action)=>{
      const {id,price,description,image,title,stock}=action.payload
            state.list.push(id,price,description,image,title,stock);
    },
    bookRemoved:(state,action)=>{
      
    },
    //load in devtools
    booksRequested: (books, action) => {books.loading = true},
    booksReceived: (books, action) => {
        books.list = action.payload;
        books.loading = false;
        books.lastFetch = Date.now();
// console.log(books.list)
      },
    booksRequestFailed: (books, action) => {
        books.loading = false;
      },  
}
})

export const {booksRequested,bookAdded,booksReceived,booksRequestFailed,bookUpdated,bookGet}=slice.actions
export default slice.reducer
const url = "/products";
//get
export const loadBooks = () => 
apiCallBegan({
  url,
  onStart: booksRequested.type,
  onSuccess: booksReceived.type,
})

export const addBook = book =>
    apiCallBegan({
      url,
      method: "post",
      data: book,
      onSuccess: bookAdded.type
    });

export const updateBook=(id,book)=>  apiCallBegan({
      url:url+'/'+id ,
      method: "patch",
      data:book,
      onSuccess: bookUpdated.type
    });
export const getTitle=(state)=>{console.log(state.entities.books.list)}



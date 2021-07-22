import {  createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import {apiCallBegan} from './api'
import { createSelector } from "reselect";

const slice=createSlice({
name:'books',
initialState:{
    list:[],
    loading:false,
    lastFetch: null
},
reducers:{
  booksRequested: (books, action) => {books.loading = true},
  booksReceived: (books, action) => {books.list = action.payload; books.loading = false ; books.lastFetch = Date.now();},
  booksRequestFailed: (books, action) => { books.loading = false},  

  // bookPicked:(id,action)=>{},
   bookAdded:(state,action)=>{ state.list.push(action.payload)},

   bookUpdated:(state,action)=>{
      const {id,price,description,image,title,stock}=action.payload
            state.list.push(id,price,description,image,title,stock);
    },

    bookRemoved:(state,action)=>{
      const newList= state.list.filter(item => item.id !== action.payload.id)
      state.list=newList
    },

     
}
})

export const {booksRequested,bookAdded,booksReceived,booksRequestFailed,bookUpdated,bookGet,bookRemoved}=slice.actions
export default slice.reducer
//----------------------------------------------------------------------
//-------------------------Action Creators-----------------------------------
//----------------------------------------------------------------------
const url = "/products";

export const loadBooks = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.books;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
    url,
    onStart: booksRequested.type,
    onSuccess: booksReceived.type,
    onFailed:booksRequestFailed.type
  }))
}

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


    export const getBugsByUser = userId =>
    createSelector(
      state => state.entities.bugs,
      bugs => bugs.filter(bug => bug.userId === userId)
    );
    export const selector__Book= (bookId)=>{
      createSelector(
        state=>state.entities.books,
        books=>books.filter(book=>book.id===bookId)
      )
      }
export const select__a__book=(state,id)=>{
state.entities.books.list.filter(book=> book.id===id)
}
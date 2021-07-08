
import axios from 'axios'
import { useState } from 'react'
const apiEndPointProducts = 'http://localhost:5000/products/'
let obj = {}
let product = []
// const axiosClient = axios.create({
//   baseURL: `http://localhost:5000/`,
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
// });


export const getAllProducts = async () => {
  let response = await axios.get(apiEndPointProducts).catch(err => console.log('wrong'))
  let data = response.data
  return data
}

export const getProduct = (id) => {
  axios.get(apiEndPointProducts + id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


// //Add
export const addProduct = (obj) => {
  axios.post(apiEndPointProducts, obj)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}


// //
export const updateProduct = (id, obj) => {
  axios.put(apiEndPointProducts + id, obj)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}


// //delete
export const deleteProduct = id => {
  axios.delete(apiEndPointProducts + id, obj)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}
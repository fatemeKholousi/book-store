
import axios from 'axios'
import { useState } from 'react'
const apiEndPointProducts = 'http://localhost:5000/products/'
let obj = {}
//get All Products
export const getAllProducts = async () => {
  let response = await axios.get(apiEndPointProducts).catch(err => console.log('wrong'))
  let data = response.data
  return data
}

//delete Product
export const deleteProduct = product => {
  return axios.delete(apiEndPointProducts + product.id)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}

//Add Product
export const addProduct = (obj) => {
  axios.post(apiEndPointProducts, obj)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}



export const getProduct = (id) => {
  axios.get(apiEndPointProducts + id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}




// //
export const updateProduct = (id, obj) => {
  axios.put(apiEndPointProducts + id, obj)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}


//
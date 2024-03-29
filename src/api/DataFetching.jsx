
import axios from 'axios'
const apiEndPoint = 'http://localhost:5000/'
const apiEndPointProducts = 'http://localhost:5000/products/'
const apiEndPointOrders = 'http://localhost:5000/orders/'

let obj = {}

// .........................Necessary...................................
//delete Product
export const deleteProduct = product => {
  return axios.delete(apiEndPointProducts + product.id)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}


// .............................don't know yet.....................................
//get categories 
export const getAllCategories = async () => {
  let response = await axios.get(apiEndPoint + 'categories/').catch(err => console.log('wrong'))
  let data = response.data
  return data
}

//get All Products
export const getAllProducts = async () => {
  let response = await axios.get(apiEndPointProducts).catch(err => console.log('wrong'))
  let data = response.data
  return data
}

//Add Product
export const addProduct = (obj) => {
  axios.post(apiEndPointProducts, obj)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


//get a product
export const getProduct = (id) => {
  axios.get(apiEndPointProducts + id)
    .then(res => {
      return (res.data)
    })
    .catch(err => console.log(err))
}


//update a product
export const updateProduct = (obj, id) => {
  axios.put(apiEndPointProducts + id, obj)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}



import axios from 'axios'
const apiEndPoint = 'http://localhost:5000/'
const apiEndPointProducts = 'http://localhost:5000/products/'
const apiEndPointOrders = 'http://localhost:5000/orders/'


let obj = {}

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

//get by category
export const getByCategory = () => {
  getAllProducts().then(res => res.category === "مانگا")
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


//get a product
export const getProduct = (id) => {
  axios.get(apiEndPointProducts + id)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
}


//update a product
export const updateProduct = (obj, id) => {
  axios.put(apiEndPointProducts + id, obj)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}

//get products
export const getAllOrders = async () => {
  let response = await axios.get(apiEndPointOrders).catch(err => console.log('wrong'))
  let data = response.data
  return data
}

//get an order
export const getOrder = (id) => {
  axios.get(apiEndPointOrders + id)
    .then(res => {
      return (res.data)
    })
    .catch(err => console.log(err))
}



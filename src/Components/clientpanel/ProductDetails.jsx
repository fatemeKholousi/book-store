// https://material-ui.com/components/badges/
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getProduct } from '../../api/DataFetching'
import { productAddedToCart, counterAddedToCart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'

function ProductDetails() {
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()

    // product object
    const location = useLocation()
    const { item } = location.state

    return (
        <div>
            <h1>{item.title}</h1>
            <img src={item.image} style={{ width: '250px' }} />
            <h1>{item.price}</h1> قیمت

            توضیحات:
            <h1>{item.description}</h1>

            <input type="number" onChange={(e) => { setQuantity(e.target.value) }} />
            <button onClick={() => {
                dispatch(counterAddedToCart());
                dispatch(productAddedToCart({ id: item.id, price: item.price, title: item.title, quantity: quantity }))
            }}>افزودن به سبد خرید</button>

        </div>
    )
}

export default ProductDetails

// https://material-ui.com/components/badges/
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { loadBooks, selector__Books, select__a__book } from '../../store/books'
import configureStore from '../../store/configureStore'
import { getProduct } from '../../api/DataFetching'
const store = configureStore()

function ProductDetails() {
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

            <input type="number" />
            <button>افزودن به سبد خرید</button>

        </div>
    )
}

export default ProductDetails

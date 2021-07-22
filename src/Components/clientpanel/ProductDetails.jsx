import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { productAddedToCart, counterAddedToCart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { getBookById } from '../../store/books';


const useStyles = makeStyles((theme) => ({
    addToCartBtn: {
        backgroundColor: 'green',
        color: 'white',
        marginLeft: '5%',
        padding: '12px',
        fontSize: '18px'
    },
    numberInput: {
        // height: '50px',
        width: '250px',
        marginBottom: '10px'
    },
    productImage: {
        width: '300px',
        height: '100%',
    },
    root: {
        marginLeft: '10%',
    },

}));

function ProductDetails() {

    // let book = []
    const [quantity, setQuantity] = useState(0)
    // const [book, setBook] = useState([])
    const dispatch = useDispatch()
    const classes = useStyles()
    // product object
    const location = useLocation()
    const { item } = location.state
    useEffect(() => {
        dispatch(getBookById(item.id))
    }, [])
    const book = useSelector(state => state.entities.books.list)
    let stock = +(book.stock)



    return (
        <div className={classes.root}>

            <Grid container spacing={2}>
                <Grid item md={4} sm={7}><img className={classes.productImage} src={item.image} alt="product imag" /></Grid>
                <Grid item md={6} sm={5}>
                    <Typography variant='h3' >{item.title}</Typography>
                    <Typography variant='body1'>?</Typography>
                    <Typography variant='h5'>   قیمت :{book.price} تومان  </Typography>

                    <Typography variant='h5'>   درباره این محصول:  </Typography>
                    <Typography variant='h6' style={{ marginBottom: '20%' }}> {book.description}  </Typography>


                    {/* <input type="number" placeholder="multiple of 10" step="10" min="0" max="100"> */}
                    <input type="number" name="quantity" placeholder="تعداد درخواستی شما از این محصول" min={1} max={stock} className={classes.numberInput} onChange={(e) => { setQuantity(e.target.value) }} />
                    <Button variant="contained" color="primary" className={classes.addToCartBtn} onClick={() => {
                        dispatch(counterAddedToCart());
                        dispatch(productAddedToCart({ id: book.id, price: book.price, title: book.title, quantity: quantity }))
                    }}>افزودن به سبد خرید</Button>
                </Grid>
            </Grid>






        </div>
    )
}

export default ProductDetails

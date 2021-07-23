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
        height: '500px',
    },
    root: {
        marginLeft: '10%',
        marginTop: '5%'
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
    // const { category } = location.state
    useEffect(() => {
        dispatch(getBookById(item.id))
    }, [])
    const book = useSelector(state => state.entities.books.item)
    let stock = +(book.stock)



    return (
        <div className={classes.root}>

            <Grid container spacing={2}>
                <Grid item md={4} sm={7}><img className={classes.productImage} src={book.image} alt="product imag" /></Grid>
                <Grid item md={6} sm={5}>
                    <Typography variant='h3' >{book.title}</Typography>

                    <Typography variant='body1'>
                        {book.title}  &#11013; {book.category}
                        {/* {category ? (<p>...</p>) : (<p>___{item}</p>)} */}
                    </Typography>
                    <Typography variant='h5'>   قیمت :{book.price} تومان  </Typography>
                    <br /> <br /> <br />
                    <Typography variant='h5'>   درباره این کتاب:  </Typography>
                    <Typography variant='h6' style={{ marginBottom: '20%' }}> {book.description}  </Typography>


                    <input type="number" name="quantity" placeholder="تعداد درخواستی شما از این محصول"
                        min={1} max={stock} className={classes.numberInput} onChange={(e) => { setQuantity(e.target.value) }} />

                    <Button variant="contained" color="primary" className={classes.addToCartBtn} onClick={() => {
                        dispatch(counterAddedToCart());
                        dispatch(productAddedToCart({ id: book.id, price: book.price, title: book.title, quantity: quantity }))
                    }}>افزودن به سبد خرید</Button>
                </Grid>
            </Grid>
            بازگشت به صفحه قبل





        </div>
    )
}

export default ProductDetails

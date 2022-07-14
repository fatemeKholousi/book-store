import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { productAddedToCart, counterAddedToCart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, TextField, Button, Grid, makeStyles, Divider } from '@material-ui/core'
import { getBookById, updateBookStock } from '../../store/books';
import '../../style/style.css'

const useStyles = makeStyles((theme) => ({
    addToCartBtn: {
        backgroundColor: 'green',
        color: 'white',
        marginLeft: '5%',
        padding: '12px',
        fontSize: '18px',
        marginBottom: '20px'
    },
    productImage: {
    },
    root: {
        marginLeft: '10%',
        paddingTop: '10%',
        overflowX: 'hidden',
        overflowY: 'hidden'
    },


}));

function ProductDetails() {
    const [disabledButton, setDisabledButton] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    const classes = useStyles()
    // product object
    const location = useLocation()
    let { item } = location.state

    const history = useHistory()

    useEffect(() => { dispatch(getBookById(item.id)) }, [])
    const book = useSelector(state => state.entities.books.item)
    let stock = +(book.stock)

    return (
        <div className={classes.root}>

            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item md={4} sm={7} xs={12}>
                    <img className='pd--image--on--pd--detail' src={book.image} alt="product imag" />
                </Grid>
                <Grid item md={6} sm={5}>
                    <Typography variant='h3' >{book.title}</Typography>

                    <Typography variant='body1'>
                        {book.title}  &#11013; {book.category}
                    </Typography>
                    <br /> <br />
                    <Typography variant='h5'>   قیمت :{book.price} تومان  </Typography>
                    <br /> <br /> <br />
                    <Divider />

                    <Typography variant='h4'>   درباره این کتاب:  </Typography>

                    <p className='pd--description--on--pd--detail' >
                        {book.description}
                    </p>


                    <TextField
                        placeholder="تعداد درخواستی شما از این محصول"
                        id="standard-number"
                        label="تعداد مورد نظر"
                        type="number"
                        padding='15px'
                        name="quantity"
                        style={{
                            width: "12rem"
                        }}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ min: 0, max: stock, style: { textAlign: 'center'} }}
                        onChange={(e) => {
                            if (e.target.value <= stock) (setQuantity(e.target.value));
                            else { alert("این تعداد در انبار موجود نیست"); setQuantity(0) }
                        }}
                    />

                    < Button variant="contained" disabled={disabledButton} color="primary" className={classes.addToCartBtn} onClick={() => {
                        if (quantity >= 1) {
                            dispatch(counterAddedToCart());
                            dispatch(productAddedToCart({ id: book.id, price: book.price, title: book.title, quantity: quantity }))
                            setDisabledButton(true)
                            dispatch(updateBookStock(book.id,
                                {
                                    id: book.id,
                                    price: book.price,
                                    title: book.title,
                                    image: book.image,
                                    stock: (stock - quantity),
                                    description: book.description,
                                    category: book.category,
                                }))
                        }
                        else {
                            stock === 0 ? alert("متاسفانه این کتاب را در انبار نداریم") : alert(`اضافه نشد لطفا مقدار درخواستی را تا عدد ${stock} تغییر دهید`)
                        }

                    }}>افزودن به سبد خرید</Button>
                </Grid>
            </Grid>
            <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', fontSize: '18px', marginTop: '40px', border: 'dotted black 1px' }}
                onClick={() => history.push('/')}
            >بازگشت به صفحه اصلی سایت</Button>

        </div >
    )
}

export default ProductDetails

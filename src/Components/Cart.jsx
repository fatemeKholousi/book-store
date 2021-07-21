import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { productRemovedFromCart } from '../store/cart'
const useStyles = makeStyles({

    table: {
        // display: 'flex',
        // flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        // minWidth: 400,
        width: '80%',
        // overflowX: 'hidden',
        border: 'none',
        marginBottom: '20px'
    },
    headCell: {
        color: 'black',
        fontSize: '20px'
    },
    headingrow: {
        background: ' #FFC300 ',

    },
    emptyInformText: {
        color: 'gray',
    }
});

function Cart() {
    const classes = useStyles();
    const myCart = useSelector((state) => state.entities.cart.list)
    const totalPrice = useSelector((state) => state.entities.cart.totalPrice)
    const counter = useSelector((state) => state.entities.cart.counter)

    const dispatch = useDispatch()
    return (
        <>


            <Typography variant='h4' style={{ marginRight: '5%', marginBottom: '3%', fontWeight: '900' }}> سبد خرید </Typography>{counter === 0 ?
                (
                    <Typography variant='h5' style={{ marginRight: '40%', color: 'gray' }}> سبد خرید شما خالیست </Typography>
                )
                :

                (
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <TableContainer component={Paper} className={classes.table}>
                            <Table >
                                <TableBody>
                                    <TableRow className={classes.headingrow}>
                                        <TableCell component="th" className={classes.headCell}>
                                            کتاب
                                        </TableCell>
                                        <TableCell component="th" scope="row" className={classes.headCell}>
                                            قیمت
                                        </TableCell>
                                        <TableCell component="th" scope="row" className={classes.headCell}>
                                            تعداد
                                        </TableCell>
                                        <TableCell component="th" scope="row" className={classes.headCell}>
                                            ...
                                        </TableCell>
                                    </TableRow>
                                    {myCart.map(item => <TableRow >
                                        <TableCell width="30%" className={classes.headCell}>{item.title}</TableCell>
                                        <TableCell width="20%" className={classes.headCell}>{item.price}</TableCell>
                                        <TableCell width="20%" className={classes.headCell}>{item.quantity}</TableCell>
                                        <TableCell width="10%" className={classes.headCell}>
                                            <Button variant="outlined" color="secondary" style={{ fontSize: '20px', }}
                                            >
                                                حذف
                                            </Button>
                                        </TableCell>



                                    </TableRow>)}

                                </TableBody>

                            </Table>

                        </TableContainer>
                        <Grid container style={{ marginRight: '40%', float: 'right' }}>

                            <Grid item md={5} sm={6} xs={4}>
                                <Typography variant='h6'>
                                    جمع کل:{totalPrice}تومان

                                </Typography>

                            </Grid>
                            <Grid xs={1} sm={0} md={0} />
                            <Grid item md={5} sm={6} xs={7}>

                                <Button variant="outlined" style={{ fontSize: '20px' }} >
                                    تکمیل سفارش</Button >
                            </Grid>
                        </Grid>

                    </Box>)
            }
            <br />


        </>
    )
}

export default Cart

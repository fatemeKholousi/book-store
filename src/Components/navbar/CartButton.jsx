import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { makeStyles, Typography, Badge, Divider, Button, Box, IconButton } from '@material-ui/core';
import { useHistory, Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
    // label: {
    //     color: 'black',
    //     '&:visited': {
    //         textDecoration: 'none'
    //     },
    //     '&:link': {
    //         textDecoration: 'none'
    //     },
    //     '&:active': {
    //         textDecoration: 'none'
    //     },
    //     '&:hover': {
    //         textDecoration: 'none'
    //     },
    //     '&:focus': {
    //         textDecoration: 'none'
    //     },

    // },

});




function CartButton() {
    const count = useSelector((state) => state.entities.cart.counter)
    let classes = useStyles()
    let history = useHistory()
    return (
        <Box style={{ marginLeft: '20px' }}>
            <Badge badgeContent={count} color='secondary' >

                <Button disableFocusRipple
                    onClick={() => { history.push('/cart') }}
                    style={{ backgroundColor: '#ede5d4', paddingRight: '10px', width: '100px' }}
                    // variant="contained"
                    endIcon={<AiOutlineShoppingCart />}>
                    سبد خرید
                </Button>

            </Badge>
        </Box>


    )
}
// style={{ backgroundColor: '  #633410  ', color: 'white' }}
export const CartButton_phone = () => {
    let classes = useStyles()
    let history = useHistory()

    return (
        <div>

            <IconButton color="inherit"
                onClick={() => { history.push('/cart') }} >
                {/* <Link to='/cart' className={classes.label}> */}
                <Typography variant='h6'

                >
                    سبد خرید
                </Typography>
                {/* </Link> */}
            </IconButton>
            <Divider />
        </div>)
}

export default CartButton



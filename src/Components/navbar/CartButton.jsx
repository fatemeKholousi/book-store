import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Typography, Badge, Divider, Button, Box, IconButton } from '@material-ui/core';
import { useHistory, Link } from "react-router-dom";
import { useSelector } from 'react-redux'


function CartButton() {
    const count = useSelector((state) => state.entities.cart.counter)
    let history = useHistory()
    return (
        <Box style={{ marginLeft: '20px' }}>
            <Badge badgeContent={count} color='secondary' >

                <Button disableFocusRipple
                    onClick={() => { history.push('/cart') }}
                    style={{ backgroundColor: '#ede5d4', paddingRight: '10px', width: '100px' }}
                    endIcon={<AiOutlineShoppingCart />}>
                    سبد خرید
                </Button>

            </Badge>
        </Box>


    )
}
export const CartButton_phone = () => {
    let history = useHistory()

    return (
        <div>

            <IconButton color="inherit"
                onClick={() => { history.push('/cart') }} >
                <Typography variant='h6'
                >
                    سبد خرید
                </Typography>
            </IconButton>
            <Divider />
        </div>)
}

export default CartButton



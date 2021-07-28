import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { makeStyles, Typography, Badge, Divider, Button, IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
    label: {
        color: 'black',
        '&:visited': {
            textDecoration: 'none'
        },
        '&:link': {
            textDecoration: 'none'
        },
        '&:active': {
            textDecoration: 'none'
        },
        '&:hover': {
            textDecoration: 'none'
        },
        '&:focus': {
            textDecoration: 'none'
        },

    },

});

function CartButton() {
    const count = useSelector((state) => state.entities.cart.counter)
    let classes = useStyles()

    return (
        <div>
            <IconButton color="inherit"  >
                <Badge badgeContent={count} color='secondary' >
                    <Link to='/cart'>
                        <Button disableFocusRipple
                            disableRipple
                            variant="contained" style={{ backgroundColor: "transparent" }} endIcon={<AiOutlineShoppingCart />}>
                            سبد خرید
                        </Button>
                    </Link>
                </Badge>
            </IconButton>
        </div >
    )
}
// style={{ backgroundColor: '  #633410  ', color: 'white' }}
export const CartButton_phone = () => {
    let classes = useStyles()
    return (
        <div>
            <IconButton color="inherit" >
                <Link to='/cart' className={classes.label}>
                    <Typography variant='h6' >
                        سبد خرید
                    </Typography></Link>
            </IconButton>
            <Divider />
        </div>)
}

export default CartButton



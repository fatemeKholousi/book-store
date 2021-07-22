import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
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
    return (
        <div>
            <IconButton color="inherit"  >
                <Badge badgeContent={count} color='secondary' >
                    <Link to='/cart'>
                        <Button variant="contained" color="primary" endIcon={<AiOutlineShoppingCart />}>
                            سبد خرید
                        </Button>
                    </Link>
                </Badge>

            </IconButton>
        </div>
    )
}

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
        </div>)
}

export default CartButton



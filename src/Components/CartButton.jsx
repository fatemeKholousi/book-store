import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'



function CartButton() {
    const count = useSelector((state) => state.entities.cart.counter)
    console.log(count)
    return (
        <IconButton color="inherit"  >
            <Badge badgeContent={count} color="secondary">
                <Link to='/cart'>
                    <Button variant="contained" color="primary" endIcon={<AiOutlineShoppingCart />}>
                        سبد خرید
                    </Button>
                </Link>
            </Badge>

        </IconButton>
    )
}

export default CartButton






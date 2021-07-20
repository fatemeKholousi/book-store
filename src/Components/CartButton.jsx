import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { Link } from "react-router-dom";

function CartButton() {
    return (
        <IconButton color="inherit"  >
            <Badge badgeContent={5} color="secondary">
                <Link to='/cart'>
                    <Button variant="contained" color="primary" endIcon={<AiOutlineShoppingCart />}>
                        سبد خرید
                    </Button></Link>
            </Badge>

        </IconButton>
    )
}

export default CartButton






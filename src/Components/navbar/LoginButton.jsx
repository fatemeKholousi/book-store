import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import { MenuItem } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import { Button, Box } from '@material-ui/core';
import { BsFillPersonFill } from "react-icons/bs";
import { Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

export const LoginButton = ({ label, handleClick }) => {
    return (
        <div>

            <Button onClick={handleClick} variant="contained"
                style={{ backgroundColor: "#e2c27c", color: 'black' }}

                endIcon={<AccountCircle />}>
                {label}
            </Button>
        </div>
    )
}


export const LoginButton_phone = ({ handleClick, label }) => {
    return (
        <IconButton color="inherit" onClick={handleClick} >
            <Typography variant='h6'>
                {label}
            </Typography>
        </IconButton>)
}
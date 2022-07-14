import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


export const LoginButton = ({ label, handleClick }) => {
    return (
        <Button className='desktop--button' onClick={handleClick}
            variant='contained'
            endIcon={<AccountCircle />}
            style={{ backgroundColor: "#e2c27c", color: 'black' }}>
            {label}
        </Button>
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
import React from 'react'
import { Typography, IconButton, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: 'white',
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
}))


function LogoAndText({ logo, title }) {
    let classes = useStyles()
    return (
        <>
            <IconButton edge="start" className={classes.menuButton}>
                <img src={logo} alt="logo" width="100px" />
            </IconButton>
            <Link to='/' >
                <Typography className={classes.title} variant="h5" noWrap>
                    {title}
                </Typography>
            </Link>
        </>
    )
}

export default LogoAndText

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../../store/books'
import { AppBar, Toolbar, makeStyles, fade, IconButton, InputBase, Menu, Button, Box, CssBaseline, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    grow: {
        backgroundColor: '#e9ddb7 ',
        flexGrow: 1,
        position: 'relative',
        zIndex: theme.zIndex.drawer + 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',

        [theme.breakpoints.up('md')]: {
            display: 'flex',


        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function SearchBox({ handleChange }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const books = useSelector(state => state.entities.books.list)
    console.log(books.map(t => t.title))
    const classes = useStyles();
    const handleSearchChange = (e) => { setFilterSearch(e.target.value) }

    return (
        <div>



            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>


            <InputBase placeholder="دنبال چه کتابی هستین؟"
                classes={{ root: classes.inputRoot, input: classes.inputInput, }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
            />

        </div>



    )
}

export default SearchBox

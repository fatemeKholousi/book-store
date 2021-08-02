import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './card'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadBooks } from '../store/books.js'
import '../style/style.css'
import { Typography } from '@material-ui/core';
import Pagination from '../assets/Pagination'
import FilteredBySixNumber from './FilteredBySixNumber';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: '10px',
        flexGrow: 1,

        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    card: {
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
    }
}));

export default function CenteredGrid({ categoryTitle, from }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(() => { dispatch(loadBooks()) }, [])
    let books = useSelector(state => state.entities.books.list)
    let filteredBooks = []

    const filteredBySpecialNumber = () => {
        books.map(item => {
            if (item['category'] === categoryTitle) {
                filteredBooks.push(item)
            }
        })
    }

    filteredBySpecialNumber()
    let filteredBooksBySixNumber = filteredBooks.filter((val, i) => i < 6)





    //................................Pagination...........................................






    return (
        <div className={classes.root}>
            <Grid container>

                {from === 'home'
                    ? (filteredBooksBySixNumber.map(item => {
                        return (
                            < Grid item md={2} sm={4} xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Link to={{ pathname: `/products/ ${item.title}`, state: { item: item } }}
                                    className={classes.card} >
                                    <Card price={item.price} image={item.image} title={item.title} />
                                </Link>
                            </Grid>
                        )
                    })

                    ) : (filteredBooks.map(item => {
                        return (

                            < Grid item md={4} sm={10} xs={12} className='filteredBooks' >
                                <Link to={{ pathname: `/products/ ${item.title}`, state: { item: item } }}
                                    className={classes.card} >
                                    <Card price={item.price} image={item.image} title={item.title} description={item.description} />
                                </Link>
                            </Grid>

                        )
                    })
                    )}

            </Grid >

        </div >
    );
}
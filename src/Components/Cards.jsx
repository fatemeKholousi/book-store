import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './card'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadBooks } from '../store/books.js'

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

    return (
        <div className={classes.root}>
            <Grid container>
                {from === 'home'
                    ? (
                        filteredBooksBySixNumber.map(item => {
                            return (
                                < Grid item md={4} xs={10} sm={6} >
                                    <Paper className={classes.paper}>
                                        <Link to={{ pathname: `/products/ ${item.title}`, state: { item: item } }}
                                            className={classes.card} >
                                            <Card price={item.price} image={item.image} title={item.title} />
                                        </Link>
                                    </Paper>
                                </Grid>
                            )
                        })

                    ) : (filteredBooks.map(item => {
                        return (
                            < Grid item md={5} sm={7} xs={7} style={{ marginRight: '40%' }} >
                                <Paper className={classes.paper}>
                                    <Link to={{ pathname: `/products/ ${item.title}`, state: { item: item } }}
                                        className={classes.card} >
                                        <Card price={item.price} image={item.image} title={item.title} description={item.description} />
                                    </Link>
                                </Paper>
                            </Grid>
                        )
                    })
                    )}

            </Grid>

        </div >
    );
}
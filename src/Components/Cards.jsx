import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getAllProducts } from '../api/DataFetching'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './card'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: '10px',

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

let count = 1;
export default function CenteredGrid({ categoryTitle }) {
    const classes = useStyles();
    const [productsByCategory, setProductsByCategory] = useState([])
    useEffect(() => {
        getAllProducts().then(res => setProductsByCategory(res))
    }, [])

    return (
        <div className={classes.root}>
            <Grid container>
                {productsByCategory.map(item => {
                    if (item['category'] === categoryTitle)
                        return (
                            < Grid item md={4} xs={12} sm={4} >
                                <Paper className={classes.paper}>
                                    <Link
                                        to={{
                                            pathname: `/products/ ${item.title}`,
                                            state: { item: item },
                                        }}
                                        className={classes.card} >
                                        <Card price={item.price} image={item.image} title={item.title} description={item.description} />
                                    </Link>
                                </Paper>
                            </Grid>
                        )
                }

                )
                }

            </Grid>



        </div >
    );
}

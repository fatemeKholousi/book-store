import React, { useEffect, useState } from 'react'
import { getAllCategories, getAllProducts } from '../api/DataFetching'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  categoryTitle: {
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

function Home() {
  const classes = useStyles();
  const [categories, setCategories] = useState([])

  useEffect(() => { getAllCategories().then(item => setCategories(item)) }, [])

  return <>
    {
      categories.map(categoryTitle => (
        <>
          <Link
            to={{
              pathname: `/categories/ ${categoryTitle}`,
              state: { categoryTitle: categoryTitle }
            }}
            className={classes.categoryTitle}>

            <Typography variant='h4' >
              {categoryTitle}
              &#x8;  &#9666;
            </Typography>

          </Link>
          <Cards categoryTitle={categoryTitle} />

        </>)

      )
    }
  </ >

}

export default Home

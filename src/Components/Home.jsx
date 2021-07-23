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
    <div style={{
      height: '200px',
      // backgroundColor: 'rgba(240, 229, 183,0.7)'
      backgroundImage: 'url("https://s18.picofile.com/file/8438452168/00191381_1366x379.jpeg")',
      backgroundRepeat: 'no-repeat',
      // height: '150px'
    }}>

    </div>
    {
      categories.map(categoryTitle => (
        <>
          <Link
            to={{
              pathname: `/categories/ ${categoryTitle}`,
              state: { categoryTitle: categoryTitle }
            }}
            className={classes.categoryTitle}>
            <div style={{
              padding: '4px',
              // backgroundImage: 'url("https://s19.picofile.com/file/8438452018/bgg.png")',
              // backgroundRepeat: 'repeat',
              // height: '150px'
            }}>
              <Typography variant='h4' style={{ marginTop: '50px', marginRight: '15px' }}>
                {categoryTitle}
                &#x8;  &#9666;
              </Typography>
            </div>


          </Link>
          <Cards categoryTitle={categoryTitle} from='home' />

        </>)

      )
    }
  </ >

}

export default Home

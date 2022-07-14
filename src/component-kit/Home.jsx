import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../api/DataFetching'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import { makeStyles, Typography, InputBase } from '@material-ui/core';
import '../style/style.css'

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
  // const [filterSearch, setFilterSearch] = useState('')
  const classes = useStyles();
  const [categories, setCategories] = useState([])
  useEffect(() => { getAllCategories().then(item => setCategories(item)) }, [])

  
  return (
  <>
    <div className='headerImage'/>
    {/* <InputBase placeholder="دنبال چه کتابی هستین؟"
      inputProps={{ 'aria-label': 'search' }}
      className='search--box'
      onChange={(e) => setFilterSearch(e.target.value)}
    /> */}

    {/* {filterSearch === '' ? */}
      {categories.map(categoryTitle => (
        <>
          <Link
            to={{
              pathname: `/categories/ ${categoryTitle}`,
              state: { categoryTitle: categoryTitle }
            }}
            className={classes.categoryTitle}>

            <div style={{ padding: '4px'  }}>

              <Typography variant='h4' style={{ marginTop: '50px', marginRight: '15px' }}>
                {categoryTitle}
                &#x8;  &#9666;
              </Typography>
            </div>
          </Link>
             <Cards categoryTitle={categoryTitle} from='home' /> 
        </>
        ))

      // :
      // books.filter((val) => {
      //   if (filterSearch === '') { return }
      //   else if (val.title.includes(filterSearch)) { return val }
      // }).map((value, key) => {
      //   return (
      //     <div
      //       style={
      //         {
      //           marginRight: '100px',
      //           marginTop: '40px',
      //           fontSize: '20px'
      //         }
      //       }
      //       onClick={() => {
      //         history.push({
      //           pathname: `/products/${value.title}`,
      //           state: { item: value }
      //         })
      //       }}>
      //       + {value.title}</div>)
      // })
    }
  </ >
)
}

export default Home

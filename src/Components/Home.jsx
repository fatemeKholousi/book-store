import React, { useEffect, useState } from 'react'
import { getAllCategories, getAllProducts } from '../api/DataFetching'
import { Link, useHistory } from 'react-router-dom'
import Cards from './Cards'
import { makeStyles, Typography, InputBase } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

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
  const [filterSearch, setFilterSearch] = useState('')
  const classes = useStyles();
  const [categories, setCategories] = useState([])
  const books = useSelector(state => state.entities.books.list)
  useEffect(() => { getAllCategories().then(item => setCategories(item)) }, [])
  const history = useHistory()

  return <>
    <div style={{
      height: '400px',
      backgroundImage: 'url("https://s18.picofile.com/file/8438452168/00191381_1366x379.jpeg")',
      backgroundRepeat: 'no-repeat',
    }}>

    </div>
    <InputBase placeholder="دنبال چه کتابی هستین؟"
      inputProps={{ 'aria-label': 'search' }}
      onChange={(e) => setFilterSearch(e.target.value)}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: ' #ede5d4 ', padding: '30px 100px' }}
    />
    {filterSearch === '' ?

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

      :
      books.filter((val) => {
        if (filterSearch === '') { return }
        else if (val.title.includes(filterSearch)) { return val }
      }).map((value, key) => {
        return (
          <div onClick={() => {
            history.push({
              pathname: `/products/${value.title}`,
              state: { item: value }
            })
          }}>
            {value.title}</div>)
      })


      // (<h1>عبارت جست و جو شده</h1>)


    }
  </ >

}

export default Home

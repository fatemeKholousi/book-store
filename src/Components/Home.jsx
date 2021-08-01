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
  // const filteredBooks = () =>
  //   books.filter((val) => {
  //     val.title.includes(filterSearch)
  //     console.log('success')
  //   }
  // (<p>{val.title}</p>)

  return <>
    <div style={{
      height: '200px',
      // backgroundColor: 'rgba(240, 229, 183,0.7)'
      backgroundImage: 'url("https://s18.picofile.com/file/8438452168/00191381_1366x379.jpeg")',
      backgroundRepeat: 'no-repeat',
      // height: '150px'
    }}>

    </div>
    <InputBase placeholder="دنبال چه کتابی هستین؟"
      inputProps={{ 'aria-label': 'search' }}
      onChange={(e) => setFilterSearch(e.target.value)}
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

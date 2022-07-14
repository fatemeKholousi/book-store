import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import loading from '../images/loading.gif'
import { loadBooks, bookRemoved, selector__Books } from '../store/books'
import { deleteProduct } from '../api/DataFetching'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from './../assets/Pagination'
import BookShelfByNumber from './bookshelfByNumber'

const useStyles = makeStyles({
  root: {
    overflowX: 'scroll',
  },
  table: {
    minWidth: 700,
  },
  headCell: {
    color: 'black',
    fontSize: '20px',
  },
  headingrow: {
    background: ' #FFC300 ',
  },
  main: {
    marginTop: '10px',
  },
})

export default function BasicTable({ newProduct }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  // .............Retrieve Data From Redux.........................
  useEffect(() => {
    dispatch(loadBooks())
  }, [])
  const bookList = useSelector((state) => state.entities.books.list)

  // .............Delete Data From Redux and FetchData.........................
  const handleDelete = (p) => {
    //as a backup
    const originalData = bookList
    try {
      deleteProduct(p).then(() => {
        dispatch(bookRemoved({ id: p.id }))
      })
    } catch (err) {
      alert('!نمیشه حذفش کرد')
      bookList = originalData
    }
  }
  //................................Pagination...........................................
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPost = bookList.slice(indexOfFirstPost, indexOfLastPost)

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className={classes.main}>
      {bookList.length === 0 ? (
        <img
          src={loading}
          style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto' }}
        />
      ) : (
        <BookShelfByNumber onDelete={handleDelete} posts={currentPost} />
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={bookList.length}
        paginate={paginate}
      />
    </div>
  )
}

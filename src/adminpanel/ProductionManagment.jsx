// https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { AiFillDelete } from "react-icons/ai";
import loading from '../img/loading.gif'
import { loadBooks, bookRemoved, selector__Books } from '../store/books'
import configureStore from '../store/configureStore'
import { deleteProduct } from '../api/DataFetching'
import Add from './modals/productModal'
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
        overflowX: 'scroll'
    },
    table: {
        minWidth: 700,
    },
    headCell: {
        color: 'white',
        fontSize: '25px'
    },
    headingrow: {
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,112,1) 50%, rgba(69,180,252,1) 100%)',
    }
});

// const store = configureStore()

export default function BasicTable() {
    const classes = useStyles();
    const dispatch = useDispatch()

    // .............Retrieve Data From Redux.........................
    useEffect(() => {
        dispatch(loadBooks())
    }, [])
    const bookList = useSelector(state => state.entities.books.list)

    // .............Delete Data From Redux and FetchData.........................
    const handleDelete = (p) => {
        //as a backup
        const originalData = bookList
        try {
            deleteProduct(p).then(() => {
                dispatch(bookRemoved({ id: p.id }))
            })
        } catch (err) {
            alert('!نمیشه حذفش کرد');
            bookList = originalData
        }
    }


    return (
        <React.Fragment>
            {bookList.length === 0 ?
                <img src={loading} style={{ display: "block", marginRight: 'auto', marginLeft: 'auto' }} />
                :
                (
                    <div>
                        <Add situation='true' />
                        <TableContainer className={classes.root} component={Paper} >
                            <Table className={classes.table}  >
                                <TableHead >
                                    <TableRow className={classes.headingrow} >
                                        <TableCell className={classes.headCell} align="center">تصویر</TableCell>
                                        <TableCell className={classes.headCell} align="center">عنوان کتاب</TableCell>
                                        <TableCell className={classes.headCell} align="center">دسته بندی</TableCell>
                                        <TableCell className={classes.headCell} align="center">
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {bookList.map(row => row &&
                                        <TableRow key={row.id}>
                                            <TableCell align="center"><img src={row.image} width="100px" /></TableCell>
                                            <TableCell align="center">{row.title} </TableCell>
                                            <TableCell align="center">{row.category}</TableCell>
                                            <TableCell align="center">
                                                {/* TO Delete PRODUCT--> ? */}
                                                <AiFillDelete size='20' color='gray' onClick={() => {

                                                    handleDelete(row)
                                                }}
                                                />

                                                < Add situation='false' information={row.id} />
                                            </TableCell>
                                        </TableRow>
                                    )}


                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>)
            }

        </React.Fragment>
    );
}

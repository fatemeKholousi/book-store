// https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { AiFillDelete } from "react-icons/ai";
import loading from '../img/loading.gif'
import { loadBooks, bookRemoved, selector__Books } from '../store/books'
import { deleteProduct } from '../api/DataFetching'
import Add from './modals/productModal'
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
        overflowX: 'scroll',
    },
    table: {
        minWidth: 700,
    },
    headCell: {
        color: 'black',
        fontSize: '20px'
    },
    headingrow: {
        background: ' #FFC300 ',

    },
    main: {
        marginTop: '4%'

    }
});


export default function BasicTable({ newProduct }) {
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

    //................................Add & Edit declared at productModal.js............................................


    return (
        <div className={classes.main}>
            {bookList.length === 0 ?
                <img src={loading} style={{ display: "block", marginRight: 'auto', marginLeft: 'auto' }} />
                :
                (
                    <div>
                        <Add modal_performance='save' />
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
                                    {bookList.map(row =>
                                        < TableRow key={row.id} >
                                            <TableCell align="center"><img src={row.image} width="100px" /></TableCell>
                                            <TableCell align="center">{row.title} </TableCell>
                                            <TableCell align="center">{row.category}</TableCell>
                                            <TableCell align="center">
                                                {/* TO Delete PRODUCT--> ? */}
                                                <AiFillDelete size='20' color='gray' onClick={() => {

                                                    handleDelete(row)
                                                }}
                                                />

                                                < Add modal_performance='edit' id_from_props={row.id} />
                                            </TableCell>
                                        </TableRow>
                                    )}


                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>)
            }

        </div >
    );
}

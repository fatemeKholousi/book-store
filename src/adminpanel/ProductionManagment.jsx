// https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { AiFillDelete } from "react-icons/ai";
import loading from '../img/loading.gif'
import { loadBooks, selector__Books } from '../store/books'
import configureStore from '../store/configureStore'
import { deleteProduct } from '../api/DataFetching'
import Add from './modals/productModal'

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

const store = configureStore()

export default function BasicTable() {

    const classes = useStyles();
    const [data, setData] = useState([])

    // RETRIEVE DATA
    const [getAllBooks, setGetAllBooks] = useState([])
    store.dispatch(loadBooks())
    setTimeout(function () { setGetAllBooks(selector__Books(store.getState())) }, 100);

    //delete Data
    const handleDelete = (p) => {
        //as a backup
        const originalData = data
        try {
            deleteProduct(p).then(() => {
                const products = data.filter(item => item.id !== p.id);
                setData(products)
            })
        } catch (err) {
            alert('!نمیشه حذفش کرد');
            setData(originalData)
        }
    }
    return (
        <React.Fragment>
            {getAllBooks.length === 0 ?
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
                                    {getAllBooks.map(row => row &&
                                        <TableRow key={row.id}>
                                            <TableCell align="center"><img src={row.image} width="100px" /></TableCell>
                                            <TableCell align="center">{row.title} </TableCell>
                                            <TableCell align="center">{row.category}</TableCell>
                                            <TableCell align="center">
                                                {/* TO Delete PRODUCT--> ? */}
                                                <AiFillDelete size='20' color='gray' onClick={() => handleDelete(row)} />
                                                {/* TO EDIT PRODUCT--> Modal */}
                                                <Add situation='false' information={row.id} />
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

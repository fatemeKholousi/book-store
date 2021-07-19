import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getAllProducts, deleteProduct } from '../api/DataFetching'
import { AiFillDelete, AiFillEdit, AiOutlinePlusCircle } from "react-icons/ai";
// import { getAllBooks } from '../api/FetchFromRedux'
import { loadBooks, addBook, bookGet, getBooks, getTitle } from '../store/books'
import { useSelector } from 'react-redux';
import configureStore from '../store/configureStore'
import Add from './modals/productModal'
import { loadOrders } from '../store/orders';
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
    store.dispatch(loadBooks())
    store.dispatch(loadOrders())

    const { books } = useSelector(state => state.entities)
    console.log(books)

    // console.log(configureStore())
    // configureSloadBooks()
    // console.log(books)

    const classes = useStyles();
    const [data, setData] = useState([])

    //retrieve Data
    useEffect(() => {
        getAllProducts().then(items => { setData(items) })
    }, [])

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
            {/* TO ADD PRODUCT--> Modal */}
            <Add situation='true' />
            <TableContainer className={classes.root} component={Paper} >
                <Table className={classes.table} aria-label="simple table" >
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
                        {data.map((row) => row && (
                            <TableRow key={row.id}>
                                <TableCell align="center"><img src={row.image} width="100px" /></TableCell>
                                <TableCell align="center">{row.title} </TableCell>
                                <TableCell align="center">{row.category}</TableCell>
                                <TableCell align="center">
                                    <AiFillDelete size='20' color='gray' onClick={() => handleDelete(row)} />
                                    {/* TO EDIT PRODUCT--> Modal */}
                                    <Add situation='false' information={row.id} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}

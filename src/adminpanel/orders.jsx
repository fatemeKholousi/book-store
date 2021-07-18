import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { loadOrders, orderDelivered } from '../store/orders'
import confugureStore from '../store/configureStore'
import { getAllOrders, getOrder, getProduct } from '../api/DataFetching';
import configureStore from '../store/configureStore'
// import { loadOrders } from '../store/orders'
import OrderModal from './modals/orderModal'
import axios from 'axios';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

const store = configureStore()
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});
let userFlag = false
let totalSum = 0
let cart = []
function Orders() {
    const [data, setData] = useState([])
    const [selectedValue, setSelectedValue] = useState(true)
    const [userName, setUserName] = useState('')
    const classes = useStyles();
    // get all orders 
    useEffect(() => {
        getAllOrders().then(items => { setData(items) })
    }, [])

    store.dispatch(loadOrders())
    store.dispatch(orderDelivered())


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                تحویل نشده
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
                تحویل شده
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                />


                <Table stickyHeader aria-label="sticky table">




                    <TableHead>
                        <TableRow>
                            <TableCell>
                                نام کاربر
                            </TableCell>
                            <TableCell>
                                مجموع مبلغ
                            </TableCell>
                            <TableCell>
                                زمان ثبت سفارش
                            </TableCell>
                            <TableCell>
                                ...                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, index) => row && (
                            < TableRow key={index} >
                                <TableCell>
                                    {row.userName}
                                </TableCell>
                                <TableCell>
                                    {row.total}
                                </TableCell>
                                <TableCell>
                                    {row.submitTime}
                                </TableCell>
                                <TableCell>
                                    <OrderModal
                                        costumerName={row.userName}
                                        phoneNumber={row.userPhoneNumber}
                                        address={row.userAddress}
                                        deliveryDate={row.deliveryDate}
                                        submitTime={row.submitTime}
                                        deliveryStatus={row.deliveryStatus}
                                        cart={row.orderList}


                                    />
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </Paper >
    )
}

export default Orders

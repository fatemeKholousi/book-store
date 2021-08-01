import React, { useState, useEffect } from 'react'
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { loadOrders } from '../store/orders'
import OrderModal from './modals/orderModal'
import Radio from '@material-ui/core/Radio';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    tbCell: {
        fontSize: '20px',

    },
    tb: {
        padding: '10px 30px', backgroundColor: ' #80745b  ',
        color: 'white', whiteSpace: 'noWrap', marginBottom: '10px',
    },
    radioButton: {
        padding: '10px 30px', backgroundColor: ' #80745b ',
        color: 'white', whiteSpace: 'noWrap', marginBottom: '10px',
        '&:hover': { backgroundColor: ' #80745b ' }
    },
});

function Orders() {
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(() => { dispatch(loadOrders()) }, [])
    const orders = useSelector(state => state.entities.orders.list)
    const [deliveryStatusFlag, setDeliveryStatusFlag] = useState(false)
    const delivered = orders.filter(item => item.deliveryStatus)
    const undelivered = orders.filter(item => !item.deliveryStatus)

    return (
        <div className={classes.root}>
            <Paper >
                <TableContainer >
                    <div className={classes.tb}>
                        تحویل نشده
                        <Radio
                            onChange={() => setDeliveryStatusFlag(false)}
                            name="one"
                            checked={deliveryStatusFlag === false}
                        />

                        تحویل شده
                        <Radio
                            name="one"
                            value='delivered'
                            checked={deliveryStatusFlag === true}
                            onChange={() => setDeliveryStatusFlag(true)}
                        />
                    </div>

                    <Table stickyHeader aria-label="sticky table" >
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
                                    ...
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {

                                deliveryStatusFlag ?
                                    (orders.filter((item) => item.deliveryStatus).map((row, index) => row &&
                                        (< TableRow key={index} >
                                            <TableCell className={classes.tbCell}>
                                                {row.userName}
                                            </TableCell>
                                            <TableCell className={classes.tbCell}>
                                                {row.totalPrice}
                                            </TableCell >
                                            <TableCell className={classes.tbCell}>
                                                {row.submitTime}
                                            </TableCell>

                                            <OrderModal
                                                order={row}
                                                orderId={row.id}
                                                cart={row.orderList}
                                            />

                                        </TableRow>)

                                    ))
                                    : (orders.filter((item) => !item.deliveryStatus).map((row, index) => row &&
                                        (< TableRow key={index} >
                                            <TableCell className={classes.tbCell}>
                                                {row.userName}
                                            </TableCell>
                                            <TableCell className={classes.tbCell}>
                                                {row.totalPrice}
                                            </TableCell >
                                            <TableCell className={classes.tbCell}>
                                                {row.submitTime}
                                            </TableCell>

                                            <OrderModal
                                                order={row}
                                                orderId={row.id}
                                                cart={row.orderList}
                                            />

                                        </TableRow>)
                                    ))


                            }





                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper >
        </div>

    )
}

export default Orders


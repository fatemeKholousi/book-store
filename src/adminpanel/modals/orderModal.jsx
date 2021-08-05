import React, { useState } from 'react';
import { makeStyles, Modal, Backdrop, Fade, Table, TableContainer, TableHead, TableRow, TableCell, Button, Typography, Divider } from '@material-ui/core';
import { AiFillCloseCircle } from "react-icons/ai"
import { deliveredOrder } from '../../store/orders'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    modal: { display: 'flex', alignItems: 'center', justifyContent: 'center', },
    paper: {
        backgroundColor: theme.palette.background.paper, border: '2px solid #b5b2ac',
        boxShadow: theme.shadows[5], padding: theme.spacing(2, 4, 3),
    },
    deliveryButton: {
        borderRadius: '11px', cursor: 'pointer',
        backgroundColor: 'green',
        color: 'white', whiteSpace: 'noWrap',
        '&:hover': { backgroundColor: 'green' },
        marginLeft: '200px', marginTop: '30px'
    },
    checkButton: {
        backgroundColor: '#596141', color: 'white',
        '&:hover': { backgroundColor: '#a88276' },
    },
    closeIcon: {

    },
    informationOfCustomer: {
        lineHeight: 2,
        textIndent: '20px',
        fontSize: '18px'
    },
    tbHeader: {
        backgroundColor: '#d6c6ab'
    }
}));

export default function TransitionsModal({ order }) {
    const { submitTime, deliveryDate, userPhoneNumber, deliveryStatus, userAddress, userName, orderList, id: orderId } = order
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const [conditionalDeliveredButton, setConditionalDeliveredButton] = useState(true)
    const dispatch = useDispatch()

    return (
        < >
            <TableCell display="flex" >
                <Button variant="contained" className={classes.checkButton} onClick={handleOpen}  >
                    بررسی سفارش
                </Button >
            </TableCell>

            {
                <Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, }}>
                    <Fade in={open}>

                        <div className={classes.paper}>
                            <AiFillCloseCircle onClick={handleClose} size={32} style={{ float: 'left', fill: 'gray' }} />
                            <h2 > نمایش سفارش</h2>
                            <h3>" فاکتور سفارش" </h3>
                            <Divider />

                            <div className={classes.informationOfCustomer}>
                                <p>
                                    نام مشتری:  &#8198;&#8198;
                                    {userName}
                                </p>

                                <p>
                                    آدرس :  &#8198;&#8198;
                                    {userAddress}
                                </p>

                                <p>
                                    تلفن :  &#8198;&#8198;
                                    {userPhoneNumber}
                                </p>

                                <p>
                                    زمان تحویل :  &#8198;&#8198;
                                    {deliveryDate}
                                </p>

                                <p>
                                    زمان سفارش :  &#8198;&#8198;
                                    {submitTime}
                                </p>

                            </div>

                            <TableContainer >
                                <Table >
                                    <TableHead className={classes.tbHeader}>
                                        <TableRow>
                                            <TableCell>کالا</TableCell>
                                            <TableCell>تعداد</TableCell>
                                            <TableCell>قیمت</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    {orderList.map((row, index) => (
                                        < TableRow key={index} >
                                            <TableCell>{row.title}</TableCell>
                                            <TableCell>{row.quantity}</TableCell>
                                            <TableCell>{row.price}</TableCell>
                                        </TableRow>
                                    )
                                    )}

                                </Table>
                            </TableContainer>

                            {(deliveryStatus === "true")
                                ? (
                                    <Typography variant='h6'>
                                        تاریخ تحویل:
                                        {deliveryDate}
                                    </Typography>
                                )
                                : (conditionalDeliveredButton
                                    ? (<Button className={classes.deliveryButton}
                                        onClick={() => {
                                            dispatch(deliveredOrder(orderId, { ...order, deliveryStatus: 'true' }))
                                            setConditionalDeliveredButton(false)
                                        }} >
                                        &#8198;&#8198; تحویل شد
                                    </Button>)
                                    : (
                                        <Typography variant='h6'>
                                            تاریخ تحویل:
                                            {deliveryDate}
                                        </Typography>
                                    )
                                )}

                        </div>
                    </Fade>
                </Modal >
            }
        </>
    );
}

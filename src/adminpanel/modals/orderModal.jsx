import React, { useState, useEffect } from 'react';
import { makeStyles, Modal, Backdrop, Fade, Table, TableContainer, TableHead, TableRow } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import { deliveredOrder } from '../../store/orders'
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlinePlusCircle, AiFillSave, AiFillEdit, AiFillCloseCircle, AiOutlineEdit } from "react-icons/ai"
import { FormControl, TextField, Select, ButtonGroup, Button, Typography, MenuItem, Box, InputLabel } from '@material-ui/core';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    modal: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
    paper: {
        backgroundColor: theme.palette.background.paper, border: '2px solid #000', boxShadow: theme.shadows[5], padding: theme.spacing(2, 4, 3),
    },
    deliveryButton: {
        borderRadius: '11px', cursor: 'pointer',
        backgroundColor: 'green',
        color: 'white', whiteSpace: 'noWrap',
        '&:hover': { backgroundColor: '#1565c0' },
        marginRight: 'auto'
    },
}));

export default function TransitionsModal({ cart, orderId, order }) {
    const classes = useStyles();
    //open & close the modal
    const [open, setOpen] = useState(false);
    const [conditionalDeliveredButton, setConditionalDeliveredButton] = useState(true)
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const dispatch = useDispatch()
    return (
        <span >
            <TableCell display="flex" flexDirection="row-reverse">
                <Button onClick={handleOpen}  >
                    بررسی سفارش </Button >
            </TableCell>
            {
                <Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
                    BackdropProps={{ timeout: 500, }}>
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <AiFillCloseCircle onClick={handleClose} size={32} style={{ float: 'left', fill: 'gray' }} />
                            <h2 id="transition-modal-title"> نمایش سفارش</h2>
                            <p id="transition-modal-description"> اطلاعات سفارش و وضعیت مرسوله</p>

                            <Typography component="div">
                                نام مشتری:  &#8198;&#8198;
                                {order.userName}
                                <br />
                                <br />
                            </Typography>
                            <Typography component="div">
                                آدرس :  &#8198;&#8198;
                                {order.address}
                                <br />
                                <br />
                            </Typography>

                            <Typography component="div">
                                تلفن :  &#8198;&#8198;
                                {order.phoneNumber}
                                <br />
                                <br />
                            </Typography>

                            <Typography component="div">
                                زمان تحویل :  &#8198;&#8198;
                                {order.deliveryDate}
                                <br />
                                <br />
                            </Typography>

                            <Typography component="div">
                                زمان سفارش :  &#8198;&#8198;
                                {order.submitTime}
                                <br />
                                <br />
                            </Typography>
                            <TableContainer >
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>کالا</TableCell>
                                            <TableCell>تعداد</TableCell>
                                            <TableCell>قیمت</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {cart.map((row, index) =>
                                    (< TableRow key={index} >
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.quantity}</TableCell>
                                        <TableCell>{row.price}</TableCell>
                                    </TableRow>
                                    )
                                    )}
                                </Table>
                            </TableContainer>

                            {
                                conditionalDeliveredButton ? (
                                    <Button className={classes.deliveryButton}
                                        onClick={() => {
                                            dispatch(deliveredOrder(orderId, { ...order, deliveryStatus: 'true' }))
                                            setConditionalDeliveredButton(false)
                                        }} >
                                        &#8198;&#8198; تحویل شد
                                    </Button>
                                ) : (
                                    <Typography variant='h6'>
                                        تاریخ تحویل:
                                        {order.deliveryDate}
                                    </Typography>
                                )
                            }

                        </div>

                    </Fade>
                </Modal>
            }
        </span >
    );
}

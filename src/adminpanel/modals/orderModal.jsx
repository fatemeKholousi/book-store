import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { AiOutlinePlusCircle, AiFillSave, AiFillEdit, AiFillCloseCircle, AiOutlineEdit } from "react-icons/ai"
import { FormControl, TextField, Select, ButtonGroup, Button, Typography, MenuItem, Box, InputLabel } from '@material-ui/core';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';
import { addProduct, getProduct, updateProduct } from '../../api/DataFetching'
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

export default function TransitionsModal(props) {
    const { costumerName, phoneNumber, address, deliveryDate, submitTime, deliveryStatus, cart } = props
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    //open & close the modal
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <span >
            <Box display="flex" flexDirection="row-reverse">
                <Button onClick={handleOpen}  >
                    بررسی سفارش </Button ></Box>

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
                                {costumerName}
                                <br />
                                <br />
                            </Typography>
                            <Typography component="div">
                                آدرس :  &#8198;&#8198;
                                {address}
                                <br />
                                <br />
                            </Typography>

                            <Typography component="div">
                                تلفن :  &#8198;&#8198;
                                {phoneNumber}
                                <br />
                                <br />
                            </Typography>

                            <Typography component="div">
                                زمان تحویل :  &#8198;&#8198;
                                {deliveryDate}
                                <br />
                                <br />
                            </Typography>

                            <Typography component="div">
                                زمان سفارش :  &#8198;&#8198;
                                {submitTime}
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

                                        < TableRow key={row.index} >
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.stock}</TableCell>
                                            <TableCell>{row.price}</TableCell>


                                        </TableRow>
                                    )}
                                </Table>
                            </TableContainer>
                            <Button className={classes.deliveryButton} >
                                &#8198;&#8198; تحویل شد</Button>



                        </div>

                    </Fade>
                </Modal>
            }
        </span >
    );
}

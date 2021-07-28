import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Button, TextField, Typography, Grid, Box } from '@material-ui/core';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';
import { nanoid } from '@reduxjs/toolkit'
import { addOrder } from '../../../store/orders'
import { cleanedCart } from '../../../store/cart'
import { Redirect, Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    form: { display: 'flex', flexDirection: 'column', alignItems: 'right', width: '20rem' },
    txtfield: {
        margin: '5px 15px', border: 'none'
    },
    txtError: { color: 'red', backgroundColor: 'red' },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const phoneRegExp = /^09\d{9}$/
const validationSchema = yup.object({
    name: yup.string().required("فیلد نام را خالی نگذارید"),
    lastName: yup.string().required('فیلد نام خانوادگی را خالی نگذارید'),
    address: yup.string().required('فیلد آدرس را خالی نگذارید'),
    phoneNumber: yup.string().matches(phoneRegExp, "شماره تلفن معتبر نمی باشد").required("ثبت شماره تلفن برای تحویل بسته اجباری است").max(11, "شماره موبایل نمیتواند بیش از 11 رقم باشد"),

})
// today
const todayDate = require('moment-jalaali')
const submitTime = todayDate().format('jYYYY/jM/jD')
console.log(submitTime)


function FinalizeForm() {
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const classes = useStyles()
    const dispatch = useDispatch()

    //datePicker
    const [datePickerValue, setDatePickerValue] = useState(moment('1400/10/10', 'jYYYY/jM/jD'))
    const [deliveryDate, setDeliveryDate] = useState('')
    useEffect(() => {
        setDeliveryDate(datePickerValue.format('jYYYY/jM/jD'))
    }, [datePickerValue])

    const cartList = useSelector(state => state.entities.cart.list)
    const totalPrice = useSelector((state) => state.entities.cart.totalPrice)

    const formik = useFormik({
        initialValues: { name: '', lastName: '', address: '', phoneNumber: '' },
        onSubmit: (values) => {
            setShouldRedirect(true)
            console.log("so true")


            // dispatch(addOrder({
            //     id: nanoid(),
            //     userName: formik.values.name + " " + formik.values.lastName,
            //     userAddress: formik.values.address,
            //     userPhoneNumber: formik.values.phoneNumber,
            //     submitTime,
            //     deliveryDate,
            //     orderList: cartList,
            //     totalPrice,
            //     deliveryStatus: false,
            // }))
            // dispatch(cleanedCart())

        },
        validationSchema: validationSchema
    })

    return (
        <div>
            <form className={classes.form} onSubmit={formik.handleSubmit} >

                <TextField id="name" name="name" label="نام" type="search" variant="outlined"
                    className={classes.txtfield} value={formik.values.name} onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />

                <TextField id="lastName" name="lastName" label=" نام خانوادگی" type="search" variant="outlined"
                    className={classes.txtfield} value={formik.values.lastName} onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />

                <TextField id="address" name="address" multiline rows={4} label=" آدرس " type="search" variant="outlined"
                    className={classes.txtfield} value={formik.values.address} onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                />

                <TextField id="phoneNumber" name="phoneNumber" label=" شماره تلفن " type="search" variant="outlined"
                    className={classes.txtfield} value={formik.values.phoneNumber} onChange={formik.handleChange}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                />

                <div className={classes.txtfield} >
                    <Typography variant='body2'>تاریخ تحویل را انتخاب کنید</Typography>
                    <DatePicker
                        onChange={(v) => setDatePickerValue(v)}
                        value={datePickerValue}
                        persianDigits={false}
                        isGregorian={false}
                        timePicker={false}
                    />

                </div>

                {/* <Redirect
                to={{
                    pathname: "/paymentpage",
                    state: {
                        id: nanoid(),
                        userName: formik.values.name + " " + formik.values.lastName,
                        userAddress: formik.values.address,
                        userPhoneNumber: formik.values.phoneNumber,
                        submitTime,
                        deliveryDate,
                        orderList: cartList,
                        totalPrice,
                        deliveryStatus: false,
                    }
                }}
            /> */}
                {shouldRedirect ?
                    (<Redirect to={{
                        pathname: "/paymentpage",
                        state: {
                            orderInformation: {
                                id: nanoid(),
                                userName: formik.values.name + " " + formik.values.lastName,
                                userAddress: formik.values.address,
                                userPhoneNumber: formik.values.phoneNumber,
                                submitTime,
                                deliveryDate,
                                orderList: cartList,
                                totalPrice,
                                deliveryStatus: false,
                            }
                        }
                    }}>
                        <Button variant="contained" type="submit">پرداخت</Button>
                    </Redirect>) :
                    (<Button variant="contained" type="submit">پرداخت</Button>)

                }



                {/* <Button variant="contained" type="submit">پرداخت</Button> */}

                {/* <Redirect to='/paymentpage'>
                    <Button variant="contained" type="submit">پرداخت</Button>
                </Redirect> */}
            </form>
        </div>
    )
}

export default FinalizeForm


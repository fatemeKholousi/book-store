import React, { useState, useEffect } from 'react'
import { Button, TextField, Typography, makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router-dom'
import * as yup from 'yup';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker2';
import moment from 'moment-jalaali'
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'

const useStyles = makeStyles((theme) => ({
    form: { display: 'flex', flexDirection: 'column', alignItems: 'right', width: '20rem', marginRight: " 200px", marginLeft: '100px' },
    txtfield: {
        margin: '5px 15px', border: 'none', width: '300px', backgroundColor: 'rgba(233, 150, 122,0.2)'
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
const onlyLetters = /^[ آابپتثجچحخدذرزژسشصضطظعغفئقکگلمنوهی]+$/gum
const validationSchema = yup.object({
    name: yup.string().matches(onlyLetters, "استفاده از حروف وعلائم غیر فارسی مجاز نیست")
        .required("فیلد نام را خالی نگذارید"),
    lastName: yup.string().matches(onlyLetters, "استفاده از حروف وعلائم غیر فارسی مجاز نیست")
        .required('فیلد نام خانوادگی را خالی نگذارید'),
    address: yup.string().required('فیلد آدرس را خالی نگذارید'),
    phoneNumber: yup.string().matches(phoneRegExp, "شماره تلفن معتبر نمی باشد").required("ثبت شماره تلفن برای تحویل بسته اجباری است").max(11, "شماره موبایل نمیتواند بیش از 11 رقم باشد"),
})

// today
const todayDate = require('moment-jalaali')
const submitTime = todayDate().format('jYYYY/jM/jD')

function FinalizeForm() {
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const classes = useStyles()

    //datePicker
    const [datePickerValue, setDatePickerValue] = useState(moment('1400/10/10', 'jYYYY/jM/jD'))
    const [deliveryDate, setDeliveryDate] = useState('')
    useEffect(() => { setDeliveryDate(datePickerValue.format('jYYYY/jM/jD')) }, [datePickerValue])

    const cartList = useSelector(state => state.entities.cart.list)
    const totalPrice = useSelector((state) => state.entities.cart.totalPrice)
    const formik = useFormik({
        initialValues: { name: '', lastName: '', address: '', phoneNumber: '' },
        onSubmit: (values) => { setShouldRedirect(true); },
        validationSchema: validationSchema
    })

    return (
        <form className={classes.form} onSubmit={formik.handleSubmit} >
            <h1 >  فرم اطلاعات مشتری</h1>

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

            <div style={{ marginRight: '15px', marginTop: '15px', marginBottom: '15px' }} >
                <Typography variant='body2'>تاریخ تحویل را انتخاب کنید</Typography>
                <DatePicker
                    onChange={(v) => setDatePickerValue(v)}
                    value={datePickerValue}
                    persianDigits={false}
                    isGregorian={false}
                    timePicker={false}
                />

            </div>

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
                    <Button variant="contained" type="submit" disabled={!formik.isValid} >پرداخت</Button>
                </Redirect>)
                :

                (<Button variant="contained" type="submit">پرداخت</Button>)
            }

        </form >
    )
}

export default FinalizeForm


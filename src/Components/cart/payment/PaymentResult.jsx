import React from 'react'
import { useLocation, Redirect, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core';

import { RiCloseCircleFill, RiCheckboxCircleFill } from "react-icons/ri";
function PaymentResult() {
    const flagOfResult = useSelector(state => state.entities.orders.resultFlag)
    return (
        <div style={{ paddingTop: '100px' }}>
            <h1 style={{ paddingRight: '100px' }}>
                نتیجه پرداخت
            </h1>

            {flagOfResult ?
                (
                    <Grid container direction="row" style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                        <Grid item>
                            <RiCheckboxCircleFill fontSize='50px' style={{ marginLeft: '10px', color: 'green' }} />
                        </Grid>
                        <Grid item>
                            <h2 style={{ width: '250px' }}> با تشکر از خرید شما، در ساعات آینده جهت هماهنگی ارسال کتب با شما تماس خواهیم گرفت .</h2>
                        </Grid>
                    </Grid>
                )
                : (
                    <Grid container direction="row" style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                        <Grid item>
                            < RiCloseCircleFill fontSize='50px' style={{ marginLeft: '10px', color: 'red' }} />
                        </Grid>
                        <Grid item>
                            <h2 style={{ width: '250px' }}> پرداخت موفقیت آمیز نبود، سفارش شما در انتظار پرداخت است .</h2>
                        </Grid>
                    </Grid>
                )}

        </div>
    )
}

export default PaymentResult

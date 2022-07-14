import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { addOrder, paymentResultIsTrue, paymentResultIsFalse } from '../../../store/orders'
import { cleanedCart } from '../../../store/cart'

function FakePayment() {
    let history = useHistory()
    const dispatch = useDispatch()
    const location = useLocation()
    const { orderInformation } = location.state
    console.log(orderInformation.userName)
    const orderOperation = () => {
        try {
            dispatch(addOrder(orderInformation))
            dispatch(cleanedCart())
            history.push(`/paymentresult/?idenficationcode=${orderInformation.id}`);
            dispatch(paymentResultIsTrue())

        } catch (error) {
            console.log(error)
        }
    }
    const cancelOrderOperation = () => {
        history.push(`/paymentresult/?not-done-yet`);
        dispatch(paymentResultIsFalse())
    }

    return (
        <div style={{ paddingTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='h3'>درگاه پرداخت</Typography>
            <img src="https://s19.picofile.com/file/8438601676/pay.jpg" alt="" />
            <ButtonGroup>
                <Button variant="contained" color="primary" onClick={() => orderOperation()}>
                    پرداخت
                </Button>
                <Button variant="contained" color="secondary" onClick={() => cancelOrderOperation()}>
                    انصراف
                </Button>
            </ButtonGroup>
        </div >
    )
}

export default FakePayment

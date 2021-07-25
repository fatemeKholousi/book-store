import React from 'react'
import { Formik, Form } from 'formik';

import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Button, TextField, Typography, Grid, Box } from '@material-ui/core';

function FinalizeForm() {
    return (
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                deliveryDate: ''
            }}>

            {formik =>
            (<>
                <Box fontWeight="fontWeightBold" fontSize={25}>
                    نهایی کردن خرید
                </Box>
                {console.log(formik)}

                <Form>

                </Form>

            </>)
            }
        </Formik>
    )
}

export default FinalizeForm

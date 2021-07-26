import React from 'react'
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Button, TextField, Typography, Grid, Box } from '@material-ui/core';
import FinalizeForm from './formutils/FinalizeForm'

function CustomerForm() {
    return (
        <div className="container mt-3" >
            <div className="row">
                <div className="col-md-5">
                    < FinalizeForm />
                </div>
                <div className="col-md-7 my-auto">
                    {/* <img className="img-fluid w-100" src="https://s19.picofile.com/file/8438518526/storyshoplogo4.png" alt="" width='40%' /> */}
                </div>
            </div>
        </div>
    )
}

export default CustomerForm

import React from 'react'
import { FormControl, Button, TextField, Typography, Grid, Box } from '@material-ui/core';

import FinalizeForm from './FinalizeForm'

function CustomerForm() {
    return (
        <div style={{ paddingTop: '100px' }}>
            <Grid container>
                <Grid item md={4}>
                    < FinalizeForm /> </Grid>
                <Grid item md={8} >
                    <img className="img-fluid w-100" src="https://s19.picofile.com/file/8438518526/storyshoplogo4.png" alt="" width='40%' />
                    <img className="img-fluid w-100" src="https://s19.picofile.com/file/8438601634/kisspng_mr_tumnus_susan_pevensie_prins_caspian_the_chroni_5b6432ea191227_6967515115332932901027.jpg" alt="" width='40%' />

                </Grid></Grid></div>
    )
}

export default CustomerForm

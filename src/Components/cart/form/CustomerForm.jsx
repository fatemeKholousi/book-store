import React from 'react'
import { FormControl, Button, TextField, Typography, Grid, Box, makeStyles } from '@material-ui/core';
import FinalizeForm from './FinalizeForm'
import SidePic1 from '../../../img/sidePic1.png'
import SidePic2 from '../../../img/sidePic2.png'

const useStyles = makeStyles({
    root: {
        display: 'flex', flexDirection: 'row'
    },
    logo: {
        marginTop: '100px',
        marginLeft: '50px'
    }
})
function CustomerForm() {
    const classes = useStyles()
    return (
        <div style={{ paddingTop: '80px' }} >
            <Grid container>

                <Grid item md={5} xs={12}>
                    < FinalizeForm />
                </Grid>

                <Grid item md={5} xs={0}>
                    <img src={SidePic1} height="70%" width='80%' className={classes.logo} />
                </Grid>

            </Grid>
        </div>
    )
}

export default CustomerForm

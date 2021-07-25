import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Button, TextField, Typography, Grid, Box } from '@material-ui/core';
useFormik
// import { Form, Formik } from 'formik'
import FinalizeForm from './FinalizeForm';
import { useFormik } from 'formik'


const useStyles = makeStyles((theme) => ({
    field: {
        width: "40%", margin: '5px 15px'
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function CustomerForm() {
    const classes = useStyles()

    return (
        <div style={{ paddingTop: '100px' }}>

            <Grid container>
                <Grid itedm md={6}>

                    <div>
                        <TextField id="outlined-search" label="نام" type="search" variant="outlined" className={classes.field} />
                        <TextField id="outlined-search" label=" نام خانوادگی" type="search" variant="outlined" className={classes.field} />
                    </div>

                    <div>
                        <TextField id="outlined-search" multiline rows={4} label=" آدرس " type="search" variant="outlined" className={classes.field} />
                        <TextField id="outlined-search" label=" تلفن همراه" type="search" variant="outlined" className={classes.field} />
                    </div>

                    <TextField id="outlined-search" label=" تاریخ تحویل" type="search" variant="outlined" className={classes.field} />

                </Grid>
                <Grid itedm>
                    <img src="https://s19.picofile.com/file/8438518526/storyshoplogo4.png" alt="" width="400px" />
                </Grid>

            </Grid>



            <form className={classes.root} noValidate autoComplete="off">
                <div>

                    <Box fontWeight="fontWeightBold" fontSize={25}>
                        نهایی کردن خرید
                    </Box>





                    <Button variant="contained">Default</Button>
                    <Button variant="contained" color="secondary">
                        از اول
                    </Button>

                </div>
            </form>
        </div>
    )
}

export default CustomerForm

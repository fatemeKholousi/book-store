import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(
    (theme) => (
        {
            root: { fontSize: '20px' },
            footer: {
                backgroundImage: 'url("https://s18.picofile.com/file/8438176884/modalbg.png")',
                // flexGrow: 1,
                // height: '100px',
                backgroundColor: ' #dee5ec',
                position: 'fixed',
                padding: '10px 10px 0px 10px',
                bottom: 0,
                width: '100 %',
                color: 'black',
                borderRadius: '25px'


            }
        }));

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <h1>در حال به روز رسانی هستیم لطفا شکیبا باشید</h1>
        </footer>
    )
}

export default Footer

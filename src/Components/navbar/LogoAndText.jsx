import React from 'react'
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import logo from '../../img/storyshoplogo4.png';

const useStyles = makeStyles(() => ({
    logo: {
        cursor: 'pointer'
    },
}))
function LogoAndText() {
    let classes = useStyles()
    let history = useHistory()
    return (
        <>
            <img className={classes.logo} src={logo} alt="logo" width="250px" onClick={() => history.push('/')} />
        </>
    )
}

export default LogoAndText

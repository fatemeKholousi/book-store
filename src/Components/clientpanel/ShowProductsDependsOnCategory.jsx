
// https://material-ui.com/components/drawers/
import { useLocation } from 'react-router-dom'
import React from 'react'
import Cards from '../Cards'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    sideBar: {
        backgroundColor: '#dee5ec'
    }
}));


function ShowProductsDependsOnCategory() {

    const classes = useStyles();

    const location = useLocation()
    const { categoryTitle } = location.state

    return (
        <Grid container>
            <Grid item md={3} className={classes.sideBar}>
                ساید باری که میگفتی
            </Grid>
            <Grid item md={8}>
                <Cards categoryTitle={categoryTitle} />
            </Grid>
        </Grid>
    )


}

export default ShowProductsDependsOnCategory

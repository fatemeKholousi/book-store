
// https://material-ui.com/components/drawers/
import { useLocation } from 'react-router-dom'
import React from 'react'
import Cards from '../Cards'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
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
import SideBar from './SideBar';

const useStyles = makeStyles((theme) => ({
    sideBar: {
        backgroundColor: 'red',
        height: '90%',
    },
    root: {
    }
}));


function ShowProductsDependsOnCategory() {

    const classes = useStyles();

    const location = useLocation()
    const { categoryTitle } = location.state

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item md={12}  >
                    <Grid container alignItems="stretch" direction="column">
                        <Grid item md={12}>
                            <SideBar />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={2} ></Grid>
                <Grid item md={9}  >
                    <Cards categoryTitle={categoryTitle} from='categorypage' />
                </Grid>
            </Grid></div>
    )


}

export default ShowProductsDependsOnCategory

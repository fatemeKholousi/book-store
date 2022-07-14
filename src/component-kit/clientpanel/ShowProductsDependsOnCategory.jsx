import { useLocation } from 'react-router-dom'
import React from 'react'
import Cards from '../Cards'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
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
                    <h1 style={{ paddintTop: '100px', color: 'brown', paddingRight: '250px' }}>
                        کتاب هایی با موضوع "{categoryTitle}"

                    </h1>
                    <Cards categoryTitle={categoryTitle} from='categorypage' />
                </Grid>
            </Grid></div>
    )


}

export default ShowProductsDependsOnCategory

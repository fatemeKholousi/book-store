import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProductionManagement from './ProductionManagment'
import StockAndPrice from './StockAndPrice'
import Orders from './orders'
import { useDispatch } from 'react-redux';
import { updateBookStock } from '.././store/books'
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar color='transparent' position="relative">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">

                    <Tab label="کالاها" {...a11yProps(0)} />
                    <Tab label="موجودی و قیمت ها" {...a11yProps(1)} />
                    <Tab label="سفارش ها" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <ProductionManagement />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <StockAndPrice />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Orders />
            </TabPanel>
        </div>
    );
}

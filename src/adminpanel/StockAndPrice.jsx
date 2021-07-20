// https://stackoverflow.com/questions/64419767/get-the-selected-values-in-a-datagrid-with-material-ui
// https://cloudstack.ninja/coder_coder123/how-to-dynamically-update-materialui-datagrid-table-in-react-js/
// https://github.com/Hanieh-Sharifi/maktab48-project-Sharifi/blob/develop/src/Containers/price-management-table/PriceManagementTable.jsx
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { getAllProducts } from '../api/DataFetching';

const useStyles = makeStyles((theme) => ({ root: { fontSize: '20px' } }));
const columns = [
    {
        field: 'title',
        headerName: 'عنوان کتاب',
        editable: false,
        flex: 2
    },
    {
        field: 'price',
        headerName: 'قیمت',
        description: 'این قیمت ها به تومان می باشد',
        editable: true,
        flex: 1

    },
    {
        field: 'stock',
        headerName: 'موجودی',
        editable: true,
        flex: 1

    },

];

export default function DataGridDemo() {
    const [data, setData] = useState([])
    const [saveButton, setSaveButton] = useState(false)
    const classes = useStyles();
    useEffect(() => {
        getAllProducts().then(items => { setData(items) })
    }, [])
    return (
        <div style={{ height: 400, width: '100%' }} >
            <Grid container spacing={10} >
                <Grid item xs={12} container>
                    <Grid item xs={4}>
                        <Typography variant='h5' > مدیریت موجودی و قیمت ها
                        </Typography>
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={2}>
                        <Box display="flex" flexDirection="row-reverse">
                            <Button variant="outlined" style={{ fontSize: '20px' }} >
                                ذخیره</Button ></Box>
                    </Grid>
                </Grid>
            </Grid>

            <DataGrid
                className={classes.root}
                rows={data}
                columns={columns}
                pageSize={5}
            />
        </div >
    );
}

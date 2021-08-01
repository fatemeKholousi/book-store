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
        flex: 1
    },
    {
        field: 'price',
        headerName: 'قیمت',
        description: 'این قیمت ها به تومان می باشد',
        editable: true,
        flex: 0.8
    },
    {
        field: 'stock',
        headerName: 'موجودی',
        editable: true,
        flex: 0.8
    },

];

export default function DataGridDemo() {
    const [data, setData] = useState([])
    const classes = useStyles();
    useEffect(() => { getAllProducts().then(items => { setData(items) }) }, [])

    return (
        <div style={{ height: 400, }} >
            <Grid container spacing={10} >
                <Grid item xs={12} container>
                    <Grid item xs={7}>
                        <Typography variant='h5' > مدیریت موجودی و قیمت ها
                        </Typography>
                    </Grid>
                    <Grid item xs={3} />
                    <Grid item xs={2}>
                        <Box display="flex" flexDirection="row-reverse">
                            <Button variant="outlined" style={{ fontSize: '20px', marginBottom: '10px', backgroundColor: ' #80745b ', color: 'white' }} >
                                ذخیره</Button >
                        </Box>
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
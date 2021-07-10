import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getAllProducts, deleteProduct } from '../api/DataFetching'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Add from './addmodal'
import axios from 'axios'
import { SettingsApplications } from '@material-ui/icons';
const apiEndPointProducts = 'http://localhost:5000/products/'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable() {
    const [data, setData] = useState([])
    const classes = useStyles();
    //retrieve Data
    useEffect(() => {
        getAllProducts().then(items => { setData(items) })
    }, [])

    //delete Data
    const handleDelete = (p) => {
        //as a backup
        const originalData = data
        try {
            deleteProduct(p).then(() => {
                const products = data.filter(item => item.id !== p.id);
                setData(products)
            })
        } catch (err) {
            alert('اشتباهی پیش اومده');
            setData(originalData)
        }
    }



    // <input type="text" name="username" />

    return (

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">

                <TableHead >
                    <Add />
                    <TableRow style={{ backgroundColor: '#5d6d7e' }}>
                        <TableCell align="center">تصویر</TableCell>
                        <TableCell align="center">عنوان کتاب</TableCell>
                        <TableCell align="center">دسته بندی</TableCell>
                        <TableCell align="center">
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => row && (
                        <TableRow key={row.id}>
                            <TableCell align="center"><img src={row.image} width="100px" /></TableCell>
                            <TableCell align="center">{row.title} </TableCell>
                            <TableCell align="center">{row.category}</TableCell>
                            <TableCell align="center"><AiFillDelete size='30' onClick={() => handleDelete(row)} /><AiFillEdit size='35' /></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

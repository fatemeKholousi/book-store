import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { AiFillDelete } from "react-icons/ai";
import Add from './modals/productModal'

const useStyles = makeStyles({
    root: {
        overflowX: 'scroll',
    },
    table: {
        minWidth: 700,
    },
    headCell: {
        color: 'black',
        fontSize: '20px'
    },
    headingrow: {
        background: ' #FFC300 ',

    },
    main: {
        marginTop: '4%'

    }
});

function BookShelfByNumber({ posts, onDelete }) {
    let classes = useStyles()
    return (
        <div>
            <Add modal_performance='save' />
            <TableContainer className={classes.root} component={Paper} >
                <Table className={classes.table}  >
                    <TableHead >
                        <TableRow className={classes.headingrow} >
                            <TableCell className={classes.headCell} align="center">تصویر</TableCell>
                            <TableCell className={classes.headCell} align="center">عنوان کتاب</TableCell>
                            <TableCell className={classes.headCell} align="center">دسته بندی</TableCell>
                            <TableCell className={classes.headCell} align="center">
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map(row =>
                            < TableRow key={row.id} >
                                <TableCell align="center"><img src={row.image} width="100px" alt=""/></TableCell>
                                <TableCell align="center">{row.title} </TableCell>
                                <TableCell align="center">{row.category}</TableCell>
                                <TableCell align="center">
                                    {/* TO Delete PRODUCT--> ? */}
                                    <AiFillDelete size='20' color='gray' onClick={() => {
                                        onDelete(row)
                                    }}
                                    />

                                    < Add modal_performance='edit' id_from_props={row.id} />
                                </TableCell>
                            </TableRow>
                        )}


                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default BookShelfByNumber

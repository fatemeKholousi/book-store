import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
// import { useStyles } from "./useStyle"
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography, TextField } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { updateBookStock } from '../store/books'

// import { getAllProducts } from "../../api/products";
// import {
//     setProducts,
//     getProducts,
// } from "../../redux/actions/productActions";
export default function SimpleTable() {
    // const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState([]);
    const [products, setProducts] = useState([]);
    const [showButton, setShowButton] = useState(false);
    const dispatch = useDispatch();


    const onKeyDown = (e, product) => {
        let names = e.target.name;
        if (e.key === "Escape") {
            let newP = [...newProducts];
            newP.map((item, index) => {
                if (item.id === product.id) {
                    item[names] = products[index][names];
                }
            });
            setNewProducts(newP);
            if (names === "price") {
                changeEditPrice(product.id);
            } else if (names === "stock") {
                changeEditEntity(product.id);
            }
            let showSave = rows.map((item, index) =>
                item.priceEditable === false && item.entityEditable === false
                    ? false
                    : true
            );
            let count = showSave.filter((item) => item == true).length;
            if (count == 1) {
                setShowButton(false);
            }
        }
    };

    const [newProducts, setNewProducts] = useState([]);
    const books = useSelector(state => state.entities.books.list)

    useEffect(() => {
        setNewProducts(books);
        const newRows = books.map((item) => {
            return { id: item.id, priceEditable: false, entityEditable: false };
        });

        setRows(newRows);
        //   console.log("hello");

    }, []);


    const changeEditPrice = (id) => {
        let newRows = [...rows];
        let index = rows.findIndex((item) => item.id === id);
        let newRow = { ...newRows[index] };
        newRow.priceEditable = !newRow.priceEditable;
        newRows[index] = newRow;
        setRows(newRows);
    };
    const changeEditEntity = (id) => {
        let newRows = [...rows];
        let index = rows.findIndex((item) => item.id === id);
        let newRow = { ...newRows[index] };
        newRow.entityEditable = !newRow.entityEditable;
        newRows[index] = newRow;
        setRows(newRows);
    };
    const update = (e, id) => {
        setShowButton(true);
        const values = e.target.value;
        let names = e.target.name;
        let arrays = [...newProducts];
        arrays.map((item, index) => {
            if (item.id === id) {
                item[names] = Number(values);
            }
        });
        setNewProducts(arrays);
    };
    const saveEdit = () => {
        let array = [];
        newProducts.map((item, index) => {
            if (
                item.price !== products[index].price ||
                item.stock !== products[index].stock
            ) {
                array.push(item);
            }
        });
        array.map((item, index) => dispatch(updateBookStock(item.id, item)));

        const newRows = newProducts.map((item) => {
            return { id: item.id, priceEditable: false, entityEditable: false };
        });
        setRows(newRows);
        setShowButton(false);
    };
    // useEffect(() => {
    //     setProducts(bo));
    // }, [saveEdit]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows =
        rowsPerPage -
        Math.min(rowsPerPage, newProducts?.length - page * rowsPerPage);
    return (
        <div>
            <Box component="div">
                <h2>مدیریت موجودی و قیمت ها</h2>

                {showButton && (
                    <Button
                        variant="contained"
                        color="default"
                        // className={classes.button}
                        startIcon={<SaveAltIcon />}
                        onClick={saveEdit}
                    >
                        ذخیره
                    </Button>
                )}
            </Box>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell>نام کالا</TableCell>
                            <TableCell>قیمت</TableCell>
                            <TableCell>موجودی</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {newProducts
                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell>{product.title}</TableCell>
                                    {!rows[index]?.priceEditable ? (
                                        <TableCell onClick={() => changeEditPrice(product.id)}>
                                            {product.price}
                                        </TableCell>
                                    ) : (
                                        <TableCell>
                                            <TextField
                                                name="price"
                                                variant="outlined"
                                                value={product.price}
                                                onChange={(e) => update(e, product.id)}
                                                onKeyDown={(e) => onKeyDown(e, product)}
                                            />
                                        </TableCell>
                                    )}
                                    {!rows[index]?.entityEditable ? (
                                        <TableCell onClick={() => changeEditEntity(product.id)}>
                                            {product.stock}
                                        </TableCell>
                                    ) : (
                                        <TableCell>
                                            <TextField
                                                name="stock"
                                                variant="outlined"
                                                value={product.stock}
                                                onChange={(e) => update(e, product.id)}
                                                onKeyDown={(e) => onKeyDown(e, product)}
                                            />
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={newProducts?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
        </div>
    );
}
// https://stackoverflow.com/questions/64419767/get-the-selected-values-in-a-datagrid-with-material-ui
// https://cloudstack.ninja/coder_coder123/how-to-dynamically-update-materialui-datagrid-table-in-react-js/
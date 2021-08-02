import React, { useState, useEffect } from 'react';
import {
    makeStyles, Modal, Backdrop, Fade, FormControl, TextField, InputBase,
    Select, ButtonGroup, Button, Typography, MenuItem, Box, InputLabel, Divider
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import { AiOutlinePlusCircle, AiFillSave, AiFillEdit, AiFillCloseCircle, AiOutlineEdit } from "react-icons/ai"
import axios from 'axios';
import { addBook, updateBook, getBookById } from '../../store/books'
import { useSelector, useDispatch } from 'react-redux';
import { loadCategories } from '../../store/category'

const useStyles = makeStyles((theme) => ({
    saveButton: {
        padding: '10px 30px', backgroundColor: '#2a3eb1',
        color: 'white', whiteSpace: 'noWrap', marginBottom: '10px',
        '&:hover': { backgroundColor: '#1565c0' },
    },
    modal: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    closeIcon: { float: 'left', fill: 'gray' },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: 'white',
        backgroundSize: 'contain',

    },
    input: {
        marginLeft: theme.spacing(1),
        border: 'none',
        marginBottom: '10px',
        flex: 1,
    },
    button: {
        margin: '10px auto'
    }
}));

//this flag is to show a product things to edit it
let flag = false
export default function TransitionsModal({ id_from_props, modal_performance }) {
    const [productForEdit, setProductForEdit] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [category, setCategory] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)

    };
    const handleEmptyShirMorghTaJooneAdmized = () => {
        setImage('')
        setPrice(0)
        setCategory('')
        setStock(0)
        setDescription('')
        setTitle('')
    }
    useEffect(() => { dispatch(loadCategories()) }, [])
    const categoryList = useSelector(state => state.entities.category.list)
    const dispatch = useDispatch()
    const classes = useStyles();
    // ....................................upload image..........................................
    const [image, setImage] = useState('')

    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
    }
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = (() => {
                resolve(fileReader.result)
            })

            fileReader.onerror = ((error) => { reject(error) })
        })
    }
    // ..........................................................................................
    // ............................SAVE A NEW PRODUCT--> using redux..........................................................
    const handleAddBook = (e) => {
        handleEmptyShirMorghTaJooneAdmized()

        e.preventDefault()
        dispatch(addBook({
            title, image, description, category, price, stock
        }))
        handleClose()
    }
    // ..........................................................................................
    //EDITING A BOOK --> using redux
    //EDITING A BOOK --> using redux
    const handleUpdateProduct = () => {
        dispatch(updateBook(id_from_props, { id: id_from_props, title, image, description, category, price, stock }))
        handleClose()
    }
    useEffect(() => {
        dispatch(getBookById(id_from_props))
    }, [id_from_props])

    const handleEditProduct = () => {
        flag = true
        // dispatch(getBookById(id_from_props))
        axios.get('http://localhost:5000/products/' + id_from_props)
            .then(res => {
                setProductForEdit(res.data)
                setStock(productForEdit.stock)
                setImage(productForEdit.image)
                setTitle(productForEdit.title)
                setPrice(productForEdit.price)
                setDescription(productForEdit.description)

                handleOpen()
                flag = false

            })

    }
    useEffect(() => {
        if (flag === true)
            handleEditProduct()
    }, [flag])
    useEffect(() => { if (flag === true) setCategory(productForEdit.category) }, [flag])

    return (
        <>
            {/*  BUTTON CHOOSER */}
            {modal_performance === 'save'
                ? (<Box display="flex" flexDirection="row-reverse">
                    <Button onClick={handleOpen} className={classes.saveButton} variant="outlined" startIcon={<AiOutlinePlusCircle />}  >
                        افزودن کتاب</Button >
                </Box>)
                : (<AiFillEdit size='20' onClick={handleEditProduct} />)}


            {/* MODAL */}
            {<Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500, }}>
                <Fade in={open}>

                    <div className={classes.paper}>

                        {/* ........................................HEAD OF MODAL................................... */}
                        <AiFillCloseCircle onClick={handleClose} size={32} style={{ float: 'left', fill: 'gray' }} />
                        <h2 id="transition-modal-title">افزودن / ویرایش کالا</h2>
                        <p id="transition-modal-description">لطفا قبل از خروج حتما دکمه ذخیره را فشار دهید</p>

                        {/* ............................................FORM................................... */}
                        <FormControl >

                            <span><input type='file' name='image' id='file' accept="image/png, image/jpeg" onChange={e => uploadImage(e)} />
                                <img src={image} height='101px' width="90px" />
                            </span>


                            {/* SELECT CATEGORY */}
                            <Typography style={{ marginTop: '20px' }}>ژانر</Typography>
                            <Select value={category} onChange={(e) => setCategory(e.target.value)} >
                                {categoryList.map(v => <MenuItem value={v}> {v}</MenuItem>)}
                            </Select>


                            {/* Book NAME */}عنوان
                            <input
                                className={classes.input} placeholder="نام کتاب"
                                value={title} onChange={(e) => setTitle(e.target.value)}
                            />
                            <Divider />

                            {/* PRICE */}
                            قیمت
                            <input
                                className={classes.input} placeholder="قیمت کالا (به تومان)"
                                value={price} onChange={(e) => setPrice(e.target.value)}
                            />
                            <Divider />
                            {/* STOCK */}
                            موجودی
                            <input
                                className={classes.input} placeholder="موجودی"
                                onChange={(e) => setStock(e.target.value)} value={stock}
                            />
                            <Divider />


                            {/* DESCRIPTION */}
                            <Typography>توضیحات</Typography>
                            <TextField multiline rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)} />

                            {/* SAVE */}
                            <ButtonGroup>
                                {id_from_props
                                    ? (
                                        <Button onClick={handleUpdateProduct} variant="contained" color="secondary" className={classes.button} endIcon={<AiOutlineEdit />} >
                                            &#8198;&#8198; ویرایش</Button>
                                    ) : (
                                        <Button onClick={handleAddBook} variant="contained" color="secondary" className={classes.button} endIcon={<SaveIcon />}>
                                            &#8198;&#8198; ذخیره</Button>
                                    )}
                            </ButtonGroup>
                        </FormControl>
                    </div>
                </Fade>
            </Modal>
            }
        </>
    );
}
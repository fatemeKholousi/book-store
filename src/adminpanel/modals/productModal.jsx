import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AiOutlinePlusCircle, AiFillSave, AiFillEdit, AiFillCloseCircle, AiOutlineEdit } from "react-icons/ai"
import { FormControl, TextField, Select, ButtonGroup, Button, Typography, MenuItem, Box, InputLabel } from '@material-ui/core';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';
import { addProduct, getProduct, updateProduct, getAllCategories } from '../../api/DataFetching'
import { loadBooks, addBook, updateBook, loadOneBook, getAll } from '../../store/books'
import { handleAddProduct } from '../ProductionManagment';
import configureStore from '../../store/configureStore'
// import { addABook } from '../ProductionManagment';
import { getAllProducts, deleteProduct } from '../../api/DataFetching'

const store = configureStore()
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  saveButton: {
    borderRadius: '11px', border: '0', fontSize: '17px', cursor: 'pointer',
    padding: '10px 30px', backgroundColor: '#2a3eb1',
    color: 'white', whiteSpace: 'noWrap', marginBottom: '10px',
    '&:hover': { backgroundColor: '#1565c0' },
  },
  paper: {
    backgroundColor: theme.palette.background.paper, border: '2px solid #000', boxShadow: theme.shadows[5], padding: theme.spacing(2, 4, 3),
    backgroundImage: 'url("https://s18.picofile.com/file/8438176884/modalbg.png")',
    backgroundSize: 'contain',

  },
}));

//this flag is to show a product things to edit it
let flag = false
export default function TransitionsModal(props) {
  // const [productMakerStatus, setProductMakerStatus] = useState(false)

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  //this is the id
  const information_id_from_props = props.information

  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')
  const [productForEdit, setProductForEdit] = useState([])

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)

  //open & close the modal
  const handleOpen = () => { setOpen(true) };
  const handleClose = () => { setOpen(false) };
  //browse image
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

  //SET ALL CATEGORIES : set onChange category is in front of that
  useEffect(() => { getAllCategories().then(item => setCategories(item)) }, [])

  //SAVE A NEW PRODUCT--> using redux
  const handleAddBook = (e) => {
    e.preventDefault()
    store.dispatch(addBook({
      id: Math.floor(Math.random() * 1000000000),
      title, image, description, category, price, stock
    })).then(getAllProducts())
    handleClose()
  }

  //EDITING A BOOK --> using redux
  const handleUpdateProduct = () => {
    store.dispatch(updateBook(information_id_from_props, { id: information_id_from_props, title, image, description, category, price, stock }))
    handleClose()
  }

  const handleEditProduct = () => {
    flag = true
    axios.get('http://localhost:5000/products/' + information_id_from_props)
      .then(res => {
        setProductForEdit(res.data)
        setImage(productForEdit.image)
        setTitle(productForEdit.title)
        setPrice(productForEdit.price)
        setStock(productForEdit.stock)
        setDescription(productForEdit.description)
        setCategory(productForEdit.category)
        handleOpen()
        flag = false
      })
  }
  useEffect(() => {
    if (flag === true) handleEditProduct()
  }, [flag])


  return (
    <span >
      {/* Conditional Button Checker */}
      {props.situation === 'true'
        ? (<Box display="flex" flexDirection="row-reverse">
          <Button onClick={handleOpen} className={classes.saveButton} variant="outlined" startIcon={<AiOutlinePlusCircle />}  > افزودن کتاب</Button ></Box>)
        : (<AiFillEdit size='20' onClick={handleEditProduct} />)}

      {<Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <AiFillCloseCircle onClick={handleClose} size={32} style={{ float: 'left', fill: 'gray' }} />
            <h2 id="transition-modal-title">افزودن / ویرایش کالا</h2>
            <p id="transition-modal-description">لطفا قبل از خروج حتما دکمه ذخیره را فشار دهید</p>
            <FormControl >
              <div>
                <input type='file' name='image' id='file' accept="image/png, image/jpeg" onChange={e => uploadImage(e)} />
                <img src={image} width='100px' />
              </div>

              {/* SELECT CATEGORY */}
              <Typography style={{ marginTop: '20px' }}>ژانر</Typography>
              <Select fullWidth onChange={(e) => setCategory(e.target.value)} value={category} >
                {categories.map(v => <MenuItem value={v}> {v}</MenuItem>)}
              </Select>
              {/* PRODUCT NAME */}
              <TextField required id="inputProductName" label="نام کالا" name="title" fullWidth
                value={title} onChange={(e) => setTitle(e.target.value)} />

              {/* PRICE */}
              <TextField required label="قیمت کالا (به تومان)" name="price" fullWidth
                value={price} onChange={(e) => setPrice(e.target.value)} style={{ marginTop: '20px' }} />

              {/* STOCK */}
              <TextField
                name="stock"
                label="موجودی"
                hintText="موجودی"
                floatingLabelText="موجودی"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                // errorText={this.state.firstNameError}
                floatingLabelFixed
              />

              {/* DESCRIPTION */}
              <Typography>توضیحات</Typography>
              <textarea rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)} />

              {/* SAVE */}
              <ButtonGroup>
                {information_id_from_props
                  ? (
                    <Button onClick={handleUpdateProduct} variant="contained" color="secondary" className={classes.button} endIcon={<AiOutlineEdit />} style={{ marginRight: 'auto' }}>
                      &#8198;&#8198; ویرایش</Button>
                  ) : (
                    <Button onClick={handleAddBook} variant="contained" color="secondary" className={classes.button} endIcon={<SaveIcon />} style={{ marginRight: 'auto' }}>
                      &#8198;&#8198; ذخیره</Button>
                  )}
              </ButtonGroup>
            </FormControl>
          </div>
        </Fade>
      </Modal>
      }
    </span >
  );
}

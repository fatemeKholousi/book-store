import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AiOutlinePlusCircle, AiFillSave, AiFillEdit, AiFillCloseCircle } from "react-icons/ai"
import { FormControl, TextField, Select, ButtonGroup, Button, Typography, MenuItem, Box, InputLabel } from '@material-ui/core';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';
import { addProduct, getProduct, updateProduct } from '../api/DataFetching'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper, border: '2px solid #000', boxShadow: theme.shadows[5], padding: theme.spacing(2, 4, 3),
  },
}));
let updateMyProduct = {}
let newProduct = {}
export default function TransitionsModal(props) {
  const information_id_from_props = props.information
  const classes = useStyles();
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [productForEdit, setProductForEdit] = useState([])
  const [editModal, setEditModal] = useState(false)
  const [price, setPrice] = useState(0)


  //open & close the modal
  const handleOpen = () => {
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
  };

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


  //get all categories and set them on State
  useEffect(() => {
    axios.get('http://localhost:5000/categories/')
      .then(res => {
        setCategories(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  //set category
  const handleSelectChange = (e) => {

    information_id_from_props ?
      setCategory(e)
      :
      // e.preventDefault();
      setCategory(e.target.value);



  }


  //Save a Product : post
  const handleProductMaker = () => {
    // create
    newProduct = {
      id: Math.floor(Math.random() * 1000000000),
      title, image, description, category, price
    };
    addProduct(newProduct)
    handleClose()
    setTimeout(function () { window.location.reload() }, 1000);
  }


  //UPDATE : put
  const handleUpdateProduct = () => {
    updateMyProduct = {
      id: information_id_from_props, title, image, description, category, price
    }
    updateProduct(information_id_from_props, updateMyProduct)
    handleClose()
    setTimeout(function () { window.location.reload() }, 1000);


  }



  useEffect(() => {
    if (editModal == true) {
      axios.get('http://localhost:5000/products/' + information_id_from_props)
        .then(res => {
          setProductForEdit(res.data)
          setImage(productForEdit.image)
          setTitle(productForEdit.title)
          setPrice(productForEdit.price)
          setDescription(productForEdit.description)
          setCategory(productForEdit.category)
          handleSelectChange(productForEdit.category)
          handleOpen()
          setEditModal(false)

        })

    }

  }, [editModal])


  console.log(category)
  return (
    <span >


      {props.situation == 'true'
        ?
        (<Button variant="contained" color="secondary"
          onClick={() => handleOpen()}> افزودن کتاب</Button>)
        :
        (<AiFillEdit size='20' onClick={() => {
          setEditModal(true);
        }
        } />)}

      {<Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <AiFillCloseCircle onClick={handleClose} size={32} style={{ float: 'left', fill: 'gray' }} />
            <h2 id="transition-modal-title">افزودن / ویرایش کالا</h2>
            <p id="transition-modal-description">لطفا قبل از خروج حتما دکمه ذخیره را فشار دهید</p>
            <FormControl >
              <div>
                <input type='file' name='image' id='file' onChange={e => uploadImage(e)} />
                <img src={image} width='100px' />
              </div>


              {/* SELECT CATEGORY */}
              <Typography style={{ marginTop: '20px' }}>ژانر</Typography>
              <Select fullWidth onChange={handleSelectChange} value={category} >
                {categories.map(v =>
                  <MenuItem value={v}>{v}</MenuItem>
                )}
              </Select>

              {/* PRODUCT NAME */}
              <TextField required id="inputProductName" label="نام کالا" name="title" fullWidth
                value={title} onChange={(e) => setTitle(e.target.value)} />

              {/* PRICE */}
              <TextField required label="قیمت کالا (به تومان)" name="price" fullWidth
                value={price} onChange={(e) => setPrice(e.target.value)} style={{ marginTop: '20px' }} />

              {/* DESCRIPTION */}
              <Typography>توضیحات</Typography>
              <textarea rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)} />

              {/* SAVE */}
              <ButtonGroup>
                {information_id_from_props
                  ? (
                    <Button onClick={handleUpdateProduct} variant="contained" color="secondary" className={classes.button} startIcon={<SaveIcon />}>
                      &#8198;&#8198; ویرایش</Button>
                  ) : (
                    <Button onClick={handleProductMaker} variant="contained" color="secondary" className={classes.button} startIcon={<SaveIcon />}>
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

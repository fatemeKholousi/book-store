import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AiOutlinePlusCircle, AiFillSave, AiFillCloseCircle } from "react-icons/ai"
import { FormControl, FormHelperText, Input, TextField, InputLabel, Select, ButtonGroup, Button, Typography } from '@material-ui/core';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper, border: '2px solid #000', boxShadow: theme.shadows[5], padding: theme.spacing(2, 4, 3),
  },
}));
let newProduct = {}
export default function TransitionsModal() {
  const save = (event) => {
    event.preventDefault();
    console.log(event.target.title.value)          // or directly
  }
  const classes = useStyles();
  const [categories, setCategories] = useState([])
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const addProduct = (obj) => {
    axios.post('http://localhost:5000/products/', obj)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  const handleProductMaker = (e) => {
    // e.preventDefault();
    newProduct = {
      id: Math.floor(Math.random() * 1000000000),
      title, image, description
    };
    console.log(newProduct)
    addProduct(newProduct)
  }


  // console.log(newProduct)
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
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //for select genre page
  // const [state, setState] = useState({ name: 'he', age: 2 });
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   setSelect({
  //     ...elect,
  //     [name]: event.target.value,
  //   });
  // };

  return (
    <div>
      <Button variant="contained" color="secondary" iconStart={<AiOutlinePlusCircle />} onClick={handleOpen} style={{ position: 'absolute', left: '50px', top: '250px' }}>
        افزودن کتاب
      </Button>
      <Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <AiFillCloseCircle onClick={handleClose} size={32} style={{ float: 'left', fill: 'gray' }} />
            <h2 id="transition-modal-title">افزودن / ویرایش کالا</h2>
            <p id="transition-modal-description">لطفا قبل از خروج حتما دکمه ذخیره را فشار دهید</p>

            <form >
              <TextField required id="inputImg" label="آدرس عکس" value={image} onChange={(e) => setImage(e.target.value)} fullWidth />
              {/* <Select style={{ margin: "20px 0" }} onChange={handleChange} inputProps={{ name: 'age', id: 'filled-age-native-simple', }} >
                <option value={10} >دسته بندی...</option>
                {categories.map(v =>
                  <option value={10}>{v}</option>
                )}
              </Select> */}
              <TextField required id="inputProductName" label="نام کالا" name="title" fullWidth
                value={title} onChange={(e) => setTitle(e.target.value)} />


              {/* <TextField required multiline rows={3} id="inputImg" label="توضیحات" onChange={console.log('changed')} inputProps={console.log('no')} /> */}

              <Typography>توضیحات</Typography>
              <textarea id="w3review" name="w3review" rows="4" cols="50"
                value={description} onChange={(e) => setDescription(e.target.value)} />
              <ButtonGroup>
                <Button onClick={handleProductMaker} variant="contained" color="secondary" className={classes.button} startIcon={<SaveIcon />}>
                  &#8198;&#8198; ذخیره</Button>
              </ButtonGroup>
            </form>
          </div>

        </Fade>
      </Modal>
    </div>
  );
}

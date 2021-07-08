import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { ButtonDefault, ButtonXIcon } from '../Components/Button'
import {AiOutlinePlusCircle, AiFillSave, AiFillCloseCircle} from "react-icons/ai"
import { FormControl, FormHelperText ,Input,TextField,InputLabel,Select,ButtonGroup,Button ,Typography} from '@material-ui/core';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';

import Tabs from './tabPage'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {

const [categories, setCategories] = useState([])
//get all categories and set them on State
useEffect(() => {
    axios.get('http://localhost:5000/categories/')
        .then(res=>{
            setCategories(res.data)
        })
        .catch(err=> {
            console.log(err)
            })     
        }, [])
    //)____________________________it should go to redux________________________


    
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  
//for select genre page
const [state, setState] =useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  return (
    <div>

<Tabs/>


        <ButtonXIcon
        label="افزودن کالا"
        icon={<AiOutlinePlusCircle/>}
        bgColorCode="#00b2ff"  
        handleClick={handleOpen}    
       />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>

          <AiFillCloseCircle onClick={handleClose} size={32} style={{float:'left' ,fill: 'gray' }} />

            <h2 id="transition-modal-title">افزودن / ویرایش کالا</h2>
            <p id="transition-modal-description">لطفا قبل از خروج حتما دکمه ذخیره را فشار دهید</p>

            <FormControl>


            <TextField required id="standard-required" label="آدرس عکس"  />
            <TextField required id="standard-required" label="نام کالا" />

            <Select
            style={{margin:"20px 0"}}
            native
            value={state.age}
            onChange={handleChange}
            inputProps={{
                name: 'age',
                id: 'filled-age-native-simple',
            }} >
            <option value={10} >دسته بندی...</option>
            {categories.map(v=>
                <option value={10}>{v}</option>
            )}
        </Select>
           
            <Typography>توضیحات</Typography>
            <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>

            <ButtonGroup>
            <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
            >
           &#8198;&#8198; ذخیره
            </Button>
            </ButtonGroup>
       </FormControl>
          </div>

        </Fade>
      </Modal>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import { AiOutlinePlusCircle, AiFillSave, AiFillEdit, AiFillCloseCircle, AiOutlineEdit } from "react-icons/ai"
// import { FormControl, TextField, Select, ButtonGroup, Button, Typography, MenuItem, Box, InputLabel } from '@material-ui/core';
// import axios from 'axios';
// import SaveIcon from '@material-ui/icons/Save';
// import { addBook, updateBook, loadOneBook, getAll, loadBooks, getBookById, getChoosenBook } from '../../store/books'
// import { useSelector, useDispatch } from 'react-redux';
// import { loadCategories } from '../../store/category'

// const useStyles = makeStyles((theme) => ({
//     saveButton: {
//         padding: '10px 30px', backgroundColor: '#2a3eb1',
//         color: 'white', whiteSpace: 'noWrap', marginBottom: '10px',
//         '&:hover': { backgroundColor: '#1565c0' }
//     },
//     modal: {
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//     },
//     closeIcon: { float: 'left', fill: 'gray' },
// }))

// function bookModal({ id_from_props, modal_performance }) {

//     //open & close the modal
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => { setOpen(true) };
//     const handleClose = () => { setOpen(false) };

//     const dispatch = useDispatch()
//     const classes = useStyles();
//     // ....................................upload image..........................................
//     const [image, setImage] = useState('')

//     const uploadImage = async (e) => {
//         const file = e.target.files[0]
//         const base64 = await convertBase64(file)
//         setImage(base64)
//     }
//     const convertBase64 = (file) => {
//         return new Promise((resolve, reject) => {
//             const fileReader = new FileReader()
//             fileReader.readAsDataURL(file)

//             fileReader.onload = (() => {
//                 resolve(fileReader.result)
//             })

//             fileReader.onerror = ((error) => { reject(error) })
//         })
//     }
//     // ..........................................................................................

//     return (
//         <div>
//             {/*  BUTTON CHOOSER */}
//             {modal_performance === 'save'
//                 ? (<Box display="flex" flexDirection="row-reverse">  <Button onClick={handleOpen} className={classes.saveButton} variant="outlined" startIcon={<AiOutlinePlusCircle />}  >
//                     افزودن کتاب</Button ></Box>)
//                 : (<AiFillEdit size='20' />)}

//             {/* MODAL */}
//             {<Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
//                 BackdropProps={{ timeout: 500, }}>
//                 <Fade in={open}>
//                     <div className={classes.paper}>
//                         <AiFillCloseCircle onClick={handleClose} size={32} className={classes.closeIcon} />
//                         <h2 id="transition-modal-title">افزودن / ویرایش کالا</h2>
//                         <p id="transition-modal-description">لطفا قبل از خروج حتما دکمه ذخیره را فشار دهید</p>

//                         {/* FORM */}
//                         <FormControl >

//                             <input type='file' accept="image/png, image/jpeg" onChange={e => uploadImage(e)} />
//                             <img src={image} width='100px' height='100PX' />


//                             <Typography style={{ marginTop: '20px' }}>ژانر</Typography>
//                             <Select fullWidth value={category} onChange={(e) => setCategory(e.target.selected)} >
//                                 {categoryList.map(v => <MenuItem value={v}> {v}</MenuItem>)}
//                             </Select>







//                         </FormControl>
//                     </div>
//                 </Fade>
//             </Modal>}

//         </div>
//     )
// }

// export default bookModal

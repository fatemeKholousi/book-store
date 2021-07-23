import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addBook, updateBook, loadOneBook, getAll, loadBooks, getBookById } from '../../store/books'

export function Edit({ id }) {
    const dispatch = useDispatch()
    dispatch(getBookById(id))
    const book = useSelector(state => state.entities.books.item)
    console.log(book)
    // setProductForEdit(res.data)
    // setImage(productForEdit.image)
    // setTitle(productForEdit.title)
    // setPrice(productForEdit.price)
    // setStock(productForEdit.stock)
    // setDescription(productForEdit.description)
    // setCategory(productForEdit.category)
    // handleOpen()


}



export default Edit

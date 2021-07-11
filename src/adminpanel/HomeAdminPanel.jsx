import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './addmodal'
import DataFetching, { getAllProducts } from '../api/DataFetching'
import Tabs from './tabPage'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import ProductionManagment from './ProductionManagment'
function HomeAdminPanel(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    getAllProducts().then(items => { setData(items) })
  }, [])

  return (
    <div>


      <Tabs />
    </div >
  )
}

export default HomeAdminPanel


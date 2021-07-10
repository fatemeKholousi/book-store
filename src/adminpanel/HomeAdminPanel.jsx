import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './addmodal'
import DataFetching, { getAllProducts } from '../api/DataFetching'
import Tabs from './tabPage'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import ProductionManagment from './ProductionManagment'
function HomeAdminPanel() {
  const [data, setData] = useState([])

  useEffect(() => {
    getAllProducts().then(items => { setData(items) })
  }, [])

  return (
    <div>
      <Tabs />
      {/* <table>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>  <Add /> </td></tr>
        <tr>
          <td>تصویر</td>
          <td>عنوان</td>
          <td>جانر</td>
          <td>ویرایش / حذف</td>
        </tr>
        {
          data.map(row => (
            <tr>
              <td><img src={row.image} alt="img" width="100px" /></td>
              <td>{row.title}</td>
              <td>{row.category}</td>
              <td><AiFillDelete size='30' /><AiFillEdit size='35' /> </td>
            </tr>
          ))
        }

      </table> */}
    </div >
  )
}

export default HomeAdminPanel


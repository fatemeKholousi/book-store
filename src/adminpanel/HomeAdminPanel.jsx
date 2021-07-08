import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './addmodal'
import DataFetching, { getAllProducts } from '../api/DataFetching'

function HomeAdminPanel() {
  const [data, setData] = useState([])

  useEffect(() => {
    getAllProducts().then(items => { setData(items) })
  }, [])
  console.log(data)

  return (
    <div>
      <Add />
      <table>
        <tr>Apink</tr>

        {
          data.map(row => (
            <tr>
              <td>{row.title}</td>
              <td>{row.price}</td>
            </tr>
          ))
        }

      </table>
    </div>
  )
}

export default HomeAdminPanel


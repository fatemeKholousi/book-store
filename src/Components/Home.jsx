import React, { useEffect } from 'react'
import MenuAppBar from "./MenuAppBar";
import Cards from "./Card/Cards";
import { ButtonDefault, ButtonXIcon } from './Button';
import { ButtonGroup } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import * as Request from '../api/DataFetching'
function Home() {
  useEffect(() => {
    //   Request.addProduct({
    //     "id": 50,
    // "title": "هری پاتر و انجمن ققنوس",
    // "price": 39.99,
    // "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    // "category": "women's clothing",
    // "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
    // })
  }, [])
  return (
    <div>


    </div>
  )
}

export default Home

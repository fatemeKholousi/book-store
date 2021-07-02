import React from 'react'
import MenuAppBar from "./MenuAppBar";
import Cards from "./Card/Cards";
import { ButtonDefault,ButtonXIcon } from './Button';
import { ButtonGroup } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

function Home() {
    return (
        <div>
      <MenuAppBar/>
      <ButtonGroup>
       <ButtonXIcon
        label='سبدخرید من'
        icon={<AiOutlineShoppingCart />}
        bgColorCode='#FFC300'  
        />
       <Link to='loginpageforadmins'>
          <ButtonDefault
          label='ورود به پنل مدیریت'
          bgColorCode='#FFC300'/>
         </Link>
       </ButtonGroup>

      <h1 style={{ float: "right" }}>گروهبندی</h1>
      <Cards />
      <h1 style={{ float: "right" }}>گروهبندی</h1>
      <Cards />

        </div>
    )
}

export default Home

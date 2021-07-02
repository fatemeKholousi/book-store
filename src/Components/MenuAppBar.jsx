import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonDefault,ButtonXIcon } from './Button';
import { ButtonGroup } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar({button}) {
  return (
    <div >
    
      <AppBar position="sticky" style={{backgroundColor:'#2f5281'}} justify="space-between">
      
        <Toolbar display='flex'>
        Logo
        {/* <ButtonGroup>
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
       </ButtonGroup> */}

        </Toolbar>
      </AppBar>
    </div>
  );
}

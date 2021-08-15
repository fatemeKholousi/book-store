import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, IconButton, Menu, Button, Box, CssBaseline, Divider } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useHistory } from "react-router-dom";
import LogoAndText from './LogoAndText';
import { isLoggedIn, IsLoggedOut } from '../../utils/auth';
import CartButton, { CartButton_phone } from './CartButton';
import { LoginButton, LoginButton_phone } from './LoginButton';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: 'relative',
    zIndex: theme.zIndex.drawer + 1,
  },
  search: {
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    // color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'flex',


    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  adminpanelButton: {
    backgroundColor: '#ede5d4', paddingRight: '10px', width: '100px'
  }
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  let history = useHistory()
  const classes = useStyles();

  const handleMoveToLogin = () => {

    history.push('/login')

  }
  const handleMoveToAdminPanel = () => {
    history.push('/adminpanel')
  }

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => { setAnchorEl(event.currentTarget) };
  const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null) };
  const handleMobileMenuOpen = (event) => { setMobileMoreAnchorEl(event.currentTarget) };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  // MOBILE MENU VERSION
  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId} keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <CartButton_phone />
      {isLoggedIn()
        ? (<>
          <LoginButton_phone handleClick={IsLoggedOut} label="خروج" />
          <Divider />
          <div>
            <IconButton color="inherit" onClick={() => history.push('/adminpanel')} >
              <Typography variant='h6'>
                ادمین پنل
              </Typography>
            </IconButton>
          </div>

        </>)
        : (<LoginButton_phone handleClick={() => history.push('/login')} label="ورود " />)
      }
    </Menu >
  );


  return (
    <div className={classes.grow} >
      <Box style={{
        position: 'fixed',
        width: '100%',
        backgroundColor: '#e9ddb7'
      }} >
        < Toolbar >
          <LogoAndText />
          <div className={classes.grow} />

          {/* DESKTOP VERSION */}
          <div className={classes.sectionDesktop}>
            <Box display="flex" >
              <CartButton />
              {isLoggedIn()
                ? (<>
                  <Button
                    onClick={handleMoveToAdminPanel}
                    className={classes.adminpanelButton} >
                    ادمین پنل
                  </Button>

                  <LoginButton label='خروج' handleClick={IsLoggedOut} />
                </>)
                : (
                  <LoginButton label='ورود به پنل مدیریت' handleClick={handleMoveToLogin} />
                )
              }
            </Box>
          </div>

          {/* PHONE PART */}
          <div className={classes.sectionMobile} >
            <IconButton aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen}
              color="inherit" >
              <MoreIcon />
            </IconButton>
          </div>

        </Toolbar >
        <CssBaseline />
      </Box >
      {renderMobileMenu}
    </div >
  );
}

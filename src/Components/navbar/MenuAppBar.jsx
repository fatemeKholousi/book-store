import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, InputBase, Menu } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useHistory } from "react-router-dom";

import logo from '../../img/storyshoplogo2.png';
import LogoAndText from './LogoAndText';
import { isLoggedIn, isLoggedOut } from '../../utils/auth';
import CartButton, { CartButton_phone } from './CartButton';
import { LoginButton, LoginButton_phone } from './LoginButton';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
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
    color: 'inherit',
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
  btn: {
    backgroundColor: 'red'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const classes = useStyles();
  let history = useHistory()
  const handleMoveToLogin = () => { history.push('/login') }

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
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
        ? (<LoginButton_phone handleClick={isLoggedOut} label="خروج" />)
        : (<LoginButton_phone handleClick={handleMoveToLogin} label="ورود " />)}
    </Menu>
  );

  return (
    <div className={classes.grow} style={{ marginBottom: '150px' }}>

      <AppBar color='primary'>
        <Toolbar>

          <LogoAndText logo={logo} title='کتابفروشی' />

          <div className={classes.search}> <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
          </div>

          <div className={classes.grow} />

          {/* DESKTOP VERSION */}
          <div className={classes.sectionDesktop}>

            <CartButton />

            <IconButton
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              {isLoggedIn()
                ? (<LoginButton label='خروج' handleClick={isLoggedOut} />)
                : (<LoginButton label='ورود به پنل مدیریت' handleClick={handleMoveToLogin} />)
              }
            </IconButton>

          </div>

          {/* PHONE PART */}
          <div className={classes.sectionMobile} >
            <IconButton aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit" >
              <MoreIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div >
  );
}

import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, MenuItem, Menu, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { isLoggedIn, isLoggedOut } from '../utils/auth';
import { NavLink, useHistory } from "react-router-dom";
import logo from '../img/storyshoplogo2.png';
import CartButton from './CartButton';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
  let history = useHistory()
  const handleMoveToLogin = () => { history.push('/login') }

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => { setAnchorEl(event.currentTarget) };

  const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null) };

  const handleMobileMenuOpen = (event) => { setMobileMoreAnchorEl(event.currentTarget) };

  const menuId = 'primary-search-account-menu';

  // mobile version
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      {/* Cart Button*/}
      <CartButton />

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
        </IconButton>
        <NavLink to='./login'> <p>پنل مدیریت</p></NavLink>
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow} style={{ marginBottom: '150px' }}>

      <AppBar color='primary'>
        <Toolbar>
          {/* logo is here */}
          <IconButton edge="start" className={classes.menuButton}>
            <img src={logo} alt="logo" width="100px" />
          </IconButton>

          <Typography className={classes.title} variant="h5" noWrap> کتابفروشی آنلاین</Typography>

          <div className={classes.search}> <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
          </div>

          <div className={classes.grow} />
          {/* on desktop */}
          <div className={classes.sectionDesktop}  >
            {/* Cart Button */}
            <CartButton />
            {/* Login Logout Button */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">

              {isLoggedIn() ?
                (<Button onClick={isLoggedOut} variant="contained" color="primary" endIcon={<AccountCircle />}>
                  خروج از پنل مدیریت</Button>)
                :
                (<Button onClick={handleMoveToLogin} variant="contained" color="primary" endIcon={<AccountCircle />}>
                  ورود به  پنل مدیریت</Button>)
              }

            </IconButton>
          </div>
          {/* on mobile */}
          <div className={classes.sectionMobile} >
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div >
  );
}

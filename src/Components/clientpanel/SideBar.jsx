import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../store/category';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../../style/style.css'

const useStyles = makeStyles((theme) => ({
    productsName: {
        color: 'black',
        textDecoration: 'inherit',
        '&:visited': {
            textDecoration: 'none'
        },
        '&:link': { textDecoration: 'none' },
        '&:active': {
            textDecoration: 'none'
        },
        '&:hover': {
            textDecoration: 'none'
        },
        '&:focus': {
            textDecoration: 'none'

        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },

    drawer: {
        flexShrink: 0,
    },

    drawerContainer: {
        overflow: 'auto',
        paddingTop: '40px'
    },
    content: {
        flexGrow: 1,
    },
}));

export default function ClippedDrawer() {

    const classes = useStyles();
    const books = useSelector(state => state.entities.books.list)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(loadCategories()) }, [])
    const categories = useSelector(state => state.entities.category.list)


    return (
        <div className='drawer'>


            <Drawer
                className={classes.drawer} variant="permanent" >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <img src="https://s18.picofile.com/file/8438466892/storyshoplogo4.png" alt="" height="100px" />

                    <Divider />
                    <List>
                        {categories.map((category, index) => (<div>
                            <ListItem button key={index}>
                                <ListItemIcon>{index % 2 === 0 ? <MenuBookIcon /> : <ImportContactsIcon />}</ListItemIcon>
                                <ListItemText primary={category} />
                            </ListItem>
                            <span >
                                {books.map((text, index) => {
                                    if (text.category === category)
                                        return (
                                            <ListItem button key={text.id}>
                                                <Link className={classes.productsName} to={{ pathname: `/products/ ${text.title}`, state: { item: text, category: category } }}>
                                                    <ListItemText primary={text.title} />
                                                </Link>
                                            </ListItem>)
                                }

                                )}
                            </span>
                            <Divider />
                        </div>))}

                        <Divider />
                    </List>

                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <Typography paragraph>

                </Typography>
                <Typography paragraph>

                </Typography>
            </main>
        </div >
    );
}

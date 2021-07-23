import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { loadCategories } from '../../store/category';
import { Link } from 'react-router-dom'

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        // width: drawerWidth,
        flexShrink: 0,
    },
    // drawerPaper: {
    //     width: drawerWidth,
    // },
    drawerContainer: {
        overflow: 'auto',
        paddingTop: '40px'
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
    },
}));

export default function ClippedDrawer() {
    const classes = useStyles();
    const books = useSelector(state => state.entities.books.list)

    const dispatch = useDispatch()
    useEffect(() => { dispatch(loadCategories()) }, [])
    const categories = useSelector(state => state.entities.category.list)


    return (
        <div className={classes.root}>
            {/* <CssBaseline /> */}
            <Drawer
                className={classes.drawer} variant="permanent" >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <img src="https://s18.picofile.com/file/8438466892/storyshoplogo4.png" alt="" height="100px" />

                    <Divider />
                    <List>
                        {categories.map((category, index) => (
                            <div>
                                <ListItem button key={index}>
                                    <ListItemIcon>{index % 2 === 0 ? <MenuBookIcon /> : <ImportContactsIcon />}</ListItemIcon>
                                    <ListItemText primary={category} />
                                </ListItem>

                                <>
                                    {books.map((text, index) => {
                                        if (text.category === category)
                                            return (
                                                <ListItem button key={text.id}>

                                                    <Link to={{ pathname: `/products/ ${text.title}`, state: { item: text, category: category } }}>
                                                        <ListItemText primary={text.title} />
                                                    </Link>
                                                </ListItem>)
                                    }

                                    )}
                                </>
                                <Divider />
                            </div>
                        ))}

                        <Divider />
                    </List>

                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main>
        </div >
    );
}

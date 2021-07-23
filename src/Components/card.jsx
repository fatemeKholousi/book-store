import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '2',
        width: '150px'
    },
    cover: {
        flex: '1',
        width: 200,
        height: 300
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },

}));

export default function MediaControlCard({ title, image, price, description }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        {price}تومان
                    </Typography>

                </CardContent>

                <div className={classes.controls}>
                    جزئیات این محصول...
                </div>
            </div>

            <CardMedia

                className={classes.cover}
                image={image} style={{ height: '14em', width: '150px', margin: '1em' }} title="Live from space album cover" />
        </Card>
    );
}

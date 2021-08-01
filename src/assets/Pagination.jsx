import { SpeakerNotes } from '@material-ui/icons'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: { display: 'flex', flexDirection: ' row-reverse', },
    paginationBox: { margin: '20px 5px', padding: '0 8px', border: '1px solid gray', outline: 'none', fontSize: '20px' },
})


function Pagination({ postsPerPage, totalPosts, paginate }) {
    let classes = useStyles()
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <span className={classes.root} >
            {pageNumbers.map(number =>
                <Button variant="contained" color="primary" className={classes.paginationBox} onClick={() => paginate(number)}>
                    {number}
                </Button>

            )}
        </span>
    )
}

export default Pagination

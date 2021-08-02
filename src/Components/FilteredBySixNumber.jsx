import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from './card'
import { Link } from 'react-router-dom'

function FilteredBySixNumber({ filteredBooksBySixNumber }) {
    return (
        <div>
            {filteredBooksBySixNumber.map(item => {
                return (
                    < Grid item md={2} sm={4} xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to={{ pathname: `/products/ ${item.title}`, state: { item: item } }}
                        >
                            <Card price={item.price} image={item.image} title={item.title} />
                        </Link>
                    </Grid>
                )
            })}
        </div>
    )
}

export default FilteredBySixNumber

import { Typography, Grid } from '@mui/material'
import ProductListItem from './ProductListItem'
import React from 'react'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                style={{
                    margin: '25px 0',
                    textTransform: 'uppercase',
                }}
            >
                Products List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                <Grid item>
                    <ProductListItem />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList

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
                    <ProductListItem
                        name="iPhone X"
                        description="This is iPhone X"
                        type="phone"
                        capacity={128}
                        price={500}
                    />
                </Grid>
                <Grid item>
                    <ProductListItem
                        name="iPhone X"
                        description="This is iPhone X"
                        type="phone"
                        capacity={128}
                        price={500}
                    />
                </Grid>
                <Grid item>
                    <ProductListItem
                        name="iPhone X"
                        description="This is iPhone X"
                        type="phone"
                        capacity={128}
                        price={500}
                    />
                </Grid>
                <Grid item>
                    <ProductListItem
                        name="iPhone X"
                        description="This is iPhone X"
                        type="phone"
                        capacity={128}
                        price={500}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList

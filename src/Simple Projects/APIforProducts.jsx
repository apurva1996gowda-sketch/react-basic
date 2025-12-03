import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproducts } from '../Redux/productSlice'
import { AppBar, Box, Button, Card, CardContent, CircularProgress, Grid, Toolbar, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { addtoCart, removefromCart } from '../Redux/cartSlice';

const APIforProducts = () => {
    const { products, loading } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchproducts())
    }, [])
    console.log(products.data)
    console.log(loading)
    
    const cart=useSelector((state)=>state.cart.cart)
    const cartItem=(id)=>cart.some((item)=>item.id == id)
    if (loading)
        return <CircularProgress />
    return (
        <>
            <AppBar sx={{ position: 'static' }}>
                <Toolbar sx={{ fontSize: '30px' }}>Products</Toolbar>
            </AppBar><br />

            <Box>
                <Grid container spacing={2}>
                    {products?.data?.map((product) => (
                        <Grid size={3} sx={{ height: 400 }} >
                            <Card sx={{ height: '100%', padding: 0 }}>
                                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 1, padding: 0 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f7f7f7' }}>
                                        <img src={product?.image} alt='product' style={{ width: '100px', height: '200px' }} />
                                    </Box>
                                    <Typography sx={{ height: '80px', marginLeft: '10px', fontWeight: '600' }}>{product?.title}</Typography>
                                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, marginLeft: '10px' }}>{product?.rating?.rate}<StarIcon sx={{ color: 'yellow' }} /> {`(${product?.rating?.count})`}</Typography>
                                    <Typography sx={{ fontWeight: '700', fontSize: '18px', marginLeft: '10px' }}>$ {product?.price}</Typography>
                                    <Box sx={{display:'flex',flexDirection:'column'}}>
                                        {cartItem(product.id) ? 
                                        <Button variant='contained' onClick={() => dispatch(removefromCart(product.id))} sx={{ width: 200, backgroundColor: '#ff2414ff', color: 'black', borderRadius: 5, marginLeft: '10px' }}>Remove from Cart</Button>
                                        :
                                        <Button variant='contained' onClick={() => dispatch(addtoCart(product))} sx={{ width: 150, backgroundColor: '#ffd814', color: 'black', borderRadius: 5, marginLeft: '10px' }}>Add to Cart</Button>
                                        }
                                        </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default APIforProducts

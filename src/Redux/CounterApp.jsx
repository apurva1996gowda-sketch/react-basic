import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDecrease, handleIncrease } from './CounterSlice';
import { handlemultiply } from './MultiplierSlice';
import { fetchproducts } from './productSlice';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

const CounterAppnew = () => {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch();

    const multiply=useSelector((state)=>state.multiplier.value)

    const products=useSelector((state)=>state.products.products)

    useEffect(()=>{
        dispatch(fetchproducts())
    },[])
    console.log(products.data)

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(handleIncrease())}>Increase</button>
    <button onClick={()=>dispatch(handleDecrease())}>Decrease</button>
    <h1>{multiply}</h1>
    <button onClick={()=>dispatch(handlemultiply())}>Double</button>
    <h1>Products</h1>
    <Grid container>
    {products?.data?.map((data1)=>{
        return(
            <Grid size={3} sx={{height:200}} key={data1.id}>
                <Card>
                    <CardHeader title={data1?.title} sx={{height:'20%'}}/>
                    <CardContent>
                        <Typography variant='h5'>$ {data1?.price}</Typography>

                    </CardContent>
                </Card>

            </Grid>

        // <div key={data1?.id}>
        //     <p>{data1?.title}</p>
        //     <p>{data1?.price} </p>
        // </div>
        )
    })}
    </Grid>
    
      
    </>
  )
}

export default CounterAppnew

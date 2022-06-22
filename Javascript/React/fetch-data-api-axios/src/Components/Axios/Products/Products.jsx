import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts, deleteProducts } from '../Redux/prodReducer'
import GridProduct from './GridProduct'

const produrl = 'https://fakestoreapi.com/products'

const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(deleteProducts)
        axios.get(produrl).then(res => dispatch(fetchProducts(res.data)))
    }, [])

    return (

        <div className='flex flex-col'>
            <h2 className='bg-blue-400 py-1 my-4 mx-2 rounded text-center text-white'>
                Products
            </h2>
            <div className='grid grid-cols-2 gap-2 mx-5 md:grid-cols-3 lg:grid-cols-4'>
                {
                    products ? products.map((product) => (
                        <GridProduct product={product} key={product.id} />
                    )) : 'Loading'
                }
            </div>
        </div>
    )
}

export default Products
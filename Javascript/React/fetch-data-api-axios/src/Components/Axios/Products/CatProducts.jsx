import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import GridProduct from './GridProduct'
import { fetchProductCategory, deleteCatProducts } from '../Redux/catReducer'

const CatProducts = () => {

    const params = useParams()
    let { category } = params

    const dispatch = useDispatch()
    const products = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(deleteCatProducts)
        axios.get(`https://fakestoreapi.com/products/category/${category}`).then(res => {
            dispatch(fetchProductCategory(res.data))
        })
    }, [category])

    return (
        <div className='flex flex-col'>

            <h2 className='bg-blue-400 py-1 my-4 mx-2 rounded text-center text-white'  >Products</h2>
            <div className='grid grid-cols-2 gap-2 mx-5 md:grid-cols-3 lg:grid-cols-4'>
                {products ?
                    products.map(product => (
                        <GridProduct key={product.id} product={product} />))
                    : 'loading'
                }
            </div>
        </div>
    )
}

export default CatProducts
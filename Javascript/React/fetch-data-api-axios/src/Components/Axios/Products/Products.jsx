import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Product from './Product'
import Sidebar from './Sidebar'

const produrl = 'https://fakestoreapi.com/products'
const caturl = 'https://fakestoreapi.com/products/categories'

const Products = () => {

    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        axios.get(produrl)
            .then(res => setProducts(res.data))

    }, [])

    useEffect(() => {
        axios.get(caturl).then(res => setCategories(res.data))
    }, [])

    const filtrData = (category) => {
        const catresult = categories.filter((curdata) => {
            return curdata.category === category
        })
        setProducts(catresult)
    }

    return (
        <div className='flex' >
           
            <Sidebar categories={categories} filtrData={filtrData} />
            
            <div className='flex flex-col'>
                <h2 className='bg-blue-400 py-1 my-4 mx-2 rounded text-center text-white hover:bg-orange-400' >Products</h2>

                <div className='grid grid-cols-4 gap-5 mx-10'>
                    {products ?
                        products.map(product => (
                            <Product filtrData={filtrData} key={product.id} product={product} />))
                        : 'loading'}
                </div>
            </div>
        </div>
    )
}

export default Products
import React, { useState, useEffect } from 'react'
// import axios from 'axios'

import Product from './Product'
import Sidebar from './Sidebar'

const produrl = 'https://fakestoreapi.com/products'
const caturl = 'https://fakestoreapi.com/products/categories'

const Products = ({ handleAddToCart }) => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const [filtered, setFiltered] = useState('')

    const fetchProducts = async () => {
        const req = await fetch(produrl);
        const products = await req.json();
        setProducts(products);
    }

    const fetchCategories = async () => {
        const req = await fetch(caturl);
        const categories = await req.json();
        setCategories(categories);
    }

    useEffect(() => {
        fetchProducts()
        fetchCategories();
    }, []);

    const handleFilter = (cat) => {
        setFiltered(cat)
    }

    const filteredProducts = products.filter(product =>
        product.category.includes(filtered)
    );



    // useEffect(() => {
    //     axios.get(produrl)
    //         .then(res => setProducts(res.data))
    // }, [])
    // useEffect(() => {
    //     axios.get(caturl)
    //         .then(res => setCategories(res.data))
    // }, [])

    return (
        <div className='flex' >

            <Sidebar categories={categories} handleFilter={handleFilter} />

            <div className='flex flex-col'>
                <h2 className='bg-blue-400 py-1 my-4 mx-2 rounded text-center text-white'  >Products</h2>

                <div className='grid grid-cols-2 gap-2 mx-5 md:grid-cols-3 lg:grid-cols-4'>
                    {filteredProducts ?
                        filteredProducts.map(product => (
                            <Product key={product.id} id={product.id} name={product.name} image={product.image} rating={product.rating.rate} price={product.price} category={product.category} handleAddToCart={handleAddToCart} />))
                        : 'loading'
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
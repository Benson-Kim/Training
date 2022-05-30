import React from 'react'
import ProductSidebar from './ProductSidebar'
import ProductList from './ProductsList'

const ProductView = () => {
    return (
        <div className='flex justify-between' >
            <ProductSidebar />
            <ProductList />
        </div>
    )
}

export default ProductView
import React from 'react'
import ProductFooter from './ProductFooter'
import ProductInformation from './ProductInformation'
import ProductPage from './ProductPage'

const Product = () => {
    return (
        <div>
            <article>
                <ProductPage />
            </article>
            <article className='flex items-center justify-center gap-5 text-slate-500 text-base'>
                <ProductInformation />
            </article>
            <div class="w-full mt-4 mx-6 border-t border-slate-400"></div>
            <ProductFooter />
        </div>
    )
}

export default Product
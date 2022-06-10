import React from 'react'
import {BsCart } from "react-icons/bs"


const Product = ({ product, handleAddToCart }) => {
  return (
      
      <div className='border p-4 flex flex-col items-center justify-between rounded-md bg-slate-100 hover:shadow-sm'>
          <img src={product.image} alt={product.title} className='w-max h-56 mb-2 object-contain'  /> 
          <span className='self-start' >
              <h4>{ product.title.slice(0,30)}</h4>
              <h3 className='capitalize font-semibold py-2 ' >{ product.category}</h3>
          </span>
          <span className='flex justify-between w-full' >
              <p className='' >{product.rating.rate}</p>
              <p>${ product.price}</p>
          </span>
          <button
              onClick={() => handleAddToCart(product)}
              className='flex justify-center gap-3 items-center bg-blue-500 py-2 mt-2 w-full text-white rounded font-semibold hover:bg-blue-700 shadow-md' >
              <BsCart />
              <h2>Add to Cart</h2>
          </button>
      </div>
      
  )
}

export default Product
import React from 'react'

const Product = ({product}) => {
  return (
      
      <div className='border p-4 flex flex-col items-center justify-between rounded-md bg-slate-100 hover:shadow-sm'>
          <img src={product.image} alt={product.title} className='w-64 h-56 mb-2 object-contain'  /> 
          <span className='self-start' >
              <h4>{ product.title}</h4>
              <h3 className='capitalize font-semibold pb-2 ' >{ product.category}</h3>
          </span>
          <span className='self-start flex ' >
              <p className='mr-44' >{product.rating.rate}</p>
              <p>${ product.price}</p>
          </span>
          <button className='bg-blue-500 py-2 mt-2 w-full text-white rounded font-semibold hover:bg-blue-700 shadow-md' >View Details</button>
      </div>
      
  )
}

export default Product
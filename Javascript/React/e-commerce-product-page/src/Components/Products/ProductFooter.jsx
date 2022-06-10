import React from 'react'

const ProductFooter = () => {
  return (
      <article className='my-4 flex items-center justify-center gap-8'>
          <span className='text-sm flex gap-2'>
              <h2 className='text-slate-600'>Ref:</h2>
              <p className='text-blue-400'>124495</p>
          </span>
          <span className='text-sm flex gap-2'>
              <h2 className='text-slate-600'>Category:</h2>
              <p className='text-blue-400'>Shoes</p>
          </span>
          <span className='text-sm flex gap-2'>
              <h2 className='text-slate-600'>Tags:</h2>
              <p className='text-blue-400 lowercase'>Leather, women, adidas, shoes, sneakers</p>
          </span>
      </article>
  )
}

export default ProductFooter
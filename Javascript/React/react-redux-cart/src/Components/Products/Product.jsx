import React from 'react'
import { BsCart } from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { cartActions } from '../../app/cart-slice'

const Product = ({ id, title, image, rating, price, category }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(
            cartActions.addToCart({
                id,
                title,
                image,
                rating,
                price,
                category
            })
        )
    }
    
    return (
        
    
        <div className='border p-4 flex flex-col items-center justify-between rounded-md bg-slate-100 hover:shadow-sm'>
            <img src={image} alt={title} className='w-max h-56 mb-2 object-contain' />
            <span className='self-start' >
                
                <h4>{title}</h4>
                <h3 className='capitalize font-semibold py-2 ' >{category}</h3>
            </span>
            <span className='flex justify-between w-full' >
                <p className='' >{rating.rate}</p>
                <p>${price}</p>
            </span>
            <button
                onClick={handleAddToCart}
                className='flex justify-center gap-3 items-center bg-blue-500 py-2 mt-2 w-full text-white rounded font-semibold hover:bg-blue-700 shadow-md' >
                <BsCart />
                <h2>Add to Cart</h2>
            </button>
        </div>

    )
}

export default Product
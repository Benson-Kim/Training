import React from 'react'
import CartDetails from './CartDetails'
import OrderSummary from './OrderSummary'

const Cart = ({ }) => {
    

    return (
        <div className='flex flex-col md:flex-row shadow-sm p-3 m-3 w-full '>
            <CartDetails  />
            <OrderSummary />
        </div>
    )
}

export default Cart
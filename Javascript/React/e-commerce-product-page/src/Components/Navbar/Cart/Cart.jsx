import React from 'react'
import CartDetails from './CartDetails'
import OrderSummary from './OrderSummary'

const Cart = () => {
    return (
        <div className='flex flex-wrap shadow-sm p-3 m-3 w-max'>
            <CartDetails />
            <OrderSummary />
        </div>
    )
}

export default Cart
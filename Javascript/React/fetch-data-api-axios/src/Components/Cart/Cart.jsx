import React, { useEffect, useState } from 'react'
import CartDetails from './CartDetails'
import OrderSummary from './OrderSummary'

const Cart = ({ cart, setCart, size, handleCartChange, setShow }) => {
    const [price, setPrice] = useState(0)

    const handlePrice = () => {
        let total = 0;
        cart.map((item) => (
            total += item.quantity * item.price
        ));
        setPrice(total)
    }

    useEffect(() => {
        handlePrice()
    })

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id)
        setCart(arr)
        handlePrice();
    }

    function roundToTwo(num) {
        return +(Math.round(num + "e+3") + "e-3");
    }

    return (
        <div className='flex flex-col md:flex-row shadow-sm p-3 m-3 w-full '>
            <CartDetails roundToTwo={roundToTwo} handleCartChange={handleCartChange} cart={cart} handleRemove={handleRemove} size={size} setShow={setShow}  />
            <OrderSummary roundToTwo={roundToTwo} handleCartChange={handleCartChange} cart={cart} handleRemove={handleRemove} size={size} price={price} />
        </div>
    )
}

export default Cart
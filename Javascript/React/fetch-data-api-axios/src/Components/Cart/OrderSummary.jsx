import React from 'react'

const OrderSummary = ({ roundToTwo, cart, size, price }) => {
    return (
        <div className='flex-none w-full md:w-72 bg-slate-100 px-6 pt-3 rounded-sm'>
            <div>
                <h2 className='font-bold text-slate-800' >Order Summary</h2>
            </div>
            <div className="w-full mt-4 border-t border-slate-400"></div>
            {cart.map((item) => (
            <article key={item.id}>
                <div className='flex justify-between items-center py-4 text-sm text-slate-800 font-semibold'>
                        <h2 className='uppercase'>items: {size}</h2>
                        <h2>${roundToTwo(price)}</h2>
                </div>
               
                <div >
                    <button type='submit' className='w-full uppercase py-2 mt-3 text-sm bg-orange-500 text-white rounded hover:bg-orange-600'>checkout</button>
                </div>

                </article>
            ))}
        </div>
    )
}

export default OrderSummary
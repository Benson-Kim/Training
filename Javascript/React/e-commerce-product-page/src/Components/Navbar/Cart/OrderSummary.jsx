import React from 'react'

const OrderSummary = () => {
    return (
        <div className='flex-none w-72 bg-slate-100 px-6 pt-3 pb-6 rounded-sm'>
            <div>
                <h2 className='font-bold text-slate-800' >Order Summary</h2>
            </div>
            <div class="w-full mt-4 border-t border-slate-400"></div>
            <article>
                <div className='flex justify-between items-center py-4 text-sm text-slate-800 font-semibold'>
                    <h2 className='uppercase'>items 3</h2>
                    <h2>$457.98</h2>
                </div>
                <div className="flex flex-col">
                    <h2 className='uppercase py-4 text-sm text-slate-800 font-semibold'>shipping</h2>

                    <button className="relative flex items-center bg-white focus:outline-none rounded group">
                            <p className='py-2 px-4 text-slate-500' >Delivery Costs</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white">
                            <ul className='text-left rounded-sm'>
                                <li className="px-4 py-1">Standard Delivery - $5.00</li>
                                <li className="px-4 py-1">Standard Delivery - $5.00</li>
                                <li className="px-4 py-1">Standard Delivery - $5.00</li>
                            </ul>
                        </div>
                    </button>
                </div>
                <div className="flex flex-col ">
                    <h2 className='uppercase py-4 text-sm text-slate-800 font-semibold'>promo code</h2>
                    <input type="text" placeholder='Enter your code' className='px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-0' />
                    <button type='submit' className='uppercase py-2 mt-3 w-20 text-sm bg-orange-500 text-white rounded hover:bg-orange-600'>apply</button>
                </div>
                <div class="w-full mt-4 border-t border-slate-400"></div>
                <div className='flex justify-between items-center py-4 text-sm text-slate-800 font-semibold'>
                    <h2 className='uppercase'>total cost</h2>
                    <h2>$457.98</h2>
                </div>
                <div >
                    <button type='submit' className='w-full uppercase py-2 mt-3 text-sm bg-blue-500 text-white rounded hover:bg-blue-600'>checkout</button>
                </div>

            </article>
        </div>
    )
}

export default OrderSummary
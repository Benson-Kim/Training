import React from 'react'

const CartDetails = () => {
    return (
        <div className='flex-none w-[480px]  px-6 pt-3 pb-6 rounded-sm'>
            <div className='flex justify-between items-center capitalize font-bold text-slate-800'>
                <h2 className=''>shopping cart</h2>
                <h2>3 items</h2>
            </div>
            <div class="w-full mt-4 border-t border-slate-400"></div>
            <article>
                <div className='uppercase text-slate-500 flex flex-wrap justify-between text-sm font-semibold py-2'>
                    <h3>product details</h3>
                    <h3>quantity</h3>
                    <h3>price</h3>
                    <h3>total</h3>
                </div>
                <div className='grid grid-cols-6 my-3 mx-1'>
                    <article className='flex col-span-2'>
                        <div className='' >
                            <img src="https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='h-16 w-14 object-contain ' />
                        </div>
                        <div className='flex flex-col font-mono'>
                            <h2 className='pl-[10px]'>Fifa 19</h2>
                            <h3 className='text-orange-500 pl-[10px]'>PS4</h3>
                            <button className='text-slate-500 hover:text-slate-800' >Remove</button>
                        </div>
                    </article>
                    <div className='flex items-center col-span-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 cursor-pointer hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                        </svg>
                        <input type="text" className='text-center text-sm border border-blue-50 w-10 py-1 rounded text-slate-500 font-semibold focus:outline-none ' />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 cursor-pointer hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <h2 className='text-slate-700 font-semibold text-sm mt-[25px] text-center'>$44.00</h2>
                    <h2 className='text-slate-700 font-semibold text-sm mt-[25px] text-right'>$88.00</h2>
                </div>
            </article>
            <div>
                <button className='bg-blue-500 px-2 py-2 rounded text-white mt-2  hover:bg-blue-600 flex items-center text-sm' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className='ml-1' >Continue Shopping</span>
                </button>
            </div>
        </div>
    )
}

export default CartDetails
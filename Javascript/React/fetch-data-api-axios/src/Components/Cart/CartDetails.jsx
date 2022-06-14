import React from 'react'

const CartDetails = ({ roundToTwo, cart, size, handleCartChange, handleRemove, setShow }) => {

        return (
        <>
        <div className='flex-col w-max px-6 pt-3 pb-6 rounded-sm'>
            <div className='flex justify-between items-center capitalize font-bold text-slate-800'>
                <h2 className=''>shopping cart</h2>
                <h2>{size}</h2>
            </div>
            <div className="w-full mt-4 border-t border-slate-400"></div>
            <article>
                <div className='hidden uppercase text-slate-500 md:grid grid-cols-8 gap-10 text-sm font-semibold py-2'>
                    <h3 className='col-span-3'>product details</h3>
                    <h3 className='col-span-2 ml-10'>quantity</h3>
                    <h3>price</h3>
                    <h3>total</h3>
                    <h3>Action</h3>
                </div>
                {cart.map((item) => (
                    <div className='flex flex-col md:grid grid-cols-8 my-3 mx-1' key={item.id}>
                        <article className='flex col-span-3' >
                            <div className='' >
                                <img
                                    src={item.image} alt={item.title}
                                    className='h-16 w-14 object-contain ' />
                            </div>
                            <div className='flex flex-col '>
                                <h2 className='pl-[10px]'>{item.title.slice(0, 25)}</h2>
                                <h3 className='text-slate-400 pl-[10px] capitalize text-sm'>{item.category}</h3>    
                            </div>
                        </article>

                        <div className='flex items-center col-span-2 ml-10 '>
                            <button onClick={() => handleCartChange(item,-1)}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-6 cursor-pointer hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                </svg>
                            </button>

                            <button className='text-center text-sm border border-blue-50 w-10 py-4 bg-white rounded text-slate-500 font-semibold focus:outline-none '>
                                {item.quantity}
                            </button>

                            <button onClick={() => handleCartChange(item, 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 cursor-pointer hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                        </div>
                        <h2 className='text-slate-700 font-semibold text-sm mt-[25px] text-center ml-4'>${item.price}</h2>
                        <h2 className='text-slate-700 font-semibold text-sm mt-[25px] text-center ml-4'>${roundToTwo(item.quantity * item.price)}</h2>
                        <button
                            onClick={() => handleRemove(item.id)}
                            className='text-slate-500 hover:text-orange-500 ml- text-right' >Remove</button>
                    </div>
                ))}
            </article>
            <div>
                <button className='bg-blue-500 px-2 py-2 rounded text-white mt-2  hover:bg-blue-600 flex items-center text-sm' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className='ml-1' onClick={() => setShow(true)} >Continue Shopping</span>
                </button>
            </div>
            </div>
        </>
    )
}

export default CartDetails
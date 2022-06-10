import React from 'react'

const ProductPage = () => {
    return (
        <div className='flex flex-col gap-5 bg-slate-100' >
            <span>
                <h2 className='text-slate-400 text'>Shop/Women/Shoes/Adidas</h2>
            </span>
            <article className='grid grid-cols-12 m-4'>
                <div className='col-span-3'>
                    <div><img src="https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='h-28 my-2 mx-1 rounded w-32 object-fill' /></div>
                    <div><img src="https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='h-28 my-2 mx-1 rounded w-32 object-fill' /></div>
                    <div><img src="https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='h-28 my-2 mx-1 rounded w-32 object-fill' /></div>
                    <div><img src="https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='h-28 my-2 mx-1 rounded w-32 object-fill' /></div>
                </div>
                <div className='col-span-6 flex items-center justify-between my-5 mx-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-slate-500 cursor-pointer hover:text-orange-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <img className='h-auto w-96' src="https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-slate-500 cursor-pointer hover:text-orange-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <div className='col-span-3 flex flex-col m-5 '>
                    <h1 className='text-slate-500 uppercase'>Adidas</h1>
                    <h2 className='text-slate-800 capitalize text-lg my-1'>stan smith mid high top, leather</h2>
                    <article className='flex justify-between sm:flex-col'>
                        <span className='flex gap-5 text-center'>
                            <h3 className='text-orange-500 text-lg my-1'>$125.00</h3>
                            <h2 className='bg-orange-200 p-1 rounded text-orange-500'>50%</h2>
                        </span>
                        <h2 className='text-slate-400 line-through '>$250</h2>
                    </article>
                    <p className='text-slate-500 my-2 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum excepturi mollitia itaque, quibusdam nobis
                        facere perferendis! Mollitia voluptas facilis pariatur
                        tenetur ducimus fugiat, aspernatur dignissimos excepturi
                        commodi iure repellat expedita.
                    </p>
                    <select name="sizes" id="sizes" className='bg-white py-2 px-3 text-slate-500 my-3 rounded'>
                        <option value="sizes">Sizes</option>
                        <option value="37">37</option>
                        <option value="37">39</option>
                        <option value="37">40</option>
                        <option value="37">42</option>
                    </select>
                    <button className='bg-blue-500 text-white flex items-center justify-center gap-4 py-2 rounded w-full hover:bg-blue-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h2 className='uppercase'>Add to cart</h2>
                    </button>
                    <div className='flex justify-between items-center my-2 gap-3'>
                        <button className='bg-orange-500 text-white flex items-center justify-center w-full gap-2 py-2 rounded hover:bg-orange-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <h2 className='uppercase'>wishlist</h2>
                        </button>
                        <button className='bg-orange-500 text-white flex items-center justify-center w-full gap-2 py-2 rounded  hover:bg-orange-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <h2 className='uppercase'>Share</h2>
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default ProductPage
import React from 'react'

const Product = () => {
    return (
        <div className='grid grid-col-5 gap-5 py-48 px-5' >
            <div className='col-span-3'>
                <div className='aspect-square flex items-center justify-center' >
                    <img className='rounded-md h-70' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/594046/1.jpg?7382" alt="" />
                </div>
                <div className='flex justify-between mt-3' >
                    <article className='mr-2'>
                        <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/71/594046/2.jpg?7382" alt="" />
                    </article>
                    <article className='mr-2'>
                        <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/71/594046/3.jpg?7382" alt="" />
                    </article>
                    <article className='mr-2'>
                        <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/71/594046/4.jpg?7382" alt="" />
                    </article>
                    <article className='mr-2'>
                        <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/71/594046/5.jpg?7382" alt="" />
                    </article>
                    <article className='mr-2'>
                        <img className='rounded-md' src="https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/71/594046/1.jpg?7382" alt="" />
                    </article>
                </div>
            </div>
            <div className='col-span-2' >
                <h2 className='text-orange-500 uppercase font-semibold text-lg ' >sneaker company</h2>
                <h4 className='text-slate-900 font-bold text-lg' >Fall Limited Edition Sneakers</h4>
                <p className='text-slate-700 my-4' >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore totam magni ex sint tempora corrupti nemo ipsam amet quis, ipsa cum voluptates asperiores odio et, atque earum optio. Ad, eligendi!
                </p>
                <div className='flex flex-col justify-start '>
                    <div className='flex justify-start items-center mb-2' >
                        <h2 className='text-black font-bold text-2xl mr-4' >$125.00</h2>
                        <span className='text-orange-600 bg-orange-300 font-thin text-left text-sm px-[2px] py-[1px] rounded-lg'>50%</span>
                    </div>
                    <h4 className='text-slate-600 mr-1 text-sm  text-decoration-line: line-through'>$250.00</h4>
                </div>
                <div className='flex items-center justify-between w-full my-4' >
                    <div className='flex justify-between rounded-md items-center py-2 px-2  bg-slate-50 ' >
                        <button className='font-bold text-xl text-orange-500 '>-</button>
                        <input className='text-slate-800 text-xl ring-0 border-0 bg-inherit text-center focus:ring-0 focus:outline-none w-[120px] ' value='0' type="text" name="" id="" />
                        <button className='font-bold text-xl text-orange-500 '>+</button>
                    </div>
                    <div className='flex text-lg ml-2 cursor-pointer rounded-md justify-center items-center text-white font-semibold bg-orange-600 py-2 px-2' >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        Add to cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
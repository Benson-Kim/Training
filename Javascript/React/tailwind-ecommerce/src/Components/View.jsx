import React, { useState } from 'react'
import product1 from '../images/image-product-1.jpg'
import product2 from '../images/image-product-2.jpg'
import product3 from '../images/image-product-3.jpg'
import product4 from '../images/image-product-4.jpg'

const View = () => {

    const [productimg, setProductImg] = useState(1)

    const [visible, setVisible] = useState(false)

    const handleVisible = () => {
        setVisible(!visible);
    }

    const handlePrev = () => {
        if (productimg === 1) {
            setProductImg(4)
        } else {
            setProductImg(productimg - 1)
        }
    }
    const handleNext = () => {
        if (productimg === 4) {
            setProductImg(1)
        }
        else {
            setProductImg(productimg + 1)
        }
    }

    return (
        <div className='flex flex-col mx-12 px-8 py-4 sm:grid sm:grid-cols-6 sm:gap-5' >
            <div className='col-span-3 ml-12 relative flex justify-between items-center mb-3 ' >
                <div className='order-2  flex flex-col'>
                    <div>
                        {productimg === 1 && <img src={product1} alt="product_img_1" className='rounded-lg' />}
                        {productimg === 2 && <img src={product2} alt="product_img_2" className='rounded-lg' />}
                        {productimg === 3 && <img src={product3} alt="product_img_3" className='rounded-lg' />}
                        {productimg === 4 && <img src={product4} alt="product_img_4" className='rounded-lg' />}
                    </div>
                    <div className="hidden h-[50px] sm:grid sm:grid-cols-4 sm:gap-2 sm:px-2 sm:py-2">
                        <img onClick={handleVisible} src={product1} alt="product_img_1" className='rounded-lg' />
                        <img onClick={handleVisible} src={product2} alt="product_img_2" className='rounded-lg' />
                        <img onClick={handleVisible} src={product3} alt="product_img_3" className='rounded-lg' />
                        <img onClick={handleVisible} src={product4} alt="product_img_4" className='rounded-lg' />
                    </div>
                </div>
                
                <button onClick={handlePrev} className='visible sm:hidden rounded-full bg-slate-300 absolute left-2' >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={handleNext} className='visible sm:hidden rounded-full bg-slate-300 absolute right-2 ' >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className='col-span-3 rounded-lg px-8 py-10 ml-8' >
                <article>
                    <h2 className='uppercase text-orange-500 tracking-wider font-semibold' >sneaker company</h2>
                    <h4 className='capitalize text-black font-semibold text-xl' >fall limited edition sneakers</h4>
                </article>
                <article>
                    <p className='text-slate-600' >Lorem ipsum dolor sit. Ab fugit neque quod sit et consequatur iure eum.</p>
                </article>
                <article className='flex justify-between items-center pt-3 sm:flex-col sm:items-start' >
                    <div className='flex justify-between items-center'>
                        <h2 className='font-bold text-xl mr-4' >$125.00</h2>
                        <span className='bg-orange-300 rounded-md text-orange-600 px-1' >50%</span>
                    </div>
                    <span className='text-slate-500 line-through' >250.00</span>
                </article>
                <div className='sm:flex-row justify-between items-center' >
                    <article className='flex justify-between items-center bg-orange-100 mt-4 px-4 py-2 rounded-xl' >
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </button>
                        <input type="text" value='0' className=' bg-inherit text-center text-lg font-semibold focus:ring-0 focus:outline-none max-w-sm:w-[50px] max-w-md:w-[80px] ' />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </article>
                    <article className='flex justify-center items-center bg-orange-400 text-white mt-4 px-4 py-2 rounded-xl cursor-pointer text-lg font-semibold hover:bg-orange-600 hover:transition hover:duration-150 hover:ease-out'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span>Add to cart</span>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default View
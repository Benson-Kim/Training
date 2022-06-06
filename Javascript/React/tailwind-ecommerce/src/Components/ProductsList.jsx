import React from 'react'
import ProductSidebar from './ProductSidebar'
import { Link } from "react-router-dom";

const ProductList = () => {
    return (
        <div className='m-8'>
            <div className='flex justify-between' >
                <div>
                    <span>32 items found</span>
                </div>
                <div>
                    <span>Latest Items</span>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-5 max-w-md:grid-cols-3 max-w-sm:grid-cols-3">
                <a href="#" className="flex flex-col justify-between py-2 px-4 shadow-md rounded-lg hover:border-[1px] hover:border-slate-300 hover:rounded-md transition-all">
                    <img className='h-34 rounded-sm' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/128765/1.jpg?4093" alt="" />
                    <p className='text-slate-700 font-semibold text-left text-sm pt-2' >Fashion Mens Sneakers</p>
                    <div className='flex justify-between items-center py-2 mr-1' >
                        <h2 className='text-slate-900'>KSh 1490</h2>
                        <span className='flex justify-between items-center' >
                            <h4 className='text-slate-600 mr-1 text-sm  text-decoration-line: line-through'>Ksh 2800</h4>
                            <span className='text-orange-600 bg-orange-300 font-thin text-left text-sm px-[2px] py-[1px] rounded-lg'>47%</span>
                        </span>
                    </div>
                    <button className='mb-2 bg-orange-600 w-full text-white font-semibold py-2 rounded-lg hover:bg-orange-500' >Add to cart</button>
                </a>
                
                <a href="#" className="flex flex-col justify-between py-2 px-4 shadow-md rounded-lg hover:border-[1px] hover:border-slate-300 hover:rounded-md transition-all">
                    <img className='h-34 rounded-sm' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/027043/1.jpg?1938" alt="" />
                    <p className='text-slate-700 font-semibold text-left text-sm pt-2' >Fashion Mens Running Breathable Sneakers</p>
                    <div className='flex justify-between items-center py-2 mr-1' >
                        <h2 className='text-slate-900'>KSh 899</h2>
                        <span className='flex justify-between items-center' >
                            <h4 className='text-slate-600 mr-1 text-sm  text-decoration-line: line-through'>Ksh 1099</h4>
                            <span className='text-orange-600 bg-orange-300 font-thin text-left text-sm px-[2px] py-[1px] rounded-lg'>18%</span>
                        </span>
                    </div>
                    <button className='mb-2 bg-orange-600 w-full text-white font-semibold py-2 rounded-lg hover:bg-orange-500' >Add to cart</button>
                </a>
                <a href="#" className="flex flex-col justify-between py-2 px-4 shadow-md rounded-lg hover:border-[1px] hover:border-slate-300 hover:rounded-md transition-all">
                    <img className='h-34 rounded-sm' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/389156/1.jpg?9278" alt="" />
                    <p className='text-slate-700 font-semibold text-left text-sm pt-2' >Light Breathable Summer Mesh Sneakers</p>
                    <div className='flex justify-between items-center py-2 mr-1' >
                        <h2 className='text-slate-900'>KSh 999</h2>
                        <span className='flex justify-between items-center' >
                            <h4 className='text-slate-600 mr-1 text-sm  text-decoration-line: line-through'>Ksh 1500</h4>
                            <span className='text-orange-600 bg-orange-300 font-thin text-left text-sm px-[2px] py-[1px] rounded-lg'>33%</span>
                        </span>
                    </div>
                    <button className='mb-2 bg-orange-600 w-full text-white font-semibold py-2 rounded-lg hover:bg-orange-500' >Add to cart</button>
                </a>
                <a href="#" className="flex flex-col justify-between py-2 px-4 shadow-md rounded-lg hover:border-[1px] hover:border-slate-300 hover:rounded-md transition-all">
                    <img className='h-34 rounded-sm' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/650485/6.jpg?4186" alt="" />
                    <p className='text-slate-700 font-semibold text-left text-sm pt-2' >Fashion Mens Summer Sports Sneakers</p>
                    <div className='flex justify-between items-center py-2 mr-1' >
                        <h2 className='text-slate-900'>KSh 1299</h2>
                        <span className='flex justify-between items-center' >
                            <h4 className='text-slate-600 mr-1 text-sm  text-decoration-line: line-through'>Ksh 2000</h4>
                            <span className='text-orange-600 bg-orange-300 font-thin text-left text-sm px-[2px] py-[1px] rounded-lg'>35%</span>
                        </span>
                    </div>
                    <button className='mb-2 bg-orange-600 w-full text-white font-semibold py-2 rounded-lg hover:bg-orange-500' >Add to cart</button>
                </a>
                <a href="#" className="flex flex-col justify-between py-2 px-4 shadow-md rounded-lg hover:border-[1px] hover:border-slate-300 hover:rounded-md transition-all">
                    <img className='h-34 rounded-sm' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/584726/1.jpg?3687" alt="" />
                    <p className='text-slate-700 font-semibold text-left text-sm pt-2' >Fashion Mens Soft Waterproof Outdoors Sneakers</p>
                    <div className='flex justify-between items-center py-2 mr-1' >
                        <h2 className='text-slate-900'>KSh 1499</h2>
                        <span className='flex justify-between items-center' >
                            <h4 className='text-slate-600 mr-1 text-sm  text-decoration-line: line-through'>Ksh 2000</h4>
                            <span className='text-orange-600 bg-orange-300 font-thin text-left text-sm px-[2px] py-[1px] rounded-lg'>25%</span>
                        </span>
                    </div>
                    <button className='mb-2 bg-orange-600 w-full text-white font-semibold py-2 rounded-lg hover:bg-orange-500' >Add to cart</button>
                </a>
                <a href="#" className="flex flex-col justify-between py-2 px-4 shadow-md rounded-lg hover:border-[1px] hover:border-slate-300 hover:rounded-md transition-all">
                    <img className='h-34 rounded-sm' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/222436/1.jpg?6779" alt="" />
                    <p className='text-slate-700 font-semibold text-left text-sm pt-2' >Fashion Men's Sneakers Mesh Deodorant</p>
                    <div className='flex justify-between items-center py-2 mr-1' >
                        <h2 className='text-slate-900'>KSh 2359</h2>
                        <span className='flex justify-between items-center' >
                            <h4 className='text-slate-600 mr-1 text-sm  text-decoration-line: line-through'>Ksh 2599</h4>
                            <span className='text-orange-600 bg-orange-300 font-thin text-left text-sm px-[2px] py-[1px] rounded-lg'>8%</span>
                        </span>
                    </div>
                    <button className='mb-2 bg-orange-600 w-full text-white font-semibold py-2 rounded-lg hover:bg-orange-500' >Add to cart</button>
                </a>
                <a href="#" className="flex flex-col justify-between py-2 px-4 shadow-md rounded-lg hover:border-[1px] hover:border-slate-300 hover:rounded-md transition-all">
                    <img className='h-34 rounded-sm' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/205146/1.jpg?0145" alt="" />
                    <p className='text-slate-700 font-semibold text-left text-sm pt-2' >Casual Sneakers Lightweight Male Sports Shoes</p>
                    <div className='flex justify-between items-center py-2 mr-1' >
                        <h2 className='text-slate-900'>KSh 2499</h2>
                        <span className='flex justify-between items-center' >
                            <h4 className='text-slate-600 mr-1 text-sm  text-decoration-line: line-through'>Ksh 2759</h4>
                            <span className='text-orange-600 bg-orange-300 font-thin text-left text-sm px-[2px] py-[1px] rounded-lg'>50%</span>
                        </span>
                    </div>
                    <button className='mb-2 bg-orange-600 w-full text-white font-semibold py-2 rounded-lg hover:bg-orange-500' >Add to cart</button>
                </a>
                <a href="#" className="flex flex-col justify-between py-2 px-4 shadow-md rounded-lg hover:border-[1px] hover:border-slate-300 hover:rounded-md transition-all">
                    <img className='h-34 rounded-sm' src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/594046/1.jpg?7382" alt="" />
                    <p className='text-slate-700 font-semibold text-left text-sm pt-2' >Top Sneakers Men Canvas Skateboard Shoes</p>
                    <div className='flex justify-between items-center py-2 mr-1' >
                        <h2 className='text-slate-900'>KSh 2499</h2>
                        <span className='flex justify-between items-center' >
                            <h4 className='text-slate-600 mr-1 text-sm  text-decoration-line: line-through'>Ksh 2999</h4>
                            <span className='text-orange-600 bg-orange-300 font-thin text-left text-sm px-[2px] py-[1px] rounded-lg'>50%</span>
                        </span>
                    </div>
                    <button className='mb-2 bg-orange-600 w-full text-white font-semibold py-2 rounded-lg hover:bg-orange-500' >Add to cart</button>
                </a>

            </div>
        </div>
    )
}

export default ProductList
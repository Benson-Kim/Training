import React from 'react'

const ProductSidebar = () => {
    return (
        <div className='border-2 rounded-md flex flex-col w-60 px-4 py-2'>
            <div className='border-b-[1px]'>
                <div className='flex justify-between items-center py-3 text-blue-600 font-bold text-base'>
                    <h2 className='' >Product Type</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className='flex justify-between items-center px-0 py-1' >
                    <input type="text" placeholder='Search' className='px-3 w-full py-1 border-[1px] rounded-md focus:outline-lime-200 focus:ring-current' />
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 border-[1px] rounded-md pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <ul className='px-3 py-1 mb-3 text-gray-600' >
                    <li>T-shirts</li>
                    <li>Shirts</li>
                    <li>Pants</li>
                    <li>Shorts</li>
                    <li>Sneakers</li>
                    <li>Slippers</li>
                    <li>Boots</li>
                    <li>Wallets</li>
                    <li>Belts</li>
                </ul>
            </div>
            <div className='border-b-[1px] text-center'>
                <div className='flex justify-between items-center py-3 text-blue-600 font-bold text-base'>
                    <h2 className='' >Brands</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className='flex flex-col px-3 py-1 mb-3 text-gray-600' >
                    <div className="flex justify-between items-center">
                        <label className='order-2 -ml-12' htmlFor="mercedes">Mercedes</label>
                        <input className='order-1' type="checkbox" name="mercedes" id="" />
                        <span className='order-3 text-gray-800 bg-slate-400 text-xs rounded-full px-1' >120</span>
                    </div>
                    <div className="flex pt-1 justify-between items-center">
                        <label className='order-2 -ml-20' htmlFor="toyota">Toyota</label>
                        <input className='order-1' type="checkbox" name="toyota" id="" />
                        <span className='order-3 text-gray-800 bg-slate-400 text-xs rounded-full px-1' >15</span>
                    </div>
                    <div className="flex pt-1 justify-between items-center">
                        <label className='order-2 -ml-12' htmlFor="mitsubishi">Mitsubishi</label>
                        <input className='order-1' type="checkbox" name="mitsubishi" id="" />
                        <span className='order-3 text-gray-800 bg-slate-400 text-xs rounded-full px-1' >32</span>
                    </div>
                    <div className="flex pt-1 justify-between items-center">
                        <label className='order-2 -ml-16' htmlFor="nissan">Nissan</label>
                        <input className='order-1' type="checkbox" name="nissan" id="" />
                        <span className='order-3 text-gray-800 bg-slate-400 text-xs rounded-full px-1' >78</span>
                    </div>
                    <div className="flex pt-1 justify-between items-center">
                        <label className='order-2 -ml-12' htmlFor="honda">Honda</label>
                        <input className='order-1' type="checkbox" name="honda" id="" />
                        <span className='order-3 text-gray-800 bg-slate-400 text-xs rounded-full px-1' >121</span>
                    </div>
                </div>
            </div>

            <div className="border-b-[1px]">
                <div class="relative pt-1">
                    <label for="pricerange" class="form-label">Price range</label>
                    <input type="range" name="pricerange" id="pricerange" className='w-full h-2 bg-blue-400 appearance-none rounded-full' />
                </div>
                <div className="flex justify-between items-center text-gray-700 ">
                    <p>Min</p>
                    <p>Max</p>
                </div>
                <div className="flex justify-between items-center pb-2">
                    <input placeholder='$0' className='py-2 px-2 w-24 border-[1px] rounded-md shadow-md focus:outline-none focus:ring-1' type="number" />
                    <input placeholder='$10,000' className='py-2 px-2 w-24 border-[1px] rounded-md shadow-md focus:outline-none focus:ring-1' type="number" />
                </div>
                <button className='rounded-lg bg-blue-600 w-full mb-3 py-2 text-white font-semibold hover:bg-blue-500 transition-colors' >
                    Apply
                </button>

            </div>

            <div className="border-b-[1px]">
                <div className='flex justify-between items-center py-3 text-blue-600 font-bold text-base'>
                    <h2 className='' >Brands</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className="flex justify-between items-center pt-1 mb-2">
                    <button className='border-[1px] rounded-md px-2 py-1 bg-blue-400 text-slate-100 font-semibold' >XS</button>
                    <button className='border-[1px] rounded-md px-2 py-1 bg-blue-400 text-slate-100 font-semibold' >SM</button>
                    <button className='border-[1px] rounded-md px-2 py-1 bg-blue-400 text-slate-100 font-semibold' >LG</button>
                    <button className='border-[1px] rounded-md px-2 py-1 bg-blue-400 text-slate-100 font-semibold' >XXL</button>
                </div>
            </div>

        </div>
    )
}

export default ProductSidebar
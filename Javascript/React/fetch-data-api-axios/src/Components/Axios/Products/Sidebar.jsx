import React from 'react'


const Sidebar = ({ categories, filtrData }) => {

    return (
        <div className="bg-slate-800 px-3 pb-4 h-max w-[480px] rounded  mx-4 my-4 duration-300 relative">
            <h1 className='text-gray-500 py-1 my-4 px-2 rounded text-center font-semibold bg-lime-50'>Categories</h1>
            <ul className="">

                <li className="flex-1 duration-300 capitalize text-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2  rounded mt-2 hover:bg-lime-50 hover:text-gray-800">All</li>

                {categories?.map((category, index) => (
                    <li onClick={() => filtrData(category)} key={index} className="flex-1 duration-300 capitalize text-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2  rounded mt-2 hover:bg-lime-50 hover:text-gray-800" >
                        {category}
                    </li>

                ))}

            </ul>
        </div>

    )
}

export default Sidebar
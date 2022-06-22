import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [categories, setcategories] = useState(null)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories').then(res => {
            setcategories(res.data)
        })
    }, [])

    return (
        <div className="hidden sm:block bg-slate-800 px-3 pb-4 h-max w-[480px] rounded  mx-4 my-4 duration-300 relative">
            <h1 className='text-gray-500 py-1 my-4 px-2 rounded text-center font-semibold bg-lime-50'>Categories</h1>

            {categories?.map((category, index) => (
                <Link key={index} to={`/category/${category}`}
                    className="flex-1 duration-300 capitalize text-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2  rounded mt-2 hover:bg-lime-50 hover:text-gray-800" >
                    {category}
                </Link>

            ))}

        </div>

    )
}

export default Sidebar
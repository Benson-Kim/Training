import React from 'react'
import { Link } from 'react-router-dom'

import { MdOutlineDashboardCustomize, MdOutlinePeopleAlt, MdSettings } from 'react-icons/md'
import { FaSellsy, FaFirstOrder } from 'react-icons/fa'
import { AiOutlineTransaction, AiOutlineSafetyCertificate } from 'react-icons/ai'
import { SiCaterpillar } from 'react-icons/si'

const Sidebar = () => {
    return (
        <div className='px-3 py-2'>
            <Link to='/' className='text-blue-100 flex items-center space-x-2 my-3 p-1 rounded hover:bg-orange-50 hover:text-slate-700'>
                <MdOutlineDashboardCustomize />
                <h2>Dashboard</h2>
            </Link>
            <Link to='products' className='text-blue-100 flex items-center space-x-2 my-3 p-1 rounded hover:bg-orange-50 hover:text-slate-700'>
                <SiCaterpillar />
                <h2>Products</h2>
            </Link>
            <Link to='' className='text-blue-100 flex items-center space-x-2 my-3 p-1 rounded hover:bg-orange-50 hover:text-slate-700'>
                <FaFirstOrder />
                <h2>Orders</h2>
            </Link>
            <Link className='text-blue-100 flex items-center space-x-2 my-3 p-1 rounded hover:bg-orange-50 hover:text-slate-700'>
                <MdOutlinePeopleAlt />
                <h2>Customers</h2>
            </Link>
           <Link className='text-blue-100 flex items-center space-x-2 my-3 p-1 rounded hover:bg-orange-50 hover:text-slate-700'>
                <AiOutlineSafetyCertificate />
                <h2>Sellers</h2>
            </Link>
            <Link className='text-blue-100 flex items-center space-x-2 my-3 p-1 rounded hover:bg-orange-50 hover:text-slate-700'>
                <FaSellsy />
                <h2>Statistics</h2>
            </Link>
            <Link className='text-blue-100 flex items-center space-x-2 my-3 p-1 rounded hover:bg-orange-50 hover:text-slate-700'>
                <AiOutlineTransaction />
                <h2>Transactions</h2>
            </Link>
        < Link className='text-blue-100 flex items-center space-x-2 my-3 p-1 rounded hover:bg-orange-50 hover:text-slate-700'>
                <MdSettings />
                <h2>Settings</h2>
            </Link>
            
        </div>
    )
}

export default Sidebar
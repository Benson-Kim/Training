import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between bg-blue-500 px-7 py-3'>
            <div>
                <Link to='/' className=''>Logo</Link>
            </div>
            <div className='flex justify-between gap-20'>
                <Link to='invoices' className='hover:border-b text-slate-100 font-semibold'>Invoices</Link>
                <Link to='invoices' className='hover:border-b text-slate-100 font-semibold'>Expenses</Link>
            </div>
            <div>
                <Link to='invoices'>Account</Link>
            </div>
        </div>
    )
}

export default Navbar
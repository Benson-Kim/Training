import React from 'react'
import {BsSearch, BsCart} from "react-icons/bs"

const Navbar = ({ show, setShow, size }) => {
  return (
    <div className='bg-slate-800 px-5 py-2 flex justify-between' >
      <div>
        <button className='text-white py-2 md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div>
        <button
          onClick={()=>setShow(true)}
          className='text-white font-bold text-lg px-2 py-1 rounded-lg'>Logo</button>
      </div>
      <div className= "hidden sm:flex sm:items-center rounded-md  p-2 px-2.5 bg-lime-50">
        <BsSearch className="text-gray-400 text-2xl block float-left cursor-pointer mr-2" />
        <input type={"search"} placeholder="Search" className="text-slate-900 bg-transparent w-full text-lg focus:outline-none" />
      </div>
      <button
        onClick={()=>setShow(!show)}
        className='relative rounded shadow-md border-none text-white px-2 w-max ' >
        <BsCart className='text-2xl' />
        <h2 className='absolute top-0 -right-1 px-1 rounded-full bg-blue-400 text-sm'>{size}</h2>
      </button>
    </div>
  )
}

export default Navbar
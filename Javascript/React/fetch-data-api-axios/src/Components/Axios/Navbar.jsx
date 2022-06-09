import React from 'react'
import {BsSearch} from "react-icons/bs"

const Navbar = () => {
  return (
    <div className='bg-slate-800 px-5 py-2 flex justify-between' >
      <div>
        <button className='text-white font-bold text-lg px-2 py-1 rounded-lg'>Logo</button>
      </div>
      <div className= "flex items-center rounded-md  p-2 px-2.5 bg-lime-50">
        <BsSearch className="text-gray-400 text-2xl block float-left cursor-pointer mr-2" />
        <input type={"search"} placeholder="Search" className="text-slate-900 bg-transparent w-full text-lg focus:outline-none" />
      </div>
      <button className='rounded-lg shadow-md border-none bg-white px-2 py-1 ' >Account</button>
    </div>
  )
}

export default Navbar
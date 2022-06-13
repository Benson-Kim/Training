import React from 'react'
import { BsCameraVideo,BsSearch, BsGear } from 'react-icons/bs'

const Navbar = () => {
  return (
      <div className='bg-indigo-400 flex items-center justify-between py-2 px-5'>
          <div>
              <BsCameraVideo className='text-3xl cursor-pointer text-indigo-50 hover:text-orange-300' />
          </div>
          <div className='flex items-center justify-between gap-3 bg-inherit text-lime-100'>
              <BsSearch className='text-2xl' />
              <input type="text" placeholder='Search...' className='bg-inherit placeholder:text-indigo-50 py-1 px-2 text-xl rounded border-b focus:outline-none' />
          </div>
          <div className='flex items-center justify-between gap-3'>
              <BsGear className='text-2xl text-indigo-100 cursor-pointer hover:text-orange-300' />
              <img src="https://images.pexels.com/photos/12250627/pexels-photo-12250627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
              className='w-7 h-7 rounded-full cursor-pointer' />
          </div>
    </div>
  )
}

export default Navbar
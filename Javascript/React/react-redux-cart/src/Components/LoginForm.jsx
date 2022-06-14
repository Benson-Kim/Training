import React from 'react'
import { useDispatch } from 'react-redux'
import { FaFreeCodeCamp } from 'react-icons/fa'

import {authActions} from '../app/auth-slice'

const LoginForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authActions.login())
    }
    return (
        <div className='w-72 shadow-inner bg-slate-50 p-10'>
            <div className=''>
                <FaFreeCodeCamp className='text-3xl ml-24 text-red-700 ' />
                <h2 className='my-2 text-center text-xl text-red-500 font-semibold'>Member Login</h2>
            </div>
            <form action="" onSubmit={handleSubmit}>

                <div className='flex flex-col gap-1 mt-3'>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input className='py-1 px-3 shadow rounded focus:outline-none' type="email" name="email" id="email" />
                </div>
                <div className='flex flex-col gap-1 my-2'>
                    <label htmlFor="password">Password</label>
                    <input className='py-1 px-3 shadow rounded focus:outline-none' type="password" name="password" id="email" />
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <button className='border-2 px-5 py-1 rounded-full border-red-500 text-red-500 hover:bg-red-500 hover:text-slate-50 hover:border-slate-500'>Login</button>
                    <h2>New here? <a href="#" className='text-red-500 hover:text-slate-500'>Signup</a></h2>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <div className='flex items-center justify-center'>
            <h2 className='text-5xl text-black'> 404 Error</h2>
            <p><Link to='/' className='decoration-neutral-50 text-blue-300 text-xl'>Home page</Link></p>
        </div>
    )
}

export default NoMatch
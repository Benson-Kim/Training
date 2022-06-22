import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'
import Sidebar from './Sidebar'

const MainPage = () => {
    return (
        <>
            {/* heading section */}
            <section>
                <Navbar />
            </section>

            {/* sidebar section */}
            <section className='grid grid-cols-12'>
                <div className="col-span-3 bg-black h-screen pl-2">
                    <Sidebar />
                </div>
                <div className="col-span-9 bg-yellow-500 h-screen pl-2">
                    <NavPage />
                </div>
            </section>
        </>
    )
}

export default MainPage
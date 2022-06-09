import React from 'react'
import Invoice from './Invoice'
import Data from '../../data.js'
import { Link, Outlet } from 'react-router-dom'

const Invoices = () => {

    return (
        <>
            <div>
                {Data.map((invoice) => (
                    <Link to={`/invoices/${invoice.id}`}> <Invoice invoice={invoice} key={invoice.id} /></Link>
                ))}
            </div>
            <div className="">
                <Outlet />
            </div>
        </>
    )
}

export default Invoices
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Customers from '../Pages/Customers'
import Dashboard from '../Pages/Dashboard'
import Orders from '../Pages/Orders'
import Products from '../Pages/Products'
import Sellers from '../Pages/Sellers'
import Settings from '../Pages/Settings'
import Statistics from '../Pages/Statistics'
import Transactions from '../Pages/Transactions'

const NavPage = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='products' element={<Products />} />
              <Route path='orders' element={<Orders />} />
              <Route path='customers' element={<Customers />} />
              <Route path='sellers' element={<Sellers />} />
              <Route path='statistics' element={<Statistics />} />
              <Route path='transactions' element={<Transactions />} />
              <Route path='settings' element={<Settings />} />
          </Routes>
    </div>
  )
}

export default NavPage
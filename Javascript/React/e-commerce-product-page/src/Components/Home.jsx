import React from 'react'
import Nav from './Navbar/Nav'
import { Routes, Route } from 'react-router-dom'
import Cart from './Navbar/Cart/Cart'
import Useraccount from './User/Useraccount'
import Products from './Products/Products'

const Home = () => {
  return (
    <>
      <Nav />
      {/* <Products /> */}
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<Useraccount />} />
        <Route path='/collections' element={<Products />} />
      </Routes>
    </>
  )
}

export default Home
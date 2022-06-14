import React from 'react'
import Products from '../Components/Products/Products'
import Cart from './Cart/Cart'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Products />
      <Cart />
    </div>
  )
}

export default Home
import { useState } from "react"
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import './App2.css'

import Data from "./components/Data"
import ShopData from "./components/ShopData"

import Header from "./Common/Header/Header"
import Cart from "./Common/Cart/Cart";
import Pages from "./Pages/Pages"

function App2() {

  const { productItems } = Data
  const { shopItems } = ShopData

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <BrowserRouter>
        <Header CartItem={CartItem} />
        <div class="items-container">
          <Routes>
            <Route exact path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
            <Route path="cart" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App2
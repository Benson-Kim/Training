import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react"

import data from "./data";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Men from "./Pages/Fashion/Men";
import Women from "./Pages/Fashion/Women";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Pages/Home/Home";
import Cart from "./Components/Cart/Cart";

import Data from "./DataAssets/Data"
import ShopData from "./DataAssets/ShopData"

function App() {

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
    <div className="App">
      <BrowserRouter>
        <Navbar CartItem={CartItem} />
        <div class="items-container">
          <Routes>
            <Route exact path='/' element={<Home productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
            {/* <Route path="men" element={<Men />} /> */}
            {/* <Route path="women" element={<Women />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="about" element={<About />} /> */}
            <Route path="carttwo" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
            <Route path="product" element={<Product CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

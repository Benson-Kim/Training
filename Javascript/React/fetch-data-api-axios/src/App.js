import Navbar from "./Components/Axios/Navbar";
import Products from "./Components/Axios/Products/Products";
import Cart from './Components/Cart/Cart'
import { useEffect, useState } from "react";

function App() {

  const [show, setShow] = useState(true)

  const [cart, setCart] = useState([])

  const handleAddToCart = (item) => {
    if (cart.indexOf(item) !== -1)
      return 
    setCart([...cart, item])
  }

  const handleCartChange = (item, d) => {
    const ind = cart.indexOf(item)
    const arr = cart
    arr[ind].amount += d
    if (arr[ind].amount === 0) 
      arr[ind].amount = 1
    setCart([...arr])
  }


  return (
    <>
      <Navbar show={show} setShow={setShow} size={cart.length} />
      <div className="bg-slate-50 h-screen flex">
        {show ?
          <Products handleAddToCart={handleAddToCart} />
          :
          <Cart cart={cart} setCart={setCart} size={cart.length} handleCartChange={handleCartChange} setShow={setShow} />}
        
      </div>
    </>

  );
}

export default App;


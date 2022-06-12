import Navbar from "./Components/Axios/Navbar";
import Products from "./Components/Axios/Products/Products";
import Cart from './Components/Cart/Cart'
import { useState } from "react";
// import Product from "./Components/Axios/Products/Product";

function App() {

  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
 
  const handleAddToCart = (item) => {
    if (cart.indexOf(item) !== -1)
      return
    setCart([...cart, { ...item, quantity: 1 }])
  }

  const handleCartChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;

    arr[ind].quantity += d;

    if (arr[ind].quantity === 0)
      arr[ind].quantity = 1;

    setCart([...arr]);
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


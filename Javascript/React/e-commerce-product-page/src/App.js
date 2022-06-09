import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Navbar/Cart/Cart";
function App() {
  return (
    <div className="">
      {/* <BrowserRouter> */}
        <Cart />
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

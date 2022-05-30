import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { render } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Men from "./Pages/Fashion/Men";
import Women from "./Pages/Fashion/Women";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
// import Product from "./Components/Product/Product";
import Home from "./Pages/Home/Home";
import { CartProvider } from "./Components/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <Navbar />
        <div class="items-container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            {/* <Route path="product" element={<Product />} /> */}
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
          </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

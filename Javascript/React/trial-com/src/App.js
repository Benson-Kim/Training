import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Cart from "./Cart";
import Header from "./Header";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}> </Route>
          <Route path="cart" element={<Cart />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
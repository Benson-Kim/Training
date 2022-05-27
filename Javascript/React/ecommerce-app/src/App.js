import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
// import Product from "./Components/Product/Product";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="items-container">
        <Home />
        <BrowserRouter>
          <Routes>
            <Route path="product" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

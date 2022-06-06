import {
  BrowserRouter,Routes,
Route,
} from "react-router-dom";
import CartOverlay from "./Components/CartOverlay";

import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import ProductList from "./Components/ProductsList";
import View from "./Components/View";
import data from "./Components/data";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ProductList data />
      {/* <Product /> */}
      {/* <CartOverlay /> */}
      <View />
    </div>
  );
}

export default App;

import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Axios/Navbar";
import Product from "./Components/Axios/Products/GridProduct";
import Products from "./Components/Axios/Products/Products";
import Cart from './Components/Cart/Cart'
import store from "./Components/Axios/Redux/store";
import { Provider } from "react-redux";
import Sidebar from "./Components/Axios/Products/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="">
        <Sidebar />
        <Outlet />
      </div>
    </Provider>

  );
}

export default App;


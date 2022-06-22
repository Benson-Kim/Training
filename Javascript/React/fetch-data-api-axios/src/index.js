import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Products from './Components/Axios/Products/Products';
import GridProduct from './Components/Axios/Products/GridProduct';
import CatProducts from './Components/Axios/Products/CatProducts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Products />} />
          <Route path='/category/:category' element={<CatProducts />} />
          <Route path='/product/:product' element={<GridProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


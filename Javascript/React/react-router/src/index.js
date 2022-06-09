import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Index from './Components/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FourOFour from './FourOFour';
import Invoices from './Components/Invoice/Invoices';
import InvoiceDetails from './Components/Invoice/InvoiceDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Index />} />
          <Route path='*' element={<FourOFour />} />
          <Route path='invoices' element={<Invoices />}>
            <Route path=':invoiceId' element={<InvoiceDetails />} />
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


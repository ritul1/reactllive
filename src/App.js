import React from 'react';
import {  BrowserRouter,Routes,Route } from 'react-router-dom'  
import Product from './component/Product/product';
import ProductDeatil from './component/ProductDetail/productDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/reactllive/" element={<Product />} />
      <Route path="/reactllive/productdetail/:id" element={<ProductDeatil />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;

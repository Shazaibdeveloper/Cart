import React from 'react';
import ProductList from './ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartItem from './CartItem';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;

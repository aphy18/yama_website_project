import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import Shop from './routes/Shop';
import ProductDetails from './routes/ProductDetails';

// import components
import Footer from './components/Footer';

import Header from './components/Header';
import Sidebar from './components/Sidebar';


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} /> 
      </Routes>
      <Footer />
    </Router>
  </div>;
};

export default App;

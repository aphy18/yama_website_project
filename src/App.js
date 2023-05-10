import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';

// import components
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} /> 
      </Routes>
      <Footer />
    </Router>
  </div>;
};

export default App;

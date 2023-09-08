import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// routes
import Home from './routes/Home';
import Shop from './routes/Shop';
import ProductDetails from './routes/ProductDetails';
import Checkout from './routes/Checkout';
import Team from './routes/Team';

// import components
import Footer from './components/Footer';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import OrderSuccess from './routes/OrderSuccess';


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path={"/success"} element={<OrderSuccess />} />
      </Routes>
      <Footer />
    </Router>
  </div>;
};

export default App;

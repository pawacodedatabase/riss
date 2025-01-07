import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Header from './Pages/header';
import Shop from './Pages/products/shop';
import Wishlist from './Pages/products/wishlist';
import Cart from './Pages/products/cartt';
import ProductDetail from './Pages/products/productDetail';
import Checkout from './Pages/products/checkout';
import OrderHistory from './Pages/products/orderhistory';
// import AboutBrand from './Pages/about';
import ContactUs from './Pages/contact';
import Footer from './Pages/footer';
import ScrollToTop from './Pages/components/scroll';


// Importing pages


const App: React.FC = () => {
  return (
    <Router>
      <div>
      
 <ScrollToTop/>
          <Header/>
        <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* <Route path="/about" element={<AboutBrand />} /> */}
        <Route path="/cart/history" element={<OrderHistory />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
         </Routes>
         <Footer/>
      </div>
    </Router>
  );
};

export default App;

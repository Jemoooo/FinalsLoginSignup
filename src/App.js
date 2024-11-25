import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation.js';
import Slider from './Slider';
import Featured from './Featured';
import AboutUs from './AboutUs';
import Gallery from './Gallery.js';
import Testimonial from './Testimonial.js';
import Footer from './Footer.js';
import Gallery2 from './Gallery2.js';
import LoginSignup from './LoginSignup';
import HomePage from './HomePage';
import CartPage from './CartPage';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true

const App = () => {
  const [cart, setCart] = useState([]);

  // Fetch cart from backend on initial load
  const fetchCart = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cart');
      if (!response.ok) throw new Error('Failed to fetch cart data');
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product._id }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
  
      const data = await response.json();
      setCart(data); // Update cart state with new data from backend
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) throw new Error('Failed to remove item from cart');

      fetchCart(); // Refetch the cart after removing to ensure it's updated
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Featured />
                <AboutUs />
                <Gallery />
                <Testimonial />
                <Gallery2 />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/home" element={<HomePage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
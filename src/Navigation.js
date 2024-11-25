import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation(); // Get current route

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true); // Add 'scrolled' class when scrolled down
    } else {
      setScrolling(false); // Remove 'scrolled' class when at top
    }
  };

  // Add event listener for scroll on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${scrolling ? 'scrolled' : ''} ${isHomePage ? (scrolling ? 'home-navbar-scrolled' : 'home-navbar') : 'other-navbar'}`}
      id="ftco-navbar"
    >
      <div className="container">
        <a href="/" className="navbar-brand">BITESPACE</a>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#gallery" className="nav-link">Gallery</a></li>
            <li className="nav-item"><Link to="/home" className="nav-link"> Menu </Link></li>
            <li className="nav-item"><a href="#testimonial" className="nav-link">Testimonials</a></li>
            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
            <li className="nav-item cta"><Link to="/cart" className="nav-link"> Cart </Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

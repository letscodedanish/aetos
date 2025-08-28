import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if the given path is the current active route
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar-container">
      <div className="logo">
        <Link to="/" className="logo-text">Aetose.</Link>
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <Link to="/why-us" className={`nav-link ${isActive('/why-us') ? 'active-nav-link' : ''}`}>WHY US ?</Link>
        <Link to="/services" className={`nav-link ${isActive('/services') ? 'active-nav-link' : ''}`}>SERVICES</Link>
        <Link to="/industries" className={`nav-link ${isActive('/industries') ? 'active-nav-link' : ''}`}>INDUSTRIES</Link>
        <Link to="/security" className={`nav-link ${isActive('/security') ? 'active-nav-link' : ''}`}>SECURITY</Link>
        <Link to="/about-us" className={`nav-link ${isActive('/about-us') ? 'active-nav-link' : ''}`}>ABOUT US</Link>
      </div>

      {/* Desktop Contact Button */}
      <div className="desktop-contact">
        <Link to="/contact" className="contact-button">
          CONTACT US
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-button">
        <button 
          onClick={toggleMenu}
          className="menu-toggle"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
        <div className="mobile-menu-content">
          <Link to="/why-us" className={`mobile-nav-link ${isActive('/why-us') ? 'active-nav-link' : ''}`} onClick={toggleMenu}>WHY US ?</Link>
          <Link to="/services" className={`mobile-nav-link ${isActive('/services') ? 'active-nav-link' : ''}`} onClick={toggleMenu}>SERVICES</Link>
          <Link to="/industries" className={`mobile-nav-link ${isActive('/industries') ? 'active-nav-link' : ''}`} onClick={toggleMenu}>INDUSTRIES</Link>
          <Link to="/security" className={`mobile-nav-link ${isActive('/security') ? 'active-nav-link' : ''}`} onClick={toggleMenu}>SECURITY</Link>
          <Link to="/about-us" className={`mobile-nav-link ${isActive('/about-us') ? 'active-nav-link' : ''}`} onClick={toggleMenu}>ABOUT US</Link>
          <Link 
            to="/contact" 
            className="mobile-contact-button"
            onClick={toggleMenu}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
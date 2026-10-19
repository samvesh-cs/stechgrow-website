import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="stechgrow home">
          <div className="logo-icon-wrap">
            <span className="logo-orb"></span>
            <span className="logo-dot"></span>
          </div>
          <span className="logo-text">stechgrow<span className="logo-accent">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Features
          </NavLink>
          <NavLink to="/solutions" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Solutions
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Pricing
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <Link to="/contact" className="nav-login-btn">
            Sign In
          </Link>
          <Link to="/pricing" className="btn-primary nav-cta-btn">
            <span>Get Started</span>
            <ArrowRight size={15} />
          </Link>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <NavLink to="/" end className="mobile-nav-link">Home</NavLink>
          <NavLink to="/features" className="mobile-nav-link">Features</NavLink>
          <NavLink to="/solutions" className="mobile-nav-link">Solutions</NavLink>
          <NavLink to="/about" className="mobile-nav-link">About</NavLink>
          <NavLink to="/pricing" className="mobile-nav-link">Pricing</NavLink>
          <NavLink to="/contact" className="mobile-nav-link">Contact</NavLink>
        </div>
        <div className="mobile-drawer-footer">
          <Link to="/pricing" className="btn-primary w-full">
            <span>Start Free Trial</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}

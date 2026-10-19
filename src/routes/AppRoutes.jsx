import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Features from '../pages/Features';
import Solutions from '../pages/Solutions';
import About from '../pages/About';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      {/* Fallback to Home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';
import './App.css';

export default function App() {
  return (
    <div className="app-layout">
      {/* Atmospheric Background Glow Orbs */}
      <div className="bg-glow-orb orb-primary" aria-hidden="true"></div>
      <div className="bg-glow-orb orb-teal" aria-hidden="true"></div>
      <div className="bg-glow-orb orb-rose" aria-hidden="true"></div>

      {/* Auto Scroll to Top on Route Change */}
      <ScrollToTop />

      {/* Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="main-content">
        <AppRoutes />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

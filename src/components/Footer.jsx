import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import '../styles/Footer.css';

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="container footer-container">
        
        {/* Top Newsletter & Brand Row */}
        <div className="footer-newsletter-row">
          <div className="footer-brand-info">
            <Link to="/" className="brand-logo footer-logo">
              <div className="logo-icon-wrap">
                <span className="logo-orb"></span>
                <span className="logo-dot"></span>
              </div>
              <span className="logo-text">stechgrow<span className="logo-accent">.</span></span>
            </Link>
            <p className="footer-description">
              Next-generation cloud analytics & growth engine designed to help modern teams forecast, automate, and scale with confidence.
            </p>
            <div className="footer-socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon">
                <TwitterIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
                <LinkedinIcon />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
                <GithubIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-icon">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="footer-newsletter-card">
            <h4>Stay ahead of industry curves</h4>
            <p>Get weekly product updates, engineering insights, and scaling playbooks directly to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to stechgrow updates!'); }}>
              <div className="newsletter-input-wrap">
                <Mail size={18} className="newsletter-icon" />
                <input 
                  type="email" 
                  placeholder="Enter your work email..." 
                  required 
                  className="newsletter-input" 
                />
              </div>
              <button type="submit" className="btn-primary newsletter-btn">
                <span>Subscribe</span>
                <ArrowUpRight size={16} />
              </button>
            </form>
            <div className="newsletter-meta">
              <span><CheckCircle2 size={13} className="text-teal" /> No spam guaranteed</span>
              <span><CheckCircle2 size={13} className="text-teal" /> Unsubscribe anytime</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <h5 className="footer-col-title">Product</h5>
            <ul className="footer-links-list">
              <li><Link to="/features">Core Features</Link></li>
              <li><Link to="/features">Analytics Engine</Link></li>
              <li><Link to="/solutions">Automation Workflows</Link></li>
              <li><Link to="/solutions">Enterprise Security</Link></li>
              <li><Link to="/pricing">Pricing Plans</Link></li>
              <li><Link to="/features">System Status</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Solutions</h5>
            <ul className="footer-links-list">
              <li><Link to="/solutions">SaaS & Tech Startups</Link></li>
              <li><Link to="/solutions">FinTech & Banking</Link></li>
              <li><Link to="/solutions">E-Commerce Platforms</Link></li>
              <li><Link to="/solutions">Global Enterprises</Link></li>
              <li><Link to="/solutions">Digital Agencies</Link></li>
              <li><Link to="/solutions">Custom APIs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Company</h5>
            <ul className="footer-links-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Our Mission & Values</Link></li>
              <li><Link to="/about">Leadership & Team</Link></li>
              <li><a href="#careers">Careers <span className="hiring-badge">We're hiring</span></a></li>
              <li><Link to="/contact">Press & Media</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Trust & Security</h5>
            <ul className="footer-links-list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#compliance">SOC2 Type II Certified</a></li>
              <li><a href="#gdpr">GDPR Compliance</a></li>
              <li><a href="#security">Security Whitepaper</a></li>
              <li><a href="#cookies">Cookie Preferences</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Badges and Operational Status */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <span className="status-indicator">
              <span className="status-ping"></span>
              <span className="status-text">All systems operational (99.99%)</span>
            </span>
            <p className="copyright-text">
              © {new Date().getFullYear()} stechgrow Inc. All rights reserved. Built with precision and Geist design principles.
            </p>
          </div>
          
          <div className="bottom-badges">
            <span className="trust-badge"><ShieldCheck size={16} /> SOC2 Compliant</span>
            <span className="trust-badge">256-bit Encryption</span>
            <span className="trust-badge">ISO 27001</span>
          </div>
        </div>

      </div>

      {/* Signature Figma Giant Watermark */}
      <div className="footer-watermark-wrap" aria-hidden="true">
        <span className="footer-watermark">stechgrow</span>
      </div>
    </footer>
  );
}

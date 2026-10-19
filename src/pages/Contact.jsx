import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle2, 
  Sparkles, ShieldCheck, ArrowRight, MessageSquare 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Enterprise Demo',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="contact-page-root">
      
      {/* 1. Hero Section */}
      <section className="contact-hero-section">
        <div className="container text-center">
          <span className="badge-pill teal">
            <Sparkles size={14} /> CONNECT WITH OUR TEAM
          </span>
          <h1 className="contact-hero-title">
            Let's Discuss How Stechgrow Can <span className="gradient-text">Accelerate Your Scale</span>
          </h1>
          <p className="contact-hero-desc">
            Have questions about custom architectures, volume pricing, or migration? Our solutions architects are here to guide you.
          </p>
        </div>
      </section>

      {/* 2. Split Dual Layout (Left Dark Info Panel + Right Clean White Form from Figma) */}
      <section className="contact-card-section">
        <div className="container">
          <div className="contact-split-container">
            
            {/* Left Column: Dark Branded Card */}
            <div className="contact-dark-panel">
              <div className="cd-header">
                <div className="brand-logo">
                  <div className="logo-icon-wrap">
                    <span className="logo-orb"></span>
                    <span className="logo-dot"></span>
                  </div>
                  <span className="logo-text">stechgrow<span className="logo-accent">.</span></span>
                </div>
                <p className="cd-tagline">
                  Empowering 10,000+ teams with real-time telemetry, predictive foresight, and automated revenue velocity.
                </p>
              </div>

              <div className="contact-points-list">
                <div className="contact-point-item">
                  <div className="cp-icon"><Mail size={18} /></div>
                  <div className="cp-info">
                    <span className="cp-label">Direct Email</span>
                    <a href="mailto:hello@stechgrow.io" className="cp-val">hello@stechgrow.io</a>
                  </div>
                </div>

                <div className="contact-point-item">
                  <div className="cp-icon"><Phone size={18} /></div>
                  <div className="cp-info">
                    <span className="cp-label">Phone Support</span>
                    <span className="cp-val">+1 (800) 842-7934</span>
                  </div>
                </div>

                <div className="contact-point-item">
                  <div className="cp-icon"><MapPin size={18} /></div>
                  <div className="cp-info">
                    <span className="cp-label">Global Headquarters</span>
                    <span className="cp-val">548 Market St, San Francisco, CA & London, UK</span>
                  </div>
                </div>

                <div className="contact-point-item">
                  <div className="cp-icon"><Clock size={18} /></div>
                  <div className="cp-info">
                    <span className="cp-label">Support Availability</span>
                    <span className="cp-val">24/7/365 Critical Escalation SLA</span>
                  </div>
                </div>
              </div>

              <div className="cd-trust-badges">
                <div className="cd-badge">
                  <ShieldCheck size={16} className="text-teal" />
                  <span>SOC2 Type II Certified</span>
                </div>
                <div className="cd-badge">
                  <ShieldCheck size={16} className="text-teal" />
                  <span>ISO 27001 Aligned</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean White Interactive Form */}
            <div className="contact-white-panel">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={44} className="text-teal" />
                  </div>
                  <h3>Message Dispatched Successfully!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. A dedicated solutions engineer from stechgrow will review your inquiry and follow up within 2 hours.
                  </p>
                  <button 
                    className="btn-primary" 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', interest: 'Enterprise Demo', message: '' }); }}
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h3>Send Us A Message</h3>
                    <p>Fill out the form below and we'll respond promptly.</p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Work Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="interest">Inquiring About</label>
                      <select 
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      >
                        <option value="Enterprise Demo">Schedule Enterprise Demo</option>
                        <option value="Custom Pricing">Custom Volume Pricing</option>
                        <option value="Architecture Review">Technical Architecture Review</option>
                        <option value="Partnership">Channel or Agency Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">How can our team help? *</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      required 
                      placeholder="Tell us about your tech stack, event volume, or objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary form-submit-btn" disabled={submitting}>
                    {submitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <div className="form-privacy-note">
                    <span>We respect your privacy. No marketing spam, ever.</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

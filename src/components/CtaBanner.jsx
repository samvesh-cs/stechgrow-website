import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import DashboardMockup from './DashboardMockup';
import '../styles/CtaBanner.css';

export default function CtaBanner({ 
  title = "Ready to scale your business with Stechgrow?", 
  subtitle = "Join over 10,000+ forward-thinking teams streamlining their growth operations today." 
}) {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">
          
          {/* Card Top Content */}
          <div className="cta-banner-content">
            <span className="cta-badge">
              <Sparkles size={14} /> Accelerate Your Growth
            </span>
            <h2 className="cta-title">{title}</h2>
            <p className="cta-subtitle">{subtitle}</p>

            <div className="cta-actions">
              <Link to="/pricing" className="btn-light">
                <span>Start Free 14-Day Trial</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                <span>Book a Live Demo</span>
              </Link>
            </div>

            <div className="cta-guarantees">
              <span><CheckCircle2 size={14} /> No credit card required</span>
              <span><CheckCircle2 size={14} /> Instant 5-minute setup</span>
              <span><CheckCircle2 size={14} /> Cancel anytime</span>
            </div>
          </div>

          {/* Peeking Mockup from Bottom */}
          <div className="cta-mockup-peek">
            <DashboardMockup compact={true} />
          </div>

        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, CheckCircle2, Shield, Zap, TrendingUp, 
  Layers, BarChart2, Cpu, Globe, Users, ChevronDown, ChevronUp, Star, Check
} from 'lucide-react';
import DashboardMockup from '../components/DashboardMockup';
import SectionHeader from '../components/SectionHeader';
import CtaBanner from '../components/CtaBanner';
import '../styles/Home.css';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How fast can we integrate Stechgrow with our existing stack?",
      a: "Most engineering teams are fully deployed within 15 minutes. We provide pre-built SDKs for React, Node, Python, Next.js, and direct webhooks for Stripe, Segment, and PostgreSQL."
    },
    {
      q: "What makes Stechgrow different from traditional analytics dashboards?",
      a: "Stechgrow is built as an intelligent growth engine rather than just passive charts. It unifies predictive forecasting, automated trigger workflows, and team collaboration inside one ultra-fast interface with sub-30ms global latency."
    },
    {
      q: "Can I try Stechgrow for free before committing?",
      a: "Yes! We offer a full-featured 14-day free trial on all plans without requiring a credit card. You can test real-time data ingestion and invite your entire team."
    },
    {
      q: "Is Stechgrow compliant with enterprise security standards?",
      a: "Stechgrow is SOC 2 Type II certified, ISO 27001 compliant, and GDPR ready. All data is encrypted in transit using TLS 1.3 and at rest with AES-256."
    }
  ];

  return (
    <div className="home-page-root">
      
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          
          <div className="hero-badge-wrap">
            <span className="badge-pill">
              <Sparkles size={14} /> Next-Gen SaaS Engine
            </span>
          </div>

          <h1 className="hero-title">
            Explore Cutting-Edge Tools To <span className="gradient-text">Accelerate Your Growth</span>
          </h1>

          <p className="hero-description">
            Unify real-time business telemetry, predictive AI forecasting, and automated workflow triggers inside one elegant, high-velocity workspace.
          </p>

          <div className="hero-actions">
            <Link to="/pricing" className="btn-primary hero-btn">
              <span>Start 14-Day Free Trial</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/features" className="btn-secondary hero-btn">
              <span>Explore Features</span>
            </Link>
          </div>

          <div className="hero-social-proof">
            <div className="avatar-group">
              <span className="proof-avatar av-1">JD</span>
              <span className="proof-avatar av-2">AK</span>
              <span className="proof-avatar av-3">MS</span>
              <span className="proof-avatar av-4">+</span>
            </div>
            <div className="proof-text">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span>Trusted by 10,000+ founders & engineering leads worldwide</span>
            </div>
          </div>

          {/* Interactive Dashboard Preview Frame */}
          <div className="hero-mockup-wrapper">
            <div className="floating-metric-badge float-left">
              <TrendingUp size={16} className="text-teal" />
              <div>
                <strong>+142% MoM</strong>
                <span>Conversion Velocity</span>
              </div>
            </div>

            <div className="floating-metric-badge float-right">
              <Shield size={16} className="text-rose" />
              <div>
                <strong>SOC2 Type II</strong>
                <span>Zero-Trust Security</span>
              </div>
            </div>

            <DashboardMockup />
          </div>

        </div>
      </section>

      {/* 2. Stats Strip */}
      <section className="stats-strip-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">99.99%</h3>
              <p className="stat-label">System Uptime SLA</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">500K+</h3>
              <p className="stat-label">Active Global Users</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">$180M+</h3>
              <p className="stat-label">Revenue Tracked</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">&lt;24ms</h3>
              <p className="stat-label">Global API Latency</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three-Step Process (01, 02, 03 - Matching Figma Layout) */}
      <section className="steps-section">
        <div className="container">
          <SectionHeader
            badge="HOW IT WORKS"
            title="Three steps to supercharge your operations"
            subtitle="Get up and running in minutes. Connect your stack, configure smart automated rules, and witness measurable revenue velocity."
          />

          <div className="steps-grid">
            
            {/* Step 1 - Highlighted in signature purple gradient like Figma */}
            <div className="step-card step-highlighted">
              <div className="step-card-top">
                <span className="step-tag">Step 01</span>
                <span className="step-number-giant">01</span>
              </div>
              <h3 className="step-title">Connect & Synchronize</h3>
              <p className="step-description">
                Plug in your databases, Stripe billing, customer telemetry, and CRM with pre-built native connectors in under 5 minutes.
              </p>
              <div className="step-features-list">
                <div className="step-feature-item">
                  <Check size={14} /> 100+ native cloud integrations
                </div>
                <div className="step-feature-item">
                  <Check size={14} /> Automated schema synchronization
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-card-top">
                <span className="step-tag">Step 02</span>
                <span className="step-number-giant">02</span>
              </div>
              <h3 className="step-title">Deploy Smart Triggers</h3>
              <p className="step-description">
                Define automated triggers, anomaly alerts, and dynamic customer cohorts without writing cumbersome boilerplate code.
              </p>
              <div className="step-features-list">
                <div className="step-feature-item">
                  <Check size={14} /> Real-time event evaluations
                </div>
                <div className="step-feature-item">
                  <Check size={14} /> Multi-channel team alerts
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-card-top">
                <span className="step-tag">Step 03</span>
                <span className="step-number-giant">03</span>
              </div>
              <h3 className="step-title">Scale & Maximize ROI</h3>
              <p className="step-description">
                Forecast revenue milestones, track retention patterns, and eliminate bottlenecks with deep predictive analytics.
              </p>
              <div className="step-features-list">
                <div className="step-feature-item">
                  <Check size={14} /> AI-powered revenue projections
                </div>
                <div className="step-feature-item">
                  <Check size={14} /> Executive exportable reports
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Central Tech Core / Satellite Nodes Showcase */}
      <section className="core-network-section">
        <div className="container">
          <SectionHeader
            badge="ECOSYSTEM"
            title="The Unified Intelligent Core"
            subtitle="Engineered to bridge data silos, process millions of events per second, and give your teams complete operational clarity."
          />

          <div className="network-orb-stage">
            {/* Center Orb */}
            <div className="central-orb-wrap">
              <div className="central-orb">
                <Cpu size={36} className="orb-icon" />
              </div>
              <div className="orb-pulse-ring ring-1"></div>
              <div className="orb-pulse-ring ring-2"></div>
            </div>

            {/* Satellite Feature Cards */}
            <div className="satellite-grid">
              <div className="satellite-card">
                <div className="sat-icon-wrap bg-purple"><Zap size={18} /></div>
                <h4>Real-Time Ingestion</h4>
                <p>Stream telemetry at 500k+ events/sec with zero packet loss.</p>
              </div>

              <div className="satellite-card">
                <div className="sat-icon-wrap bg-teal"><TrendingUp size={18} /></div>
                <h4>Predictive Forecasts</h4>
                <p>Machine learning models that anticipate MRR shifts 60 days ahead.</p>
              </div>

              <div className="satellite-card">
                <div className="sat-icon-wrap bg-rose"><Shield size={18} /></div>
                <h4>Zero-Trust Security</h4>
                <p>Role-based access controls and automatic end-to-end encryption.</p>
              </div>

              <div className="satellite-card">
                <div className="sat-icon-wrap bg-yellow"><Layers size={18} /></div>
                <h4>Automated Pipelines</h4>
                <p>Trigger Webhooks, Slack notifications, and CRM updates instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Signature Figma Contrast Showcase Panel (White Card) */}
      <section className="contrast-showcase-section">
        <div className="container">
          <div className="contrast-panel-wrapper">
            
            <div className="contrast-header">
              <span className="badge-pill teal">ALL-IN-ONE SOLUTION</span>
              <h2 className="contrast-title">Designed for modern product velocity</h2>
              <p className="contrast-subtitle">
                Everything your team needs to understand customer behavior, diagnose churn, and accelerate product-led growth.
              </p>
            </div>

            {/* Embedded Tablet/Display Mockup Container */}
            <div className="contrast-device-frame">
              <DashboardMockup compact={true} />
            </div>

            {/* 6 Grid Feature Cards Below Device */}
            <div className="contrast-features-grid">
              <div className="contrast-feature-card">
                <div className="cf-icon-wrap cf-purple"><BarChart2 size={20} /></div>
                <h4>Live Visual Analytics</h4>
                <p>Interactive funnel charts, cohort retention heatmaps, and custom metric builders.</p>
              </div>

              <div className="contrast-feature-card cf-active">
                <div className="cf-icon-wrap cf-teal"><Zap size={20} /></div>
                <h4>Smart Automation</h4>
                <p>Create event-triggered workflows that trigger onboarding, churn rescue, and upsells.</p>
              </div>

              <div className="contrast-feature-card">
                <div className="cf-icon-wrap cf-rose"><Globe size={20} /></div>
                <h4>Global Edge Sync</h4>
                <p>Data synced instantly across 35 edge nodes worldwide for lightning-fast speeds.</p>
              </div>

              <div className="contrast-feature-card">
                <div className="cf-icon-wrap cf-slate"><Shield size={20} /></div>
                <h4>Governance & Audit</h4>
                <p>Complete compliance logging, granular permissions, and SOC2 certification.</p>
              </div>

              <div className="contrast-feature-card">
                <div className="cf-icon-wrap cf-teal"><Users size={20} /></div>
                <h4>Team Collaboration</h4>
                <p>Shared team spaces, comment threads on metric anomalies, and automated digests.</p>
              </div>

              <div className="contrast-feature-card">
                <div className="cf-icon-wrap cf-purple"><Layers size={20} /></div>
                <h4>Developer API</h4>
                <p>GraphQL & REST APIs with 99.99% uptime SLA and comprehensive interactive documentation.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Pricing Quick Overview */}
      <section className="pricing-preview-section">
        <div className="container">
          <SectionHeader
            badge="TRANSPARENT PLANS"
            title="Scale comfortably with predictable pricing"
            subtitle="Start free with essential features, then upgrade as your data volume and team grows."
          />

          <div className="pricing-cards-row">
            {/* Starter */}
            <div className="price-card starter">
              <div className="price-badge">Starter</div>
              <div className="price-num">$19<span>/mo</span></div>
              <p className="price-desc">Ideal for early-stage builders and growing experiments.</p>
              <ul className="price-checklist">
                <li><Check size={14} className="text-teal" /> Up to 25,000 tracked events</li>
                <li><Check size={14} className="text-teal" /> 3 Team seats</li>
                <li><Check size={14} className="text-teal" /> 7-day data retention</li>
                <li><Check size={14} className="text-teal" /> Community support</li>
              </ul>
              <Link to="/pricing" className="btn-secondary w-full">Choose Starter</Link>
            </div>

            {/* Growth */}
            <div className="price-card growth popular">
              <span className="popular-tag">MOST POPULAR</span>
              <div className="price-badge">Growth</div>
              <div className="price-num">$49<span>/mo</span></div>
              <p className="price-desc">For scaling startups ready to turn analytics into revenue.</p>
              <ul className="price-checklist">
                <li><Check size={14} className="text-teal" /> Up to 250,000 tracked events</li>
                <li><Check size={14} className="text-teal" /> 10 Team seats</li>
                <li><Check size={14} className="text-teal" /> 1-year data retention</li>
                <li><Check size={14} className="text-teal" /> Predictive AI modeling</li>
                <li><Check size={14} className="text-teal" /> Priority chat support</li>
              </ul>
              <Link to="/pricing" className="btn-primary w-full">Start Free Trial</Link>
            </div>

            {/* Pro */}
            <div className="price-card pro">
              <div className="price-badge">Pro</div>
              <div className="price-num">$99<span>/mo</span></div>
              <p className="price-desc">For high-growth businesses requiring deep automation.</p>
              <ul className="price-checklist">
                <li><Check size={14} className="text-teal" /> Up to 1,000,000 tracked events</li>
                <li><Check size={14} className="text-teal" /> Unlimited team members</li>
                <li><Check size={14} className="text-teal" /> Unlimited data history</li>
                <li><Check size={14} className="text-teal" /> Custom webhooks & workflows</li>
                <li><Check size={14} className="text-teal" /> Dedicated support engineer</li>
              </ul>
              <Link to="/pricing" className="btn-secondary w-full">Upgrade to Pro</Link>
            </div>

            {/* Enterprise */}
            <div className="price-card enterprise">
              <div className="price-badge">Enterprise</div>
              <div className="price-num">Custom</div>
              <p className="price-desc">Tailored infrastructure, governance, and SLAs for large teams.</p>
              <ul className="price-checklist">
                <li><Check size={14} className="text-teal" /> Unlimited event throughput</li>
                <li><Check size={14} className="text-teal" /> Custom SLA (99.99%)</li>
                <li><Check size={14} className="text-teal" /> Dedicated VPC deployment</li>
                <li><Check size={14} className="text-teal" /> 24/7 Phone & Slack support</li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <SectionHeader
            badge="COMMON QUESTIONS"
            title="Frequently Asked Questions"
            subtitle="Have questions about stechgrow? Here is everything you need to know."
          />

          <div className="faq-accordion-wrap">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-question-btn" 
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} className="faq-chevron" /> : <ChevronDown size={20} className="faq-chevron" />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Reusable Bottom CTA Banner */}
      <CtaBanner />

    </div>
  );
}

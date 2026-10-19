import React from 'react';
import { 
  Building2, CreditCard, ShoppingCart, Briefcase, Activity, 
  Globe2, CheckCircle2, ArrowRight, Sparkles, Shield, Cpu, Zap, Layers 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import DashboardMockup from '../components/DashboardMockup';
import CtaBanner from '../components/CtaBanner';
import '../styles/Solutions.css';

export default function Solutions() {
  const industries = [
    {
      icon: <Building2 size={24} />,
      colorClass: "card-purple",
      badge: "SaaS & Tech",
      title: "SaaS & Cloud Platforms",
      desc: "Track MRR expansion, identify expansion opportunities, and stop customer churn before it impacts valuation.",
      bullets: ["Product-qualified lead detection", "Cohort retention heatmaps", "Seat utilization alerts"]
    },
    {
      icon: <CreditCard size={24} />,
      colorClass: "card-teal",
      badge: "FinTech",
      title: "FinTech & Digital Banking",
      desc: "Reconcile millions of transactions with audit-ready accuracy, sub-second latency, and bank-grade encryption.",
      bullets: ["Immutable ledger sync", "Real-time fraud heuristics", "SOC2 & PCI-DSS compliance"]
    },
    {
      icon: <ShoppingCart size={24} />,
      colorClass: "card-rose",
      badge: "E-Commerce",
      title: "Direct-to-Consumer & Retail",
      desc: "Unify omnichannel touchpoints to analyze customer acquisition cost, repeat order velocity, and inventory demand.",
      bullets: ["Cart recovery automated triggers", "LTV predictive modeling", "Multi-currency reporting"]
    },
    {
      icon: <Briefcase size={24} />,
      colorClass: "card-yellow",
      badge: "Agencies",
      title: "Digital Agencies & Consultancies",
      desc: "Manage multiple client accounts from a single unified pane of glass with automated scheduled client reporting.",
      bullets: ["Multi-tenant workspace isolation", "White-labeled dashboards", "Automated client PDF reports"]
    },
    {
      icon: <Activity size={24} />,
      colorClass: "card-teal",
      badge: "HealthTech",
      title: "Healthcare & Life Sciences",
      desc: "HIPAA-ready data telemetry platform built to securely monitor healthcare workflows and digital health apps.",
      bullets: ["HIPAA-compliant data handling", "Encrypted audit logging", "Zero-PII leakage guarantees"]
    },
    {
      icon: <Globe2 size={24} />,
      colorClass: "card-purple",
      badge: "Enterprise",
      title: "Global Enterprise Organizations",
      desc: "Custom deployment models on AWS, Azure, or GCP with dedicated VPC peering and custom enterprise SLAs.",
      bullets: ["Dedicated account engineering team", "99.99% uptime contractual SLA", "Custom machine learning models"]
    }
  ];

  return (
    <div className="solutions-page-root">
      
      {/* 1. Hero Section */}
      <section className="solutions-hero-section">
        <div className="container text-center">
          <span className="badge-pill">
            <Sparkles size={14} /> INDUSTRY SOLUTIONS
          </span>
          <h1 className="solutions-hero-title">
            Tailored Growth Engines For <span className="gradient-text">Every Modern Vertical</span>
          </h1>
          <p className="solutions-hero-desc">
            Discover how high-performing companies in SaaS, FinTech, E-Commerce, and Healthcare utilize stechgrow to outpace competitors.
          </p>
          
          <div className="solutions-mockup-stage">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* 2. Solutions Cards Grid */}
      <section className="solutions-grid-section">
        <div className="container">
          <SectionHeader
            badge="ECOSYSTEM FIT"
            title="Purpose-built for your business model"
            subtitle="Choose your industry to see how stechgrow replaces fragmented tools with one synchronized growth hub."
          />

          <div className="solutions-cards-grid">
            {industries.map((ind, i) => (
              <div key={i} className={`solution-industry-card ${ind.colorClass}`}>
                <div className="ind-header">
                  <div className="ind-icon">{ind.icon}</div>
                  <span className="ind-badge">{ind.badge}</span>
                </div>
                <h3 className="ind-title">{ind.title}</h3>
                <p className="ind-desc">{ind.desc}</p>
                <ul className="ind-bullets">
                  {ind.bullets.map((b, bi) => (
                    <li key={bi}>
                      <CheckCircle2 size={15} className="bullet-icon" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="ind-footer">
                  <span className="ind-link">
                    Explore use cases <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. High Contrast White Showcase Panel (Figma Design) */}
      <section className="solutions-white-panel-section">
        <div className="container">
          <div className="solutions-white-panel">
            <div className="sw-header">
              <span className="badge-pill teal">ENTERPRISE ARCHITECTURE</span>
              <h2>How our global network delivers sub-second insights</h2>
              <p>Designed for multi-region resilience, instant failover, and extreme event throughput.</p>
            </div>

            <div className="architecture-flow-grid">
              <div className="arch-flow-box">
                <span className="arch-step">01</span>
                <Cpu size={28} className="arch-icon text-purple" />
                <h4>Edge Data Ingestion</h4>
                <p>35 distributed edge locations ingest customer events directly near the user.</p>
              </div>

              <div className="arch-flow-box">
                <span className="arch-step">02</span>
                <Zap size={28} className="arch-icon text-teal" />
                <h4>Streaming Pipeline</h4>
                <p>Telemetry is normalized, deduplicated, and enriched in real time.</p>
              </div>

              <div className="arch-flow-box">
                <span className="arch-step">03</span>
                <Layers size={28} className="arch-icon text-rose" />
                <h4>AI Prediction Core</h4>
                <p>Machine learning models continuously evaluate churn and expansion patterns.</p>
              </div>

              <div className="arch-flow-box">
                <span className="arch-step">04</span>
                <Shield size={28} className="arch-icon text-purple" />
                <h4>Instant Automated Action</h4>
                <p>Webhooks, emails, and alerts trigger across your connected tools in milliseconds.</p>
              </div>
            </div>

            <div className="sw-stats-row">
              <div className="sw-stat"><strong>4.8x</strong><span>Average Client ROI</span></div>
              <div className="sw-stat"><strong>68%</strong><span>Faster Decision Cycles</span></div>
              <div className="sw-stat"><strong>$420M+</strong><span>Tracked ARR</span></div>
              <div className="sw-stat"><strong>99.99%</strong><span>Guaranteed SLA</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Banner */}
      <CtaBanner 
        title="Ready to transform your company's growth?"
        subtitle="Talk with our solutions architects to design a customized rollout for your stack."
      />

    </div>
  );
}

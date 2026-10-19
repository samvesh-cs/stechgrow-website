import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Sparkles, HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Zap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CtaBanner from '../components/CtaBanner';
import '../styles/Pricing.css';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  const pricingTiers = [
    {
      id: "starter",
      name: "Starter",
      badgeClass: "badge-starter",
      priceMonthly: 19,
      priceYearly: 15,
      desc: "For early stage projects and solo developers building initial traction.",
      features: [
        "Up to 25,000 monthly events",
        "3 Team member seats",
        "7-day rolling data retention",
        "Core telemetry dashboards",
        "Standard community forum support",
        "Pre-built React & Node SDKs"
      ],
      notIncluded: [
        "Predictive AI forecasting",
        "Automated webhook triggers",
        "SOC2 compliance export",
        "Dedicated account manager"
      ],
      ctaText: "Get Started Free",
      ctaLink: "/contact",
      highlight: false
    },
    {
      id: "growth",
      name: "Growth",
      badgeClass: "badge-growth",
      tag: "MOST POPULAR",
      priceMonthly: 49,
      priceYearly: 39,
      desc: "For fast-scaling product teams looking to eliminate churn and accelerate MRR.",
      features: [
        "Up to 250,000 monthly events",
        "10 Team member seats",
        "1-year historical data retention",
        "Predictive AI churn modeling",
        "Automated event trigger actions",
        "Slack & Discord live alerts",
        "Priority 24/7 in-app chat support"
      ],
      notIncluded: [
        "Custom VPC deployment",
        "Dedicated account manager"
      ],
      ctaText: "Start 14-Day Free Trial",
      ctaLink: "/contact",
      highlight: true
    },
    {
      id: "pro",
      name: "Pro",
      badgeClass: "badge-pro",
      tag: "BEST VALUE",
      priceMonthly: 99,
      priceYearly: 79,
      desc: "For mature SaaS companies requiring unlimited seats and advanced pipeline automation.",
      features: [
        "Up to 1,000,000 monthly events",
        "Unlimited team member seats",
        "Unlimited historical data retention",
        "Advanced multi-step trigger logic",
        "Custom domain & white-label reports",
        "SOC2 Type II compliance pack",
        "1-hour critical response SLA",
        "Dedicated migration assistance"
      ],
      notIncluded: [],
      ctaText: "Upgrade to Pro",
      ctaLink: "/contact",
      highlight: false
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badgeClass: "badge-enterprise",
      priceMonthly: 199,
      priceYearly: 159,
      desc: "Dedicated enterprise infrastructure, governance, and contractual SLAs.",
      features: [
        "Unlimited monthly events",
        "Unlimited team members",
        "Dedicated private VPC instance",
        "Custom Machine Learning models",
        "Custom 99.99% uptime SLA",
        "24/7 phone & Slack war room",
        "Single Sign-On (SAML / Okta)",
        "Dedicated solutions engineer"
      ],
      notIncluded: [],
      ctaText: "Contact Enterprise",
      ctaLink: "/contact",
      highlight: false
    }
  ];

  const pricingFaqs = [
    {
      q: "Can I switch plans or cancel at any time?",
      a: "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time with a single click in your billing settings. Upgrades take effect immediately with prorated billing."
    },
    {
      q: "What happens if we exceed our monthly event quota?",
      a: "We never hard-throttle your mission-critical analytics. If you cross your tier's quota, we'll notify you with friendly options to upgrade or pay an affordable pay-as-you-go micro fee."
    },
    {
      q: "Is there a free trial available?",
      a: "Yes! You can explore all Growth tier features free for 14 days without entering a credit card. At the end of the trial, you can choose any tier or revert to Starter."
    },
    {
      q: "Do you offer discounts for open-source or non-profit initiatives?",
      a: "Yes! We proudly support open-source projects, student developers, and registered non-profits with up to 50% off all paid plans. Reach out through our contact page to apply."
    }
  ];

  return (
    <div className="pricing-page-root">
      
      {/* 1. Hero Section */}
      <section className="pricing-hero-section">
        <div className="container text-center">
          <span className="badge-pill teal">
            <Sparkles size={14} /> TRANSPARENT TIERS
          </span>
          <h1 className="pricing-hero-title">
            Predictable Pricing Designed For <span className="gradient-text">Uncapped Scale</span>
          </h1>
          <p className="pricing-hero-desc">
            No hidden platform fees, no surprise invoices. Select the plan that matches your current momentum.
          </p>

          {/* Billing Switcher */}
          <div className="billing-switcher-container">
            <span className={`billing-label ${!isYearly ? 'active' : ''}`}>Monthly</span>
            <button 
              className={`switcher-track ${isYearly ? 'yearly' : 'monthly'}`} 
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Toggle annual billing discount"
            >
              <span className="switcher-thumb"></span>
            </button>
            <div className="yearly-badge-wrap">
              <span className={`billing-label ${isYearly ? 'active' : ''}`}>Annually</span>
              <span className="discount-tag">Save 20%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 Cards Row (Figma Style) */}
      <section className="pricing-matrix-section">
        <div className="container">
          <div className="pricing-cards-grid">
            {pricingTiers.map((tier) => {
              const price = isYearly ? tier.priceYearly : tier.priceMonthly;
              return (
                <div key={tier.id} className={`pricing-card-box ${tier.id} ${tier.highlight ? 'highlight-box' : ''}`}>
                  {tier.tag && <div className="tier-tag-pill">{tier.tag}</div>}
                  
                  <div className="tier-head">
                    <span className="tier-name">{tier.name}</span>
                    <div className="tier-price-row">
                      <span className="currency">$</span>
                      <span className="amount">{price}</span>
                      <span className="billing-cycle">/month</span>
                    </div>
                    {isYearly && <span className="annual-note">Billed annually (${price * 12}/yr)</span>}
                    <p className="tier-desc">{tier.desc}</p>
                  </div>

                  <Link 
                    to={tier.ctaLink} 
                    className={tier.id === 'starter' ? 'btn-secondary w-full' : (tier.highlight ? 'btn-primary w-full' : 'btn-secondary w-full')}
                  >
                    {tier.ctaText}
                  </Link>

                  <div className="tier-features-wrap">
                    <span className="features-title">What's included:</span>
                    <ul className="tier-features-list">
                      {tier.features.map((feat, fi) => (
                        <li key={fi} className="feat-available">
                          <Check size={15} className="feat-icon check-teal" />
                          <span>{feat}</span>
                        </li>
                      ))}
                      {tier.notIncluded.map((feat, ni) => (
                        <li key={ni} className="feat-disabled">
                          <X size={15} className="feat-icon text-dim" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Detailed Comparison Table */}
      <section className="comparison-table-section">
        <div className="container">
          <SectionHeader
            badge="PLAN DETAILS"
            title="Compare all capabilities"
            subtitle="Explore our granular breakdown across security, retention, team seats, and APIs."
          />

          <div className="table-responsive-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Features & Limits</th>
                  <th>Starter</th>
                  <th className="th-popular">Growth</th>
                  <th>Pro</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Event Volume</td>
                  <td>25,000</td>
                  <td className="td-popular">250,000</td>
                  <td>1,000,000</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Data History Retention</td>
                  <td>7 Days</td>
                  <td className="td-popular">1 Year</td>
                  <td>Unlimited</td>
                  <td>Custom Retention</td>
                </tr>
                <tr>
                  <td>Team Member Seats</td>
                  <td>3 Seats</td>
                  <td className="td-popular">10 Seats</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Predictive AI Forecasting</td>
                  <td>—</td>
                  <td className="td-popular"><Check size={16} className="text-teal" /></td>
                  <td><Check size={16} className="text-teal" /></td>
                  <td><Check size={16} className="text-teal" /></td>
                </tr>
                <tr>
                  <td>Event-Driven Webhook Triggers</td>
                  <td>5 Triggers</td>
                  <td className="td-popular">50 Triggers</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>SOC 2 Type II Security Report</td>
                  <td>—</td>
                  <td className="td-popular">—</td>
                  <td><Check size={16} className="text-teal" /></td>
                  <td><Check size={16} className="text-teal" /></td>
                </tr>
                <tr>
                  <td>Contractual SLA</td>
                  <td>Best Effort</td>
                  <td className="td-popular">99.9%</td>
                  <td>99.95%</td>
                  <td>99.99% Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Pricing FAQs */}
      <section className="pricing-faq-section">
        <div className="container">
          <SectionHeader
            badge="QUESTIONS & ANSWERS"
            title="Frequently Asked Questions"
            subtitle="Need assistance choosing the right tier? Our team is available 24/7."
          />

          <div className="faq-accordion-wrap">
            {pricingFaqs.map((faq, idx) => {
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

      {/* 5. Bottom CTA Banner */}
      <CtaBanner 
        title="Ready to accelerate with zero risk?"
        subtitle="Start your 14-day free trial now. No credit card required, instant cancellation."
      />

    </div>
  );
}

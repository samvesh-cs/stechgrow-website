import React, { useState } from 'react';
import { 
  Zap, TrendingUp, Shield, Layers, BarChart2, CheckCircle2, 
  ArrowRight, Sparkles, Sliders, Cpu, Activity, RefreshCw, Lock, Terminal
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import DashboardMockup from '../components/DashboardMockup';
import CtaBanner from '../components/CtaBanner';
import '../styles/Features.css';

export default function Features() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="features-page-root">
      
      {/* 1. Features Hero */}
      <section className="features-hero-section">
        <div className="container text-center">
          <span className="badge-pill teal">
            <Sparkles size={14} /> CAPABILITIES & INFRASTRUCTURE
          </span>
          <h1 className="features-hero-title">
            Engineered For Speed, Precision & <span className="gradient-text">Predictability</span>
          </h1>
          <p className="features-hero-desc">
            Discover how stechgrow's unified architecture transforms raw business telemetry into proactive growth levers and automated revenue velocity.
          </p>
          
          {/* Multi-Device Screen Showcase */}
          <div className="features-mockup-stage">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* 2. Deep Dive Alternating Modules (Purple, Teal, Gold, Rose) */}
      <section className="deep-dive-section">
        <div className="container">
          <SectionHeader
            badge="CORE ENGINES"
            title="Four pillars of intelligent scale"
            subtitle="Built from the ground up for high-throughput product and data engineering teams."
          />

          <div className="modules-stack">
            
            {/* Module 1: Purple - Real-Time Ingestion */}
            <div className="feature-module-row">
              <div className="module-text-col">
                <span className="module-pill pill-purple">DATA ENGINE</span>
                <h3 className="module-heading">Real-Time Event Streaming & Pipeline Telemetry</h3>
                <p className="module-body">
                  Eliminate batch delays. Stechgrow's distributed ingestion engine processes hundreds of thousands of user events per second with guaranteed end-to-end delivery and sub-30ms global edge propagation.
                </p>
                <ul className="module-checks">
                  <li><CheckCircle2 size={16} className="text-purple" /> Sub-millisecond distributed message queueing</li>
                  <li><CheckCircle2 size={16} className="text-purple" /> Dynamic JSON schema validation & self-healing parsing</li>
                  <li><CheckCircle2 size={16} className="text-purple" /> Direct native hooks for Postgres, Snowflake, BigQuery</li>
                </ul>
              </div>

              <div className="module-visual-col">
                <div className="widget-card widget-purple">
                  <div className="widget-header">
                    <span className="widget-title">Stream Throughput Monitor</span>
                    <span className="widget-status status-active">542,800 events/sec</span>
                  </div>
                  <div className="widget-chart-wrap">
                    <svg viewBox="0 0 400 120" className="widget-svg">
                      <path 
                        d="M0,80 Q50,30 100,60 T200,40 T300,70 T400,20 L400,120 L0,120 Z" 
                        fill="rgba(94, 92, 230, 0.2)" 
                      />
                      <path 
                        d="M0,80 Q50,30 100,60 T200,40 T300,70 T400,20" 
                        fill="none" 
                        stroke="#5E5CE6" 
                        strokeWidth="3" 
                      />
                    </svg>
                  </div>
                  <div className="widget-footer-stats">
                    <div><span>Avg Latency</span><strong>18.4ms</strong></div>
                    <div><span>Packet Loss</span><strong>0.000%</strong></div>
                    <div><span>Uptime</span><strong>100%</strong></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2: Teal - Predictive AI Forecasting */}
            <div className="feature-module-row reverse">
              <div className="module-text-col">
                <span className="module-pill pill-teal">AI & ML</span>
                <h3 className="module-heading">Predictive Cohort Modeling & Revenue Forecasting</h3>
                <p className="module-body">
                  Stop reacting to last month's churn. Our predictive regression models analyze early usage signals to forecast revenue trajectories, customer lifetime value, and contraction risks 60 days ahead.
                </p>
                <ul className="module-checks">
                  <li><CheckCircle2 size={16} className="text-teal" /> Multi-factor ARR and MRR probability trajectories</li>
                  <li><CheckCircle2 size={16} className="text-teal" /> Churn propensity scoring on customer account cohorts</li>
                  <li><CheckCircle2 size={16} className="text-teal" /> Automatic anomaly alerts sent directly to Slack</li>
                </ul>
              </div>

              <div className="module-visual-col">
                <div className="widget-card widget-teal">
                  <div className="widget-header">
                    <span className="widget-title">Projected Revenue Growth</span>
                    <span className="widget-status status-teal">+38.6% Forecast</span>
                  </div>
                  {/* Teal Bar Chart Widget */}
                  <div className="bar-chart-visual">
                    <div className="bar-col"><div className="bar-fill teal-bg" style={{ height: '45%' }}></div><span>Jul</span></div>
                    <div className="bar-col"><div className="bar-fill teal-bg" style={{ height: '60%' }}></div><span>Aug</span></div>
                    <div className="bar-col"><div className="bar-fill teal-bg" style={{ height: '55%' }}></div><span>Sep</span></div>
                    <div className="bar-col"><div className="bar-fill teal-bg" style={{ height: '80%' }}></div><span>Oct</span></div>
                    <div className="bar-col"><div className="bar-fill teal-bg active" style={{ height: '95%' }}></div><span>Nov*</span></div>
                  </div>
                  <div className="widget-footer-stats">
                    <div><span>Forecast Accuracy</span><strong>96.4%</strong></div>
                    <div><span>Model Confidence</span><strong>High</strong></div>
                    <div><span>Variance</span><strong>±1.8%</strong></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3: Gold/Yellow - Automated Workflows */}
            <div className="feature-module-row">
              <div className="module-text-col">
                <span className="module-pill pill-yellow">AUTOMATION</span>
                <h3 className="module-heading">Event-Driven Automation & Conditional Triggers</h3>
                <p className="module-body">
                  Turn customer behavioral data into real-time operational actions. Trigger personalized emails, update CRM pipelines, and spin up microservices instantly when specific event thresholds are hit.
                </p>
                <ul className="module-checks">
                  <li><CheckCircle2 size={16} className="text-yellow" /> Drag-and-drop workflow builder with branch logic</li>
                  <li><CheckCircle2 size={16} className="text-yellow" /> Over 150 pre-built action recipes for SaaS</li>
                  <li><CheckCircle2 size={16} className="text-yellow" /> Dead-letter queue with instant replay capabilities</li>
                </ul>
              </div>

              <div className="module-visual-col">
                <div className="widget-card widget-yellow">
                  <div className="widget-header">
                    <span className="widget-title">Autonomous Action Pipeline</span>
                    <span className="widget-status status-yellow">99.98% Executed</span>
                  </div>
                  <div className="pipeline-steps-visual">
                    <div className="pipeline-node node-active">
                      <span className="node-icon"><Zap size={14} /></span>
                      <div className="node-info"><strong>Trigger: Trial Expansion</strong><span>Customer reaches 80% quota</span></div>
                    </div>
                    <div className="pipeline-connector"></div>
                    <div className="pipeline-node">
                      <span className="node-icon"><Sliders size={14} /></span>
                      <div className="node-info"><strong>Condition: Enterprise ICP</strong><span>Annual revenue &gt; $500k</span></div>
                    </div>
                    <div className="pipeline-connector"></div>
                    <div className="pipeline-node">
                      <span className="node-icon"><CheckCircle2 size={14} /></span>
                      <div className="node-info"><strong>Action: Auto-Route to Account Exec</strong><span>Notify in #deals-vip Slack</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 4: Rose - Security & Governance */}
            <div className="feature-module-row reverse">
              <div className="module-text-col">
                <span className="module-pill pill-rose">SECURITY & AUDIT</span>
                <h3 className="module-heading">Zero-Trust Governance, Auditing & Compliance</h3>
                <p className="module-body">
                  Security shouldn't be an afterthought. Stechgrow delivers continuous SOC2 compliance verification, encrypted column-level masking, and granular role-based permissions designed for enterprise scrutiny.
                </p>
                <ul className="module-checks">
                  <li><CheckCircle2 size={16} className="text-rose" /> Real-time anomalous session detection and IP blacklisting</li>
                  <li><CheckCircle2 size={16} className="text-rose" /> Immutable append-only audit trail logs with cryptographic proofs</li>
                  <li><CheckCircle2 size={16} className="text-rose" /> Single Sign-On (SAML, Okta, Azure AD, Google Workspace)</li>
                </ul>
              </div>

              <div className="module-visual-col">
                <div className="widget-card widget-rose">
                  <div className="widget-header">
                    <span className="widget-title">Zero-Trust Security Monitor</span>
                    <span className="widget-status status-rose">Shield Armed</span>
                  </div>
                  <div className="security-terminal">
                    <div className="terminal-line"><span className="term-green">[PASS]</span> TLS 1.3 Cipher Negotiated (256-bit)</div>
                    <div className="terminal-line"><span className="term-green">[PASS]</span> Token MFA Validated (Okta SSO)</div>
                    <div className="terminal-line"><span className="term-purple">[INFO]</span> Column Masking applied to PII data</div>
                    <div className="terminal-line"><span className="term-green">[SECURE]</span> SOC2 Type II Continuous Check Active</div>
                  </div>
                  <div className="widget-footer-stats">
                    <div><span>Threat Level</span><strong>None (0)</strong></div>
                    <div><span>Auth Mode</span><strong>SAML 2.0</strong></div>
                    <div><span>Data at Rest</span><strong>AES-256</strong></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <CtaBanner 
        title="Ready to elevate your growth stack?"
        subtitle="Deploy stechgrow today and start making faster, data-driven decisions."
      />

    </div>
  );
}

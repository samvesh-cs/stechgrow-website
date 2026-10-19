import React, { useState } from 'react';
import { 
  TrendingUp, Users, DollarSign, Activity, Bell, Search, 
  ArrowUpRight, ArrowDownRight, Layers, BarChart3, ShieldCheck, 
  ChevronRight, RefreshCw, Filter, Sparkles
} from 'lucide-react';
import '../styles/DashboardMockup.css';

export default function DashboardMockup({ compact = false }) {
  const [activeRange, setActiveRange] = useState('1M');
  const [activeTab, setActiveTab] = useState('revenue');

  return (
    <div className={`dashboard-mockup-frame ${compact ? 'compact' : ''}`}>
      {/* Top Window Bar */}
      <div className="mockup-window-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="mockup-search-bar">
          <Search size={14} className="mockup-search-icon" />
          <span>app.stechgrow.io/analytics/live-overview</span>
        </div>
        <div className="mockup-window-actions">
          <span className="live-status-pill">
            <span className="pulse-dot"></span> LIVE
          </span>
          <Bell size={15} className="mockup-bell" />
          <div className="mockup-user-avatar">SG</div>
        </div>
      </div>

      {/* Internal Dashboard View */}
      <div className="mockup-inner-content">
        
        {/* Metric Cards Row */}
        <div className="mockup-stats-row">
          
          <div className="mockup-stat-card stat-purple">
            <div className="stat-card-header">
              <span className="stat-title">Total Revenue</span>
              <span className="stat-tag positive">+18.4%</span>
            </div>
            <div className="stat-value">$128,450.00</div>
            <div className="stat-subtext">vs $108,500 last month</div>
            {/* Visual Sparkline */}
            <div className="sparkline-bar purple-gradient"></div>
          </div>

          <div className="mockup-stat-card stat-teal">
            <div className="stat-card-header">
              <span className="stat-title">Active Users</span>
              <span className="stat-tag positive">+24.2%</span>
            </div>
            <div className="stat-value">48,920</div>
            <div className="stat-subtext">3,120 online right now</div>
            <div className="sparkline-bar teal-gradient"></div>
          </div>

          <div className="mockup-stat-card stat-rose">
            <div className="stat-card-header">
              <span className="stat-title">Conversion Rate</span>
              <span className="stat-tag positive">+3.8%</span>
            </div>
            <div className="stat-value">5.82%</div>
            <div className="stat-subtext">Industry benchmark: 2.4%</div>
            <div className="sparkline-bar rose-gradient"></div>
          </div>

          <div className="mockup-stat-card stat-slate">
            <div className="stat-card-header">
              <span className="stat-title">API Response</span>
              <span className="stat-tag neutral">22ms</span>
            </div>
            <div className="stat-value">99.99%</div>
            <div className="stat-subtext">Global CDN latency</div>
            <div className="sparkline-bar slate-gradient"></div>
          </div>

        </div>

        {/* Main Chart + Side Modules Row */}
        <div className="mockup-charts-grid">
          
          {/* Main Chart Module */}
          <div className="chart-main-panel">
            <div className="chart-panel-header">
              <div className="chart-title-wrap">
                <h4>Growth Velocity & Trajectory</h4>
                <span className="chart-subtitle">Real-time revenue forecast model</span>
              </div>
              <div className="chart-range-selector">
                {['1D', '1W', '1M', '1Y', 'ALL'].map((range) => (
                  <button
                    key={range}
                    className={`range-btn ${activeRange === range ? 'active' : ''}`}
                    onClick={() => setActiveRange(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom SVG Data Visualizer */}
            <div className="svg-chart-container">
              <svg viewBox="0 0 600 180" className="chart-svg">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5E5CE6" stopOpacity="0.45" />
                    <stop offset="70%" stopColor="#5E5CE6" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#5E5CE6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#5E5CE6" />
                    <stop offset="50%" stopColor="#2DD4BF" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="30" x2="600" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="80" x2="600" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="130" x2="600" y2="130" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                {/* Shaded Area */}
                <path
                  d="M0,140 Q 60,110 120,125 T 240,85 T 360,70 T 480,40 T 600,20 L 600,180 L 0,180 Z"
                  fill="url(#areaGradient)"
                />

                {/* Glowing Smooth Curve */}
                <path
                  d="M0,140 Q 60,110 120,125 T 240,85 T 360,70 T 480,40 T 600,20"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Active Data Node */}
                <circle cx="480" cy="40" r="6" fill="#2DD4BF" stroke="#0B0C14" strokeWidth="2.5" />
                <circle cx="480" cy="40" r="11" fill="none" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="2 2" />
              </svg>

              <div className="chart-tooltip-badge">
                <span className="tooltip-val">$118,900</span>
                <span className="tooltip-sub">Forecast +32%</span>
              </div>
            </div>

            {/* Bottom Month Marks */}
            <div className="chart-x-labels">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
            </div>
          </div>

          {/* Side Bar Metrics Panel */}
          <div className="chart-side-panel">
            <div className="side-panel-header">
              <h5>Acquisition Channels</h5>
              <span className="text-teal text-xs">Direct API</span>
            </div>

            <div className="channel-progress-list">
              <div className="channel-item">
                <div className="channel-info">
                  <span>Product Integrations</span>
                  <span className="channel-percent">48%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill fill-purple" style={{ width: '48%' }}></div>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-info">
                  <span>Direct Cloud Sync</span>
                  <span className="channel-percent">32%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill fill-teal" style={{ width: '32%' }}></div>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-info">
                  <span>Organic Referrals</span>
                  <span className="channel-percent">14%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill fill-rose" style={{ width: '14%' }}></div>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-info">
                  <span>Partner Ecosystem</span>
                  <span className="channel-percent">6%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill fill-slate" style={{ width: '6%' }}></div>
                </div>
              </div>
            </div>

            <div className="automation-status-card">
              <div className="automation-icon-wrap">
                <Sparkles size={16} className="text-teal" />
              </div>
              <div className="automation-text">
                <span className="auto-title">AI Automation Engine</span>
                <span className="auto-desc">1,842 tasks completed automatically</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

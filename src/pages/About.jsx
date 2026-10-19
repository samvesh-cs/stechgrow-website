import React from 'react';
import { 
  Heart, Target, Compass, Sparkles, Award, Users, 
  Lightbulb, ShieldCheck, Zap, Globe, Rocket, ArrowRight 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import DashboardMockup from '../components/DashboardMockup';
import CtaBanner from '../components/CtaBanner';
import '../styles/About.css';

export default function About() {
  const values = [
    {
      icon: <Target size={22} />,
      title: "Scientific Precision",
      desc: "We don't rely on gut feelings. Every insight, model, and automation is grounded in rigorous mathematical verification."
    },
    {
      icon: <Zap size={22} />,
      title: "Uncompromising Velocity",
      desc: "Speed is our ultimate moat. We design interfaces and backends that respond in milliseconds, not minutes."
    },
    {
      icon: <Heart size={22} />,
      title: "Customer Obsession",
      desc: "We build alongside our users. Your feedback directly shapes our weekly sprints and long-term product roadmap."
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Radical Transparency",
      desc: "No hidden algorithms or black boxes. Our predictive outputs are accompanied by clear confidence metrics."
    },
    {
      icon: <Sparkles size={22} />,
      title: "Design Integrity",
      desc: "Powerful enterprise tooling doesn't have to be ugly. We obsess over typography, spacing, and micro-interactions."
    },
    {
      icon: <Globe size={22} />,
      title: "Global Inclusivity",
      desc: "Our distributed team spans 14 countries, bringing diverse perspectives to solving tough infrastructure challenges."
    }
  ];

  const team = [
    {
      name: "Siddharth Gautam",
      role: "Co-Founder & CEO",
      bio: "Ex-Stripe engineering lead passionate about developer tooling and high-velocity systems.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Aarav Sharma",
      role: "Co-Founder & CTO",
      bio: "Distributed systems specialist with a background in low-latency financial trading architectures.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Elena Rostova",
      role: "Head of Product Design",
      bio: "Design systems advocate obsessing over the Geist typography, dark themes, and ergonomic UX.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Marcus Chen",
      role: "VP of AI & Research",
      bio: "PhD in Machine Learning from Stanford focused on real-time time-series forecasting.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="about-page-root">
      
      {/* 1. Hero Section */}
      <section className="about-hero-section">
        <div className="container text-center">
          <span className="badge-pill teal">
            <Sparkles size={14} /> OUR STORY & VISION
          </span>
          <h1 className="about-hero-title">
            Democratizing Intelligent Scale For <span className="gradient-text">Modern Builders</span>
          </h1>
          <p className="about-hero-desc">
            We started Stechgrow with a simple belief: growing a technology business should be guided by real-time predictive clarity, not fragmented spreadsheets and guesswork.
          </p>

          <div className="about-mockup-wrapper">
            <DashboardMockup compact={true} />
          </div>
        </div>
      </section>

      {/* 2. Key Numbers Showcase */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            <div className="astat-box">
              <h3>2021</h3>
              <p>Founded by IIT & Stanford Alumni</p>
            </div>
            <div className="astat-box">
              <h3>10,000+</h3>
              <p>High-Growth Teams Scaled</p>
            </div>
            <div className="astat-box">
              <h3>42</h3>
              <p>Countries with Active Deployments</p>
            </div>
            <div className="astat-box">
              <h3>99.99%</h3>
              <p>Contractual Uptime Maintained</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Dual Cards */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="dual-cards-grid">
            <div className="mv-card card-mission">
              <div className="mv-icon-wrap"><Target size={28} className="text-teal" /></div>
              <h2>Our Mission</h2>
              <p>
                To empower high-velocity product and engineering teams with an automated, ultra-fast growth operating system that turns passive metrics into instant competitive advantage.
              </p>
            </div>

            <div className="mv-card card-vision">
              <div className="mv-icon-wrap"><Compass size={28} className="text-purple" /></div>
              <h2>Our Vision</h2>
              <p>
                A digital future where business growth is predictable, accessible, and automated—freeing human creators to focus on high-impact invention and deep customer empathy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values (6 Cards) */}
      <section className="core-values-section">
        <div className="container">
          <SectionHeader
            badge="OUR PRINCIPLES"
            title="Values that guide every commit"
            subtitle="The fundamental standards we uphold across our engineering, product design, and customer partnerships."
          />

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership Team */}
      <section className="team-section">
        <div className="container">
          <SectionHeader
            badge="LEADERSHIP"
            title="Backed by builders & innovators"
            subtitle="Meet the team bringing deep engineering, design, and growth expertise together."
          />

          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-member-card">
                <div className="member-avatar-wrap">
                  <img src={member.avatar} alt={member.name} className="member-img" />
                </div>
                <div className="member-details">
                  <h4>{member.name}</h4>
                  <span className="member-role">{member.role}</span>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Banner */}
      <CtaBanner 
        title="Want to build the future of growth with us?"
        subtitle="Explore our open positions or start using the platform free for 14 days."
      />

    </div>
  );
}

import React from 'react';

export default function SectionHeader({ badge, title, subtitle, align = 'center', light = false, badgeColor = 'primary' }) {
  return (
    <div style={{
      textAlign: align,
      maxWidth: '720px',
      margin: align === 'center' ? '0 auto 48px auto' : '0 0 40px 0',
    }}>
      {badge && (
        <span className={`badge-pill ${badgeColor}`}>
          {badge}
        </span>
      )}
      <h2 style={{
        fontSize: 'var(--text-h2)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1.25,
        color: light ? '#0f172a' : '#ffffff',
        marginBottom: '16px'
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '16px',
          color: light ? '#64748b' : 'var(--text-muted)',
          lineHeight: 1.6,
          margin: 0
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

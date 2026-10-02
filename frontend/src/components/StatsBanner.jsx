import React from 'react';
import { Scale, ShieldCheck, Users, Star } from './Icons';

export const StatsBanner = () => {
  const stats = [
    {
      icon: <Scale size={22} className="stat-icon text-cyan" />,
      value: "150,000+",
      label: "Court Matters Tracked",
      desc: "Across High Courts & District Benches"
    },
    {
      icon: <Users size={22} className="stat-icon text-emerald" />,
      value: "4,500+",
      label: "Active Advocates & Chambers",
      desc: "Solo practitioners to multi-advocate firms"
    },
    {
      icon: <ShieldCheck size={22} className="stat-icon text-indigo" />,
      value: "100%",
      label: "On-Device Client Privilege",
      desc: "Zero unauthorized data harvesting"
    },
    {
      icon: <Star size={22} className="stat-icon text-amber" />,
      value: "4.9 / 5",
      label: "Advocate Satisfaction",
      desc: "Rated highest for cause-list reliability"
    }
  ];

  return (
    <section className="stats-banner-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-number-row">
                  <h3 className="stat-number">{stat.value}</h3>
                </div>
                <h4 className="stat-title">{stat.label}</h4>
                <p className="stat-description">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

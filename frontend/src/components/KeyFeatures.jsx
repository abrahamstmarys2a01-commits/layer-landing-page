import React, { useState } from 'react';
import { Scale, Users, Calendar, CreditCard, CheckCircle, ArrowRight, Shield, Zap, Bell, FileText } from './Icons';

export const KeyFeatures = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    {
      id: "case-management",
      icon: <Scale size={28} />,
      badge: "CNR & E-Courts Ready",
      title: "Intelligent Case Management",
      subtitle: "Track CNR numbers, court stages, petitioner & respondent details seamlessly.",
      description: "Replace messy paper records with a lightning-fast case dossier. Search by Party Name, CNR number, Advocate name, or Case Type in milliseconds.",
      highlights: [
        "16-digit CNR auto-validation and e-Courts history sync",
        "Stage tracker (Filing, Arguments, Interim Orders, Final Disposal)",
        "Instant document vault for Vakalatnama, Plaints, and Affidavits",
        "Opposite Counsel & Court Hall bench mapping"
      ],
      color: "cyan",
      tag: "CORE PILLAR"
    },
    {
      id: "junior-delegation",
      icon: <Users size={28} />,
      badge: "Team Chamber Sync",
      title: "Junior Advocate Delegation",
      subtitle: "Assign briefs, research tasks, and monitor chamber workloads in real-time.",
      description: "Empower your associates and junior advocates with clear responsibility. Assign hearing appearances, drafting tasks, and cross-examination notes with one tap.",
      highlights: [
        "Chamber task assignment with priority deadlines",
        "Role-based access: Juniors see case briefs without private billing data",
        "Real-time draft submission & Senior Advocate approval queue",
        "Hearing attendance log & junior presence confirmation"
      ],
      color: "emerald",
      tag: "PRODUCTIVITY"
    },
    {
      id: "hearing-reminders",
      icon: <Calendar size={28} />,
      badge: "Zero Missed Dates",
      title: "Automated Hearing Reminders",
      subtitle: "Daily cause lists, automated alerts, and next-date adjournment tracking.",
      description: "Never miss a single call on the board. Receive early morning daily listing digests, WhatsApp reminders, and push notifications with exact item numbers.",
      highlights: [
        "Daily cause list auto-aggregation for all your listed matters",
        "Smart Adjournment Logger with judge's interim direction remarks",
        "Customizable alert buffer (1 hour prior, 24 hours prior)",
        "Passover & Second Call status updates on mobile"
      ],
      color: "indigo",
      tag: "AUTOMATION"
    },
    {
      id: "fee-invoicing",
      icon: <CreditCard size={28} />,
      badge: "Legal Ledger & GST",
      title: "Stage-Wise Fee & Invoicing",
      subtitle: "Track client retainers, stage payment milestones, and pending dues.",
      description: "Streamline professional advocate fee collection without accounting headaches. Generate branded legal fee invoices and track stage balances in real-time.",
      highlights: [
        "Milestone billing: Filing fee, Appearance fee, Final Argument fee",
        "One-tap professional PDF invoice generation with UPI/Bank details",
        "Chamber expense logger for court fees, stamp papers & clerkage",
        "Gentle payment reminder templates via WhatsApp & SMS"
      ],
      color: "amber",
      tag: "FINANCIAL OS"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag-badge">
            <span>✨ ENGINEERED FOR LEGAL MINDS</span>
          </div>
          <h2 className="section-title">
            Everything an Advocate Needs to Run a{' '}
            <span className="gradient-text">Flawless Practice</span>
          </h2>
          <p className="section-subtitle">
            Layer App is architected specifically around the nuances of court hierarchies, 
            cause list boards, advocate junior delegation, and legal accounting.
          </p>
        </div>

        {/* 4 Flagship Feature Cards Grid */}
        <div className="features-grid">
          {features.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`feature-card card-glow-${item.color}`}
                onMouseEnter={() => setActiveFeatureIndex(index)}
              >
                {/* Header row */}
                <div className="feature-card-header">
                  <div className={`feature-icon-box bg-icon-${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="feature-badge-row">
                    <span className="feature-category-tag">{item.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="feature-title">{item.title}</h3>
                <h4 className="feature-subtitle-text">{item.subtitle}</h4>
                <p className="feature-description">{item.description}</p>

                {/* Feature Bullet Points */}
                <div className="feature-highlights-list">
                  {item.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="highlight-item">
                      <CheckCircle size={15} className={`check-icon text-${item.color}`} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom decorative accent */}
                <div className={`card-accent-bar bar-${item.color}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

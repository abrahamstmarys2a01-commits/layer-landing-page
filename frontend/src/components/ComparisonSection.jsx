import React from 'react';
import { X, CheckCircle, Scale, Smartphone } from './Icons';

export const ComparisonSection = () => {
  const points = [
    {
      aspect: "Daily Cause List Check",
      traditional: "Manually searching through huge 200-page PDF boards every morning at 8:00 AM.",
      layerApp: "Instant automated morning cause list aggregation with your listed item numbers & courtroom.",
    },
    {
      aspect: "Chamber Team & Junior Delegation",
      traditional: "Scattered WhatsApp chats, missed phone calls, and confusion over who attends what court.",
      layerApp: "Central chamber task board with clear junior assignments, draft review, and attendance tags.",
    },
    {
      aspect: "Courtroom Adjournments & Notes",
      traditional: "Scribbled paper diary notes that easily get lost, misplaced, or stained with tea.",
      layerApp: "On-device digital case dossier with judge's interim directions, CNR sync & order sheet history.",
    },
    {
      aspect: "Client Fee Milestone Tracking",
      traditional: "Forgotten retainers, awkward client payment follow-ups, and untracked court expenditures.",
      layerApp: "Stage-wise milestone ledger with automated receipt generation and gentle payment reminders.",
    },
    {
      aspect: "Data Confidentiality",
      traditional: "Open physical registers readable by anyone visiting the chamber.",
      layerApp: "Biometric app lock, encrypted local database, zero unauthorized data sharing.",
    }
  ];

  return (
    <section className="comparison-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-tag-badge">
            <span>⚖️ THE MODERN ADVOCATE'S ADVANTAGE</span>
          </div>
          <h2 className="section-title">
            Traditional Paper Diary vs.{' '}
            <span className="gradient-text">Layer App</span>
          </h2>
          <p className="section-subtitle">
            See how upgrading your legal practice eliminates human error, saves 10+ hours a week, and boosts chamber efficiency.
          </p>
        </div>

        <div className="comparison-table-wrapper glass-panel">
          <div className="comparison-table">
            <div className="comp-row comp-header-row">
              <div className="comp-col col-aspect">Practice Workflow</div>
              <div className="comp-col col-traditional">
                <span className="badge-old">TRADITIONAL PRACTICE</span>
              </div>
              <div className="comp-col col-layer">
                <span className="badge-layer">LAYER APP OS ✨</span>
              </div>
            </div>

            {points.map((pt, idx) => (
              <div key={idx} className="comp-row">
                <div className="comp-col col-aspect">
                  <strong>{pt.aspect}</strong>
                </div>
                <div className="comp-col col-traditional">
                  <div className="comp-content-cell">
                    <X size={18} className="text-rose flex-shrink-0" />
                    <span>{pt.traditional}</span>
                  </div>
                </div>
                <div className="comp-col col-layer">
                  <div className="comp-content-cell">
                    <CheckCircle size={18} className="text-emerald flex-shrink-0" />
                    <span className="text-highlight">{pt.layerApp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Scale, Users, Calendar, CreditCard, Clock, CheckCircle, Search, FileText, Download, Bell, ShieldCheck } from './Icons';

export const InteractiveAppShowcase = ({ onDownloadClick }) => {
  const [activeTab, setActiveTab] = useState('cause-list');

  const tabs = [
    { id: 'cause-list', label: 'Daily Cause List', icon: <Calendar size={18} /> },
    { id: 'case-dossier', label: 'CNR Case Dossier', icon: <Scale size={18} /> },
    { id: 'junior-board', label: 'Junior Delegation', icon: <Users size={18} /> },
    { id: 'fee-ledger', label: 'Fee & Invoicing Ledger', icon: <CreditCard size={18} /> },
  ];

  return (
    <section id="interactive-demo" className="interactive-showcase-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="section-tag-badge">
            <span>⚡ LIVE INTERACTIVE PREVIEW</span>
          </div>
          <h2 className="section-title">
            Experience Vakil Grid in <span className="gradient-text">Real-Time Action</span>
          </h2>
          <p className="section-subtitle">
            Switch between different advocate workflows below to see how Vakil Grid streamlines everyday court routines.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="showcase-tabs-container">
          <div className="showcase-tabs-pill">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`showcase-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Viewport */}
        <div className="showcase-viewport-card glass-panel">
          {activeTab === 'cause-list' && (
            <div className="demo-view demo-cause-list animate-fade-in">
              <div className="demo-view-header">
                <div className="view-title-block">
                  <span className="live-pill">TODAY'S BOARD</span>
                  <h3>Daily Cause List Digest</h3>
                  <p>Auto-aggregated hearing listings with item numbers &amp; courtroom alerts</p>
                </div>
              </div>

              <div className="cause-list-table">
                <div className="cause-row cause-row-highlight">
                  <div className="cause-item-badge">
                    <span className="item-label">ITEM</span>
                    <span className="item-number">12</span>
                  </div>
                  <div className="cause-main-info">
                    <div className="cause-meta-row">
                      <span className="court-name-tag">High Court of Delhi • Court Room 14</span>
                      <span className="time-tag">10:30 AM</span>
                    </div>
                    <h4 className="case-title-text">W.P.(C) 3901/2026 — GreenLeaf Energy Ltd. vs. Union of India</h4>
                    <p className="stage-text">Stage: <strong className="text-emerald">Final Hearing on Writ Petition</strong></p>
                  </div>
                  <div className="cause-action-col">
                    <span className="status-badge status-ready">Brief Ready</span>
                  </div>
                </div>

                <div className="cause-row">
                  <div className="cause-item-badge">
                    <span className="item-label">ITEM</span>
                    <span className="item-number">28</span>
                  </div>
                  <div className="cause-main-info">
                    <div className="cause-meta-row">
                      <span className="court-name-tag">Saket District Court • Court 04</span>
                      <span className="time-tag">01:45 PM</span>
                    </div>
                    <h4 className="case-title-text">CS (OS) 412/2025 — Rajan Khanna vs. Deepa Builders Pvt Ltd</h4>
                    <p className="stage-text">Stage: <strong className="text-cyan">Cross-Examination of PW-1</strong></p>
                  </div>
                  <div className="cause-action-col">
                    <span className="status-badge status-ready">Questionnaire Filed</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'case-dossier' && (
            <div className="demo-view demo-case-dossier animate-fade-in">
              <div className="case-dossier-header">
                <div>
                  <span className="cnr-display">CNR: DLSW010029342026</span>
                  <h3>Civil Appeal 1042/2026 — Mehta Enterprises vs. Global Transit</h3>
                </div>
                <div className="dossier-status-box">
                  <span className="status-pill-green">Active • Next Date: 18 Oct</span>
                </div>
              </div>

              <div className="dossier-details-grid">
                <div className="detail-card">
                  <span className="detail-card-label">Petitioner vs. Respondent</span>
                  <h4>Mehta Enterprises vs. Global Transit Ltd.</h4>
                  <p>Bench: Court Hall 22 • ADJ-03 Tis Hazari</p>
                </div>

                <div className="detail-card">
                  <span className="detail-card-label">Current Court Stage</span>
                  <h4>Arguments on Interim Injunction</h4>
                  <p>Purpose: Consideration of Stay Application</p>
                </div>
              </div>

              {/* Stage Progress Bar */}
              <div className="stage-stepper">
                <div className="step-item step-completed">
                  <div className="step-circle">✓</div>
                  <span>Filing</span>
                </div>
                <div className="step-line active"></div>
                <div className="step-item step-completed">
                  <div className="step-circle">✓</div>
                  <span>Notice Issued</span>
                </div>
                <div className="step-line active"></div>
                <div className="step-item step-current">
                  <div className="step-circle">3</div>
                  <span>Arguments</span>
                </div>
                <div className="step-line"></div>
                <div className="step-item">
                  <div className="step-circle">4</div>
                  <span>Final Order</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'junior-board' && (
            <div className="demo-view demo-junior-board animate-fade-in">
              <div className="junior-board-header">
                <div>
                  <span className="live-pill">CHAMBER ROSTER</span>
                  <h3>Junior Advocate Delegation</h3>
                  <p>Assign tasks, inspect briefs, and track chamber workflow in real time.</p>
                </div>
              </div>

              <div className="junior-cards-grid">
                <div className="junior-card">
                  <div className="junior-card-top">
                    <div className="junior-avatar">PS</div>
                    <div>
                      <h4>Adv. Priya Sharma</h4>
                      <span className="j-role">Associate • 3rd Year Bar</span>
                    </div>
                    <span className="workload-pill load-optimal">Active</span>
                  </div>
                  <div className="junior-task-box">
                    <div className="task-row">
                      <div className="task-bullet"></div>
                      <div className="task-content">
                        <strong>Draft Rejoinder Affidavit</strong>
                        <span>W.P.(C) 4892/2026 • Reviewing</span>
                      </div>
                      <span className="task-status-tag bg-cyan">Review</span>
                    </div>
                  </div>
                </div>

                <div className="junior-card">
                  <div className="junior-card-top">
                    <div className="junior-avatar avatar-orange">SS</div>
                    <div>
                      <h4>Adv. Santhosh</h4>
                      <span className="j-role">Junior Counsel • 1st Year</span>
                    </div>
                    <span className="workload-pill load-optimal">Active</span>
                  </div>
                  <div className="junior-task-box">
                    <div className="task-row">
                      <div className="task-bullet"></div>
                      <div className="task-content">
                        <strong>Passover &amp; Board Mentioning</strong>
                        <span>Court 14, Delhi HC • Completed</span>
                      </div>
                      <span className="task-status-tag bg-emerald">Done</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fee-ledger' && (
            <div className="demo-view demo-fee-ledger animate-fade-in">
              <div className="ledger-header-row">
                <div>
                  <span className="live-pill">FEE LEDGER</span>
                  <h3>Stage-Wise Milestone Billing</h3>
                  <p>Track retainers, stage fee milestones, and payment receipts.</p>
                </div>
              </div>

              <div className="ledger-table">
                <div className="ledger-row">
                  <div className="client-info-col">
                    <h4>Horizon Technologies Pvt. Ltd.</h4>
                    <span>W.P.(C) 4892/2026 • High Court of Delhi</span>
                  </div>
                  <div className="stage-milestone-col">
                    <span className="milestone-name">Milestone: Final Arguments</span>
                    <span className="milestone-status text-emerald">Invoice #INV-2026-092</span>
                  </div>
                  <div className="amount-col">
                    <span className="amount-value">₹75,000</span>
                    <span className="payment-status paid-pill">PAID (UPI)</span>
                  </div>
                </div>

                <div className="ledger-row">
                  <div className="client-info-col">
                    <h4>Rajan Khanna (Property Dispute)</h4>
                    <span>CS (OS) 412/2025 • Saket District Court</span>
                  </div>
                  <div className="stage-milestone-col">
                    <span className="milestone-name">Milestone: Cross-Examination Evidence</span>
                    <span className="milestone-status text-amber">Payment Reminder Sent</span>
                  </div>
                  <div className="amount-col">
                    <span className="amount-value">₹45,000</span>
                    <span className="payment-status pending-pill">DUE</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

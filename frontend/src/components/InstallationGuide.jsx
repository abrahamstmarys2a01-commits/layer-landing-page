import React from 'react';
import { Download, Smartphone, CheckCircle, ShieldCheck, Zap, ArrowRight, HelpCircle } from './Icons';
import { APK_CONFIG } from '../config/downloadConfig';

export const InstallationGuide = ({ onDownloadClick }) => {
  const steps = [
    {
      stepNumber: "01",
      icon: <Download size={32} className="step-icon text-cyan" />,
      title: "Download Layer APK",
      badge: "Direct Download",
      description: `Click the 'Download Android APK' button on this page. The official verified package \`${APK_CONFIG.fileName}\` (${APK_CONFIG.fileSize}) will save directly to your device downloads folder.`,
      tip: "Takes ~10 seconds on regular 4G/5G/Wi-Fi."
    },
    {
      stepNumber: "02",
      icon: <Smartphone size={32} className="step-icon text-emerald" />,
      title: "Allow Unknown Apps",
      badge: "One-Time Permission",
      description: "Tap the downloaded APK from your phone notifications. If prompted by Android security, tap 'Settings' and toggle on 'Allow from this source' (Chrome / Files).",
      tip: "Standard Android protocol for direct APK installs. 100% safe & virus-free."
    },
    {
      stepNumber: "03",
      icon: <CheckCircle size={32} className="step-icon text-indigo" />,
      title: "Open & Setup Chamber",
      badge: "Ready to Practice",
      description: "Tap 'Install', then launch Layer App. Enter your advocate profile, import your active cases or CNR numbers, and begin experiencing seamless case management.",
      tip: "You can delegate matters to juniors right after login!"
    }
  ];

  return (
    <section id="installation" className="installation-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag-badge">
            <span>📲 SIMPLE 3-STEP SETUP</span>
          </div>
          <h2 className="section-title">
            How to Install <span className="gradient-text">Layer App</span> on Android
          </h2>
          <p className="section-subtitle">
            Get up and running in less than 2 minutes. Follow these simple steps to install the latest {APK_CONFIG.version} APK on any Android phone or tablet.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card glass-panel">
              <div className="step-card-header">
                <span className="step-num-pill">{step.stepNumber}</span>
                <span className="step-badge">{step.badge}</span>
              </div>

              <div className="step-icon-container">
                {step.icon}
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>

              <div className="step-tip-box">
                <ShieldCheck size={16} className="tip-icon text-emerald" />
                <span><strong>Note:</strong> {step.tip}</span>
              </div>

              {idx < steps.length - 1 && (
                <div className="step-connector-arrow">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Security & Verification Banner */}
        <div className="install-security-banner glass-panel">
          <div className="banner-left">
            <div className="shield-badge-icon">
              <ShieldCheck size={28} className="text-emerald" />
            </div>
            <div className="banner-text">
              <h4>Play Protect &amp; Security Verified APK</h4>
              <p>Built with end-to-end sandbox security. No invasive permissions (Camera/Location optional, only on explicit user request for document scanning).</p>
            </div>
          </div>
          <div className="banner-right">
            <a
              href={APK_CONFIG.downloadUrl}
              download={APK_CONFIG.fileName}
              className="install-now-btn"
              onClick={onDownloadClick}
            >
              <Download size={18} />
              <span>Download APK ({APK_CONFIG.fileSize})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

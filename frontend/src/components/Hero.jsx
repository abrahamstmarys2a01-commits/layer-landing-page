import React from 'react';
import { Download, Android, ShieldCheck, Sparkles, Scale, Clock, Users, Bell, FileText, CheckCircle } from './Icons';

export const Hero = ({ onDownloadClick }) => {
  const scrollToDemo = () => {
    const demoElement = document.getElementById('interactive-demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Ambient background glows */}
      <div className="hero-ambient-glow glow-cyan"></div>
      <div className="hero-ambient-glow glow-emerald"></div>
      <div className="hero-ambient-glow glow-indigo"></div>

      <div className="hero-container">
        {/* Left Column: Hero Copy & CTA */}
        <div className="hero-content">
          {/* Release Badge */}
          <div className="hero-badge">
            <span className="badge-pulse-dot"></span>
            <span className="badge-text">v1.0.0 Android Release</span>
            <span className="badge-divider">•</span>
            <span className="badge-highlight">Tailored for Indian & Global Advocates</span>
          </div>

          {/* Catchy Main Headline */}
          <h1 className="hero-headline">
            Smart Legal Practice &amp;{' '}
            <span className="gradient-text">Case Management</span>{' '}
            for <span className="gradient-accent-text">Advocates</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Effortlessly manage court cases, junior advocates, hearing dates, and client billing on your Android device. 
            Ditch cumbersome paper diaries for a smart, secure, on-device mobile chamber.
          </p>

          {/* CTA Group */}
          <div className="hero-cta-wrapper">
            <div className="hero-cta-primary-box">
              <a
                href="/app-release.apk"
                download="LayerApp.apk"
                className="hero-download-btn"
                onClick={onDownloadClick}
                id="hero-primary-download-btn"
              >
                <div className="btn-icon-box">
                  <Download size={22} className="download-bounce-icon" />
                </div>
                <div className="btn-text-content">
                  <span className="btn-title">Download Android APK</span>
                  <span className="btn-subtitle">Direct safe download • v1.0.0</span>
                </div>
                <div className="btn-shine"></div>
              </a>
            </div>

            {/* File Info Badge */}
            <div className="file-info-badge">
              <div className="info-badge-item">
                <Android size={14} className="info-icon text-emerald" />
                <span>Android 8.0+</span>
              </div>
              <span className="info-dot">•</span>
              <div className="info-badge-item">
                <span className="file-size-tag">~103 MB</span>
              </div>
              <span className="info-dot">•</span>
              <div className="info-badge-item">
                <ShieldCheck size={14} className="info-icon text-cyan" />
                <span className="verified-text">Safe &amp; Secure APK</span>
              </div>
            </div>
          </div>

          {/* Trust Highlights */}
          <div className="hero-trust-bar">
            <div className="trust-pill">
              <ShieldCheck size={16} className="trust-icon" />
              <span>100% Client Privacy</span>
            </div>
            <div className="trust-pill">
              <Scale size={16} className="trust-icon" />
              <span>High Court &amp; District Bench Ready</span>
            </div>
            <div className="trust-pill">
              <Sparkles size={16} className="trust-icon" />
              <span>Zero-Lag Offline Mode</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive App Mockup Showcase */}
        <div className="hero-visual">
          <div className="mockup-frame-wrapper">
            {/* Ambient Back Glow */}
            <div className="mockup-back-glow"></div>

            {/* Floating Badges */}
            <div className="floating-badge badge-top-left animate-float-slow">
              <div className="floating-badge-icon bg-emerald">
                <CheckCircle size={16} />
              </div>
              <div className="floating-badge-text">
                <strong>Firm Command Center</strong>
                <span>All Benches Active • 09:15 AM</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-right animate-float-fast">
              <div className="floating-badge-icon bg-cyan">
                <Users size={16} />
              </div>
              <div className="floating-badge-text">
                <strong>Active Junior Roster</strong>
                <span>100% On-Duty • Santhosh Active</span>
              </div>
            </div>

            {/* Real Layer App Device Mockup */}
            <div className="app-real-mockup-container">
              <img
                src="/app-mockup.png"
                alt="Layer App Mobile Dashboard"
                className="app-mockup-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

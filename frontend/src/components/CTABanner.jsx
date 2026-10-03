import React from 'react';
import { Download, Android, ShieldCheck, Sparkles, Scale } from './Icons';

export const CTABanner = ({ onDownloadClick }) => {
  return (
    <section className="cta-banner-section">
      <div className="section-container">
        <div className="cta-banner-card glass-panel">
          {/* Ambient Glows */}
          <div className="cta-ambient-glow cta-glow-cyan"></div>
          <div className="cta-ambient-glow cta-glow-emerald"></div>

          <div className="cta-banner-content">
            <div className="cta-pill-badge">
              <Sparkles size={14} className="text-emerald" />
              <span>TRANSFORM YOUR LEGAL PRACTICE TODAY</span>
            </div>

            <h2 className="cta-banner-title">
              Ready to Upgrade Your Chamber to{' '}
              <span className="gradient-text">Next-Gen Case Management?</span>
            </h2>

            <p className="cta-banner-subtitle">
              Join 4,500+ advocates who start their court day with zero stress, automated cause lists, and seamless junior coordination.
            </p>

            <div className="cta-buttons-row">
              <a
                href="/app-release.apk"
                download="LayerApp.apk"
                className="cta-primary-download-btn"
                onClick={onDownloadClick}
              >
                <Download size={20} className="download-bounce-icon" />
                <div className="btn-copy">
                  <span className="btn-main">Download Android APK (v1.0.0)</span>
                  <span className="btn-sub">Direct ~103 MB Package • 100% Free Trial</span>
                </div>
              </a>
            </div>

            <div className="cta-trust-tags">
              <span>✓ Instant e-Courts CNR Sync</span>
              <span>✓ High Court &amp; District Bench Ready</span>
              <span>✓ 100% Encrypted &amp; Offline Capable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

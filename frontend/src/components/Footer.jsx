import React from 'react';
import { Scale, Download, Android, ShieldCheck, ExternalLink } from './Icons';

export const Footer = ({ onDownloadClick }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="support" className="app-footer">
      <div className="section-container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img src="/layer-logo.png" alt="Layer App Logo" className="footer-logo-img" />
              <div className="brand-text-block">
                <span className="brand-name">Layer <span className="brand-gradient">App</span></span>
                <span className="brand-badge">FOR ADVOCATES</span>
              </div>
            </div>
            <p className="footer-desc">
              The premier mobile legal practice and case management platform designed for advocates, solicitors, law firms, and legal chambers.
            </p>
            <div className="footer-badge-item">
              <ShieldCheck size={16} className="text-emerald" />
              <span>Advocate-Client Privilege Safe • 256-Bit Encrypted</span>
            </div>

            {/* Prominent Provided by Media Wave Technologies on the Left */}
            <div className="footer-provider-block">
              <span className="provider-label">Provided by</span>
              <img src="/media-wave-logo.png" alt="Media Wave Technologies" className="media-wave-logo-img" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => scrollTo('hero')}>Home</button></li>
              <li><button onClick={() => scrollTo('features')}>Key Features</button></li>
              <li><button onClick={() => scrollTo('interactive-demo')}>Live Demo Simulator</button></li>
              <li><button onClick={() => scrollTo('installation')}>How to Install APK</button></li>
              <li><button onClick={() => scrollTo('faq')}>FAQ &amp; Security</button></li>
            </ul>
          </div>

          {/* Features */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Core Modules</h4>
            <ul className="footer-links-list">
              <li><span>CNR Case History Sync</span></li>
              <li><span>Daily Cause List Boards</span></li>
              <li><span>Junior Chamber Delegation</span></li>
              <li><span>Milestone Legal Fee Invoicing</span></li>
              <li><span>Court Hearing Alerts</span></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Advocate Support</h4>
            <p className="contact-text">Have questions or need assistance onboarding your chamber?</p>
            <div className="contact-email-card">
              <span className="email-label">Official Support Desk:</span>
              <a href="mailto:support@layerapp.legal" className="email-link">support@layerapp.legal</a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="footer-bottom-bar">
          <div className="disclaimer-note">
            <strong>Bar Council &amp; Compliance Note:</strong> Layer App is a legal productivity and case management tool for advocates and law offices. It does not solicit legal work or provide legal advice to litigants.
          </div>

          <div className="copyright-row">
            <p>© {new Date().getFullYear()} Layer App. All rights reserved.</p>
            <div className="bottom-links">
              <span>Privacy Policy</span>
              <span className="divider">•</span>
              <span>Terms of Service</span>
              <span className="divider">•</span>
              <span>Security Whitepaper</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

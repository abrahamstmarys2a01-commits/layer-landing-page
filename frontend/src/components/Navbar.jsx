import React, { useState, useEffect } from 'react';
import { Scale, Download, Menu, X, Android, Sparkles } from './Icons';

export const Navbar = ({ onDownloadClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <div className="brand-icon-wrapper">
            <img src="/layer-logo.png" alt="Layer App Logo" className="brand-logo-img" />
            <div className="brand-glow-effect"></div>
          </div>
          <div className="brand-text-block">
            <span className="brand-name">Layer <span className="brand-gradient">App</span></span>
            <span className="brand-badge">FOR ADVOCATES</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-links">
          <button onClick={() => scrollToSection('features')} className="nav-link-btn">Features</button>
          <button onClick={() => scrollToSection('interactive-demo')} className="nav-link-btn">Interactive Demo</button>
          <button onClick={() => scrollToSection('installation')} className="nav-link-btn">How to Install</button>
          <button onClick={() => scrollToSection('faq')} className="nav-link-btn">FAQ</button>
          <button onClick={() => scrollToSection('support')} className="nav-link-btn">Support</button>
        </nav>

        {/* Navbar Actions */}
        <div className="navbar-actions">
          <a
            href="/layer-app.apk"
            download="LayerApp.apk"
            className="nav-cta-btn"
            onClick={onDownloadClick}
          >
            <Android size={16} className="btn-icon" />
            <span>Download APK</span>
            <span className="btn-version-tag">v1.0</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-drawer-links">
            <button onClick={() => scrollToSection('features')} className="mobile-nav-link">
              ⚖️ Core Features
            </button>
            <button onClick={() => scrollToSection('interactive-demo')} className="mobile-nav-link">
              ⚡ Interactive Chamber Demo
            </button>
            <button onClick={() => scrollToSection('installation')} className="mobile-nav-link">
              📲 3-Step APK Installation
            </button>
            <button onClick={() => scrollToSection('faq')} className="mobile-nav-link">
              ❓ Frequently Asked Questions
            </button>
            <button onClick={() => scrollToSection('support')} className="mobile-nav-link">
              📞 Advocate Support
            </button>
            <div className="mobile-drawer-actions">
              <a
                href="/layer-app.apk"
                download="LayerApp.apk"
                className="mobile-download-btn"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  onDownloadClick(e);
                }}
              >
                <Download size={18} />
                <span>Download Android APK (35 MB)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

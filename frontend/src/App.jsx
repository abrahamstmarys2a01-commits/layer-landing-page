import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { KeyFeatures } from './components/KeyFeatures';
import { InteractiveAppShowcase } from './components/InteractiveAppShowcase';
import { ComparisonSection } from './components/ComparisonSection';
import { InstallationGuide } from './components/InstallationGuide';
import { FAQSection } from './components/FAQSection';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { DownloadToast } from './components/DownloadToast';
import './App.css';

export function App() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleDownloadClick = () => {
    setIsToastVisible(true);
    // Auto-hide toast after 6 seconds
    setTimeout(() => {
      setIsToastVisible(false);
    }, 6000);
  };

  return (
    <div className="app-layout">
      {/* Navbar */}
      <Navbar onDownloadClick={handleDownloadClick} />

      <main className="main-content">
        {/* Hero Section */}
        <Hero onDownloadClick={handleDownloadClick} />

        {/* Stats & Trust Metrics */}
        <StatsBanner />

        {/* 4 Flagship Key Features */}
        <KeyFeatures />

        {/* Interactive Chamber Simulation */}
        <InteractiveAppShowcase onDownloadClick={handleDownloadClick} />

        {/* Diary vs Layer App Comparison */}
        <ComparisonSection />

        {/* 3-Step APK Installation Guide */}
        <InstallationGuide onDownloadClick={handleDownloadClick} />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* High Conversion CTA Banner */}
        <CTABanner onDownloadClick={handleDownloadClick} />
      </main>

      {/* Footer */}
      <Footer onDownloadClick={handleDownloadClick} />

      {/* Floating Download Notification */}
      <DownloadToast
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}

export default App;

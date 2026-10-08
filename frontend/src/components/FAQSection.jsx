import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from './Icons';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is it safe to download and install this APK on my Android phone?",
      a: "Yes, 100%. The Vakil Grid APK (`VakilGrid.apk`) is digitally signed, sandboxed, and verified against viruses/malware. When Android shows 'Install unknown apps', it is a standard security prompt for apps downloaded outside Google Play Store. Simply allow permission to install."
    },
    {
      q: "Is my confidential client case data private and secure?",
      a: "Absolutely. Vakil Grid follows strict advocate-client legal privilege protocols. Your case files, party names, CNR notes, and fee ledgers are encrypted with 256-bit AES encryption on your local device. We never sell, scrape, or mine advocate databases."
    },
    {
      q: "Can my junior advocates view cases without seeing my private fees & billing?",
      a: "Yes. Vakil Grid includes comprehensive Role-Based Access Control (RBAC). Senior Advocates can delegate briefs, hearing notes, and drafting tasks to juniors, while keeping the Fee, Ledger, and Invoicing tab strictly restricted and password/biometric protected."
    },
    {
      q: "Does Vakil Grid work without active internet inside courtroom basements?",
      a: "Yes. Vakil Grid has a robust Offline-First architecture. You can browse all your case records, client phone numbers, saved cause lists, and draft notes without any network connectivity. As soon as you step outside, all updates sync automatically."
    },
    {
      q: "How do I update Vakil Grid when a new version is released?",
      a: "Vakil Grid includes a built-in In-App Updater. Whenever a new feature or court algorithm improvement is rolled out, you will receive a clean notification inside the app to update with a single tap."
    },
    {
      q: "Can I export my daily cause lists, case dossiers, and bills to PDF?",
      a: "Yes. With one tap, you can generate beautifully formatted cause list sheets for your chamber notice board, case history chronologies for client meetings, and GST-compliant tax invoices in PDF format."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-tag-badge">
            <span>❓ FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="section-title">
            Everything You Need to <span className="gradient-text">Know</span>
          </h2>
          <p className="section-subtitle">
            Have questions about APK security, data confidentiality, or junior delegation? We've got you covered.
          </p>
        </div>

        <div className="faq-accordion-wrapper">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item glass-panel ${isOpen ? 'faq-item-open' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="faq-question-row">
                  <div className="faq-q-text">
                    <span className="faq-num">0{idx + 1}.</span>
                    <h4>{faq.q}</h4>
                  </div>
                  <div className={`faq-chevron-icon ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </div>

                {isOpen && (
                  <div className="faq-answer-block animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

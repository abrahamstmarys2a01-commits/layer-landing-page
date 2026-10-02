import React from 'react';
import { Star, ShieldCheck, Scale } from './Icons';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Adv. Raghavendra Rao",
      role: "Senior Advocate, High Court of Karnataka",
      experience: "24 Years at Bar",
      rating: 5,
      quote: "Layer App completely transformed our chamber. Earlier, 30 minutes every morning were wasted cross-referencing cause lists. Now, my juniors and I get instant notifications on our listed item numbers.",
      avatarBg: "#0ea5e9"
    },
    {
      name: "Adv. Sunita Deshmukh",
      role: "Managing Partner, Deshmukh & Associates Law Chambers",
      experience: "16 Years at Bar",
      rating: 5,
      quote: "The junior delegation module is brilliant. I can assign bail applications, draft rejoinders, and check if my associate has entered the courtroom without endless phone calls.",
      avatarBg: "#10b981"
    },
    {
      name: "Adv. Vikramjit Singh",
      role: "Criminal Defense & Trial Counsel, Delhi Courts",
      experience: "11 Years at Bar",
      rating: 5,
      quote: "Stage-wise fee tracking ensures we never lose track of pending retainers. The app is clean, lightning fast, and works seamlessly even in basement court libraries.",
      avatarBg: "#8b5cf6"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-tag-badge">
            <span>⭐ TRUSTED BY THE LEGAL FRATERNITY</span>
          </div>
          <h2 className="section-title">
            Loved by Advocates Across <span className="gradient-text">High Courts &amp; Benches</span>
          </h2>
          <p className="section-subtitle">
            From busy trial lawyers to high-volume multi-advocate law chambers, see why counsel rely on Layer App every single morning.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card glass-panel">
              <div className="stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-icon text-amber" />
                ))}
              </div>

              <p className="testimonial-quote">"{rev.quote}"</p>

              <div className="testimonial-author-row">
                <div className="author-avatar" style={{ backgroundColor: rev.avatarBg }}>
                  {rev.name.split(' ').slice(1).map(n => n[0]).join('') || 'AD'}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{rev.name}</h4>
                  <span className="author-role">{rev.role}</span>
                  <span className="author-exp">{rev.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

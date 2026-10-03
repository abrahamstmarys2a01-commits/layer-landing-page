import React from 'react';
import { Download, CheckCircle, X, ShieldCheck } from './Icons';

export const DownloadToast = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="download-toast-container animate-slide-up">
      <div className="toast-card glass-panel">
        <div className="toast-icon-wrapper bg-emerald">
          <Download size={20} className="text-white" />
        </div>

        <div className="toast-content">
          <div className="toast-title-row">
            <h4>Downloading LayerApp.apk</h4>
            <span className="toast-version-badge">v1.0.0</span>
          </div>
          <p className="toast-desc">
            Your ~103 MB download has started. Check notifications or Downloads folder to install.
          </p>
          <div className="toast-meta">
            <ShieldCheck size={14} className="text-emerald" />
            <span>Verified safe • Android 8.0+</span>
          </div>
        </div>

        <button className="toast-close-btn" onClick={onClose} aria-label="Close notification">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

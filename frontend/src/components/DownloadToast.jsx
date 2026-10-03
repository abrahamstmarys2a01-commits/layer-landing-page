import React from 'react';
import { Download, CheckCircle, X, ShieldCheck } from './Icons';
import { APK_CONFIG } from '../config/downloadConfig';

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
            <h4>Downloading {APK_CONFIG.fileName}</h4>
            <span className="toast-version-badge">{APK_CONFIG.version}</span>
          </div>
          <p className="toast-desc">
            Your {APK_CONFIG.fileSize} download has started. Check notifications or Downloads folder to install.
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

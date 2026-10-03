import React from 'react';
import { X, Smartphone, Download, ShieldCheck } from './Icons';

export const QRModal = ({ isOpen, onClose, onDownloadClick }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header text-center">
          <div className="modal-icon-badge">
            <Smartphone size={28} className="text-cyan" />
          </div>
          <h3 className="modal-title">Scan to Download on Android</h3>
          <p className="modal-subtitle">Point your phone's camera at the QR code below to download <strong>LayerApp.apk</strong> directly.</p>
        </div>

        {/* QR Code Presentation */}
        <div className="qr-display-box">
          <div className="qr-frame">
            {/* High visual quality geometric QR representation */}
            <svg viewBox="0 0 200 200" className="qr-svg-code">
              {/* White background */}
              <rect width="200" height="200" fill="#FFFFFF" rx="12" />
              
              {/* Corner Position Markers */}
              {/* Top Left */}
              <rect x="20" y="20" width="50" height="50" fill="#0A0F1D" rx="6" />
              <rect x="28" y="28" width="34" height="34" fill="#FFFFFF" rx="3" />
              <rect x="36" y="36" width="18" height="18" fill="#00F2FE" rx="2" />

              {/* Top Right */}
              <rect x="130" y="20" width="50" height="50" fill="#0A0F1D" rx="6" />
              <rect x="138" y="28" width="34" height="34" fill="#FFFFFF" rx="3" />
              <rect x="146" y="36" width="18" height="18" fill="#00F2FE" rx="2" />

              {/* Bottom Left */}
              <rect x="20" y="130" width="50" height="50" fill="#0A0F1D" rx="6" />
              <rect x="28" y="138" width="34" height="34" fill="#FFFFFF" rx="3" />
              <rect x="36" y="146" width="18" height="18" fill="#00F2FE" rx="2" />

              {/* Data Blocks Grid */}
              <rect x="80" y="25" width="12" height="12" fill="#0A0F1D" />
              <rect x="100" y="25" width="12" height="12" fill="#0A0F1D" />
              <rect x="85" y="45" width="25" height="10" fill="#0A0F1D" />
              <rect x="80" y="65" width="15" height="15" fill="#0A0F1D" />
              <rect x="105" y="65" width="12" height="12" fill="#0A0F1D" />

              <rect x="25" y="80" width="12" height="12" fill="#0A0F1D" />
              <rect x="45" y="85" width="18" height="10" fill="#0A0F1D" />
              <rect x="75" y="90" width="20" height="12" fill="#00C9A7" />
              <rect x="105" y="85" width="15" height="20" fill="#0A0F1D" />
              <rect x="130" y="80" width="15" height="12" fill="#0A0F1D" />
              <rect x="155" y="85" width="20" height="15" fill="#0A0F1D" />

              <rect x="25" y="105" width="20" height="12" fill="#0A0F1D" />
              <rect x="55" y="105" width="15" height="15" fill="#0A0F1D" />
              <rect x="80" y="115" width="25" height="12" fill="#0A0F1D" />
              <rect x="115" y="115" width="18" height="12" fill="#00F2FE" />
              <rect x="145" y="110" width="30" height="12" fill="#0A0F1D" />

              <rect x="80" y="140" width="15" height="25" fill="#0A0F1D" />
              <rect x="105" y="135" width="22" height="12" fill="#0A0F1D" />
              <rect x="135" y="135" width="15" height="15" fill="#0A0F1D" />
              <rect x="160" y="140" width="15" height="20" fill="#0A0F1D" />
              <rect x="105" y="155" width="20" height="20" fill="#00C9A7" />
              <rect x="135" y="160" width="25" height="15" fill="#0A0F1D" />

              {/* Center Logo Emblem */}
              <circle cx="100" cy="100" r="22" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
              <image href="/layer-logo.png" x="80" y="80" width="40" height="40" clipPath="url(#qrLogoClip)" />
              <clipPath id="qrLogoClip">
                <circle cx="100" cy="100" r="19" />
              </clipPath>
            </svg>
            <div className="qr-scan-line"></div>
          </div>

          <div className="qr-instructions">
            <div className="inst-step">
              <span className="inst-num">1</span>
              <span>Open Camera or Google Lens on Android</span>
            </div>
            <div className="inst-step">
              <span className="inst-num">2</span>
              <span>Point lens at the QR code above</span>
            </div>
            <div className="inst-step">
              <span className="inst-num">3</span>
              <span>Tap the download banner to get APK</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="/app-release.apk"
            download="LayerApp.apk"
            className="modal-direct-dl-btn"
            onClick={(e) => {
              onDownloadClick(e);
              onClose();
            }}
          >
            <Download size={16} />
            <span>Download Directly on this Device (103 MB)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { X, Smartphone, Download, ShieldCheck } from './Icons';
import { APK_CONFIG } from '../config/downloadConfig';

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
          <p className="modal-subtitle">Point your phone's camera at the QR code below to download <strong>{APK_CONFIG.fileName}</strong> directly.</p>
        </div>

        {/* QR Code Presentation */}
        <div className="qr-display-box">
          <div className="qr-frame">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(typeof window !== 'undefined' ? `${window.location.origin}${APK_CONFIG.downloadUrl}` : 'https://vakilgrid.legal/VakilGrid.apk')}`}
              alt="Scan QR to Download APK"
              className="qr-img-code"
              style={{ width: '200px', height: '200px', borderRadius: '12px', background: '#ffffff', padding: '6px' }}
              onError={(e) => {
                // Fallback if offline
                e.target.style.display = 'none';
              }}
            />
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
            href={APK_CONFIG.downloadUrl}
            download={APK_CONFIG.fileName}
            className="modal-direct-dl-btn"
            onClick={(e) => {
              onDownloadClick(e);
              onClose();
            }}
          >
            <Download size={16} />
            <span>Download Directly on this Device ({APK_CONFIG.fileSize})</span>
          </a>
        </div>
      </div>
    </div>
  );
};

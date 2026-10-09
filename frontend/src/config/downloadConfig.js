// Centralized APK Download Configuration
export const APK_CONFIG = {
  version: "v1.0.0",
  fileSize: "~62 MB",
  fileName: "VakilGrid.apk",
  // Direct APK file hosted in web public root (Reliable, fast, avoids 404 HTML parse errors)
  downloadUrl: "/VakilGrid.apk",
  fallbackUrl: "/app-release.apk"
};

/**
 * Helper to trigger direct, robust APK download
 */
export const triggerApkDownload = () => {
  try {
    const link = document.createElement('a');
    link.href = APK_CONFIG.downloadUrl;
    link.setAttribute('download', APK_CONFIG.fileName);
    link.setAttribute('type', 'application/vnd.android.package-archive');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    // Fallback direct window location change if DOM append fails
    window.location.href = APK_CONFIG.downloadUrl;
  }
};


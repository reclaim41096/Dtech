// Decorative, non-clickable "image" style illustrations used in place of
// plain icons on the home page service cards and the services page panels.
// Pure inline SVG (no external image files), sized to fill their container
// via viewBox while keeping their own aspect ratio (no distortion).

export function WebsiteGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="#eef3ff" stroke="#dce7ff" strokeWidth="2" />
      <rect x="4" y="4" width="152" height="22" rx="10" fill="#dce7ff" />
      <rect x="4" y="16" width="152" height="10" fill="#dce7ff" />
      <circle cx="16" cy="15" r="3" fill="#1e4fd8" />
      <circle cx="26" cy="15" r="3" fill="#1e4fd8" opacity="0.55" />
      <circle cx="36" cy="15" r="3" fill="#1e4fd8" opacity="0.3" />
      <rect x="16" y="38" width="128" height="32" rx="6" fill="#dce7ff" />
      <rect x="16" y="78" width="58" height="8" rx="4" fill="#1e4fd8" />
      <rect x="16" y="92" width="88" height="6" rx="3" fill="#b9c8f2" />
      <rect x="86" y="78" width="56" height="8" rx="4" fill="#0a1f57" opacity="0.18" />
    </svg>
  );
}

export function SocialGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <rect x="46" y="4" width="68" height="112" rx="14" fill="#eef3ff" stroke="#dce7ff" strokeWidth="2" />
      <rect x="54" y="16" width="52" height="64" rx="8" fill="#dce7ff" />
      <circle cx="80" cy="38" r="11" fill="#1e4fd8" opacity="0.75" />
      <path d="M68 58c5-7 19-7 24 0" stroke="#1e4fd8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="54" y="86" width="22" height="6" rx="3" fill="#1e4fd8" />
      <rect x="80" y="86" width="26" height="6" rx="3" fill="#b9c8f2" />
      <circle cx="80" cy="102" r="6" fill="#0a1f57" opacity="0.2" />
    </svg>
  );
}

export function DesignGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="#eef3ff" stroke="#dce7ff" strokeWidth="2" />
      <circle cx="42" cy="42" r="13" fill="#1e4fd8" />
      <circle cx="70" cy="30" r="10" fill="#0a1f57" opacity="0.7" />
      <circle cx="98" cy="46" r="9" fill="#dce7ff" stroke="#1e4fd8" strokeWidth="2" />
      <path d="M28 92c22-26 62-26 104 0" stroke="#1e4fd8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M108 72l15-15 7 7-15 15z" fill="#0a1f57" />
    </svg>
  );
}

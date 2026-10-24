import React from 'react';

// Icono de Hoja/Clipboard para "Sin Artemis"
export function DocumentIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      style={{ flexShrink: 0, maxWidth: '100%' }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#A15238"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

// Icono de Checkmark para "Con Artemis"
export function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      style={{ flexShrink: 0, maxWidth: '100%' }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
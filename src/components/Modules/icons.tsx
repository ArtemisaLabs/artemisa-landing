import React from 'react';

interface IconProps {
  size?: number;
}

// 1. Hojas Oficiales NL (Documento / Texto) - Terracota / Coral (#E07A5F)
export function OfficialSheetsIcon({ size = 44 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="22" fill="#E07A5F" />
      <g stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 12h10l6 6v14a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2z" />
        <path d="M25 12v6h6" />
        <path d="M18 22h8" />
        <path d="M18 26h8" />
        <path d="M18 30h5" />
      </g>
    </svg>
  );
}

// 2. Monitor "En Estancia Ahora" (Reloj) - Verde Salvia (#81B29A)
export function MonitorClockIcon({ size = 44 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="22" fill="#81B29A" />
      <g stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="22" r="9" />
        <polyline points="22 17 22 22 25.5 24" />
      </g>
    </svg>
  );
}

// 3. Ficha Médica y Seguro (Cruz Médica / Hospital) - Miel / Amarillo (#F2CC89)
export function MedicalRecordIcon({ size = 44 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="22" fill="#F2CC89" />
      <g stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 13h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2z" />
        <path d="M22 18v8" />
        <path d="M18 22h8" />
      </g>
    </svg>
  );
}

// 4. Paquetes y Horas Extra (Caja / Paquete 3D) - Terracota / Coral (#E07A5F)
export function PackagesIcon({ size = 44 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="22" fill="#E07A5F" />
      <g stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 18l9-5 9 5v11l-9 5-9-5V18z" />
        <path d="M13 18l9 5 9-5" />
        <path d="M22 23v11" />
      </g>
    </svg>
  );
}

// 5. Diario Digital y Menús Nutricionales (Paleta de Pintura / Arte) - Verde Salvia (#81B29A)
export function DigitalJournalIcon({ size = 44 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="22" fill="#81B29A" />
      <g stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 22c0 3.314-2.686 6-6 6a2 2 0 0 1-2-2c0-.55.22-.98.5-1.5.28-.52.5-1.07.5-1.5 0-1.1-.9-2-2-2h-1c-3.314 0-6-2.686-6-6s2.686-6 6-6 10 3.582 10 9z" />
        <circle cx="17.5" cy="17.5" r="1" fill="#FFFFFF" />
        <circle cx="21.5" cy="15.5" r="1" fill="#FFFFFF" />
        <circle cx="25.5" cy="18.5" r="1" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

// 6. Cumplimiento y Firma Digital (Escudo con Check) - Miel / Amarillo (#F2CC89)
export function ComplianceIcon({ size = 44 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="22" fill="#F2CC89" />
      <g stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 13s-7 2-7 7v6c0 5 7 9 7 9s7-4 7-9v-6c0-5-7-7-7-7z" />
        <polyline points="18 22 21 25 26 19" />
      </g>
    </svg>
  );
}
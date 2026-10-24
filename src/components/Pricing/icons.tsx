import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
}

function Svg({ size = 24, color = '#3D405B', children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Plan Básica: brote
export function SproutIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4 2.5-6 6.5-6 0 4-2.5 6-6.5 6z" />
      <path d="M12 15c0-3-2-5-5.5-5 0 3 2 5 5.5 5z" />
    </Svg>
  );
}

// Plan Pro: edificio
export function BuildingIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10 21v-3h4v3" />
    </Svg>
  );
}

// Plan Red: varias sucursales
export function NetworkIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="10" width="7" height="11" rx="1" />
      <rect x="14" y="3" width="7" height="18" rx="1" />
      <path d="M6 14h1M6 17h1M17 7h1M17 11h1M17 15h1" />
    </Svg>
  );
}

export function CheckSmallIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <polyline points="20 6 9 17 4 12" />
    </Svg>
  );
}

export default function MexicoFlagIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: '50%', overflow: 'hidden', display: 'inline-block', verticalAlign: 'middle' }}
    >
      <g clipPath="url(#clip0_mexico_flag)">
        {/* Franja Verde */}
        <rect width="10.667" height="32" fill="#006847" />
        
        {/* Franja Blanca */}
        <rect x="10.667" width="10.667" height="32" fill="#FFFFFF" />
        
        {/* Franja Roja */}
        <rect x="21.334" width="10.666" height="32" fill="#CE1126" />
        
        {/* Escudo simplificado (Águila / Glifo) */}
        <path
          d="M16 11.5C14.8 11.5 14 12.3 14 13.5C14 14.8 15 15.5 16 16.5C17 15.5 18 14.8 18 13.5C18 12.3 17.2 11.5 16 11.5Z"
          fill="#A37000"
        />
        <path
          d="M13.5 18C14.5 19.5 17.5 19.5 18.5 18"
          stroke="#006847"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M12.5 16.5C13.5 17.2 14.5 17.5 16 17.5C17.5 17.5 18.5 17.2 19.5 16.5"
          stroke="#A37000"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_mexico_flag">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
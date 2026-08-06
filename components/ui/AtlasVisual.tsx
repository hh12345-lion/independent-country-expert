/** Custom cartographic mark — not stock photography */
export function MeridianMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="24" cy="24" rx="10" ry="22" stroke="currentColor" strokeWidth="1.2" />
      <line x1="2" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.2" />
      <line x1="24" y1="2" x2="24" y2="46" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    </svg>
  );
}

/** Contour field for hero — unique atlas atmosphere */
export function AtlasHeroArt({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#2B7A78" strokeOpacity="0.4" strokeWidth="1.4">
        <ellipse cx="420" cy="290" rx="70" ry="42" />
        <ellipse cx="420" cy="290" rx="130" ry="82" />
        <ellipse cx="420" cy="290" rx="195" ry="125" />
        <ellipse cx="420" cy="290" rx="265" ry="170" />
        <ellipse cx="420" cy="290" rx="340" ry="220" />
      </g>
      <g stroke="#E7ECE8" strokeOpacity="0.14" strokeWidth="1">
        <path d="M40 140 C220 90 420 190 760 110" />
        <path d="M20 250 C200 300 440 200 780 270" />
        <path d="M30 380 C240 330 500 420 770 360" />
        <path d="M50 500 C280 540 520 450 760 520" />
      </g>
      <g stroke="#4A9B98" strokeOpacity="0.55" strokeWidth="1.2">
        <line x1="400" y1="50" x2="400" y2="550" />
        <line x1="60" y1="300" x2="740" y2="300" />
      </g>
      <circle cx="400" cy="300" r="5" fill="#4A9B98" />
      <circle cx="400" cy="300" r="16" stroke="#4A9B98" strokeOpacity="0.45" fill="none" />
    </svg>
  );
}

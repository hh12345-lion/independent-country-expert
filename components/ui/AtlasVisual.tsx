/** Typesetter mark — double rule + diamond; not a globe / meridian */
export function FolioMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line x1="6" y1="14" x2="42" y2="14" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="18" x2="42" y2="18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 22 L28 30 L24 38 L20 30 Z" fill="currentColor" />
      <line x1="6" y1="42" x2="42" y2="42" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

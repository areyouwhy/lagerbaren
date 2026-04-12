import { useId } from "react";

// Swedish flag — 16:10 with yellow Nordic cross offset to the hoist side
export function SwedishFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 10"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect width="16" height="10" fill="#006AA7" />
      <rect x="0" y="4" width="16" height="2" fill="#FECC00" />
      <rect x="5" y="0" width="2" height="10" fill="#FECC00" />
    </svg>
  );
}

// Union Jack — simplified but recognizable at 20–24px display sizes.
// useId gives each instance its own clipPath id, so multiple flags on the
// same page don't collide on a single shared "uk-clip".
export function UkFlag({ className }: { className?: string }) {
  const clipId = useId();
  return (
    <svg
      viewBox="0 0 60 30"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <clipPath id={clipId}>
        <rect width="60" height="30" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <g clipPath={`url(#${clipId})`}>
        {/* Diagonals — white background */}
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        {/* Diagonals — red overlay */}
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
        {/* Cross of St George — white border */}
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        {/* Cross of St George — red */}
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

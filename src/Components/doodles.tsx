export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 14C10 2 18 2 26 14s16 12 24 0 16-12 24 0 16 12 24 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarSpark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 0c1.5 11 8.5 18.5 20 20-11.5 1.5-18.5 9-20 20-1.5-11-8.5-18.5-20-20 11.5-1.5 18.5-9 20-20Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WheatDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 220" fill="none" className={className} aria-hidden="true">
      <path d="M60 215V40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 45 + i * 26;
        return (
          <g key={i}>
            <path
              d={`M60 ${y + 20}C40 ${y + 14} 30 ${y + 4} 30 ${y - 6}c14 0 26 8 30 20Z`}
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d={`M60 ${y + 20}c20-6 30-16 30-26-14 0-26 8-30 20Z`}
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </g>
        );
      })}
      <path d="M60 40c0-14 6-24 16-30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function CircleText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <path id="circlePath" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
      </defs>
      <text
        fill="currentColor"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "20px",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        <textPath href="#circlePath">{text}</textPath>
      </text>
    </svg>
  );
}

export function HandCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 180" fill="none" className={className} aria-hidden="true">
      <path
        d="M60 96C60 46 152 16 232 22c86 6 128 40 122 72-7 36-96 66-190 62C88 153 46 128 48 98c2-30 62-58 140-62"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

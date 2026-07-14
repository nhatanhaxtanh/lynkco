export function CarSilhouette({
  className,
  variant = "suv",
}: {
  className?: string;
  variant?: "suv" | "sedan";
}) {
  if (variant === "sedan") {
    return (
      <svg
        viewBox="0 0 640 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M40 170 C60 168 80 166 110 164 C130 130 170 100 240 92 C310 84 400 90 460 108 C520 120 570 140 600 158 C610 162 612 170 606 172 L560 176 M480 176 L200 176 M120 176 L48 174 C40 174 38 172 40 170 Z"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M170 128 C210 104 260 98 320 98 M360 100 C400 104 440 112 470 124"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="160" cy="176" r="30" stroke="currentColor" strokeWidth="7" />
        <circle cx="520" cy="176" r="30" stroke="currentColor" strokeWidth="7" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 640 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M36 168 C50 164 70 160 96 158 C112 116 150 78 220 70 C300 62 400 66 470 86 C520 100 560 124 596 150 C608 158 608 168 598 170 L556 174 M478 176 L202 176 M124 176 L46 172 C36 172 32 170 36 168 Z"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M160 112 C200 84 250 76 310 76 M350 78 C400 84 440 96 475 114"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="164" cy="176" r="32" stroke="currentColor" strokeWidth="7" />
      <circle cx="516" cy="176" r="32" stroke="currentColor" strokeWidth="7" />
    </svg>
  );
}

import Link from "next/link";

export function StarIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2.2 6.8H21l-5.5 4 2.1 6.7L12 15.4 6.4 19.5l2.1-6.7L3 8.8h6.8L12 2z" />
    </svg>
  );
}

export function CompassRose({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
      <path d="M50 5 L58 42 L95 50 L58 58 L50 95 L42 58 L5 50 L42 42 Z" />
      <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

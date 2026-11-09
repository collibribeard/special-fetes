import * as Icons from "lucide-react";

export const Icon = ({ name, className = "h-6 w-6" }) => {
  const Cmp = Icons[name];
  return Cmp ? (
    <Cmp className={className} aria-hidden strokeWidth={1.6} />
  ) : null;
};

export const GoldIcon = ({ name, size = "h-14 w-14" }) => (
  <span
    className={`gold-ring inline-flex ${size} shrink-0 items-center justify-center rounded-full text-gold`}
  >
    <Icon name={name} className="h-6 w-6" />
  </span>
);

export const Eyebrow = ({ children, className = "" }) => (
  <p
    className={`flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold ${className}`}
  >
    <span className="h-px w-10 bg-gold/70" aria-hidden />
    {children}
  </p>
);
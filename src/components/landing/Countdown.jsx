import { useCountdown } from "@/hooks/useCountdown";

const Unit = ({ v, l }) => (
  <div className="flex flex-col items-center">
    <span className="min-w-[3.2rem] rounded-xl bg-forest-deep px-3 py-2 font-display text-2xl font-bold tabular-nums text-gold sm:text-3xl">
      {v}
    </span>
    <span className="mt-1 text-[10px] uppercase tracking-widest text-cream-muted">
      {l}
    </span>
  </div>
);

export const Countdown = () => {
  const { h, m, s } = useCountdown();
  return (
    <div
      className="flex items-start gap-2"
      data-testid="countdown"
      aria-live="off"
    >
      <Unit v={h} l="heures" />
      <span className="pt-2 font-display text-2xl text-gold">:</span>
      <Unit v={m} l="minutes" />
      <span className="pt-2 font-display text-2xl text-gold">:</span>
      <Unit v={s} l="secondes" />
    </div>
  );
};
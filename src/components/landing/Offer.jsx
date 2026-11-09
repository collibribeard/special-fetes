import { Check, Gift } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Countdown } from "./Countdown";
import { Eyebrow } from "./Icon";
import {
  BONUSES,
  COVER_IMG,
  VALUE_STACK,
  fcfa,
} from "@/data/content";

const Row = ({ icon: I, label, value, offered }) => (
  <li className="flex items-start justify-between gap-4 border-b border-gold/15 py-3">
    <span className="flex gap-3 text-cream">
      <I className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
      {label}
    </span>
    <span className="shrink-0 text-right text-sm">
      <span className="text-cream-muted line-through">{fcfa(value)}</span>
      {offered && (
        <span className="block font-display font-bold text-holly">OFFERT</span>
      )}
    </span>
  </li>
);

export const Offer = ({ pricing }) => {
  const price = pricing?.price ?? null;
  const compareAtPrice = pricing?.compareAtPrice ?? null;
  const discountPercent =
    pricing?.discountPercent ??
    (compareAtPrice && price && compareAtPrice > price
      ? Math.floor((1 - price / compareAtPrice) * 100)
      : 0);

  return (
    <section
      id="offre"
      data-cta="true"
      className="relative bg-forest py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5">
        <Eyebrow className="justify-center">L'offre SpÃ©cial FÃªtes</Eyebrow>
        <h2 className="mt-4 text-center text-3xl font-bold text-cream sm:text-4xl">
          Tout ce qu'il te faut pour des fÃªtes rÃ©ussies
        </h2>
        <div
          className="mt-12 grid overflow-hidden rounded-[2rem] border-2 border-gold/60 bg-forest-deep lg:grid-cols-[0.8fr_1.2fr]"
          data-testid="offer-card"
        >
          <div className="bokeh relative flex flex-col items-center justify-center gap-6 bg-forest-soft p-8">
            <img
              src={COVER_IMG}
              alt="Guide SpÃ©cial FÃªtes"
              loading="lazy"
              className="w-48 rounded-xl border border-gold/50 shadow-2xl sm:w-56"
            />
          </div>
          <div className="p-7 sm:p-10">
            <ul data-testid="value-stack">
              {VALUE_STACK.map((v) => (
                <Row key={v.label} icon={Check} {...v} />
              ))}
              {BONUSES.map((b) => (
                <Row key={b.label} icon={Gift} offered {...b} />
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-end gap-4">
              {compareAtPrice != null && compareAtPrice > price && (
                <span
                  className="text-lg text-cream-muted line-through"
                  data-testid="offer-old-price"
                >
                  {fcfa(compareAtPrice)}
                </span>
              )}
              {price != null && (
                <span
                  className="font-display text-5xl font-bold text-gold"
                  data-testid="offer-price"
                >
                  {fcfa(price)}
                </span>
              )}
              {discountPercent > 0 && price != null && (
                <span className="brush-red px-4 py-1 font-display text-sm font-bold text-cream">
                  -{discountPercent} %
                </span>
              )}
            </div>
            <div className="mt-6 rounded-2xl bg-forest p-4">
              <p className="mb-3 text-sm text-cream-muted">
                Le prix de lancement se termine dans :
              </p>
              <Countdown />
            </div>
            <CtaButton source="offre" className="mt-7 w-full" />
            <p className="mt-3 text-center text-xs text-cream-muted">
              Wave Â· Orange Money Â· MTN MoMo Â· Moov â€” reÃ§u tout de suite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
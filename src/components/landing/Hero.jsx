import { Star } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { GoldIcon } from "./Icon";
import { COVER_IMG, HERO_FEATURES, fcfa } from "@/data/content";

const Proof = () => (
  <div
    className="flex flex-wrap items-center justify-center gap-3 text-sm text-cream-muted"
    data-testid="hero-social-proof"
  >
    <div className="flex text-gold" aria-label="5 Ã©toiles sur 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
      ))}
    </div>
    <span>
      <strong className="text-cream">+2 400 lectrices</strong> prÃ©parent dÃ©jÃ 
      leurs fÃªtes
    </span>
  </div>
);

export const Hero = ({ pricing }) => {
  const price = pricing?.price ?? null;
  const compareAtPrice = pricing?.compareAtPrice ?? null;
  const discountPercent =
    pricing?.discountPercent ??
    (compareAtPrice && price && compareAtPrice > price
      ? Math.floor((1 - price / compareAtPrice) * 100)
      : null);

  return (
    <section
      id="hero"
      data-cta="true"
      className="bokeh relative overflow-hidden bg-forest-deep pb-20 pt-10 sm:pt-14"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        {discountPercent != null && (
          <span
            className="reveal brush-red inline-block px-6 py-2 font-display text-sm font-semibold uppercase tracking-wider text-cream"
            data-testid="hero-discount-badge"
          >
            -{discountPercent} % Â· Prix de lancement FÃªtes
          </span>
        )}
        <p
          className="reveal mt-6 text-xs uppercase tracking-[0.5em] text-gold"
          style={{ animationDelay: "80ms" }}
        >
          SpÃ©cial FÃªtes
        </p>
        <h1
          className="reveal mt-3 font-display text-4xl font-bold leading-[1.05] text-cream sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "140ms" }}
          data-testid="hero-title"
        >
          20 Menus{" "}
          <span className="font-script font-normal text-gold">
            NoÃ«l et Nouvel An
          </span>{" "}
          Qui Impressionnent
        </h1>
        <p
          className="reveal mt-6 max-w-2xl text-base text-cream-muted md:text-lg"
          style={{ animationDelay: "220ms" }}
          data-testid="hero-subtitle"
        >
          Impressionne ta belle-famille{" "}
          <strong className="text-cream">sans te ruiner</strong> : menus
          camerounais prÃªts, budget Ã  partir de 15 000 FCFA et listes de courses
          marchÃ© en FCFA.
        </p>
        <div
          className="reveal mt-8 flex w-full flex-col items-center gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <CtaButton source="hero" className="w-full sm:w-auto" />
          <p className="text-xs text-cream-muted">
            Paiement Wave Â· Orange Money Â· MTN Â· Moov â€” accÃ¨s immÃ©diat
          </p>
          <Proof />
        </div>
        <div
          className="reveal relative mt-12 w-full max-w-sm sm:max-w-md"
          style={{ animationDelay: "380ms" }}
        >
          <img
            src={COVER_IMG}
            alt="Couverture du guide SpÃ©cial FÃªtes : 20 menus de NoÃ«l et du Nouvel An"
            className="w-full rounded-2xl border-2 border-gold/60 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
            width="900"
            height="1200"
            data-testid="hero-cover-image"
          />
        </div>
        {price != null && (
          <p className="reveal mt-8 text-lg font-bold text-gold">
            {fcfa(price)}
            {compareAtPrice != null && compareAtPrice > price && (
              <>
                {" "}
                <span className="text-cream-muted line-through ml-2">
                  {fcfa(compareAtPrice)}
                </span>
              </>
            )}
          </p>
        )}
      </div>
      <ul
        className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-x-4 gap-y-8 px-5 sm:grid-cols-3 lg:grid-cols-5"
        data-testid="hero-features"
      >
        {HERO_FEATURES.map((f) => (
          <li key={f.title} className="flex flex-col items-center text-center">
            <GoldIcon name={f.icon} />
            <span className="mt-3 font-display text-sm font-bold uppercase text-cream">
              {f.title}
            </span>
            <span className="text-xs text-cream-muted">{f.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
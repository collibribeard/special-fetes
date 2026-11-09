import { Star } from "lucide-react";
import { Eyebrow } from "./Icon";
import { STATS, TESTIMONIALS } from "@/data/content";

const Card = ({ t, i }) => (
  <article
    data-testid={`testimonial-card-${i}`}
    className="flex flex-col rounded-3xl border border-gold/25 bg-forest p-6"
  >
    <div className="flex text-gold" aria-label="5 Ã©toiles">
      {[0, 1, 2, 3, 4].map((k) => (
        <Star key={k} className="h-4 w-4 fill-current" aria-hidden />
      ))}
    </div>
    <p className="mt-3 inline-block self-start rounded-full bg-holly px-3 py-1 font-display text-sm font-semibold text-cream">
      {t.result}
    </p>
    <p className="mt-4 flex-1 text-cream-muted">Â« {t.text} Â»</p>
    <div className="mt-6 flex items-center gap-3">
      <span
        className={`${t.color} flex h-11 w-11 items-center justify-center rounded-full font-display text-lg font-bold text-cream`}
        aria-hidden
      >
        {t.name[0]}
      </span>
      <div>
        <p className="font-semibold text-cream">{t.name}</p>
        <p className="text-sm text-cream-muted">{t.city}</p>
      </div>
    </div>
  </article>
);

export const Testimonials = () => (
  <section id="temoignages" className="bokeh bg-forest-deep py-20 sm:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <Eyebrow>Elles l'ont fait</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl font-bold text-cream sm:text-4xl">
        Des fÃªtes rÃ©ussies,{" "}
        <span className="font-script font-normal text-gold">
          c'est possible !
        </span>
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
          >
            <Card t={t} i={i} />
          </div>
        ))}
      </div>
      <dl
        className="mt-14 grid grid-cols-2 gap-6 rounded-3xl border border-gold/40 bg-forest p-8 md:grid-cols-4"
        data-testid="stats-bar"
      >
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col-reverse text-center">
            <dt className="text-sm text-cream-muted">{s.label}</dt>
            <dd className="font-display text-3xl font-bold text-gold">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
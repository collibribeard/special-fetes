import { ArrowDown } from "lucide-react";
import { Eyebrow, GoldIcon } from "./Icon";
import { BENEFITS } from "@/data/content";

export const Benefits = () => (
  <section id="benefices" className="bg-forest py-20 sm:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <Eyebrow>Ce qui change pour toi</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl font-bold text-cream sm:text-4xl">
        4 chapitres pour transformer tes fÃªtes.
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {BENEFITS.map((b, i) => (
          <article
            key={b.from}
            data-testid={`benefit-card-${i}`}
            className={`group rounded-3xl border border-gold/25 p-7 transition-colors duration-300 hover:border-gold/70 ${i % 3 === 0 ? "bg-forest-deep" : "bg-forest-soft"}`}
          >
            <div className="flex items-center justify-between">
              <GoldIcon name={b.icon} />
              <span className="font-display text-5xl font-bold text-gold/20">
                0{i + 1}
              </span>
            </div>
            <p className="mt-6 text-cream-muted line-through decoration-holly decoration-2">
              {b.from}
            </p>
            <ArrowDown className="my-1 h-4 w-4 text-gold" aria-hidden />
            <h3 className="text-2xl font-bold text-cream">{b.to}</h3>
            <p className="mt-3 text-cream-muted">{b.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
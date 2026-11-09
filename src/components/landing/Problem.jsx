import { Eyebrow, GoldIcon } from "./Icon";
import { PAINS } from "@/data/content";

const IMG =
  "https://images.unsplash.com/photo-1760907949894-b66d728e0a8e?crop=entropy&cs=srgb&fm=jpg&q=75&w=900";

export const Problem = () => (
  <section id="probleme" className="bg-forest py-20 sm:py-28">
    <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.15fr] lg:items-center">
      <div className="relative">
        <img
          src={IMG}
          alt="Femme qui cuisine pour sa famille"
          loading="lazy"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
          data-testid="problem-image"
        />
        <p className="brush-red absolute -bottom-6 left-4 right-4 px-6 py-4 font-script text-xl text-cream sm:text-2xl">
          NoÃ«l arrive, la belle-famille vientâ€¦
        </p>
      </div>
      <div>
        <Eyebrow>Tu te reconnais ?</Eyebrow>
        <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl">
          Chaque annÃ©e, les fÃªtes te stressent plus qu'elles ne te rÃ©jouissent.
        </h2>
        <ul className="mt-10 space-y-6" data-testid="problem-list">
          {PAINS.map((p) => (
            <li key={p.title} className="flex gap-4">
              <GoldIcon name={p.icon} size="h-12 w-12" />
              <div>
                <h3 className="text-lg font-semibold text-cream">{p.title}</h3>
                <p className="mt-1 text-cream-muted">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p
          className="mt-10 border-l-4 border-gold pl-5 font-display text-xl font-semibold text-gold"
          data-testid="problem-not-your-fault"
        >
          Ce n'est pas de ta faute. Personne ne t'a donnÃ© un vrai plan pour les
          fÃªtes.
        </p>
      </div>
    </div>
  </section>
);
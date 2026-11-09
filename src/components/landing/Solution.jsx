import { Eyebrow } from "./Icon";
import { NOEL_MENUS, NOUVEL_AN_MENUS } from "@/data/content";

const IMG =
  "https://images.unsplash.com/photo-1665400808116-f0e6339b7e9a?crop=entropy&cs=srgb&fm=jpg&q=75&w=1400";

const MenuList = ({ title, items, testId }) => (
  <div
    className="glass rounded-2xl border border-gold/30 p-6"
    data-testid={testId}
  >
    <h3 className="font-script text-2xl text-gold">{title}</h3>
    <ol className="mt-4 grid gap-2 text-sm text-cream sm:grid-cols-2">
      {items.map((m, i) => (
        <li key={m} className="flex gap-2">
          <span className="font-display font-bold text-gold">
            {String(i + 1).padStart(2, "0")}
          </span>
          {m}
        </li>
      ))}
    </ol>
  </div>
);

export const Solution = () => (
  <section
    id="solution"
    className="relative overflow-hidden bg-forest-deep py-20 sm:py-28"
  >
    <div className="wax-band absolute inset-x-0 top-0" aria-hidden />
    <div className="mx-auto max-w-6xl px-5">
      <Eyebrow>La solution</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl font-bold text-cream sm:text-4xl">
        20 menus de fÃªtes camerounais{" "}
        <span className="text-gold">dÃ©jÃ  prÃªts</span>. Tu n'as plus qu'Ã 
        cuisiner.
      </h2>
      <p className="mt-5 max-w-2xl text-base text-cream-muted md:text-lg">
        Pas 400 recettes en vrac. 20 menus complets, choisis pour les fÃªtes,
        avec ingrÃ©dients, prix marchÃ© en FCFA et temps de prÃ©paration.
      </p>
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative">
          <img
            src={IMG}
            alt="Table de fÃªte garnie de plats africains"
            loading="lazy"
            className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            data-testid="solution-image"
          />
          <div
            className="glass absolute bottom-4 left-4 right-4 rounded-2xl border border-gold/40 p-5"
            data-testid="solution-authority"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Tes guides
            </p>
            <p className="mt-2 text-cream">
              <strong>Fatou</strong>, la grande sÅ“ur qui connaÃ®t les plats de
              fÃªte, et <strong>Ibrahim</strong>, le grand frÃ¨re du marchÃ©. Ils
              t'accompagnent de Mokolo Ã  la table.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <MenuList
            title="10 menus de NoÃ«l"
            items={NOEL_MENUS}
            testId="solution-menus-noel"
          />
          <MenuList
            title="10 menus du Nouvel An"
            items={NOUVEL_AN_MENUS}
            testId="solution-menus-nouvel-an"
          />
        </div>
      </div>
    </div>
  </section>
);
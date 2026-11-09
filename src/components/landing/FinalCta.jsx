import { CtaButton } from "./CtaButton";
import { PRICE, fcfa } from "@/data/content";

export const FinalCta = () => (
  <section
    id="cta-final"
    data-cta="true"
    className="bokeh relative overflow-hidden bg-forest py-20 sm:py-28"
  >
    <div className="mx-auto max-w-3xl px-5 text-center">
      <h2 className="text-3xl font-bold text-cream sm:text-4xl">
        Cette annÃ©e, tu peux encore passer la veille de NoÃ«l Ã  chercher quoi
        cuisinerâ€¦
      </h2>
      <p className="mt-6 font-script text-3xl text-gold sm:text-4xl">
        â€¦ou recevoir ta famille avec un menu prÃªt.
      </p>
      <p className="mt-6 text-base text-cream-muted md:text-lg">
        20 menus, planning J-7, budget maÃ®trisÃ© et table de fÃªte. Pour seulement{" "}
        <strong className="text-cream">{fcfa(PRICE)}</strong>.
      </p>
      <CtaButton source="cta_final" className="mt-10 w-full sm:w-auto" />
    </div>
    <div className="wax-band absolute inset-x-0 bottom-0" aria-hidden />
  </section>
);
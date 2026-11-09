import { useEffect, useState } from "react";
import { useCheckout } from "@/context/CheckoutContext";
import { OLD_PRICE, PRICE, fcfa } from "@/data/content";

export const StickyBar = () => {
  const { open, openCheckout } = useCheckout();
  const [ctaVisible, setCtaVisible] = useState(true);
  const [mobile, setMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) =>
        e.isIntersecting ? seen.add(e.target) : seen.delete(e.target),
      );
      setCtaVisible(seen.size > 0);
    });
    document
      .querySelectorAll('[data-cta="true"]')
      .forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const show = mobile && !ctaVisible && !open;

  useEffect(() => {
    document.body.style.paddingBottom = show ? "84px" : "";
  }, [show]);

  return (
    <div
      data-testid="sticky-mobile-bar"
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-gold/40 bg-forest-deep/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex items-center gap-3">
        <div className="leading-tight">
          <p className="text-xs text-cream-muted line-through">
            {fcfa(OLD_PRICE)}
          </p>
          <p className="font-display text-xl font-bold text-gold">
            {fcfa(PRICE)}
          </p>
        </div>
        <button
          type="button"
          tabIndex={show ? 0 : -1}
          onClick={() => openCheckout("sticky_bar")}
          data-testid="sticky-bar-cta"
          className="cta-glow flex-1 rounded-full px-4 py-3 font-display text-sm font-semibold"
        >
          Je veux mes 20 menus
        </button>
      </div>
    </div>
  );
};
import { ArrowRight } from "lucide-react";
import { useCheckout } from "@/context/CheckoutContext";
import { CTA_TEXT } from "@/data/content";

export const CtaButton = ({
  source,
  label = CTA_TEXT,
  className = "",
  testId,
}) => {
  const { openCheckout } = useCheckout();
  return (
    <button
      type="button"
      data-testid={testId || `cta-${source}`}
      onClick={() => openCheckout(source)}
      className={`cta-glow inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-display text-base font-semibold sm:text-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cream/60 ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
    </button>
  );
};
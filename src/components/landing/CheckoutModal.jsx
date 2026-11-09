import { Check, Lock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCheckout } from "@/context/CheckoutContext";
import { track } from "@/lib/track";
import {
  CHECKOUT_BULLETS,
  CHECKOUT_URL,
  fcfa,
} from "@/data/content";

export const CheckoutModal = ({ pricing }) => {
  const { open, setOpen } = useCheckout();
  const price = pricing?.price ?? null;
  const compareAtPrice = pricing?.compareAtPrice ?? null;
  const total = price ?? 0;

  const pay = () =>
    track("purchase_intent", {
      value: total,
      currency: "XOF",
    });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-h-[92vh] max-w-lg overflow-y-auto rounded-3xl border-gold/50 bg-forest-deep p-6 text-cream sm:p-8 [&>button]:text-cream"
        data-testid="checkout-modal"
      >
        <DialogTitle className="font-display text-2xl font-bold leading-tight text-cream">
          SpÃ©cial FÃªtes : 20 Menus NoÃ«l et Nouvel An
        </DialogTitle>
        <DialogDescription className="text-cream-muted">
          {compareAtPrice != null && compareAtPrice > price && (
            <span className="line-through">{fcfa(compareAtPrice)}</span>
          )}
          {price != null && (
            <strong className="text-gold">{fcfa(price)}</strong>
          )}
          Â· accÃ¨s immÃ©diat
        </DialogDescription>
        <ul className="grid gap-2" data-testid="checkout-benefits">
          {CHECKOUT_BULLETS.map((b) => (
            <li key={b} className="flex gap-2 text-sm">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                aria-hidden
              />
              {b}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between rounded-2xl bg-forest p-4">
          <span className="text-cream-muted">Total Ã  payer</span>
          <span
            className="font-display text-3xl font-bold text-gold"
            data-testid="checkout-total"
          >
            {fcfa(total)}
          </span>
        </div>
        <a
          href={CHECKOUT_URL}
          onClick={pay}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="checkout-pay-button"
          className="cta-glow flex items-center justify-center gap-2 rounded-full px-6 py-4 text-center font-display text-lg font-semibold"
        >
          <Lock className="h-5 w-5" aria-hidden /> Je paie {fcfa(total)}
        </a>
        <p className="text-center text-xs text-cream-muted">
          Wave Â· Orange Money Â· MTN MoMo Â· Moov
        </p>
      </DialogContent>
    </Dialog>
  );
};
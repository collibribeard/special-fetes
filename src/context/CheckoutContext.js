import { createContext, useCallback, useContext, useState } from "react";
import { track } from "@/lib/track";

const CheckoutContext = createContext(null);
const PricingContext = createContext(null);

export const CheckoutProvider = ({ children, pricing = null }) => {
  const [open, setOpen] = useState(false);
  const [externalPricing, setExternalPricing] = useState(pricing);

  const openCheckout = useCallback((source) => {
    track("cta_click", { cta_location: source });
    track("checkout_open", { cta_location: source });
    setOpen(true);
  }, []);

  const updatePricing = useCallback((pricing) => {
    setExternalPricing(pricing);
  }, []);

  return (
    <PricingContext.Provider value={{ pricing: externalPricing, updatePricing }}>
      <CheckoutContext.Provider value={{ open, setOpen, openCheckout }}>
        {children}
      </CheckoutContext.Provider>
    </PricingContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
export const usePricing = () => useContext(PricingContext);
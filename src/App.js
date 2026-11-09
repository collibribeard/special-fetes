import "@/App.css";
import { useEffect, useState } from "react";
import { CheckoutProvider } from "@/context/CheckoutContext";
import { fetchExternalConfig, extractPricing } from "@/lib/externalConfig";
import { PRICE, OLD_PRICE } from "@/data/content";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Benefits } from "@/components/landing/Benefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { Offer } from "@/components/landing/Offer";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { CheckoutModal } from "@/components/landing/CheckoutModal";
import { StickyBar } from "@/components/landing/StickyBar";
import { FomoToast } from "@/components/landing/FomoToast";

function AppWithPricing() {
  const [pricing, setPricing] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadConfig = async () => {
      const config = await fetchExternalConfig();
      setPricing(extractPricing(config));
      setLoaded(true);
    };
    loadConfig();
  }, []);

  const effectivePricing =
    pricing ??
    (loaded
      ? {
          price: PRICE,
          compareAtPrice: OLD_PRICE,
          discountPercent: null,
        }
      : null);

  return (
    <CheckoutProvider pricing={effectivePricing}>
      <main className="min-h-screen bg-forest-deep" data-testid="landing-page">
        <Hero pricing={effectivePricing} />
        <Problem />
        <Solution />
        <Benefits />
        <Testimonials />
        <Offer pricing={effectivePricing} />
        <Faq />
        <FinalCta />
        <footer
          className="bg-forest-deep py-8 text-center text-xs text-cream-muted"
          data-testid="footer"
        >
          Â© Cuisine de chez nous Â· SpÃ©cial FÃªtes Â· Support : par email
        </footer>
      </main>
      <StickyBar />
      <FomoToast />
      <CheckoutModal pricing={effectivePricing} />
    </CheckoutProvider>
  );
}

export default AppWithPricing;
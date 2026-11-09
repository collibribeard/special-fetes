/**
 * Configuration externe rÃ©cupÃ©rÃ©e depuis l'API SaaS.
 * Retourne null si les variables d'env sont absentes ou si l'appel Ã©choue.
 * Les composants doivent toujours prÃ©voir un fallback vers les valeurs statiques
 * dÃ©finies dans src/data/content.js.
 */

export const fetchExternalConfig = async () => {
  const base = process.env.REACT_APP_ADS_SPY_BASE_URL;
  const pageKey = process.env.REACT_APP_ADS_SPY_PAGE_KEY;
  const apiKey = process.env.REACT_APP_ADS_SPY_API_KEY;

  if (!base || !pageKey || !apiKey || apiKey === "esp_REPLACE_ME") {
    return null;
  }

  try {
    const res = await fetch(`${base}/api/external-pages/${pageKey}/config`, {
      headers: { "X-API-Key": apiKey },
      cache: "no-store",
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
};

export const extractPricing = (config) => {
  if (!config || !config.pricing) return null;
  return {
    price: config.pricing.price ?? null,
    compareAtPrice: config.pricing.compareAtPrice ?? null,
    discountPercent: config.pricing.discountPercent ?? null,
  };
};

export const extractCounters = (config) => {
  if (!config || !config.counters) return null;
  return {
    purchases: config.counters.purchases ?? 0,
    downloads: config.counters.downloads ?? 0,
  };
};

export const extractTimer = (config) => {
  if (!config || !config.timer) return null;
  return {
    endAt: config.timer.endAt ?? null,
    mode: config.timer.mode ?? null,
  };
};
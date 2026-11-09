import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { FOMO_ACTIONS, FOMO_PEOPLE } from "@/data/content";

const KEY = "fomo_count";
const MAX = 4;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const FomoToast = () => {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    let timer;
    let hideTimer;
    const showNext = () => {
      const count = Number(sessionStorage.getItem(KEY) || 0);
      if (count >= MAX) return;
      sessionStorage.setItem(KEY, String(count + 1));
      const [name, city] = pick(FOMO_PEOPLE);
      setMsg({
        name,
        city,
        action: pick(FOMO_ACTIONS),
        mins: 2 + Math.floor(Math.random() * 25),
      });
      hideTimer = setTimeout(() => setMsg(null), 5000);
      timer = setTimeout(showNext, 10000 + Math.random() * 5000);
    };
    timer = setTimeout(showNext, 6000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      role="status"
      data-testid="fomo-toast"
      className={`fixed bottom-24 left-3 z-40 max-w-[300px] rounded-2xl border border-gold/40 bg-forest-deep/95 p-4 pr-9 shadow-2xl backdrop-blur-md transition-[opacity,transform] duration-500 md:bottom-6 md:left-6 ${msg ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
    >
      {msg && (
        <>
          <button
            type="button"
            onClick={() => setMsg(null)}
            className="absolute right-2 top-2 text-cream-muted hover:text-cream"
            aria-label="Fermer"
            data-testid="fomo-close"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="flex items-center gap-2 text-sm text-cream">
            <span
              className="blink-dot h-2.5 w-2.5 shrink-0 rounded-full bg-mint"
              aria-hidden
            />
            <span>
              <strong>{msg.name}</strong> ({msg.city}) {msg.action}
            </span>
          </p>
          <p className="mt-1 pl-[18px] text-xs text-cream-muted">
            il y a {msg.mins} min
          </p>
        </>
      )}
    </div>
  );
};
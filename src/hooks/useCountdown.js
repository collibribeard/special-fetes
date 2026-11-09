import { useEffect, useState } from "react";

const KEY = "countdown_end";
const DAY = 24 * 60 * 60 * 1000;

const getEnd = () => {
  const now = Date.now();
  let end = Number(localStorage.getItem(KEY));
  if (!end) end = now + DAY;
  while (end <= now) end += DAY;
  localStorage.setItem(KEY, String(end));
  return end;
};

const pad = (n) => String(n).padStart(2, "0");

export const useCountdown = () => {
  const [left, setLeft] = useState(() => getEnd() - Date.now());

  useEffect(() => {
    const id = setInterval(() => setLeft(getEnd() - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const s = Math.max(0, Math.floor(left / 1000));
  return {
    h: pad(Math.floor(s / 3600)),
    m: pad(Math.floor((s % 3600) / 60)),
    s: pad(s % 60),
  };
};
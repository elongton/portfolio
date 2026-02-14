"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function EasterEgg() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const keysRef = useRef<string[]>([]);

  const codeSignature = useMemo(() => KONAMI_CODE.join("|"), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const normalizedKey = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      keysRef.current = [...keysRef.current, normalizedKey].slice(-KONAMI_CODE.length);

      if (keysRef.current.join("|") === codeSignature) {
        setIsUnlocked(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [codeSignature]);

  if (!isUnlocked) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6">
      <div className="max-w-lg rounded-2xl border border-cyan-300/70 bg-slate-900/95 p-8 text-center shadow-2xl shadow-cyan-500/30">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Easter Egg Unlocked</p>
        <h2 className="mt-3 text-3xl font-bold text-white">Konami mode enabled 🚀</h2>
        <p className="mt-4 text-slate-200">
          You found the hidden shortcut. Curiosity like this is the same energy that builds great products.
        </p>
        <button
          type="button"
          onClick={() => setIsUnlocked(false)}
          className="mt-6 rounded-md bg-cyan-400 px-4 py-2 font-semibold text-slate-900 transition hover:bg-cyan-300"
        >
          Return to mission
        </button>
      </div>
    </div>
  );
}

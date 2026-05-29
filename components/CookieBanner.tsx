"use client";
import { useState, useEffect } from "react";
import { useLang } from "./LangContext";

export default function CookieBanner() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-consent")) setVisible(true);
    } catch { setVisible(true); }
  }, []);

  const accept = () => {
    try { localStorage.setItem("cookie-consent", "true"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{ background: "rgba(26,10,15,.95)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(244,114,182,.2)" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">🍪</span>
          <div>
            <p className="text-sm font-medium" style={{ color: "#ffffff" }}>
              {lang === "en" ? "We use cookies to save your basket and improve your experience."
                : lang === "ru" ? "Мы используем cookies для сохранения корзины и улучшения опыта."
                : "Menc ogtakordum enq cookies dzez kalatage pahelu ev zavak barberutyun aprovelov:"}
            </p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,.45)" }}>
              {lang === "en" ? "No personal data is shared with third parties."
                : lang === "ru" ? "Личные данные третьим лицам не передаются."
                : "Andznanagan taryal checertvo yerrord anelinerin:"}
            </p>
          </div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={() => setVisible(false)}
            className="text-xs font-bold px-4 py-2 rounded-full transition-colors"
            style={{ color: "rgba(255,255,255,.5)", border: "1px solid rgba(255,255,255,.15)" }}>
            {lang === "en" ? "Decline" : lang === "ru" ? "Отклонить" : "Mertanem"}
          </button>
          <button onClick={accept}
            className="text-xs font-black px-5 py-2 rounded-full text-white transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #2563eb, #1a4a8a)", boxShadow: "0 4px 12px rgba(37,99,235,.4)" }}>
            {lang === "en" ? "Accept" : lang === "ru" ? "Принять" : "Yntunit"}
          </button>
        </div>
      </div>
    </div>
  );
}

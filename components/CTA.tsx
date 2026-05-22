"use client";
import { useLang } from "./LangContext";
import { t } from "@/lib/i18n";

export default function CTA() {
  const { lang } = useLang();
  return (
    <section id="order" className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff9f6 0%, #fce7f3 50%, #fff1f2 100%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(251,207,232,.5), transparent)" }} />
      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <span className="inline-block text-xs font-black uppercase tracking-widest text-pink-500 bg-pink-100 border border-pink-200 px-4 py-2 rounded-full mb-6">
          {t.cta.tag[lang]}
        </span>
        <h2 className="font-display font-black text-rose-950 mb-4 leading-tight" style={{ fontSize: "clamp(40px,6vw,72px)" }}>
          {t.cta.title1[lang]}<br />
          <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
            {t.cta.title2[lang]}
          </span>
        </h2>
        <p className="text-rose-700 font-light text-lg mb-10 opacity-70">{t.cta.desc[lang]}</p>
        <div className="flex gap-3 max-w-md mx-auto mb-5">
          <input type="tel" placeholder={t.cta.placeholder[lang]}
            className="flex-1 px-5 py-4 rounded-full border-2 border-pink-200 bg-white text-rose-900 text-sm outline-none focus:border-pink-400 transition-colors font-medium placeholder-rose-300 shadow-sm" />
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black px-7 py-4 rounded-full shadow-2xl shadow-pink-200 hover:shadow-pink-300 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap text-sm">
            {t.cta.btn[lang]}
          </button>
        </div>
        <p className="text-xs text-rose-400 font-medium">{t.cta.note[lang]}</p>
      </div>
    </section>
  );
}

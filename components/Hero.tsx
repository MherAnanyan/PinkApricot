"use client";
import { useLang } from "./LangContext";
import { t } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* background blobs */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] blob-anim opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle at 60% 40%, #fda4af, #f9a8d4, #fbcfe8)", borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%" }} />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 blob-anim opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f472b6, #fb7185)", borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%", animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 blob-anim opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #fbbf24, #f97316)", animationDelay: "-5s" }} />

      {/* spinning dashed ring */}
      <div className="absolute right-24 top-24 w-72 h-72 spin-slow opacity-10 pointer-events-none border-[6px] border-dashed border-pink-400 rounded-full" />
      <div className="absolute left-16 bottom-32 w-48 h-48 spin-slow opacity-10 pointer-events-none border-4 border-dashed border-rose-300 rounded-full" style={{ animationDirection: "reverse" }} />

      {/* main content */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* left */}
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold px-4 py-2 rounded-full mb-6">
            {t.hero.tag[lang]}
          </div>

          <h1 className="animate-fade-up-1 font-display font-black leading-none text-rose-950 mb-6" style={{ fontSize: "clamp(52px,7vw,90px)" }}>
            {t.hero.title1[lang]}<br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 bg-clip-text text-transparent">
              {t.hero.title2[lang]}
            </span><br />
            {t.hero.title3[lang]}
          </h1>

          <p className="animate-fade-up-2 text-rose-800 text-lg font-light leading-relaxed mb-10 max-w-md opacity-70">
            {t.hero.sub[lang]}
          </p>

          <div className="animate-fade-up-3 flex flex-wrap gap-4 items-center mb-14">
            <a href="#boxes"
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-pink-300 hover:shadow-pink-400 hover:-translate-y-1 transition-all duration-200 text-base">
              {t.hero.cta[lang]}
            </a>
            <a href="#how" className="flex items-center gap-3 text-rose-700 font-medium hover:text-pink-500 transition-colors">
              <span className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md text-sm border border-pink-100">▶</span>
              {t.hero.how[lang]}
            </a>
          </div>

          {/* stats */}
          <div className="animate-fade-up-4 grid grid-cols-4 gap-4 pt-8 border-t border-pink-200">
            {[
              { val: "4", label: { en: "World cuisines", hy: "Աշխ. խոհ.", ru: "Кухни мира" } },
              { val: "2", label: { en: "Per box", hy: "Հոգի", ru: "Человека" } },
              { val: "25m", label: { en: "To cook", hy: "Եփել", ru: "Готовить" } },
              { val: "⚡", label: { en: "Same day", hy: "Նույն օր", ru: "В тот же день" } },
            ].map(s => (
              <div key={s.label.en}>
                <div className="font-display text-3xl font-black text-rose-900">{s.val}</div>
                <div className="text-xs text-rose-400 mt-1 font-medium">{s.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right — floating cards */}
        <div className="hidden lg:flex flex-col gap-4 items-end">
          {[
            { flag: "🇮🇹", name: "Spaghetti Carbonara", price: "7,900 AMD", from: "#fb923c", to: "#f43f5e", delay: "0s" },
            { flag: "🇯🇵", name: "Tonkotsu Ramen",     price: "8,800 AMD", from: "#3b82f6", to: "#7c3aed", delay: ".2s" },
            { flag: "🇲🇽", name: "Tacos al Pastor",    price: "7,900 AMD", from: "#facc15", to: "#ef4444", delay: ".4s" },
            { flag: "🇹🇭", name: "Pad Thai",           price: "7,900 AMD", from: "#34d399", to: "#06b6d4", delay: ".6s" },
          ].map(c => (
            <div key={c.name}
              className="float-anim bg-white rounded-2xl p-4 shadow-xl border border-pink-50 flex items-center gap-4 w-72 hover:scale-105 transition-transform duration-200 cursor-pointer"
              style={{ animationDelay: c.delay }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}>
                {c.flag}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-rose-900 text-sm truncate">{c.name}</div>
                <div className="font-bold text-base mt-0.5" style={{ color: c.from }}>{c.price}</div>
              </div>
              <div className="w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center text-pink-400 text-xs flex-shrink-0">→</div>
            </div>
          ))}

          <div className="float-anim bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-4 text-white w-72 shadow-xl flex items-center gap-3"
            style={{ animationDelay: ".8s" }}>
            <span className="text-3xl">❄️</span>
            <div>
              <div className="font-bold text-sm">Ice-packed delivery</div>
              <div className="text-pink-100 text-xs mt-0.5 font-light">Always fresh, always cold</div>
            </div>
          </div>
        </div>
      </div>

      {/* marquee strip */}
      <div className="relative z-10 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 py-3 overflow-hidden">
        <div className="flex marquee-anim whitespace-nowrap">
          {Array(12).fill(["🍝 Italian Carbonara", "🍜 Japanese Ramen", "🌮 Mexican Tacos", "🥘 Thai Pad Thai"]).flat().map((item, i) => (
            <span key={i} className="inline-block mx-8 text-white font-semibold text-sm">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

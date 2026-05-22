"use client";
import { useLang } from "./LangContext";
import { t } from "@/lib/i18n";

const grads = [
  "from-pink-500 to-rose-600",
  "from-violet-500 to-purple-600",
  "from-orange-400 to-pink-500",
  "from-emerald-500 to-teal-600",
  "from-blue-500 to-indigo-600",
  "from-amber-400 to-orange-500",
];

export default function Why() {
  const { lang } = useLang();
  return (
    <section id="why" className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a0a0f 0%, #2d1520 60%, #1a0a0f 100%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(244,63,94,.15), transparent)" }} />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,114,182,.3), transparent)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(248,113,113,.15), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-pink-400 px-4 py-2 rounded-full mb-5"
            style={{ background: "rgba(244,114,182,.15)", border: "1px solid rgba(244,114,182,.3)" }}>
            {t.why.tag[lang]}
          </span>
          <h2 className="font-display text-5xl font-black" style={{ color: "#ffffff" }}>
            {t.why.title[lang]}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.why.points.map((p, i) => (
            <div key={i}
              className="group rounded-3xl p-7 hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${grads[i]} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                {p.icon}
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#ffffff" }}>
                {p.title[lang]}
              </h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: "rgba(255,255,255,0.55)" }}>
                {p.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

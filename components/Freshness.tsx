"use client";
import { useLang } from "./LangContext";
import { t } from "@/lib/i18n";

const pointBg = ["bg-orange-100", "bg-pink-100", "bg-green-100", "bg-blue-100"];

export default function Freshness() {
  const { lang } = useLang();
  return (
    <section id="fresh" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* visual side */}
          <div className="relative">
            <div className="rounded-3xl p-14 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fff1f2 50%, #fef3c7 100%)" }}>
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-50" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white opacity-40" />
              <div className="float-anim inline-block text-9xl mb-6 relative z-10">🧊</div>
              <h3 className="font-display text-3xl font-black text-rose-950 mb-2 relative z-10">Always Fresh</h3>
              <p className="text-rose-600 text-sm italic relative z-10 opacity-70">Միшт Tarm · Всегда Свежее</p>
              <div className="flex flex-wrap gap-2 justify-center mt-6 relative z-10">
                {["❄️ Ice-packed", "🚀 Same day", "✅ Quality checked", "📏 Zero waste"].map(b => (
                  <span key={b} className="bg-white bg-opacity-80 rounded-full px-4 py-2 text-xs font-bold text-rose-800 shadow-sm border border-pink-100">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl border border-pink-100 px-5 py-3">
              <div className="text-xs text-rose-400 mb-1 font-medium">Delivery time</div>
              <div className="font-black text-rose-900 text-lg">2–4 hours ⚡</div>
            </div>
          </div>

          {/* text side */}
          <div>
            <span className="inline-block text-xs font-black uppercase tracking-widest text-pink-500 bg-pink-50 border border-pink-100 px-4 py-2 rounded-full mb-5">
              {t.fresh.tag[lang]}
            </span>
            <h2 className="font-display text-5xl font-black text-rose-950 mb-10 leading-tight">
              {t.fresh.title[lang]}
            </h2>
            <div className="flex flex-col gap-7">
              {t.fresh.points.map((p, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className={`w-14 h-14 ${pointBg[i]} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-rose-900 text-base mb-1">{p.title[lang]}</h4>
                    <p className="text-rose-700 text-sm leading-relaxed font-light opacity-70">{p.desc[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

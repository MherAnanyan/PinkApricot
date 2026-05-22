"use client";
import { useLang } from "./LangContext";
import { t } from "@/lib/i18n";

const stepStyles = [
  { icon: "📱", grad: "from-pink-400 to-rose-500", bg: "bg-pink-50" },
  { icon: "🛒", grad: "from-violet-400 to-purple-600", bg: "bg-violet-50" },
  { icon: "🚀", grad: "from-orange-400 to-amber-500", bg: "bg-orange-50" },
  { icon: "👨‍🍳", grad: "from-emerald-400 to-teal-500", bg: "bg-emerald-50" },
];

export default function HowItWorks() {
  const { lang } = useLang();
  return (
    <section id="how" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(251,207,232,.25), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-pink-500 bg-pink-50 border border-pink-100 px-4 py-2 rounded-full mb-5">
            {t.how.tag[lang]}
          </span>
          <h2 className="font-display text-5xl font-black text-rose-950">{t.how.title[lang]}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.how.steps.map((step, i) => (
            <div key={i} className={`relative ${stepStyles[i].bg} rounded-3xl p-7 border border-pink-100 hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-2 transition-all duration-300 group`}>
              {/* connector line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-12 left-full w-6 h-0.5 bg-gradient-to-r from-pink-300 to-transparent z-10" />
              )}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stepStyles[i].grad} flex items-center justify-center text-3xl shadow-lg mb-5 group-hover:scale-110 transition-transform duration-200`}>
                {stepStyles[i].icon}
              </div>
              <div className="w-8 h-8 rounded-full bg-white border-2 border-pink-200 text-pink-500 font-black text-sm flex items-center justify-center mb-4 shadow-sm">
                {i + 1}
              </div>
              <h3 className="font-bold text-rose-900 text-base mb-2">{step.title[lang]}</h3>
              <p className="text-rose-700 text-sm leading-relaxed font-light opacity-70">{step.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { t } from "@/lib/i18n";
import { boxes } from "@/lib/boxes";
import Link from "next/link";

export default function Boxes() {
  const { lang } = useLang();
  const { addItem, items } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  const handleAdd = (box: typeof boxes[0]) => {
    addItem({ id: box.id, type: "box", name: box.dish[lang], price: box.price, emoji: box.emoji });
    setAdded(box.id);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <section id="boxes" className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fff9f6 0%, #fce7f3 50%, #fff1f2 100%)" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(249,168,212,.4), transparent)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(253,164,175,.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{ background: "#fce7f3", color: "#db2777", border: "1px solid #fbcfe8" }}>
            {t.boxes.tag[lang]}
          </span>
          <h2 className="font-display text-5xl font-black" style={{ color: "#881337" }}>{t.boxes.title[lang]}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxes.map((box) => {
            const inCart = items.some(i => i.id === box.id);
            const justAdded = added === box.id;
            return (
              <div key={box.id}
                className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                style={{ background: "#ffffff", border: inCart ? `2px solid ${box.accentColor}` : "1px solid #fce7f3", boxShadow: "0 4px 20px rgba(244,63,94,.06)" }}>

                {box.featured && (
                  <div className="absolute top-4 right-4 z-20 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg"
                    style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)" }}>
                    ⭐ {t.boxes.featured[lang]}
                  </div>
                )}

                {inCart && (
                  <div className="absolute top-4 left-4 z-20 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg"
                    style={{ background: "#16a34a" }}>
                    ✓ In basket
                  </div>
                )}

                {/* colorful top */}
                <div className={`h-48 bg-gradient-to-br ${box.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 70%, rgba(255,255,255,.2), transparent)" }} />
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full" style={{ background: "rgba(255,255,255,.1)" }} />
                  <span className="text-8xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10 float-anim">
                    {box.emoji}
                  </span>
                  <div className="absolute bottom-3 left-4">
                    <span className="text-white font-bold text-sm opacity-90">{box.flag} {box.cuisine[lang]}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl font-bold mb-1" style={{ color: "#881337" }}>{box.dish[lang]}</h3>
                  <p className="text-xs font-medium mb-4 italic" style={{ color: box.accentColor }}>{box.tagline[lang]}</p>

                  {/* cold pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {box.ingredients.filter(i => i.cold).slice(0, 3).map(ing => (
                      <span key={ing.name.en} className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{ background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" }}>
                        ❄️ {ing.name[lang]}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs rounded-xl px-3 py-2 mb-4"
                    style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#4ade80" }} />
                    <span className="font-medium" style={{ color: "#15803d" }}>Ice-packed · Same day · 2 servings</span>
                  </div>

                  <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #fff1f2" }}>
                    <div>
                      <span className="font-display text-2xl font-black" style={{ color: box.accentColor }}>
                        {box.price.toLocaleString()}
                      </span>
                      <span className="text-xs ml-1 font-medium" style={{ color: "#f9a8d4" }}>AMD</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleAdd(box)}
                        className="text-xs font-black px-3 py-2 rounded-full transition-all duration-200 hover:scale-105"
                        style={justAdded || inCart
                          ? { background: "#f0fdf4", color: "#16a34a", border: "1.5px solid #bbf7d0" }
                          : { background: "linear-gradient(135deg, #ec4899, #f43f5e)", color: "#ffffff", boxShadow: "0 4px 12px rgba(244,63,94,.3)" }}>
                        {justAdded ? "✓ Added!" : inCart ? "✓ Added" : "+ Add"}
                      </button>
                      <Link href={`/box/${box.id}`}
                        className="text-xs font-black px-3 py-2 rounded-full transition-all duration-200"
                        style={{ background: "#fff1f2", color: "#e11d48", border: "1.5px solid #fecdd3" }}>
                        Info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

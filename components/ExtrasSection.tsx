"use client";
import { useState } from "react";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { extras, extraCategories } from "@/lib/extras";
import Link from "next/link";

export default function ExtrasSection() {
  const { lang } = useLang();
  const { addItem, items } = useCart();
  const [activeTab, setActiveTab] = useState("wine");
  const [added, setAdded] = useState<string | null>(null);

  const filtered = extras.filter(e => e.category === activeTab);

  const handleAdd = (extra: typeof extras[0]) => {
    addItem({
      id: extra.id,
      type: "extra",
      name: extra.name[lang],
      price: extra.price,
      emoji: extra.emoji,
    });
    setAdded(extra.id);
    setTimeout(() => setAdded(null), 1200);
  };

  const isInCart = (id: string) => items.some(i => i.id === id);

  return (
    <section id="extras" className="py-28 relative overflow-hidden" style={{ background: "#fff9f6" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(251,207,232,.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4"
              style={{ background: "#fce7f3", color: "#db2777", border: "1px solid #fbcfe8" }}>
              {lang === "en" ? "Add to your order" : lang === "hy" ? "Avaelacrek dzez patverumid" : "Добавьте к заказу"}
            </span>
            <h2 className="font-display font-black text-5xl" style={{ color: "#881337" }}>
              {lang === "en" ? "Make it a perfect evening" : lang === "hy" ? "Karelu e kammal kaтарyal iriq" : "Сделайте вечер идеальным"}
            </h2>
            <p className="mt-3 font-light text-lg" style={{ color: "#9f1239", opacity: .6 }}>
              {lang === "en" ? "Wine, drinks, desserts & romantic extras delivered with your box"
                : lang === "hy" ? "Gini, xmichkner, anourener yev romantik accessories"
                : "Вино, напитки, десерты и романтические дополнения с вашим боксом"}
            </p>
          </div>
          <Link href="/checkout"
            className="flex items-center gap-3 font-bold px-6 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)", color: "#ffffff" }}>
            🛒 {lang === "en" ? "View Basket" : lang === "hy" ? "Kalatag" : "Корзина"}
          </Link>
        </div>

        {/* category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {extraCategories.map(cat => (
            <button key={cat.id} onClick={() => setActiveTab(cat.id)}
              className="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200"
              style={activeTab === cat.id
                ? { background: "linear-gradient(135deg, #ec4899, #f43f5e)", color: "#ffffff", boxShadow: "0 4px 16px rgba(244,63,94,.35)" }
                : { background: "#ffffff", color: "#9f1239", border: "2px solid #fce7f3" }}>
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* extras grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map(extra => {
            const inCart = isInCart(extra.id);
            const justAdded = added === extra.id;
            return (
              <div key={extra.id}
                className="rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ background: "#ffffff", border: "1px solid #fce7f3", boxShadow: "0 2px 12px rgba(244,63,94,.06)" }}>
                {/* top visual */}
                <div className={`h-36 bg-gradient-to-br ${extra.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 70%, rgba(255,255,255,.2), transparent)" }} />
                  <span className="text-6xl float-anim drop-shadow-lg relative z-10">{extra.emoji}</span>
                  {extra.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,.9)", color: "#881337" }}>
                      {extra.badge[lang]}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1 leading-tight" style={{ color: "#881337" }}>
                    {extra.name[lang]}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4 font-light" style={{ color: "#9f1239", opacity: .65 }}>
                    {extra.description[lang]}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-xl" style={{ color: "#db2777" }}>
                      {extra.price === 0
                        ? (lang === "en" ? "FREE" : lang === "hy" ? "ԱՆVJAR" : "БЕСПЛАТНО")
                        : `${extra.price.toLocaleString()} AMD`}
                    </span>
                    <button onClick={() => handleAdd(extra)}
                      className="text-xs font-black px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
                      style={justAdded || inCart
                        ? { background: "#f0fdf4", color: "#16a34a", border: "2px solid #bbf7d0" }
                        : { background: "linear-gradient(135deg, #ec4899, #f43f5e)", color: "#ffffff", boxShadow: "0 4px 12px rgba(244,63,94,.3)" }}>
                      {justAdded ? "✓ Added!" : inCart ? "✓ In cart" : "+ Add"}
                    </button>
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

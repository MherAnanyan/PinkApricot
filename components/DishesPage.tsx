"use client";
import { useState, useMemo } from "react";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { dishes, dishRegions, Dish } from "@/lib/dishes";
import WeekModal from "./WeekModal";
import Link from "next/link";

const REGION_COLOR: Record<string,string> = {
  armenian: "#dc2626", latin: "#ea580c", asian: "#2563eb", european: "#16a34a",
};
const REGION_BG: Record<string,string> = {
  armenian: "#fef2f2", latin: "#fff7ed", asian: "#eff6ff", european: "#f0fdf4",
};
const REGION_LABEL: Record<string,Record<string,string>> = {
  armenian: { en:"Armenian", hy:"Hаykakan", ru:"Армянское" },
  latin:    { en:"Latin",    hy:"Latin",    ru:"Латинское" },
  asian:    { en:"Asian",    hy:"Asian",    ru:"Азиатское" },
  european: { en:"European", hy:"Europen",  ru:"Европейское" },
};

export default function DishesPage() {
  const { lang } = useLang();
  const { addItem, items } = useCart();
  const [region, setRegion] = useState("all");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [added, setAdded] = useState<string|null>(null);

  const filtered = useMemo(() => {
    let list = dishes;
    if (region !== "all") list = list.filter(d => d.region === region);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(d =>
        d.name[lang].toLowerCase().includes(q) ||
        d.description[lang].toLowerCase().includes(q) ||
        d.country[lang].toLowerCase().includes(q)
      );
    }
    return list;
  }, [region, search, lang]);

  const handleAdd = (dish: Dish) => {
    addItem({ id:`dish-${dish.id}`, type:"extra", name:`${dish.flag} ${dish.name[lang]}`, price:dish.price, emoji:dish.emoji }, lang);
    setAdded(dish.id);
    setTimeout(() => setAdded(null), 1200);
  };

  const isInCart = (id: string) => items.some(i => i.id === `dish-${id}`);

  const labels = {
    title:   { en: "Build your week", hy: "Kаzmeq dzez shabbatan", ru: "Составьте своё меню" },
    sub:     { en: "Armenian classics and international dishes — pick what you want or let us suggest 5 for the week.", hy: "Hаykakan yev ashxarhayin uzhelikner.", ru: "Армянская классика и блюда со всего мира — выберите сами или получите 5 предложений на неделю." },
    suggest: { en: "✨ Suggest my week", hy: "✨ Arajarkek shabbatas", ru: "✨ Предложите мне неделю" },
    search:  { en: "Search dishes...", hy: "Pntel uzhelikner...", ru: "Поиск блюд..." },
    min:     { en: "min", hy: "rop", ru: "мин" },
    add:     { en: "+ Add", hy: "+ Avel", ru: "+ Добавить" },
    added:   { en: "✓ Added", hy: "✓ Avelvats", ru: "✓ Добавлено" },
    people:  { en: "2 people", hy: "2 hogni", ru: "2 чел." },
    popular: { en: "Popular", hy: "Sirvats", ru: "Хит" },
    empty:   { en: "No dishes found. Try a different search.", hy: "Uzhelikner chi gtvats.", ru: "Блюда не найдены. Попробуйте другой запрос." },
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f7f9fc", paddingTop: 80 }}>

      {/* ── HERO BANNER ── */}
      <div style={{ background: "linear-gradient(135deg, #0b2545 0%, #1a4a8a 60%, #0b2545 100%)",
        padding: "60px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: .07, pointerEvents: "none",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, textTransform: "uppercase",
            letterSpacing: ".1em", padding: "5px 14px", borderRadius: 100, marginBottom: 20,
            background: "rgba(245,158,66,.2)", color: "#f59e42", border: "1px solid rgba(245,158,66,.3)" }}>
            🇦🇲 Armenian + International
          </span>

          <h1 className="font-display" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900,
            color: "#ffffff", lineHeight: 1.05, marginBottom: 16 }}>
            {labels.title[lang]}
          </h1>

          <p style={{ fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,.65)", marginBottom: 36,
            lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px" }}>
            {labels.sub[lang]}
          </p>

          {/* THE BIG BUTTON */}
          <button onClick={() => setShowModal(true)}
            style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 17, fontWeight: 700,
              padding: "18px 36px", borderRadius: 100, border: "none", cursor: "pointer", color: "#0b2545",
              background: "linear-gradient(135deg, #f59e42, #fb923c)",
              boxShadow: "0 12px 40px rgba(245,158,66,.5)",
              transition: "transform .2s, box-shadow .2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 18px 50px rgba(245,158,66,.6)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(245,158,66,.5)"; }}>
            <span style={{ fontSize: 22 }}>✨</span>
            {labels.suggest[lang]}
          </button>

          <div style={{ marginTop: 20, fontSize: 12, color: "rgba(255,255,255,.4)", fontWeight: 500 }}>
            {lang === "en" ? "2 Armenian · 1 Latin · 1 Asian · 1 European — balanced for the week"
              : lang === "ru" ? "2 армянских · 1 латинское · 1 азиатское · 1 европейское"
              : "2 Hаykakan · 1 Latin · 1 Asian · 1 Europen"}
          </div>
        </div>
      </div>

      {/* Scallop divider */}
      <div style={{ height: 32, background: "#f7f9fc", marginTop: -1 }} />

      {/* ── FILTERS ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 48px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 32 }}>
          {/* Search */}
          <div style={{ position: "relative", flex: "1 1 200px", minWidth: 180 }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
              fontSize: 15, color: "#94a3b8" }}>🔍</span>
            <input type="search" value={search} onChange={e => setSearch(e.target.value)}
              placeholder={labels.search[lang]} className="ba-input"
              style={{ paddingLeft: 40, borderRadius: 100 }} />
          </div>

          {/* Region tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {dishRegions.map(r => (
              <button key={r.id} onClick={() => setRegion(r.id)} className={`region-btn${region===r.id?" active":""}`}>
                {r.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600, marginBottom: 24 }}>
          {filtered.length} {lang === "en" ? "dishes" : lang === "ru" ? "блюд" : "uzhelik"}
        </div>

        {/* ── DISH GRID ── */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 24px" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🍽️</div>
            <p style={{ fontSize: 16, color: "#94a3b8" }}>{labels.empty[lang]}</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 20 }}>
            {filtered.map(dish => {
              const inCart = isInCart(dish.id);
              const justAdded = added === dish.id;
              return (
                <div key={dish.id} className="ba-card card-lift"
                  style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  {/* Photo */}
                  <div style={{ position: "relative", height: 180, flexShrink: 0, overflow: "hidden",
                    background: REGION_BG[dish.region] }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={dish.photo} alt={dish.name[lang]}
                      style={{ width: "100%", height: "100%", objectFit: "cover",
                        transition: "transform .4s ease" }} loading="lazy"
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />

                    {/* Gradient overlay bottom */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
                      background: "linear-gradient(transparent, rgba(0,0,0,.4))" }} />

                    {/* Region badge */}
                    <div style={{ position: "absolute", top: 12, left: 12, fontSize: 11, fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: ".07em", padding: "3px 10px",
                      borderRadius: 100, color: "#fff", background: REGION_COLOR[dish.region] }}>
                      {dish.flag} {REGION_LABEL[dish.region][lang]}
                    </div>

                    {dish.popular && (
                      <div style={{ position: "absolute", top: 12, right: 12, fontSize: 10, fontWeight: 700,
                        padding: "3px 9px", borderRadius: 100, background: "#f59e42", color: "#fff" }}>
                        ⭐ {labels.popular[lang]}
                      </div>
                    )}

                    {inCart && (
                      <div style={{ position: "absolute", bottom: 10, right: 10, fontSize: 10, fontWeight: 700,
                        padding: "3px 9px", borderRadius: 100, background: "#16a34a", color: "#fff" }}>
                        ✓ {lang === "en" ? "In basket" : lang === "ru" ? "В корзине" : "Kalatag-um"}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#0b2545", marginBottom: 4 }}>
                      {dish.emoji} {dish.name[lang]}
                    </div>
                    <div style={{ fontSize: 12, color: "#64748b", fontWeight: 300, lineHeight: 1.6,
                      flex: 1, marginBottom: 14 }}>
                      {dish.description[lang]}
                    </div>

                    {/* Meta row */}
                    <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#64748b",
                        display: "flex", alignItems: "center", gap: 4 }}>
                        ⏱ {dish.cookTime} {labels.min[lang]}
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#64748b",
                        display: "flex", alignItems: "center", gap: 4 }}>
                        👥 {labels.people[lang]}
                      </span>
                      <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 100, fontWeight: 600,
                        background: dish.difficulty === "Easy" ? "#f0fdf4" : "#fef9c3",
                        color: dish.difficulty === "Easy" ? "#16a34a" : "#854d0e" }}>
                        {dish.difficulty}
                      </span>
                    </div>

                    {/* Price + Add */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
                      paddingTop: 12, borderTop: "1px solid #f1f5f9" }}>
                      <div>
                        <span className="font-display" style={{ fontSize: 22, fontWeight: 900,
                          color: REGION_COLOR[dish.region] }}>
                          {dish.price.toLocaleString()}
                        </span>
                        <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 4 }}>AMD</span>
                      </div>
                      <button onClick={() => handleAdd(dish)}
                        className={justAdded || inCart ? "btn-outline btn-green" : "btn-blue"}
                        style={{ padding: "9px 18px", fontSize: 13, borderRadius: 100 }}>
                        {justAdded ? "✓ Added!" : inCart ? labels.added[lang] : labels.add[lang]}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Week modal */}
      {showModal && <WeekModal onClose={() => setShowModal(false)} />}
    </main>
  );
}

"use client";
import { useState } from "react";
import { useLang } from "./LangContext";
import { dishes } from "@/lib/dishes";
import WeekModal from "./WeekModal";
import Link from "next/link";

export default function DishesTeaser() {
  const { lang } = useLang();
  const [showModal, setShowModal] = useState(false);
  const popular = dishes.filter(d => d.popular).slice(0, 4);

  const labels = {
    tag:     { en: "New — Individual dishes", hy: "Nor — Andzin uzhelikner", ru: "Новинка — Отдельные блюда" },
    title:   { en: "Not feeling a full box?", hy: "Chi uzum em lri arkgh?", ru: "Не хотите полный бокс?" },
    sub:     { en: "Pick individual dishes — Armenian classics and international favourites. Or let us build your week.", hy: "Yntreq andzin uzhelikner. Kam tveq mez kazmel dzez shabbata menyun.", ru: "Выбирайте отдельные блюда — армянская классика и международные хиты. Или мы составим меню за вас." },
    suggest: { en: "✨ Suggest my week (5 dishes)", hy: "✨ Arajarkek shabbatas (5 uzhelik)", ru: "✨ Предложите 5 блюд на неделю" },
    browse:  { en: "Browse all dishes →", hy: "Tesnel bolor uzhelikner →", ru: "Все блюда →" },
  };

  const REGION_COLOR: Record<string,string> = {
    armenian: "#dc2626", latin: "#ea580c", asian: "#2563eb", european: "#16a34a",
  };

  return (
    <>
      <section style={{ padding: "100px 0", background: "#0b2545", position: "relative", overflow: "hidden" }}>
        {/* subtle pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: .04, pointerEvents: "none",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

            {/* Left — text */}
            <div>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                letterSpacing: ".1em", padding: "5px 14px", borderRadius: 100, marginBottom: 20,
                background: "rgba(245,158,66,.2)", color: "#f59e42", border: "1px solid rgba(245,158,66,.3)" }}>
                {labels.tag[lang]}
              </span>

              <h2 className="font-display" style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 900,
                color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
                {labels.title[lang]}
              </h2>

              <p style={{ fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,.6)", lineHeight: 1.7,
                marginBottom: 36, maxWidth: 440 }}>
                {labels.sub[lang]}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <button onClick={() => setShowModal(true)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 700,
                    padding: "14px 28px", borderRadius: 100, border: "none", cursor: "pointer", color: "#0b2545",
                    background: "linear-gradient(135deg, #f59e42, #fb923c)",
                    boxShadow: "0 8px 32px rgba(245,158,66,.45)",
                    transition: "transform .2s, box-shadow .2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(245,158,66,.55)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(245,158,66,.45)"; }}>
                  {labels.suggest[lang]}
                </button>

                <Link href="/dishes"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600,
                    padding: "14px 24px", borderRadius: 100, textDecoration: "none", color: "rgba(255,255,255,.75)",
                    border: "1px solid rgba(255,255,255,.2)", transition: "all .2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.4)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.75)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.2)"; }}>
                  {labels.browse[lang]}
                </Link>
              </div>

              {/* Region breakdown */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 32 }}>
                {[
                  { label: { en: "🇦🇲 6 Armenian", ru: "🇦🇲 6 армянских", hy: "🇦🇲 6 Hаykakan" } },
                  { label: { en: "🌎 4 Latin",     ru: "🌎 4 латинских",  hy: "🌎 4 Latin" } },
                  { label: { en: "🌏 4 Asian",     ru: "🌏 4 азиатских",  hy: "🌏 4 Asian" } },
                  { label: { en: "🌍 4 European",  ru: "🌍 4 европейских",hy: "🌍 4 Europen" } },
                ].map((r, i) => (
                  <span key={i} style={{ fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 100,
                    background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.65)",
                    border: "1px solid rgba(255,255,255,.12)" }}>
                    {r.label[lang]}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — dish preview grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {popular.map((dish, i) => (
                <Link key={dish.id} href="/dishes"
                  style={{ borderRadius: 18, overflow: "hidden", position: "relative", textDecoration: "none",
                    height: 160, display: "block", transition: "transform .3s",
                    animation: `fadeUp .6s ${i * .1}s ease both` }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dish.photo} alt={dish.name[lang]}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                  <div style={{ position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,.7) 100%)" }} />
                  <div style={{ position: "absolute", bottom: 10, left: 12, right: 12 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase",
                      letterSpacing: ".07em", padding: "2px 7px", borderRadius: 100, marginBottom: 4,
                      display: "inline-block", background: REGION_COLOR[dish.region], color: "#fff" }}>
                      {dish.flag}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                      {dish.name[lang]}
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,.8)", marginTop: 2, fontWeight: 600 }}>
                      {dish.price.toLocaleString()} AMD
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showModal && <WeekModal onClose={() => setShowModal(false)} />}
    </>
  );
}

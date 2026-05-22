"use client";
import { useLang } from "./LangContext";
import { t } from "@/lib/i18n";
import { boxes } from "@/lib/boxes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BoxDetail({ id }: { id: string }) {
  const { lang } = useLang();
  const router = useRouter();
  const box = boxes.find(b => b.id === id);
  const [tab, setTab] = useState<"ingredients" | "steps">("ingredients");

  // Navigate to home and scroll to section
  const goHome = (hash?: string) => {
    if (hash) {
      router.push(`/${hash}`);
    } else {
      router.push("/");
    }
  };

  if (!box) return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50">
      <div className="text-center p-12">
        <div className="text-7xl mb-6">😕</div>
        <h1 className="font-display text-3xl font-black text-rose-900 mb-4">Box not found</h1>
        <Link href="/" className="text-pink-500 hover:underline font-medium">← Back to home</Link>
      </div>
    </div>
  );

  const saving = box.vsRestaurant - box.price;

  return (
    <main className="min-h-screen" style={{ background: "#f9fafb" }}>
      {/* hero banner */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${box.gradient}`} style={{ minHeight: 380 }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 20% 80%, rgba(255,255,255,.2), transparent)" }} />
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full blob-anim" style={{ background: "rgba(255,255,255,.1)" }} />
        <div className="absolute -left-8 -bottom-8 w-56 h-56 rounded-full blob-anim" style={{ background: "rgba(255,255,255,.1)", animationDelay: "-4s" }} />
        <div className="absolute right-16 top-1/2 -translate-y-1/2 float-anim pointer-events-none select-none"
          style={{ fontSize: 160, opacity: .2 }}>{box.emoji}</div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          {/* back button — goes to home page */}
          <button onClick={() => goHome()}
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-all hover:gap-3"
            style={{ color: "rgba(255,255,255,.8)" }}>
            ← {t.box_detail.back[lang]}
          </button>

          <div className="flex items-center gap-5 mb-5">
            <span style={{ fontSize: 56 }}>{box.flag}</span>
            <div>
              <div className="text-sm font-black uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,.7)" }}>
                {box.cuisine[lang]}
              </div>
              <h1 className="font-display font-black text-white leading-none" style={{ fontSize: "clamp(36px,5vw,64px)" }}>
                {box.dish[lang]}
              </h1>
            </div>
          </div>

          <p className="text-lg font-light max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,.75)" }}>
            {box.description[lang]}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { icon: "👥", label: t.box_detail.serves[lang] },
              { icon: "⏱️", label: `${box.cookTime} · ${t.box_detail.time[lang]}` },
              { icon: "📊", label: box.difficulty },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-2 rounded-2xl px-4 py-2.5"
                style={{ background: "rgba(255,255,255,.2)", border: "1px solid rgba(255,255,255,.25)" }}>
                <span>{s.icon}</span>
                <span className="text-white font-bold text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* price bar */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid #fce7f3" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8 flex-wrap">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "#f9a8d4" }}>Your price</div>
              <div className="font-display text-4xl font-black" style={{ color: box.accentColor }}>
                {box.price.toLocaleString()} AMD
              </div>
            </div>
            <div className="text-2xl font-light" style={{ color: "#fecdd3" }}>vs</div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "#f9a8d4" }}>
                {t.box_detail.vs[lang]}
              </div>
              <div className="font-display text-2xl font-black line-through" style={{ color: "#fecdd3" }}>
                {box.vsRestaurant.toLocaleString()} AMD
              </div>
            </div>
            <div className="rounded-2xl px-5 py-2.5" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
              <div className="text-xs font-medium mb-0.5" style={{ color: "#16a34a" }}>{t.box_detail.saving[lang]}</div>
              <div className="font-black text-lg" style={{ color: "#15803d" }}>~{saving.toLocaleString()} AMD</div>
            </div>
          </div>
          <button
            className={`bg-gradient-to-r ${box.gradient} text-white font-black px-8 py-4 rounded-full shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200`}>
            {t.box_detail.order[lang]} · {box.price.toLocaleString()} AMD
          </button>
        </div>
      </div>

      {/* content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* tabs area */}
          <div className="lg:col-span-2">
            <div className="flex gap-2 mb-7">
              {(["ingredients", "steps"] as const).map(tb => (
                <button key={tb} onClick={() => setTab(tb)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                    tab === tb
                      ? `bg-gradient-to-r ${box.gradient} text-white shadow-lg`
                      : ""
                  }`}
                  style={tab !== tb ? { background: "#ffffff", border: "2px solid #fce7f3", color: "#9f1239" } : {}}>
                  {tb === "ingredients" ? t.box_detail.ingredients[lang] : t.box_detail.steps[lang]}
                </button>
              ))}
            </div>

            {tab === "ingredients" && (
              <div style={{ background: "#ffffff", borderRadius: 24, border: "1px solid #fce7f3" }} className="overflow-hidden shadow-sm">
                <div className="p-3">
                  {box.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-4 px-4 py-4 rounded-2xl transition-colors"
                      onMouseEnter={e => (e.currentTarget.style.background = "#fff9f6")}
                      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 shadow-sm"
                        style={{ background: ing.cold ? "#eff6ff" : ing.exotic ? "#fffbeb" : "#f0fdf4" }}>
                        {ing.cold ? "❄️" : ing.exotic ? "🌍" : "🌱"}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm" style={{ color: "#881337" }}>{ing.name[lang]}</div>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          {ing.cold && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                              style={{ background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" }}>
                              {t.box_detail.cold[lang]}
                            </span>
                          )}
                          {ing.exotic && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                              style={{ background: "#fffbeb", color: "#b45309", border: "1px solid #fde68a" }}>
                              {t.box_detail.imported[lang]}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="font-mono text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#fff1f2", color: "#e11d48" }}>
                        {ing.qty}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "steps" && (
              <div className="flex flex-col gap-4">
                {box.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 rounded-2xl p-5 shadow-sm"
                    style={{ background: "#ffffff", border: "1px solid #fce7f3" }}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${box.gradient} text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md`}>
                      {i + 1}
                    </div>
                    <p className="text-sm leading-relaxed pt-1.5 font-light" style={{ color: "#9f1239" }}>
                      {step[lang]}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* sidebar */}
          <div className="flex flex-col gap-5">
            {/* freshness */}
            <div className={`rounded-3xl p-6 bg-gradient-to-br ${box.gradient} shadow-xl`}>
              <div className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,.8)" }}>
                {t.box_detail.freshness[lang]}
              </div>
              <p className="font-medium text-sm leading-relaxed text-white">{box.freshNote[lang]}</p>
              <div className="mt-5 flex gap-2 flex-wrap">
                {["❄️ Ice-packed", "🚀 Same day", "✅ Checked"].map(b => (
                  <span key={b} className="text-white text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: "rgba(255,255,255,.2)", border: "1px solid rgba(255,255,255,.25)" }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* other boxes */}
            <div className="rounded-3xl p-5 shadow-sm" style={{ background: "#ffffff", border: "1px solid #fce7f3" }}>
              <div className="text-xs font-black uppercase tracking-wider mb-4" style={{ color: "#f9a8d4" }}>
                Other Boxes
              </div>
              <div className="flex flex-col gap-2">
                {boxes.filter(b => b.id !== box.id).map(b => (
                  <Link key={b.id} href={`/box/${b.id}`}
                    className="flex items-center gap-3 p-3 rounded-2xl transition-colors group"
                    style={{ background: "transparent" }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = "#fff9f6")}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = "transparent")}>
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${b.gradient} flex items-center justify-center text-xl shadow-sm`}>
                      {b.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold truncate" style={{ color: "#881337" }}>{b.dish[lang]}</div>
                      <div className="text-xs font-bold mt-0.5" style={{ color: b.accentColor }}>
                        {b.price.toLocaleString()} AMD
                      </div>
                    </div>
                    <span className="text-lg transition-colors" style={{ color: "#fecdd3" }}>→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* order button */}
            <button className={`w-full bg-gradient-to-r ${box.gradient} text-white font-black text-base py-5 rounded-2xl shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200`}>
              {t.box_detail.order[lang]}<br />
              <span className="text-sm font-normal" style={{ opacity: .8 }}>
                {box.price.toLocaleString()} AMD · {t.box_detail.serves[lang]}
              </span>
            </button>

            {/* back to all boxes */}
            <button onClick={() => goHome("/#boxes")}
              className="w-full py-3 rounded-2xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#fff1f2", color: "#e11d48", border: "2px solid #fecdd3" }}>
              ← View All Boxes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

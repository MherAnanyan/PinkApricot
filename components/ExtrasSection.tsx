"use client";
import { useState } from "react";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { extras, extraCategories } from "@/lib/extras";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function ExtrasSection() {
  const { lang } = useLang();
  const { addItem, items } = useCart();
  const [activeTab, setActiveTab] = useState("wine");
  const [added, setAdded] = useState<string|null>(null);

  const filtered = extras.filter(e => e.category === activeTab);
  const isInCart = (id: string) => items.some(i => i.id === id);

  const handleAdd = (extra: typeof extras[0]) => {
    addItem({ id:extra.id, type:"extra", name:extra.name[lang], price:extra.price, emoji:extra.emoji }, lang);
    setAdded(extra.id);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <section id="extras" style={{ padding:"120px 0", background:"#ffffff", position:"relative", overflow:"hidden" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        <ScrollReveal>
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:24, marginBottom:40 }}>
            <div>
              <span className="section-tag blue">
                {lang==="en" ? "Add to your order" : lang==="ru" ? "Добавьте к заказу" : "Avaelacrek dzez patverumid"}
              </span>
              <h2 className="font-display" style={{ fontWeight:900, color:"#0b2545", fontSize:"clamp(28px,4vw,52px)" }}>
                {lang==="en" ? "Make it a perfect evening" : lang==="ru" ? "Сделайте вечер идеальным" : "Karelu e kammal kayal iriq"}
              </h2>
              <p style={{ fontSize:16, fontWeight:300, marginTop:8, color:"#64748b" }}>
                {lang==="en" ? "Wine, drinks, desserts & romantic extras — delivered with your box"
                  : lang==="ru" ? "Вино, напитки, десерты и романтика — с вашим боксом"
                  : "Gini, xmichkner, anourener yev romantik accessories"}
              </p>
            </div>
            <Link href="/checkout" className="btn-blue">
              🛒 {lang==="en" ? "View Basket" : lang==="ru" ? "Корзина" : "Kalatag"}
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:40 }}>
            {extraCategories.map(cat => (
              <button key={cat.id} onClick={() => setActiveTab(cat.id)}
                className={`tab-btn${activeTab===cat.id?" active":""}`}
                style={activeTab===cat.id ? { background:"linear-gradient(135deg,#2563eb,#1a4a8a)", borderColor:"transparent" } : undefined}>
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:20 }}>
          {filtered.map((extra,i) => {
            const inCart = isInCart(extra.id);
            const justAdded = added === extra.id;
            return (
              <ScrollReveal key={extra.id} delay={i*70}>
                <div className="ba-card card-lift" style={{ display:"flex", flexDirection:"column",
                  border: inCart ? "2px solid #22c55e" : undefined }}>
                  <div style={{ height:130, position:"relative", overflow:"hidden", flexShrink:0,
                    background:`linear-gradient(135deg, ${extra.gradient.replace("from-","").replace("to-","")})` }}>
                    <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center",
                      background:`linear-gradient(135deg, ${getGradient(extra.gradient)})` }}>
                      <span className="float-anim" style={{ fontSize:52 }}>{extra.emoji}</span>
                    </div>
                    {extra.badge && (
                      <div style={{ position:"absolute", top:10, right:10, fontSize:10, fontWeight:900,
                        textTransform:"uppercase", padding:"3px 8px", borderRadius:100,
                        background:"rgba(255,255,255,.92)", color:"#0b2545" }}>
                        {extra.badge[lang]}
                      </div>
                    )}
                  </div>
                  <div style={{ padding:"14px 16px", flex:1, display:"flex", flexDirection:"column" }}>
                    <div style={{ fontWeight:700, fontSize:13, marginBottom:4, color:"#0b2545", lineHeight:1.3 }}>{extra.name[lang]}</div>
                    <div style={{ fontSize:11, lineHeight:1.55, marginBottom:12, flex:1, fontWeight:300, color:"#64748b" }}>{extra.description[lang]}</div>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                      <span className="font-display" style={{ fontSize:18, fontWeight:900, color:"#2563eb" }}>
                        {extra.price===0 ? (lang==="en" ? "FREE" : lang==="ru" ? "БЕСПЛАТНО" : "ANJAR") : `${extra.price.toLocaleString()} AMD`}
                      </span>
                      <button onClick={() => handleAdd(extra)}
                        className={justAdded||inCart ? "btn-outline btn-green" : "btn-blue"}
                        style={{ padding:"7px 14px", fontSize:11, borderRadius:100 }}>
                        {justAdded ? "✓ Added!" : inCart ? "✓ In cart" : "+ Add"}
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getGradient(tailwindGrad: string): string {
  const map: Record<string,string> = {
    "from-red-600 to-rose-800": "#dc2626, #9f1239",
    "from-yellow-400 to-amber-500": "#facc15, #f59e0b",
    "from-pink-400 to-rose-500": "#f472b6, #f43f5e",
    "from-cyan-400 to-blue-500": "#22d3ee, #3b82f6",
    "from-yellow-300 to-lime-400": "#fde047, #a3e635",
    "from-orange-300 to-amber-400": "#fdba74, #fbbf24",
    "from-red-400 to-pink-600": "#f87171, #db2777",
    "from-amber-700 to-stone-800": "#b45309, #292524",
    "from-yellow-500 to-orange-600": "#eab308, #ea580c",
    "from-purple-400 to-violet-600": "#c084fc, #7c3aed",
    "from-orange-200 to-amber-300": "#fed7aa, #fcd34d",
    "from-pink-300 to-rose-500": "#f9a8d4, #f43f5e",
    "from-pink-400 to-fuchsia-500": "#f472b6, #d946ef",
    "from-green-400 to-emerald-600": "#4ade80, #059669",
  };
  return map[tailwindGrad] || "#2563eb, #1a4a8a";
}

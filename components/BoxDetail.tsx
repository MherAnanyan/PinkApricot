"use client";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { t } from "@/lib/i18n";
import { boxes } from "@/lib/boxes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const REGION_COLOR: Record<string,string> = { latin:"#ea580c", asian:"#2563eb", european:"#16a34a" };
const REGION_LABEL: Record<string,Record<string,string>> = {
  latin:    { en:"Latin America", hy:"Latin America", ru:"Латинская Америка" },
  asian:    { en:"Asia",          hy:"Asia",          ru:"Азия" },
  european: { en:"Europe",        hy:"Europa",        ru:"Европа" },
};

export default function BoxDetail({ id }: { id: string }) {
  const { lang } = useLang();
  const { addItem, items } = useCart();
  const router = useRouter();
  const box = boxes.find(b => b.id === id);
  const [tab, setTab] = useState<"ingredients"|"steps">("ingredients");
  const [added, setAdded] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { vidRef.current?.play().catch(() => {}); }, []);

  if (!box) return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#f7f9fc" }}>
      <div style={{ textAlign:"center", padding:48 }}>
        <div style={{ fontSize:72, marginBottom:24 }} className="float-anim">😕</div>
        <h1 className="font-display" style={{ fontSize:36, fontWeight:900, marginBottom:16, color:"#0b2545" }}>Box not found</h1>
        <Link href="/" className="btn-blue">← Back to home</Link>
      </div>
    </div>
  );

  const saving = box.vsRestaurant - box.price;
  const inCart = items.some(i => i.id === box.id);

  const handleAdd = () => {
    addItem({ id:box.id, type:"box", name:`${box.country[lang]} — ${box.dish[lang]}`, price:box.price, emoji:box.emoji }, lang);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <main style={{ minHeight:"100vh", background:"#f7f9fc" }}>

      {/* ── HERO ── full screen height */}
      <div className="hero-wrap">
        {/* Placeholder image always visible */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={box.videoPlaceholder} alt={box.country[lang]} className="hero-bg" />
        {/* Video overlays image when ready */}
        <video ref={vidRef} autoPlay muted loop playsInline preload="none" className="hero-vid"
          style={{ zIndex:1 }}>
          <source src={`/video/${box.id}.mp4`} type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="hero-body">
          <button onClick={() => router.push("/")}
            style={{ display:"inline-flex", alignItems:"center", gap:8, fontSize:13, fontWeight:600,
              color:"rgba(255,255,255,.65)", background:"none", border:"none", cursor:"pointer",
              marginBottom:32, padding:0, transition:"color .2s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="rgba(255,255,255,1)")}
            onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,.65)")}>
            ← {t.box_detail.back[lang]}
          </button>

          {/* Badges */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:20 }}>
            <span style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".08em",
              padding:"4px 12px", borderRadius:100, background: REGION_COLOR[box.region], color:"#fff" }}>
              {REGION_LABEL[box.region][lang]}
            </span>
            <span style={{ fontSize:11, fontWeight:700, padding:"4px 12px", borderRadius:100,
              background:"rgba(255,255,255,.18)", color:"#fff", backdropFilter:"blur(8px)" }}>
              {box.cookTime} · {box.difficulty}
            </span>
          </div>

          {/* Country + Flag */}
          <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:16 }}>
            <span style={{ fontSize:64 }}>{box.flag}</span>
            <div>
              <div className="font-display" style={{ fontWeight:900, color:"#ffffff", lineHeight:.95,
                fontSize:"clamp(40px,6vw,80px)" }}>
                {box.country[lang]}
              </div>
              <div style={{ fontSize:18, fontWeight:400, color:"rgba(255,255,255,.7)", marginTop:6 }}>
                {box.dish[lang]}
              </div>
            </div>
          </div>

          <p style={{ fontSize:16, fontWeight:300, maxWidth:580, lineHeight:1.7, marginBottom:32,
            color:"rgba(255,255,255,.72)" }}>
            {box.description[lang]}
          </p>

          <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
            <button onClick={handleAdd}
              style={{ fontWeight:700, padding:"14px 28px", borderRadius:100, border:"none", cursor:"pointer",
                color:"#ffffff", fontSize:15, transition:"transform .2s, box-shadow .2s",
                background: added||inCart ? "rgba(34,197,94,.9)" : `linear-gradient(135deg,${box.gradientFrom},${box.gradientTo})`,
                boxShadow: added||inCart ? "none" : `0 8px 32px ${box.gradientFrom}55` }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform="translateY(-2px)"}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform="translateY(0)"}>
              {added ? "✓ Added to basket!" : inCart ? "✓ In basket" : `+ Add to basket · ${box.price.toLocaleString()} AMD`}
            </button>
            {inCart && (
              <Link href="/checkout" className="btn-blue" style={{ fontSize:15 }}>🛒 Checkout</Link>
            )}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", zIndex:4,
          display:"flex", flexDirection:"column", alignItems:"center", gap:6 }} className="animate-bounce">
          <div style={{ width:1, height:28, background:"linear-gradient(rgba(255,255,255,.5),transparent)" }} />
        </div>
      </div>

      {/* ── PRICE BAR ── */}
      <div style={{ background:"#0b2545", borderBottom:"1px solid rgba(255,255,255,.08)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"20px 24px",
          display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:20 }}>
          <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap", gap:32 }}>
            <div>
              <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".08em",
                marginBottom:6, color:"rgba(255,255,255,.4)" }}>Your price</div>
              <div className="font-display" style={{ fontSize:40, fontWeight:900, color:"#f59e42" }}>
                {box.price.toLocaleString()} AMD
              </div>
            </div>
            <div style={{ fontSize:20, color:"rgba(255,255,255,.2)" }}>vs</div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".08em",
                marginBottom:6, color:"rgba(255,255,255,.4)" }}>{t.box_detail.vs[lang]}</div>
              <div className="font-display" style={{ fontSize:24, fontWeight:900, color:"rgba(255,255,255,.2)",
                textDecoration:"line-through" }}>
                {box.vsRestaurant.toLocaleString()} AMD
              </div>
            </div>
            <div style={{ padding:"10px 20px", borderRadius:14,
              background:"rgba(34,197,94,.15)", border:"1px solid rgba(34,197,94,.3)" }}>
              <div style={{ fontSize:11, color:"rgba(134,239,172,.8)", marginBottom:2 }}>{t.box_detail.saving[lang]}</div>
              <div style={{ fontWeight:900, fontSize:18, color:"#86efac" }}>~{saving.toLocaleString()} AMD</div>
            </div>
          </div>
          <button onClick={handleAdd}
            style={{ fontWeight:700, padding:"14px 28px", borderRadius:100, border:"none", cursor:"pointer",
              color:"#ffffff", fontSize:14, transition:"transform .2s",
              background: added||inCart ? "rgba(34,197,94,.3)" : `linear-gradient(135deg,${box.gradientFrom},${box.gradientTo})` }}
            onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform="translateY(-2px)"}
            onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform="translateY(0)"}>
            {added ? "✓ Added!" : inCart ? "✓ In basket" : `${t.box_detail.order[lang]} · ${box.price.toLocaleString()} AMD`}
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"64px 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:40 }}>

          {/* Tabs */}
          <div>
            <div style={{ display:"flex", gap:10, marginBottom:32 }}>
              {(["ingredients","steps"] as const).map(tb => (
                <button key={tb} onClick={() => setTab(tb)} className={`tab-btn${tab===tb?" active":""}`}
                  style={tab===tb ? { background:`linear-gradient(135deg,${box.gradientFrom},${box.gradientTo})`, borderColor:"transparent" } : undefined}>
                  {tb==="ingredients" ? t.box_detail.ingredients[lang] : t.box_detail.steps[lang]}
                </button>
              ))}
            </div>

            {tab==="ingredients" && (
              <ScrollReveal>
                <div className="ba-card">
                  {box.ingredients.map((ing, i) => (
                    <div key={i} className="ing-row">
                      <div style={{ width:44, height:44, borderRadius:12, flexShrink:0, display:"flex",
                        alignItems:"center", justifyContent:"center", fontSize:18,
                        background: ing.cold?"#dbeafe":ing.exotic?"#fffbeb":"#f0fdf4" }}>
                        {ing.cold?"❄️":ing.exotic?"🌍":"🌱"}
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontWeight:600, fontSize:14, color:"#0b2545" }}>{ing.name[lang]}</div>
                        <div style={{ display:"flex", gap:6, marginTop:4, flexWrap:"wrap" }}>
                          {ing.cold && <span style={{ fontSize:10, fontWeight:600, padding:"2px 8px", borderRadius:100,
                            background:"#dbeafe", color:"#1a4a8a" }}>{t.box_detail.cold[lang]}</span>}
                          {ing.exotic && <span style={{ fontSize:10, fontWeight:600, padding:"2px 8px", borderRadius:100,
                            background:"#fffbeb", color:"#92400e" }}>{t.box_detail.imported[lang]}</span>}
                        </div>
                      </div>
                      <div style={{ fontFamily:"monospace", fontSize:12, fontWeight:700, padding:"5px 12px",
                        borderRadius:100, background:"#eff6ff", color:"#1a4a8a", flexShrink:0 }}>
                        {ing.qty}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}

            {tab==="steps" && (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {box.steps.map((step, i) => (
                  <ScrollReveal key={i} delay={i*60}>
                    <div className="ba-card" style={{ display:"flex", gap:16, padding:20, borderRadius:18 }}>
                      <div style={{ width:40, height:40, borderRadius:12, flexShrink:0, display:"flex",
                        alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:14, color:"#fff",
                        background:`linear-gradient(135deg,${box.gradientFrom},${box.gradientTo})` }}>
                        {i+1}
                      </div>
                      <p style={{ fontSize:14, lineHeight:1.7, paddingTop:8, fontWeight:300, color:"#334155" }}>
                        {step[lang]}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {/* Freshness */}
            <div style={{ borderRadius:20, padding:24,
              background:`linear-gradient(135deg,${box.gradientFrom},${box.gradientTo})` }}>
              <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".08em",
                marginBottom:10, color:"rgba(255,255,255,.75)" }}>
                {t.box_detail.freshness[lang]}
              </div>
              <p style={{ fontSize:14, fontWeight:500, color:"#fff", lineHeight:1.6 }}>{box.freshNote[lang]}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:16 }}>
                {["❄️ Ice-packed","🚀 Same day","✅ Checked"].map(b=>(
                  <span key={b} style={{ fontSize:12, fontWeight:600, padding:"5px 12px", borderRadius:100, color:"#fff",
                    background:"rgba(255,255,255,.2)", border:"1px solid rgba(255,255,255,.25)" }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Extras promo */}
            <div className="ba-card" style={{ padding:20 }}
              >
              <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".08em",
                marginBottom:8, color:"#1a4a8a" }}>🍷 Complete your evening</div>
              <p style={{ fontSize:13, fontWeight:300, marginBottom:16, color:"#334155" }}>
                Add wine, drinks or desserts to your order.
              </p>
              <Link href="/#extras" className="btn-blue" style={{ fontSize:13, padding:"10px 20px", borderRadius:12, display:"block", textAlign:"center" }}>
                Browse Add-ons ✨
              </Link>
            </div>

            {/* Other boxes */}
            <div className="ba-card" style={{ padding:20 }}>
              <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".08em",
                marginBottom:16, color:"#94a3b8" }}>Other boxes</div>
              <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                {boxes.filter(b=>b.id!==box.id).slice(0,4).map(b=>(
                  <Link key={b.id} href={`/box/${b.id}`}
                    style={{ display:"flex", alignItems:"center", gap:12, padding:12, borderRadius:14,
                      textDecoration:"none", transition:"background .15s", background:"transparent" }}
                    onMouseEnter={e=>(e.currentTarget.style.background="#eff6ff")}
                    onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>
                    <div style={{ width:44, height:44, borderRadius:12, flexShrink:0, overflow:"hidden",
                      position:"relative", background:`linear-gradient(135deg,${b.gradientFrom},${b.gradientTo})`,
                      display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>
                      {b.flag}
                    </div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontWeight:700, fontSize:13, color:"#0b2545", overflow:"hidden",
                        textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{b.country[lang]}</div>
                      <div style={{ fontSize:12, color:"#64748b", marginTop:2, overflow:"hidden",
                        textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{b.dish[lang]}</div>
                    </div>
                    <span style={{ color:"#cbd5e1", fontSize:16 }}>→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Add button */}
            <button onClick={handleAdd}
              style={{ width:"100%", fontWeight:900, fontSize:15, padding:"18px 24px", borderRadius:18,
                border:"none", cursor:"pointer", color:"#fff", transition:"transform .2s, box-shadow .2s",
                background: added||inCart ? "#f0fdf4" : `linear-gradient(135deg,${box.gradientFrom},${box.gradientTo})` }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform="translateY(-2px)"}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform="translateY(0)"}>
              <span style={{ color: added||inCart ? "#16a34a" : "#fff" }}>
                {added?"✓ Added!":inCart?"✓ In basket":t.box_detail.order[lang]}
              </span>
              <br />
              <span style={{ fontSize:13, fontWeight:400, opacity:.8, color: added||inCart ? "#16a34a" : "#fff" }}>
                {box.price.toLocaleString()} AMD · {t.box_detail.serves[lang]}
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

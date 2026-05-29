"use client";
import { useState } from "react";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { boxes, regions } from "@/lib/boxes";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const REGION_COLOR: Record<string,string> = { latin:"#ea580c", asian:"#2563eb", european:"#16a34a" };
const REGION_LABEL: Record<string,Record<string,string>> = {
  latin:    { en:"Latin America", hy:"Latin America", ru:"Латинская Америка" },
  asian:    { en:"Asia",          hy:"Asia",          ru:"Азия" },
  european: { en:"Europe",        hy:"Europa",        ru:"Европа" },
};

export default function Boxes() {
  const { lang } = useLang();
  const { addItem, items } = useCart();
  const [region, setRegion] = useState("all");
  const [added, setAdded] = useState<string|null>(null);

  const filtered = region === "all" ? boxes : boxes.filter(b => b.region === region);

  const handleAdd = (box: typeof boxes[0]) => {
    addItem({ id:box.id, type:"box", name:`${box.country[lang]} — ${box.dish[lang]}`, price:box.price, emoji:box.emoji }, lang);
    setAdded(box.id);
    setTimeout(() => setAdded(null), 1400);
  };

  return (
    <section id="boxes" style={{ padding:"120px 0", background:"#f7f9fc", position:"relative", overflow:"hidden" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        <ScrollReveal>
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:24, marginBottom:56 }}>
            <div>
              <span className="section-tag blue">
                {lang==="en" ? "This week's menu" : lang==="ru" ? "Меню этой недели" : "Sha'bata menyu"}
              </span>
              <h2 className="font-display" style={{ fontWeight:900, color:"#0b2545", lineHeight:1.05, fontSize:"clamp(32px,4.5vw,56px)" }}>
                {lang==="en" ? "Six countries." : lang==="ru" ? "Шесть стран." : "Vets yerkir."} {lang==="en" ? "Three regions." : lang==="ru" ? "Три региона." : "Yerek shrjan."}<br />
                <span style={{ background:"linear-gradient(135deg,#f59e42,#fb923c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  {lang==="en" ? "One kitchen." : lang==="ru" ? "Одна кухня." : "Mek xohanoc."}
                </span>
              </h2>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {regions.map(r => (
                <button key={r.id} onClick={() => setRegion(r.id)} className={`region-btn${region===r.id?" active":""}`}>
                  {r.label[lang]}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid-auto" style={{ gridTemplateColumns:"repeat(auto-fill, minmax(280px,1fr))" }}>
          {filtered.map((box,i) => {
            const inCart = items.some(it => it.id === box.id);
            const justAdded = added === box.id;
            return (
              <ScrollReveal key={box.id} delay={i*70}>
                <div className="ba-card card-lift" style={{ display:"flex", flexDirection:"column", height:"100%",
                  border: inCart ? `2px solid ${box.accentColor}` : undefined }}>

                  {/* Photo top */}
                  <div style={{ position:"relative", height:210, flexShrink:0, overflow:"hidden",
                    background:`linear-gradient(135deg, ${box.gradientFrom}, ${box.gradientTo})` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={box.videoPlaceholder} alt={box.country[lang]}
                      style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", opacity:.45, transition:"opacity .5s" }}
                      loading="lazy" />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(0,0,0,.05) 0%, rgba(0,0,0,.55) 100%)" }} />

                    {/* Country label */}
                    <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"16px" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                        <span className="float-anim" style={{ fontSize:36 }}>{box.flag}</span>
                        <div>
                          <div style={{ display:"inline-block", fontSize:10, fontWeight:700, textTransform:"uppercase",
                            letterSpacing:".08em", padding:"2px 8px", borderRadius:100, marginBottom:3,
                            background: REGION_COLOR[box.region], color:"#fff" }}>
                            {REGION_LABEL[box.region][lang]}
                          </div>
                          <div className="font-display" style={{ fontWeight:900, fontSize:22, color:"#ffffff", lineHeight:1 }}>
                            {box.country[lang]}
                          </div>
                        </div>
                      </div>
                    </div>

                    {box.featured && (
                      <div style={{ position:"absolute", top:14, right:14, fontSize:10, fontWeight:900,
                        textTransform:"uppercase", letterSpacing:".07em", padding:"4px 10px", borderRadius:100,
                        background:"#f59e42", color:"#fff" }}>
                        ⭐ {lang==="en" ? "Popular" : lang==="ru" ? "Хит" : "Popular"}
                      </div>
                    )}
                    {inCart && (
                      <div style={{ position:"absolute", top:14, left:14, fontSize:10, fontWeight:900,
                        padding:"4px 10px", borderRadius:100, background:"#16a34a", color:"#fff" }}>
                        ✓ In basket
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div style={{ padding:20, display:"flex", flexDirection:"column", flex:1 }}>
                    <div style={{ fontWeight:700, fontSize:15, marginBottom:4, color:"#0b2545" }}>{box.dish[lang]}</div>
                    <div style={{ fontSize:13, fontWeight:300, lineHeight:1.6, marginBottom:14, flex:1, color:"#64748b" }}>
                      {box.tagline[lang]}
                    </div>

                    {/* Cold pills */}
                    <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:12 }}>
                      {box.ingredients.filter(i => i.cold).slice(0,3).map(ing => (
                        <span key={ing.name.en} style={{ fontSize:10, fontWeight:600, padding:"3px 8px", borderRadius:100,
                          background:"#dbeafe", color:"#1a4a8a", border:"1px solid rgba(37,99,235,.15)" }}>
                          ❄ {ing.name[lang]}
                        </span>
                      ))}
                    </div>

                    <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:11, padding:"8px 12px",
                      borderRadius:10, marginBottom:16, background:"#f0fdf4", border:"1px solid #bbf7d0" }}>
                      <span style={{ width:7, height:7, borderRadius:"50%", background:"#4ade80", flexShrink:0 }} />
                      <span style={{ fontWeight:600, color:"#15803d" }}>
                        {lang==="en" ? "Ice-packed · Same day · 2 people" : lang==="ru" ? "Лёд · В тот же день · 2 чел." : "Saruytc · Nuynayes · 2 hogni"}
                      </span>
                    </div>

                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
                      paddingTop:14, borderTop:"1px solid #e2e8f0" }}>
                      <div>
                        <span className="font-display" style={{ fontSize:24, fontWeight:900, color:box.accentColor }}>
                          {box.price.toLocaleString()}
                        </span>
                        <span style={{ fontSize:12, fontWeight:500, marginLeft:4, color:"#94a3b8" }}>AMD</span>
                      </div>
                      <div style={{ display:"flex", gap:8 }}>
                        <button onClick={() => handleAdd(box)}
                          style={{ padding:"8px 16px", fontSize:12, fontWeight:700, borderRadius:100,
                            border:"none", cursor:"pointer", fontFamily:"inherit",
                            background: justAdded||inCart ? "#f0fdf4" : `linear-gradient(135deg,${box.gradientFrom},${box.gradientTo})`,
                            color: justAdded||inCart ? "#16a34a" : "#fff",
                            
                            boxShadow: justAdded||inCart ? "none" : `0 4px 12px ${box.gradientFrom}44` }}>
                          {justAdded ? "✓ Added!" : inCart ? "✓ Added" : "+ Add"}
                        </button>
                        <Link href={`/box/${box.id}`}
                          style={{ padding:"8px 16px", fontSize:12, fontWeight:700, borderRadius:100,
                            textDecoration:"none", background:"#eff6ff", color:"#1a4a8a",
                            border:"1.5px solid rgba(37,99,235,.2)", display:"inline-flex", alignItems:"center" }}>
                          See inside →
                        </Link>
                      </div>
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

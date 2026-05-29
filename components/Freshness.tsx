"use client";
import { useLang } from "./LangContext";
import { t } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const POINT_BG = ["#fff7ed","#fce7f3","#f0fdf4","#eff6ff"];
const POINT_COLOR = ["#ea580c","#db2777","#16a34a","#2563eb"];

export default function Freshness() {
  const { lang } = useLang();
  return (
    <section id="fresh" style={{ padding:"120px 0", background:"#ffffff", position:"relative", overflow:"hidden" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>

          {/* Visual */}
          <ScrollReveal>
            <div style={{ position:"relative" }}>
              <div style={{ borderRadius:32, padding:56, textAlign:"center", position:"relative", overflow:"hidden",
                background:"linear-gradient(135deg,#eff6ff,#dbeafe,#fffbeb)" }}>
                <div style={{ position:"absolute", top:-40, right:-40, width:160, height:160, borderRadius:"50%", background:"rgba(255,255,255,.5)" }} />
                <div className="float-anim" style={{ display:"inline-block", fontSize:96, marginBottom:24, position:"relative", zIndex:1 }}>🧊</div>
                <h3 className="font-display" style={{ fontSize:28, fontWeight:900, color:"#0b2545", marginBottom:8, position:"relative", zIndex:1 }}>Always Fresh</h3>
                <p style={{ fontSize:14, color:"#64748b", fontStyle:"italic", position:"relative", zIndex:1 }}>Misht Tarm · Всегда свежее</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8, justifyContent:"center", marginTop:24, position:"relative", zIndex:1 }}>
                  {["❄️ Ice-packed","🚀 Same day","✅ Checked","📏 Zero waste"].map(b => (
                    <span key={b} style={{ background:"rgba(255,255,255,.85)", borderRadius:100, padding:"6px 14px",
                      fontSize:12, fontWeight:600, color:"#0b2545", boxShadow:"0 2px 8px rgba(0,0,0,.06)" }}>{b}</span>
                  ))}
                </div>
              </div>
              <div style={{ position:"absolute", bottom:-20, left:-20, background:"#ffffff", borderRadius:18,
                padding:"12px 18px", boxShadow:"0 8px 32px rgba(11,37,69,.12)", border:"1px solid #e2e8f0" }}>
                <div style={{ fontSize:11, color:"#64748b", marginBottom:4, fontWeight:500 }}>Delivery time</div>
                <div style={{ fontWeight:900, fontSize:18, color:"#0b2545" }}>2–4 hours ⚡</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={100}>
            <span style={{ display:"inline-block", fontSize:11, fontWeight:700, textTransform:"uppercase",
              letterSpacing:"0.1em", padding:"6px 16px", borderRadius:100, marginBottom:20,
              background:"#dbeafe", color:"#1a4a8a", border:"1px solid rgba(37,99,235,.2)" }}>
              {t.fresh.tag[lang]}
            </span>
            <h2 className="font-display" style={{ fontWeight:900, color:"#0b2545", marginBottom:40,
              fontSize:"clamp(28px,3.5vw,48px)", lineHeight:1.1 }}>
              {t.fresh.title[lang]}
            </h2>
            <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
              {t.fresh.points.map((p, i) => (
                <div key={i} style={{ display:"flex", gap:20 }}>
                  <div style={{ width:52, height:52, borderRadius:16, display:"flex", alignItems:"center",
                    justifyContent:"center", fontSize:22, flexShrink:0, background: POINT_BG[i] }}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 style={{ fontWeight:700, fontSize:15, marginBottom:4, color:"#0b2545" }}>{p.title[lang]}</h4>
                    <p style={{ fontSize:13, lineHeight:1.65, fontWeight:300, color:"#64748b" }}>{p.desc[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

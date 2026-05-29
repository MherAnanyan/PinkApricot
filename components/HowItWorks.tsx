"use client";
import { useLang } from "./LangContext";
import { t } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  { icon:"📱", color:"#2563eb", bg:"#eff6ff" },
  { icon:"🛒", color:"#ea580c", bg:"#fff7ed" },
  { icon:"🚀", color:"#16a34a", bg:"#f0fdf4" },
  { icon:"👨‍🍳", color:"#9333ea", bg:"#faf5ff" },
];

export default function HowItWorks() {
  const { lang } = useLang();
  return (
    <section id="how" style={{ padding:"120px 0", background:"#ffffff", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,.04), transparent)" }} />

      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        <ScrollReveal>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <span style={{ display:"inline-block", fontSize:11, fontWeight:700, textTransform:"uppercase",
              letterSpacing:"0.1em", padding:"6px 16px", borderRadius:100, marginBottom:20,
              background:"#dbeafe", color:"#1a4a8a", border:"1px solid rgba(37,99,235,.2)" }}>
              {t.how.tag[lang]}
            </span>
            <h2 className="font-display" style={{ fontWeight:900, color:"#0b2545",
              fontSize:"clamp(32px,4.5vw,56px)" }}>
              {t.how.title[lang]}
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))", gap:24 }}>
          {t.how.steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 90}>
              <div style={{ position:"relative", borderRadius:24, padding:28, height:"100%",
                background: STEPS[i].bg, border:"1px solid #e2e8f0",
                transition:"transform .3s, box-shadow .3s", cursor:"default" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform="translateY(-6px)"; el.style.boxShadow="0 24px 60px rgba(11,37,69,.1)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform="translateY(0)"; el.style.boxShadow="none"; }}>
                {/* Step icon */}
                <div style={{ width:64, height:64, borderRadius:18, display:"flex", alignItems:"center",
                  justifyContent:"center", fontSize:28, marginBottom:20,
                  background: STEPS[i].color, boxShadow:`0 8px 24px ${STEPS[i].color}44` }}>
                  {STEPS[i].icon}
                </div>
                {/* Step number */}
                <div style={{ width:28, height:28, borderRadius:"50%", display:"flex", alignItems:"center",
                  justifyContent:"center", fontSize:12, fontWeight:900, marginBottom:16, color:"#ffffff",
                  background: STEPS[i].color }}>
                  {i + 1}
                </div>
                <h3 style={{ fontWeight:700, fontSize:16, marginBottom:8, color:"#0b2545" }}>{step.title[lang]}</h3>
                <p style={{ fontSize:14, lineHeight:1.65, fontWeight:300, color:"#64748b" }}>{step.desc[lang]}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useLang } from "./LangContext";
import { t } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const GRADS = [
  "linear-gradient(135deg,#2563eb,#1a4a8a)",
  "linear-gradient(135deg,#f59e42,#ea580c)",
  "linear-gradient(135deg,#14b8a6,#059669)",
  "linear-gradient(135deg,#9333ea,#7c3aed)",
  "linear-gradient(135deg,#f43f5e,#e11d48)",
  "linear-gradient(135deg,#f59e0b,#d97706)",
];

export default function Why() {
  const { lang } = useLang();
  return (
    <section id="why" style={{ padding:"120px 0", position:"relative", overflow:"hidden", background:"#0b2545" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,.2), transparent)" }} />
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px", position:"relative" }}>
        <ScrollReveal>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <span style={{ display:"inline-block", fontSize:11, fontWeight:700, textTransform:"uppercase",
              letterSpacing:"0.1em", padding:"6px 16px", borderRadius:100, marginBottom:20,
              background:"rgba(245,158,66,.15)", color:"#f59e42", border:"1px solid rgba(245,158,66,.25)" }}>
              {t.why.tag[lang]}
            </span>
            <h2 className="font-display" style={{ fontWeight:900, color:"#ffffff",
              fontSize:"clamp(32px,4.5vw,56px)" }}>
              {t.why.title[lang]}
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:20 }}>
          {t.why.points.map((p, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div style={{ borderRadius:24, padding:28, height:"100%",
                background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)",
                transition:"background .2s, transform .2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.1)"; el.style.transform="translateY(-4px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,.06)"; el.style.transform="translateY(0)"; }}>
                <div style={{ width:52, height:52, borderRadius:16, display:"flex", alignItems:"center",
                  justifyContent:"center", fontSize:22, marginBottom:20, background: GRADS[i], boxShadow:"0 4px 16px rgba(0,0,0,.2)" }}>
                  {p.icon}
                </div>
                <h3 style={{ fontWeight:700, fontSize:15, marginBottom:8, color:"#ffffff" }}>{p.title[lang]}</h3>
                <p style={{ fontSize:13, lineHeight:1.7, fontWeight:300, color:"rgba(255,255,255,.5)" }}>{p.desc[lang]}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useLang } from "./LangContext";
import { t } from "@/lib/i18n";

export default function CTA() {
  const { lang } = useLang();
  return (
    <section id="order" style={{ padding:"120px 0", position:"relative", overflow:"hidden", background:"#f7f9fc" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,.06), transparent)" }} />
      <div style={{ maxWidth:640, margin:"0 auto", padding:"0 24px", textAlign:"center", position:"relative" }}>
        <span style={{ display:"inline-block", fontSize:11, fontWeight:700, textTransform:"uppercase",
          letterSpacing:"0.1em", padding:"6px 16px", borderRadius:100, marginBottom:24,
          background:"#dbeafe", color:"#1a4a8a", border:"1px solid rgba(37,99,235,.2)" }}>
          {t.cta.tag[lang]}
        </span>
        <h2 className="font-display" style={{ fontWeight:900, marginBottom:16, lineHeight:1.05, color:"#0b2545",
          fontSize:"clamp(36px,5.5vw,68px)" }}>
          {t.cta.title1[lang]}<br />
          <span style={{ background:"linear-gradient(135deg,#f59e42,#fb923c)", WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
            {t.cta.title2[lang]}
          </span>
        </h2>
        <p style={{ fontSize:17, fontWeight:300, marginBottom:40, color:"#64748b" }}>{t.cta.desc[lang]}</p>
        <div style={{ display:"flex", gap:12, maxWidth:440, margin:"0 auto 20px" }}>
          <input type="tel" placeholder={t.cta.placeholder[lang]}
            style={{ flex:1, padding:"14px 20px", borderRadius:100, fontSize:14, fontWeight:500,
              outline:"none", background:"#ffffff", border:"2px solid #e2e8f0", color:"#0b2545",
              transition:"border-color .2s" }}
            onFocus={e=>(e.target.style.borderColor="#2563eb")}
            onBlur={e=>(e.target.style.borderColor="#e2e8f0")} />
          <button style={{ fontWeight:700, padding:"14px 28px", borderRadius:100, color:"#ffffff",
            fontSize:14, whiteSpace:"nowrap", cursor:"pointer", border:"none",
            background:"linear-gradient(135deg,#2563eb,#1a4a8a)", boxShadow:"0 8px 32px rgba(37,99,235,.35)",
            transition:"transform .2s, box-shadow .2s" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-1px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 12px 40px rgba(37,99,235,.45)"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="0 8px 32px rgba(37,99,235,.35)"}}>
            {t.cta.btn[lang]}
          </button>
        </div>
        <p style={{ fontSize:12, fontWeight:500, color:"#94a3b8" }}>{t.cta.note[lang]}</p>
      </div>
    </section>
  );
}

"use client";
import { useLang } from "./LangContext";
import { useEffect, useRef } from "react";

export default function Hero() {
  const { lang } = useLang();
  const vidRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { vidRef.current?.play().catch(() => {}); }, []);

  const labels = {
    tag:  { en: "🇦🇲 Delivering in Yerevan", hy: "🇦🇲 Arakvum Yerevanum", ru: "🇦🇲 Доставка по Еревану" },
    h1:   { en: "The world's kitchens,", hy: "Ashxarhi xohanotnery,", ru: "Кухни мира —" },
    h2:   { en: "at your table.", hy: "dzez solandz.", ru: "на вашем столе." },
    sub:  { en: "One Latin. One Asian. One European. Every week, something new.", hy: "Mek Latin, mek Asian, mek Europen. Amena shabbat nore.", ru: "Одна латинская. Одна азиатская. Одна европейская. Каждую неделю — что-то новое." },
    cta1: { en: "See this week's boxes", hy: "Tesnel sha'bata arkaghner", ru: "Смотреть боксы недели" },
    cta2: { en: "How it works", hy: "Inchpes e ashxatum", ru: "Как это работает" },
    stats: [
      { val: "3",    label: { en: "cuisines weekly",    hy: "xohanoc shabbatakan", ru: "кухни каждую неделю" } },
      { val: "2",    label: { en: "dishes + dessert",   hy: "uzhelik + anourec",   ru: "блюда + десерт" } },
      { val: "25–45",label: { en: "min to cook",        hy: "rop yepelov",         ru: "мин готовить" } },
      { val: "⚡",   label: { en: "same day delivery",  hy: "nuynayes arakvum",    ru: "доставка в день" } },
    ],
  };

  return (
    <section style={{ position:"relative", width:"100%", height:"100vh", minHeight:600, overflow:"hidden" }}>
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&q=80"
        alt="" aria-hidden="true"
        style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", zIndex:0 }} />

      {/* Video (replaces image when loaded) */}
      <video ref={vidRef} autoPlay muted loop playsInline preload="none"
        style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", zIndex:1 }}>
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{ position:"absolute", inset:0, zIndex:2,
        background:"linear-gradient(160deg, rgba(11,37,69,.82) 0%, rgba(11,37,69,.6) 55%, rgba(11,37,69,.3) 100%)" }} />

      {/* Grain */}
      <div style={{ position:"absolute", inset:0, zIndex:3, opacity:.04, pointerEvents:"none",
        backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <div style={{ position:"relative", zIndex:4, height:"100%", display:"flex", flexDirection:"column",
        justifyContent:"center", maxWidth:1280, margin:"0 auto", padding:"0 24px", width:"100%" }}>
        <div style={{ maxWidth:680 }}>
          {/* Tag */}
          <div className="animate-fade-up" style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:24,
            fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase",
            padding:"6px 16px", borderRadius:100, color:"rgba(255,255,255,.85)",
            background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.2)", backdropFilter:"blur(8px)" }}>
            {labels.tag[lang]}
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-1 font-display" style={{ fontWeight:900, lineHeight:.95, color:"#ffffff",
            fontSize:"clamp(48px,7.5vw,96px)", marginBottom:12 }}>
            {labels.h1[lang]}<br />
            <span style={{ background:"linear-gradient(90deg,#f59e42,#fb923c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              {labels.h2[lang]}
            </span>
          </h1>

          <p className="animate-fade-up-2" style={{ fontSize:18, fontWeight:300, lineHeight:1.65, marginBottom:40,
            color:"rgba(255,255,255,.72)", maxWidth:520 }}>
            {labels.sub[lang]}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-3" style={{ display:"flex", flexWrap:"wrap", gap:16, alignItems:"center", marginBottom:60 }}>
            <a href="#boxes" style={{ fontWeight:700, padding:"16px 32px", borderRadius:100, color:"#ffffff", textDecoration:"none",
              background:"linear-gradient(135deg,#2563eb,#1a4a8a)", boxShadow:"0 8px 32px rgba(37,99,235,.5)",
              transition:"transform .2s, box-shadow .2s", display:"inline-block" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 12px 40px rgba(37,99,235,.6)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="0 8px 32px rgba(37,99,235,.5)"}}>
              {labels.cta1[lang]} →
            </a>
            <a href="#how" style={{ display:"flex", alignItems:"center", gap:12, fontWeight:500, color:"rgba(255,255,255,.7)",
              textDecoration:"none", transition:"opacity .2s" }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.opacity="1"}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.opacity=".85"}>
              <span style={{ width:44, height:44, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:14, background:"rgba(255,255,255,.15)", border:"1px solid rgba(255,255,255,.2)", backdropFilter:"blur(8px)" }}>▶</span>
              {labels.cta2[lang]}
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-4" style={{ display:"flex", flexWrap:"wrap", gap:32, paddingTop:28,
            borderTop:"1px solid rgba(255,255,255,.15)" }}>
            {labels.stats.map(s => (
              <div key={s.val}>
                <div className="font-display" style={{ fontSize:28, fontWeight:900, color:"#ffffff" }}>{s.val}</div>
                <div style={{ fontSize:12, fontWeight:500, marginTop:4, color:"rgba(255,255,255,.5)" }}>{s.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", zIndex:5,
        display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
        <div style={{ fontSize:10, fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>scroll</div>
        <div style={{ width:1, height:32, background:"linear-gradient(rgba(255,255,255,.4),transparent)" }} />
      </div>

      {/* Marquee */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, zIndex:5, padding:"10px 0", overflow:"hidden",
        background:"rgba(37,99,235,.88)", backdropFilter:"blur(8px)" }}>
        <div className="marquee-anim" style={{ display:"flex", whiteSpace:"nowrap" }}>
          {Array(10).fill(["🇲🇽 Mexico","🇯🇵 Japan","🇫🇷 France","🇵🇪 Peru","🇹🇭 Thailand","🇪🇸 Spain"]).flat().map((item,i) => (
            <span key={i} style={{ display:"inline-block", margin:"0 32px", color:"#ffffff", fontWeight:600, fontSize:14 }}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

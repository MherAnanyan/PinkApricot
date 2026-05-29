"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { Dish, dishes, suggestWeek } from "@/lib/dishes";

const REGION_COLOR: Record<string,string> = {
  armenian:"#dc2626", latin:"#ea580c", asian:"#2563eb", european:"#16a34a",
};
const REGION_BG: Record<string,string> = {
  armenian:"#fef2f2", latin:"#fff7ed", asian:"#eff6ff", european:"#f0fdf4",
};
const REGION_LABEL: Record<string,Record<string,string>> = {
  armenian:{ en:"Armenian", hy:"Hаykakan", ru:"Армянское" },
  latin:   { en:"Latin",    hy:"Latin",    ru:"Латинское" },
  asian:   { en:"Asian",    hy:"Asian",    ru:"Азиатское" },
  european:{ en:"European", hy:"Europen",  ru:"Европейское" },
};

export default function WeekModal({ onClose }: { onClose: () => void }) {
  const { lang } = useLang();
  const { addItem } = useCart();
  const overlayRef = useRef<HTMLDivElement>(null);

  // The 5 suggested dishes — can be swapped
  const [week, setWeek] = useState<Dish[]>(() => suggestWeek());
  // Which dish is being swapped (index), null = none
  const [swapping, setSwapping] = useState<number|null>(null);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key==="Escape") { if (swapping!==null) setSwapping(null); else onClose(); } };
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose, swapping]);

  const totalPrice = week.reduce((s,d) => s + d.price, 0);

  const addAll = () => {
    week.forEach(dish => {
      addItem({ id:`dish-${dish.id}`, type:"extra", name:`${dish.flag} ${dish.name[lang]}`, price:dish.price, emoji:dish.emoji }, lang);
    });
    onClose();
  };

  // Swap a dish: replace week[idx] with chosen dish
  const swapDish = (idx: number, newDish: Dish) => {
    setWeek(prev => prev.map((d,i) => i===idx ? newDish : d));
    setSwapping(null);
  };

  // Alternatives for swapping: same region, not already in week
  const getAlternatives = (idx: number) => {
    const current = week[idx];
    return dishes.filter(d => d.region===current.region && !week.some(w => w.id===d.id));
  };

  const L = {
    title:   { en:"Your week, suggested",     hy:"Dzez shabbata menyun",  ru:"Ваше меню на неделю" },
    sub:     { en:"2 Armenian · 1 Latin · 1 Asian · 1 European", hy:"2 Hаykakan · 1 Latin · 1 Asian · 1 Europen", ru:"2 армянских · 1 латинское · 1 азиатское · 1 европейское" },
    swap:    { en:"Swap dish",  hy:"Poxel", ru:"Заменить" },
    keep:    { en:"Keep",       hy:"Paheq", ru:"Оставить" },
    cancel:  { en:"↩ Cancel",  hy:"↩ Verits", ru:"↩ Отмена" },
    choose:  { en:"Choose a replacement",     hy:"Yntreq nor uzhelik",     ru:"Выберите замену" },
    noAlt:   { en:"No other options in this region", hy:"Aylntak chi",      ru:"Других вариантов нет" },
    total:   { en:"Week total", hy:"Shabbata arvark", ru:"Итого за неделю" },
    add:     { en:"Add all 5 to basket →",    hy:"Avaelacrek 5-y →",       ru:"Добавить все 5 в корзину →" },
    close:   { en:"No thanks", hy:"Che, shnorhakalutyun", ru:"Нет, спасибо" },
    min:     { en:"min",        hy:"rop",      ru:"мин" },
    people:  { en:"2 people",   hy:"2 hogni",  ru:"2 человека" },
  };

  const alternatives = swapping !== null ? getAlternatives(swapping) : [];

  return (
    <div ref={overlayRef} onClick={e => { if (e.target===overlayRef.current) { if (swapping!==null) setSwapping(null); else onClose(); } }}
      style={{ position:"fixed", inset:0, zIndex:200, background:"rgba(11,37,69,.65)",
        backdropFilter:"blur(8px)", display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>

      <div style={{ background:"#ffffff", borderRadius:28, maxWidth:640, width:"100%",
        maxHeight:"90vh", overflowY:"auto", boxShadow:"0 32px 80px rgba(11,37,69,.3)",
        animation:"slideUp .3s ease both" }}>

        {/* Header */}
        <div style={{ padding:"28px 28px 0", display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:16 }}>
          <div>
            <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".1em", color:"#2563eb", marginBottom:8 }}>
              ✨ {lang==="en"?"Weekly suggestion":lang==="ru"?"Предложение недели":"Shabbata arajarkum"}
            </div>
            <h2 className="font-display" style={{ fontSize:26, fontWeight:900, color:"#0b2545", lineHeight:1.1 }}>
              {L.title[lang]}
            </h2>
            <p style={{ fontSize:13, color:"#64748b", marginTop:6, fontWeight:300 }}>{L.sub[lang]}</p>
          </div>
          <button onClick={onClose}
            style={{ width:36, height:36, borderRadius:"50%", border:"none", background:"#f1f5f9",
              cursor:"pointer", fontSize:16, color:"#64748b", flexShrink:0,
              display:"flex", alignItems:"center", justifyContent:"center" }}
            onMouseEnter={e=>(e.currentTarget.style.background="#e2e8f0")}
            onMouseLeave={e=>(e.currentTarget.style.background="#f1f5f9")}>✕</button>
        </div>

        {/* ── SWAP PICKER (shown when swapping !== null) ── */}
        {swapping !== null && (
          <div style={{ margin:"20px 28px 0", borderRadius:16, overflow:"hidden",
            border:"2px solid #2563eb", background:"#f7f9fc" }}>
            <div style={{ padding:"14px 18px", background:"#2563eb", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ fontWeight:700, color:"#fff", fontSize:14 }}>
                {L.choose[lang]} — <span style={{ opacity:.8 }}>
                  {REGION_LABEL[week[swapping].region][lang]}
                </span>
              </div>
              <button onClick={() => setSwapping(null)}
                style={{ background:"rgba(255,255,255,.2)", border:"none", color:"#fff", fontSize:12,
                  fontWeight:700, padding:"4px 12px", borderRadius:100, cursor:"pointer" }}>
                {L.cancel[lang]}
              </button>
            </div>
            {alternatives.length === 0 ? (
              <div style={{ padding:"24px", textAlign:"center", color:"#64748b", fontSize:14 }}>
                {L.noAlt[lang]}
              </div>
            ) : (
              <div style={{ maxHeight:280, overflowY:"auto" }}>
                {alternatives.map(alt => (
                  <button key={alt.id} onClick={() => swapDish(swapping, alt)}
                    style={{ width:"100%", display:"flex", alignItems:"center", gap:14, padding:"12px 18px",
                      background:"transparent", border:"none", borderBottom:"1px solid #e2e8f0",
                      cursor:"pointer", textAlign:"left", transition:"background .15s" }}
                    onMouseEnter={e=>(e.currentTarget.style.background="#eff6ff")}
                    onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>
                    <div style={{ width:52, height:52, borderRadius:12, flexShrink:0, overflow:"hidden" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={alt.photo} alt={alt.name[lang]} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    </div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontWeight:700, fontSize:14, color:"#0b2545" }}>{alt.emoji} {alt.name[lang]}</div>
                      <div style={{ fontSize:11, color:"#64748b", marginTop:2 }}>
                        ⏱ {alt.cookTime} {L.min[lang]} · {alt.difficulty}
                      </div>
                    </div>
                    <div className="font-display" style={{ fontWeight:900, fontSize:16, color:"#2563eb", flexShrink:0 }}>
                      {alt.price.toLocaleString()} AMD
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── DISH LIST ── */}
        <div style={{ padding:"20px 28px" }}>
          {week.map((dish, i) => (
            <div key={dish.id} style={{ display:"flex", gap:14, padding:"14px 0",
              borderBottom: i<week.length-1 ? "1px solid #f1f5f9" : "none",
              alignItems:"center", opacity: swapping!==null && swapping!==i ? .45 : 1,
              transition:"opacity .2s" }}>

              {/* Photo */}
              <div style={{ width:72, height:72, borderRadius:14, flexShrink:0, overflow:"hidden",
                position:"relative", border: swapping===i ? "2px solid #2563eb" : "2px solid transparent",
                transition:"border-color .2s" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={dish.photo} alt={dish.name[lang]}
                  style={{ width:"100%", height:"100%", objectFit:"cover" }} loading="lazy" />
              </div>

              {/* Info */}
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4, flexWrap:"wrap" }}>
                  <span style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:".07em",
                    padding:"2px 8px", borderRadius:100, color:"#fff", background:REGION_COLOR[dish.region] }}>
                    {dish.flag} {REGION_LABEL[dish.region][lang]}
                  </span>
                  <span style={{ fontSize:11, color:"#94a3b8" }}>⏱ {dish.cookTime} {L.min[lang]}</span>
                </div>
                <div style={{ fontWeight:700, fontSize:15, color:"#0b2545", marginBottom:2 }}>
                  {dish.emoji} {dish.name[lang]}
                </div>
                <div style={{ fontSize:12, color:"#64748b", fontWeight:300,
                  overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                  {dish.description[lang]}
                </div>
              </div>

              {/* Price + Swap button */}
              <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8, flexShrink:0 }}>
                <div className="font-display" style={{ fontSize:18, fontWeight:900, color:"#2563eb", lineHeight:1 }}>
                  {dish.price.toLocaleString()}
                  <span style={{ fontSize:11, color:"#94a3b8", fontWeight:400, marginLeft:3 }}>AMD</span>
                </div>
                <button onClick={() => setSwapping(swapping===i ? null : i)}
                  style={{ fontSize:11, fontWeight:700, padding:"5px 12px", borderRadius:100,
                    cursor:"pointer", border:"none", transition:"all .15s",
                    background: swapping===i ? "#2563eb" : REGION_BG[dish.region],
                    color: swapping===i ? "#fff" : REGION_COLOR[dish.region] }}
                  onMouseEnter={e => { if (swapping!==i) { (e.currentTarget as HTMLElement).style.background=REGION_COLOR[dish.region]; (e.currentTarget as HTMLElement).style.color="#fff"; }}}
                  onMouseLeave={e => { if (swapping!==i) { (e.currentTarget as HTMLElement).style.background=REGION_BG[dish.region]; (e.currentTarget as HTMLElement).style.color=REGION_COLOR[dish.region]; }}}>
                  {swapping===i ? `↩ ${L.keep[lang]}` : `⇄ ${L.swap[lang]}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding:"20px 28px 28px", borderTop:"1px solid #f1f5f9",
          display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:16 }}>
          <div>
            <div style={{ fontSize:11, color:"#94a3b8", fontWeight:600, textTransform:"uppercase",
              letterSpacing:".08em", marginBottom:4 }}>
              {L.total[lang]} · {L.people[lang]}
            </div>
            <div className="font-display" style={{ fontSize:32, fontWeight:900, color:"#0b2545" }}>
              {totalPrice.toLocaleString()}
              <span style={{ fontSize:14, fontWeight:400, color:"#94a3b8", marginLeft:6 }}>AMD</span>
            </div>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:10, alignItems:"flex-end" }}>
            <button onClick={addAll} className="btn-blue" style={{ fontSize:15, padding:"14px 28px", borderRadius:100 }}>
              {L.add[lang]}
            </button>
            <button onClick={onClose}
              style={{ background:"none", border:"none", cursor:"pointer", fontSize:13, color:"#94a3b8", fontWeight:600 }}>
              {L.close[lang]}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity:0; transform:translateY(24px) scale(.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

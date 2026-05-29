"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:48, marginBottom:48 }}>
          {/* Brand */}
          <div style={{ maxWidth:280 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
              <div style={{ width:40, height:40, borderRadius:12, background:"linear-gradient(135deg,#2563eb,#f59e42)",
                display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>🍑</div>
              <span className="font-display" style={{ fontSize:20, fontWeight:700, color:"#ffffff" }}>Blue Apricot</span>
            </div>
            <p style={{ fontSize:14, fontWeight:300, lineHeight:1.7, color:"rgba(255,255,255,.45)" }}>
              Weekly international meal kits delivered in Yerevan. Latin, Asian & European cuisines — three regions, one kitchen.
            </p>
          </div>

          {/* Links */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:48 }}>
            <div>
              <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".1em",
                marginBottom:16, color:"rgba(255,255,255,.35)" }}>Explore</div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {[["/#boxes","Our Boxes"],["/#how","How it works"],["/#extras","Add-ons"],["/#why","Why us"]].map(([href,label]) => (
                  <Link key={href} href={href} style={{ fontSize:14, fontWeight:500, color:"rgba(255,255,255,.55)",
                    textDecoration:"none", transition:"color .2s" }}
                    onMouseEnter={e=>(e.currentTarget.style.color="#f59e42")}
                    onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,.55)")}>{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".1em",
                marginBottom:16, color:"rgba(255,255,255,.35)" }}>This week</div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {[["mexico","🇲🇽 Mexico"],["japan","🇯🇵 Japan"],["france","🇫🇷 France"],["peru","🇵🇪 Peru"],["thailand","🇹🇭 Thailand"],["spain","🇪🇸 Spain"]].map(([id,label]) => (
                  <Link key={id} href={`/box/${id}`} style={{ fontSize:14, fontWeight:500, color:"rgba(255,255,255,.55)",
                    textDecoration:"none", transition:"color .2s" }}
                    onMouseEnter={e=>(e.currentTarget.style.color="#f59e42")}
                    onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,.55)")}>{label}</Link>
                ))}
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".1em",
              marginBottom:16, color:"rgba(255,255,255,.35)" }}>Find us</div>
            <div style={{ display:"flex", gap:10 }}>
              {[
                { href:"https://www.instagram.com/blueapricot.am", bg:"linear-gradient(135deg,#e1306c,#f77737)", icon:"📸", label:"Instagram" },
                { href:"https://wa.me/37400000000", bg:"linear-gradient(135deg,#25d366,#128c7e)", icon:"💬", label:"WhatsApp" },
                { href:"https://t.me/blueapricot", bg:"linear-gradient(135deg,#2563eb,#1a4a8a)", icon:"✈️", label:"Telegram" },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  style={{ width:44, height:44, borderRadius:12, display:"flex", alignItems:"center",
                    justifyContent:"center", fontSize:20, background:s.bg, textDecoration:"none",
                    transition:"transform .2s, box-shadow .2s" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.1)"; (e.currentTarget as HTMLElement).style.boxShadow="0 8px 20px rgba(0,0,0,.3)"}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow="none"}}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop:24, borderTop:"1px solid rgba(255,255,255,.08)", display:"flex",
          flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:12 }}>
          <p style={{ fontSize:12, color:"rgba(255,255,255,.25)" }}>© {new Date().getFullYear()} Blue Apricot. All rights reserved.</p>
          <p style={{ fontSize:12, fontStyle:"italic", color:"rgba(255,255,255,.2)" }}>
            Cook the world from Yerevan 🇦🇲 · Yepeq ashxarhn Yerevanic · Готовьте мир из Еревана
          </p>
        </div>
      </div>
    </footer>
  );
}

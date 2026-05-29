"use client";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { Lang } from "@/lib/i18n";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// Pages that have a light background — nav should be dark-on-white
const LIGHT_PAGES = ["/dishes", "/checkout"];

export default function Nav() {
  const { lang, setLang } = useLang();
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const isLight = LIGHT_PAGES.some(p => pathname.startsWith(p));

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (hash.startsWith("/")) {
      router.push(hash);
    } else if (isHome) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${hash}`);
    }
  };

  const links = [
    { hash: "#boxes",   label: { en: "Our Boxes", hy: "Արkghner",     ru: "Боксы" } },
    { hash: "/dishes",  label: { en: "Dishes",    hy: "Uzhelikner",   ru: "Блюда" } },
    { hash: "#extras",  label: { en: "Add-ons",   hy: "Havaoum",      ru: "Дополнения" } },
    { hash: "#why",     label: { en: "Why us",    hy: "Inchu",        ru: "Почему мы" } },
  ];

  const navClass = `site-nav${scrolled || mobileOpen ? " scrolled" : ""}${isLight ? " light" : ""}`;

  return (
    <nav className={navClass}
      style={!isLight && !scrolled && !mobileOpen ? { background: "transparent" } : undefined}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <div className="logo-mark">🍑</div>
          <div>
            <div className="logo-name" style={isLight ? { color:"#0b2545" } : undefined}>Blue Apricot</div>
            <div className="logo-sub">Yerevan</div>
          </div>
        </Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.hash}>
              <a href={l.hash.startsWith("/") ? l.hash : isHome ? l.hash : `/${l.hash}`}
                onClick={e => handleNav(e, l.hash)}>
                {l.label[lang]}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="lang-switcher">
            {(["en","hy","ru"] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} className={`lang-btn${lang===l?" active":""}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <Link href="/checkout" className={`cart-btn${count>0?" has-items":""}`}>
            <span>🛒</span>
            {count > 0 && <span>{count}</span>}
          </Link>

          <button className="hamburger" onClick={() => setMobileOpen(p => !p)} aria-label="Menu">
            <span style={{ width:20, transform: mobileOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
            <span style={{ width:14, opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? "scale(0)" : "none" }} />
            <span style={{ width:20, transform: mobileOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${mobileOpen?" open":""}`}>
        <div className="mobile-menu-inner">
          {links.map(l => (
            <a key={l.hash} href={l.hash.startsWith("/") ? l.hash : isHome ? l.hash : `/${l.hash}`}
              onClick={e => handleNav(e, l.hash)}>
              {l.label[lang]}
            </a>
          ))}
          <div style={{ display:"flex", gap:8, padding:"12px 16px 0" }}>
            {(["en","hy","ru"] as Lang[]).map(l => (
              <button key={l} onClick={() => { setLang(l); setMobileOpen(false); }}
                className={`lang-btn${lang===l?" active":""}`}
                style={{ flex:1, padding:"8px", borderRadius:8, border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:12 }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

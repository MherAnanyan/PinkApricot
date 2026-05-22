"use client";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { Lang } from "@/lib/i18n";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Nav() {
  const { lang, setLang } = useLang();
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (isHome) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${hash}`);
    }
  };

  const links = [
    { hash: "#how",    label: { en: "How it works", hy: "Ինչպես", ru: "Как работает" } },
    { hash: "#boxes",  label: { en: "Our Boxes",    hy: "Արկղեր", ru: "Боксы" } },
    { hash: "#extras", label: { en: "Extras",       hy: "Հավելումներ", ru: "Дополнения" } },
    { hash: "#why",    label: { en: "Why us",       hy: "Ինչու", ru: "Почему мы" } },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{ background: scrolled ? "rgba(255,249,246,.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", boxShadow: scrolled ? "0 1px 20px rgba(244,63,94,.08)" : "none" }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-200"
            style={{ background: "linear-gradient(135deg, #f472b6, #f43f5e)" }}>🍑</div>
          <span className="font-display text-xl font-bold" style={{ color: "#881337" }}>Pink Apricot</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.hash} href={isHome ? l.hash : `/${l.hash}`}
              onClick={(e) => handleNavClick(e, l.hash)}
              className="text-sm font-medium transition-colors cursor-pointer"
              style={{ color: "#9f1239", opacity: .75 }}>
              {l.label[lang]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* lang switcher */}
          <div className="flex gap-1 p-1 rounded-full" style={{ background: "#fff1f2", border: "1px solid #fecdd3" }}>
            {(["en","hy","ru"] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)}
                className="text-xs font-black px-3 py-1.5 rounded-full transition-all duration-200"
                style={lang === l
                  ? { background: "linear-gradient(135deg, #ec4899, #f43f5e)", color: "#ffffff" }
                  : { color: "#f9a8d4" }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* cart button */}
          <Link href="/checkout" className="relative flex items-center gap-2 font-bold px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: count > 0 ? "linear-gradient(135deg, #ec4899, #f43f5e)" : "#fff1f2", color: count > 0 ? "#ffffff" : "#e11d48", border: count > 0 ? "none" : "2px solid #fecdd3", boxShadow: count > 0 ? "0 4px 16px rgba(244,63,94,.35)" : "none" }}>
            <span className="text-lg">🛒</span>
            {count > 0 && (
              <span className="font-black text-sm">{count}</span>
            )}
            {count === 0 && (
              <span className="hidden md:inline text-xs font-bold">
                {lang === "en" ? "Basket" : lang === "hy" ? "Kalatag" : "Корзина"}
              </span>
            )}
          </Link>

          {/* order cta */}
          <a href={isHome ? "#order" : "/#order"}
            className="hidden md:block text-white text-sm font-black px-5 py-2.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)", boxShadow: "0 8px 24px rgba(244,63,94,.35)" }}>
            {lang === "en" ? "Order Now" : lang === "hy" ? "Պատvirer" : "Заказать"}
          </a>
        </div>
      </div>
    </nav>
  );
}

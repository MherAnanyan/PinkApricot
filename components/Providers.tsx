"use client";
import { LangProvider } from "./LangContext";
import { CartProvider } from "./CartContext";
import CookieBanner from "./CookieBanner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <CartProvider>
        {children}
        <CookieBanner />
      </CartProvider>
    </LangProvider>
  );
}

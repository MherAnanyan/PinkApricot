"use client";
import { LangProvider } from "./LangContext";
import { CartProvider } from "./CartContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </LangProvider>
  );
}

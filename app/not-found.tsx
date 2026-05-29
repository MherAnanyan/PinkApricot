import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Page not found — Blue Apricot" };
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ background: "var(--blue-deep)" }}>
      <div className="text-center px-6">
        <div className="float-anim inline-block text-9xl mb-6">🍑</div>
        <h1 className="font-display text-7xl font-black text-white mb-4">404</h1>
        <p className="text-xl font-light mb-2 text-white opacity-70">This page doesn't exist.</p>
        <p className="text-sm mb-10 font-light" style={{ color: "rgba(255,255,255,.4)" }}>Maybe the box sold out. Try another.</p>
        <Link href="/" className="inline-block font-black px-8 py-4 rounded-full text-white shadow-xl hover:-translate-y-1 transition-all"
          style={{ background: "linear-gradient(135deg, #2563eb, #f59e42)", boxShadow: "0 8px 32px rgba(37,99,235,.4)" }}>
          ← Back to Blue Apricot
        </Link>
      </div>
    </main>
  );
}

"use client";
export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg, #1a0a0f, #2d1520)" }} className="py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-xl">🍑</div>
          <span className="font-display text-xl font-bold text-white">Pink Apricot</span>
        </div>
        <div className="text-center">
          <div className="text-white text-sm italic opacity-40">Cook the world from Yerevan 🇦🇲</div>
          <div className="text-white text-xs mt-1 opacity-20">Եփեք աshxarhe Yerevanic · Готовьте мир из Еревана</div>
        </div>
        <div className="flex gap-3">
          {["📸", "💬", "✈️"].map((ic, i) => (
            <button key={i} className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-lg hover:bg-opacity-20 transition-colors">{ic}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}

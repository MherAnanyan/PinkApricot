"use client";
import { useState } from "react";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { extras } from "@/lib/extras";
import Link from "next/link";

const IDRAM_URL = "https://idram.am"; // replace with real link
const TELCELL_URL = "https://telcell.am"; // replace with real link

export default function CheckoutPage() {
  const { lang } = useLang();
  const { items, removeItem, updateQty, addItem, total, clearCart } = useCart();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [ordered, setOrdered] = useState(false);

  const tax = Math.round(total * 0.05);
  const delivery = 600;
  const grandTotal = total + delivery;

  const suggestions = extras.filter(e => !items.some(i => i.id === e.id)).slice(0, 4);

  const buildWhatsAppMsg = () => {
    const lines = [
      `🍑 *Pink Apricot Order*`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Address: ${address}`,
      ``,
      `*Items:*`,
      ...items.map(i => `${i.emoji} ${i.name} x${i.qty} — ${(i.price * i.qty).toLocaleString()} AMD`),
      ``,
      `Subtotal: ${total.toLocaleString()} AMD`,
      `Delivery: ${delivery.toLocaleString()} AMD`,
      `*Total: ${grandTotal.toLocaleString()} AMD*`,
      note ? `\nNote: ${note}` : "",
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  };

  if (ordered) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-20" style={{ background: "#fff9f6" }}>
        <div className="text-center p-12 max-w-lg">
          <div className="text-8xl mb-6 float-anim">🎉</div>
          <h1 className="font-display text-4xl font-black mb-4" style={{ color: "#881337" }}>
            {lang === "en" ? "Order Received!" : lang === "hy" ? "Patverumě Ьankal e!" : "Заказ принят!"}
          </h1>
          <p className="text-lg font-light mb-8" style={{ color: "#9f1239", opacity: .7 }}>
            {lang === "en" ? "We'll call you within 1 hour to confirm delivery."
              : lang === "hy" ? "Menc kkanchareq dzez 1 jevum arakumě hастatecnelu hamar:"
              : "Мы позвоним вам в течение часа для подтверждения доставки."}
          </p>
          <Link href="/" className="inline-block font-black px-8 py-4 rounded-full text-white"
            style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)" }}
            onClick={clearCart}>
            {lang === "en" ? "Back to home" : lang === "hy" ? "Verjadardz gtsnerdz" : "На главную"}
          </Link>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen pt-24 flex items-center justify-center" style={{ background: "#fff9f6" }}>
        <div className="text-center p-12">
          <div className="text-8xl mb-6">🛒</div>
          <h1 className="font-display text-4xl font-black mb-4" style={{ color: "#881337" }}>
            {lang === "en" ? "Your basket is empty" : lang === "hy" ? "Dzez kalatage datal e" : "Ваша корзина пуста"}
          </h1>
          <p className="text-lg font-light mb-8" style={{ color: "#9f1239", opacity: .6 }}>
            {lang === "en" ? "Add some boxes and extras to get started!"
              : lang === "hy" ? "Avaelacrek arkaghner ev extras prastelu hamar"
              : "Добавьте боксы и дополнения чтобы начать!"}
          </p>
          <Link href="/#boxes" className="inline-block font-black px-8 py-4 rounded-full text-white"
            style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)" }}>
            {lang === "en" ? "Browse Boxes" : lang === "hy" ? "Tesnel arkaghner" : "Посмотреть боксы"}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20" style={{ background: "#f9fafb" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="mb-10">
          <Link href="/" className="text-sm font-medium mb-4 inline-flex items-center gap-2" style={{ color: "#db2777" }}>
            ← {lang === "en" ? "Continue shopping" : lang === "hy" ? "Shaarunakir" : "Продолжить покупки"}
          </Link>
          <h1 className="font-display text-5xl font-black" style={{ color: "#881337" }}>
            {lang === "en" ? "Your Basket" : lang === "hy" ? "Dzez Kalatag" : "Ваша Корзина"}
          </h1>
          <p className="mt-2 font-light" style={{ color: "#9f1239", opacity: .6 }}>
            {items.length} {lang === "en" ? "items" : lang === "hy" ? "nuter" : "товара"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT — cart items + suggestions + form */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* cart items */}
            <div className="rounded-3xl overflow-hidden shadow-sm" style={{ background: "#ffffff", border: "1px solid #fce7f3" }}>
              <div className="p-6 border-b" style={{ borderColor: "#fff1f2" }}>
                <h2 className="font-bold text-lg" style={{ color: "#881337" }}>
                  {lang === "en" ? "Order items" : lang === "hy" ? "Patverums nuter" : "Товары в заказе"}
                </h2>
              </div>
              <div className="divide-y" style={{ borderColor: "#fff9f6" }}>
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-4 p-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #fce7f3, #fff1f2)" }}>
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm truncate" style={{ color: "#881337" }}>{item.name}</div>
                      <div className="text-xs font-medium mt-0.5" style={{ color: "#db2777" }}>
                        {item.price.toLocaleString()} AMD {lang === "en" ? "each" : lang === "hy" ? "yuraqanchyur" : "каждый"}
                      </div>
                    </div>
                    {/* qty controls */}
                    <div className="flex items-center gap-2 rounded-full px-2 py-1" style={{ background: "#fff1f2", border: "1.5px solid #fecdd3" }}>
                      <button onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 rounded-full font-black text-lg flex items-center justify-center transition-colors hover:bg-pink-100"
                        style={{ color: "#e11d48" }}>−</button>
                      <span className="font-black text-sm w-5 text-center" style={{ color: "#881337" }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 rounded-full font-black text-lg flex items-center justify-center transition-colors hover:bg-pink-100"
                        style={{ color: "#e11d48" }}>+</button>
                    </div>
                    <div className="font-display font-black text-base w-24 text-right" style={{ color: "#db2777" }}>
                      {(item.price * item.qty).toLocaleString()} AMD
                    </div>
                    <button onClick={() => removeItem(item.id)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors hover:bg-red-50"
                      style={{ color: "#fca5a5" }}>✕</button>
                  </div>
                ))}
              </div>
            </div>

            {/* suggestions */}
            {suggestions.length > 0 && (
              <div className="rounded-3xl overflow-hidden shadow-sm" style={{ background: "#ffffff", border: "1px solid #fce7f3" }}>
                <div className="p-6 border-b" style={{ borderColor: "#fff1f2" }}>
                  <h2 className="font-bold text-lg" style={{ color: "#881337" }}>
                    {lang === "en" ? "✨ Complete your evening" : lang === "hy" ? "✨ Kammal kareq dzez iriqune" : "✨ Дополните ваш вечер"}
                  </h2>
                  <p className="text-sm font-light mt-1" style={{ color: "#9f1239", opacity: .6 }}>
                    {lang === "en" ? "Customers who ordered also added:" : lang === "hy" ? "Patviroghnery nayev avelecrein:" : "Покупатели также добавляли:"}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 p-5">
                  {suggestions.map(s => (
                    <div key={s.id} className="flex items-center gap-3 p-3 rounded-2xl transition-colors"
                      style={{ background: "#fff9f6", border: "1px solid #fce7f3" }}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}>
                        {s.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-xs truncate" style={{ color: "#881337" }}>{s.name[lang]}</div>
                        <div className="font-black text-sm mt-0.5" style={{ color: "#db2777" }}>
                          {s.price === 0 ? (lang === "en" ? "FREE" : "БЕСПЛАТНО") : `${s.price.toLocaleString()} AMD`}
                        </div>
                      </div>
                      <button
                        onClick={() => addItem({ id: s.id, type: "extra", name: s.name[lang], price: s.price, emoji: s.emoji })}
                        className="text-xs font-black px-3 py-1.5 rounded-full flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)", color: "#ffffff" }}>
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* delivery form */}
            <div className="rounded-3xl overflow-hidden shadow-sm" style={{ background: "#ffffff", border: "1px solid #fce7f3" }}>
              <div className="p-6 border-b" style={{ borderColor: "#fff1f2" }}>
                <h2 className="font-bold text-lg" style={{ color: "#881337" }}>
                  {lang === "en" ? "Delivery details" : lang === "hy" ? "Arakvman manbrepasutyan" : "Детали доставки"}
                </h2>
              </div>
              <div className="p-6 grid sm:grid-cols-2 gap-4">
                {[
                  { label: { en: "Your name", hy: "Dzez anune", ru: "Ваше имя" }, val: name, set: setName, type: "text", placeholder: { en: "Ani Sargsyan", hy: "Anush", ru: "Аня" } },
                  { label: { en: "Phone / WhatsApp", hy: "Hamerakat", ru: "Телефон / WhatsApp" }, val: phone, set: setPhone, type: "tel", placeholder: { en: "+374 XX XXX XXX", hy: "+374...", ru: "+374..." } },
                ].map(f => (
                  <div key={f.type}>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "#db2777" }}>
                      {f.label[lang]}
                    </label>
                    <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)}
                      placeholder={f.placeholder[lang]}
                      className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all"
                      style={{ background: "#fff9f6", border: "2px solid #fce7f3", color: "#881337" }}
                      onFocus={e => (e.target.style.borderColor = "#f472b6")}
                      onBlur={e => (e.target.style.borderColor = "#fce7f3")} />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "#db2777" }}>
                    {lang === "en" ? "Delivery address (Yerevan)" : lang === "hy" ? "Arakvman hascein (Yerevan)" : "Адрес доставки (Ереван)"}
                  </label>
                  <input type="text" value={address} onChange={e => setAddress(e.target.value)}
                    placeholder={lang === "en" ? "Street, building, apartment..." : lang === "hy" ? "Poghoc, shen, bnakarann..." : "Улица, дом, квартира..."}
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all"
                    style={{ background: "#fff9f6", border: "2px solid #fce7f3", color: "#881337" }}
                    onFocus={e => (e.target.style.borderColor = "#f472b6")}
                    onBlur={e => (e.target.style.borderColor = "#fce7f3")} />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "#db2777" }}>
                    {lang === "en" ? "Note (optional)" : lang === "hy" ? "Gri (optional)" : "Примечание (необязательно)"}
                  </label>
                  <textarea value={note} onChange={e => setNote(e.target.value)} rows={2}
                    placeholder={lang === "en" ? "Allergies, special requests..." : lang === "hy" ? "Alergiaer, hajuk xndirumner..." : "Аллергии, особые пожелания..."}
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all resize-none"
                    style={{ background: "#fff9f6", border: "2px solid #fce7f3", color: "#881337" }}
                    onFocus={e => (e.target.style.borderColor = "#f472b6")}
                    onBlur={e => (e.target.style.borderColor = "#fce7f3")} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — order summary + payment */}
          <div className="flex flex-col gap-5">
            {/* summary card */}
            <div className="rounded-3xl overflow-hidden shadow-sm sticky top-24" style={{ background: "#ffffff", border: "1px solid #fce7f3" }}>
              <div className="p-6 border-b" style={{ borderColor: "#fff1f2" }}>
                <h2 className="font-bold text-lg" style={{ color: "#881337" }}>
                  {lang === "en" ? "Order summary" : lang === "hy" ? "Patverumi amfopkum" : "Итого"}
                </h2>
              </div>
              <div className="p-6">
                {/* line items */}
                <div className="flex flex-col gap-2 mb-4">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="font-medium" style={{ color: "#9f1239" }}>{item.emoji} {item.name} ×{item.qty}</span>
                      <span className="font-bold" style={{ color: "#881337" }}>{(item.price * item.qty).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col gap-2" style={{ borderTop: "1px dashed #fce7f3" }}>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#9f1239", opacity: .7 }}>{lang === "en" ? "Subtotal" : "Ямфофкум" }</span>
                    <span className="font-medium" style={{ color: "#881337" }}>{total.toLocaleString()} AMD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#9f1239", opacity: .7 }}>{lang === "en" ? "Delivery" : lang === "hy" ? "Arakvum" : "Доставка"}</span>
                    <span className="font-medium" style={{ color: "#881337" }}>{delivery.toLocaleString()} AMD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#9f1239", opacity: .7 }}>{lang === "en" ? "Tax (5%)" : lang === "hy" ? "Hardzu (5%)" : "Налог (5%)"}</span>
                    <span className="font-medium" style={{ color: "#881337" }}>{tax.toLocaleString()} AMD</span>
                  </div>
                  <div className="flex justify-between pt-3 mt-1" style={{ borderTop: "2px solid #fce7f3" }}>
                    <span className="font-black text-base" style={{ color: "#881337" }}>
                      {lang === "en" ? "Total" : lang === "hy" ? "Gumara" : "Итого"}
                    </span>
                    <span className="font-display font-black text-xl" style={{ color: "#db2777" }}>
                      {(grandTotal + tax).toLocaleString()} AMD
                    </span>
                  </div>
                </div>

                {/* payment buttons */}
                <div className="mt-6 flex flex-col gap-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-center mb-1" style={{ color: "#f9a8d4" }}>
                    {lang === "en" ? "Pay online" : lang === "hy" ? "Varchel online" : "Оплатить онлайн"}
                  </p>

                  {/* Idram */}
                  <a href={IDRAM_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", boxShadow: "0 4px 16px rgba(245,158,11,.35)" }}>
                    <span className="text-xl">💳</span>
                    <div className="text-left">
                      <div className="font-black">Idram</div>
                      <div className="text-xs font-light opacity-80">{(grandTotal + tax).toLocaleString()} AMD</div>
                    </div>
                  </a>

                  {/* Telcell */}
                  <a href={TELCELL_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", boxShadow: "0 4px 16px rgba(59,130,246,.35)" }}>
                    <span className="text-xl">📱</span>
                    <div className="text-left">
                      <div className="font-black">Telcell Wallet</div>
                      <div className="text-xs font-light opacity-80">{(grandTotal + tax).toLocaleString()} AMD</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px" style={{ background: "#fce7f3" }} />
                    <span className="text-xs font-bold" style={{ color: "#f9a8d4" }}>
                      {lang === "en" ? "or" : lang === "hy" ? "kam" : "или"}
                    </span>
                    <div className="flex-1 h-px" style={{ background: "#fce7f3" }} />
                  </div>

                  {/* WhatsApp order */}
                  <a href={`https://wa.me/37400000000?text=${buildWhatsAppMsg()}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: "linear-gradient(135deg, #25d366, #128c7e)", boxShadow: "0 4px 16px rgba(37,211,102,.3)" }}>
                    <span className="text-xl">💬</span>
                    <div>
                      <div className="font-black">
                        {lang === "en" ? "Order via WhatsApp" : lang === "hy" ? "Patvirel WhatsApp-ov" : "Заказать через WhatsApp"}
                      </div>
                      <div className="text-xs font-light opacity-80">
                        {lang === "en" ? "We call back within 1 hour" : lang === "hy" ? "Menc kkanchareq 1 jevum" : "Перезвоним в течение часа"}
                      </div>
                    </div>
                  </a>

                  {/* Call order */}
                  <button onClick={() => { if (name && phone && address) setOrdered(true); }}
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: name && phone && address ? "linear-gradient(135deg, #ec4899, #f43f5e)" : "#f3f4f6",
                      color: name && phone && address ? "#ffffff" : "#9ca3af",
                      cursor: name && phone && address ? "pointer" : "not-allowed",
                      boxShadow: name && phone && address ? "0 4px 16px rgba(244,63,94,.35)" : "none"
                    }}>
                    <span className="text-xl">📞</span>
                    <div>
                      <div className="font-black">
                        {lang === "en" ? "Request callback" : lang === "hy" ? "Xndrel zangaraharcutyun" : "Заказать звонок"}
                      </div>
                      <div className="text-xs font-light opacity-80">
                        {name && phone && address
                          ? (lang === "en" ? "We'll call you shortly" : "Скоро позвоним")
                          : (lang === "en" ? "Fill in your details first" : "Сначала заполните форму")}
                      </div>
                    </div>
                  </button>
                </div>

                {/* trust badges */}
                <div className="mt-5 flex justify-center gap-4 flex-wrap">
                  {["🔒 Secure", "⚡ Same day", "❄️ Ice-packed"].map(b => (
                    <span key={b} className="text-xs font-medium" style={{ color: "#f9a8d4" }}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

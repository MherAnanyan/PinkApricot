"use client";
import { useState } from "react";
import { useLang } from "./LangContext";
import { useCart } from "./CartContext";
import { extras } from "@/lib/extras";
import Link from "next/link";

const IDRAM_URL = "https://idram.am";
const TELCELL_URL = "https://telcell.am";
const WHATSAPP = "37400000000";

type Errors = { name?:string; phone?:string; address?:string };

export default function CheckoutPage() {
  const { lang } = useLang();
  const { items, removeItem, updateQty, addItem, total, clearCart, hydrated } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [ordered, setOrdered] = useState(false);

  const delivery = 600;
  const tax = Math.round(total * 0.05);
  const grand = total + delivery + tax;
  const suggestions = extras.filter(e => !items.some(i => i.id === e.id)).slice(0,4);

  const validate = () => {
    const e: Errors = {};
    if (!name.trim()) e.name = lang==="ru" ? "Введите имя" : "Name is required";
    if (!phone.trim()) e.phone = lang==="ru" ? "Введите номер" : "Phone is required";
    else if (!/^\+?[\d\s\-(]{7,}/.test(phone)) e.phone = "Invalid phone number";
    if (!address.trim()) e.address = lang==="ru" ? "Введите адрес" : "Address is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const waMsg = () => {
    const lines = [`🍑 *Blue Apricot Order*`,`Name: ${name}`,`Phone: ${phone}`,`Address: ${address}`,``,`*Items:*`,
      ...items.map(i=>`${i.emoji} ${i.name} ×${i.qty} — ${(i.price*i.qty).toLocaleString()} AMD`),``,
      `Subtotal: ${total.toLocaleString()} AMD`,`Delivery: ${delivery.toLocaleString()} AMD`,
      `Tax: ${tax.toLocaleString()} AMD`,`*Total: ${grand.toLocaleString()} AMD*`,
      note?`Note: ${note}`:""].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  };

  const P = { padding:"120px 0 80px", background:"#f7f9fc" };
  const INNER = { maxWidth:1280, margin:"0 auto", padding:"0 24px" };

  if (!hydrated) return (
    <main style={P}>
      <div style={INNER}>
        <div style={{ height:40, width:200, borderRadius:12, background:"#dbeafe", marginBottom:16 }} className="pulse-slow" />
        <div style={{ height:56, width:320, borderRadius:12, background:"#dbeafe", marginBottom:40 }} className="pulse-slow" />
        <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:32 }}>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {[1,2,3].map(i => <div key={i} style={{ height:80, borderRadius:20, background:"#dbeafe" }} className="pulse-slow" />)}
          </div>
          <div style={{ height:400, borderRadius:20, background:"#dbeafe" }} className="pulse-slow" />
        </div>
      </div>
    </main>
  );

  if (ordered) return (
    <main style={{ ...P, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ textAlign:"center", padding:48, maxWidth:480 }}>
        <div className="float-anim" style={{ fontSize:80, marginBottom:24 }}>🎉</div>
        <h1 className="font-display" style={{ fontSize:40, fontWeight:900, marginBottom:12, color:"#0b2545" }}>
          {lang==="en" ? "Order Received!" : lang==="ru" ? "Заказ принят!" : "Patverumě bankal e!"}
        </h1>
        <p style={{ fontSize:16, fontWeight:300, marginBottom:32, color:"#64748b" }}>
          {lang==="en" ? "We'll call you within 1 hour to confirm." : lang==="ru" ? "Позвоним в течение часа." : "Kkanchareq 1 jevum."}
        </p>
        <Link href="/" className="btn-blue" onClick={clearCart}>
          {lang==="en" ? "← Back to home" : lang==="ru" ? "← На главную" : "← Gtsnerdz"}
        </Link>
      </div>
    </main>
  );

  if (items.length === 0) return (
    <main style={{ ...P, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ textAlign:"center", padding:48 }}>
        <div style={{ fontSize:80, marginBottom:24 }}>🛒</div>
        <h1 className="font-display" style={{ fontSize:40, fontWeight:900, marginBottom:12, color:"#0b2545" }}>
          {lang==="en" ? "Your basket is empty" : lang==="ru" ? "Корзина пуста" : "Kalatage datal e"}
        </h1>
        <p style={{ fontSize:16, fontWeight:300, marginBottom:32, color:"#64748b" }}>
          {lang==="en" ? "Add some boxes to get started!" : lang==="ru" ? "Добавьте боксы!" : "Avaelacrek arkaghner!"}
        </p>
        <Link href="/#boxes" className="btn-blue">
          {lang==="en" ? "Browse Boxes" : lang==="ru" ? "Посмотреть боксы" : "Tesnel arkaghner"}
        </Link>
      </div>
    </main>
  );

  return (
    <main style={P}>
      <div style={INNER}>
        <div style={{ marginBottom:36 }}>
          <Link href="/" style={{ fontSize:13, fontWeight:600, color:"#2563eb", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6, marginBottom:16 }}>
            ← {lang==="en" ? "Continue shopping" : lang==="ru" ? "Продолжить" : "Shaarunakir"}
          </Link>
          <h1 className="font-display" style={{ fontSize:48, fontWeight:900, color:"#0b2545" }}>
            {lang==="en" ? "Your Basket" : lang==="ru" ? "Ваша Корзина" : "Dzez Kalatag"}
          </h1>
          <p style={{ fontSize:14, color:"#64748b", marginTop:6 }}>{items.length} {lang==="en" ? "items" : lang==="ru" ? "товара" : "nuter"}</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 360px", gap:32 }}>
          {/* LEFT */}
          <div style={{ display:"flex", flexDirection:"column", gap:20 }}>

            {/* Items */}
            <div className="checkout-section">
              <div className="checkout-section-header">
                {lang==="en" ? "Order items" : lang==="ru" ? "Товары" : "Patverums nuter"}
              </div>
              {items.map((item,idx) => (
                <div key={item.id} style={{ display:"flex", alignItems:"center", gap:16, padding:"16px 24px",
                  borderBottom: idx<items.length-1 ? "1px solid #f1f5f9" : "none" }}>
                  <div style={{ width:52, height:52, borderRadius:14, display:"flex", alignItems:"center",
                    justifyContent:"center", fontSize:26, flexShrink:0, background:"#f7f9fc" }}>
                    {item.emoji}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontWeight:700, fontSize:14, color:"#0b2545", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{item.name}</div>
                    <div style={{ fontSize:12, fontWeight:500, marginTop:2, color:"#2563eb" }}>
                      {item.price===0 ? "FREE" : `${item.price.toLocaleString()} AMD each`}
                    </div>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, padding:"4px 8px", borderRadius:100,
                    background:"#f7f9fc", border:"1.5px solid #e2e8f0" }}>
                    <button onClick={()=>updateQty(item.id,item.qty-1)}
                      style={{ width:28,height:28,borderRadius:"50%",border:"none",background:"transparent",
                        fontSize:18,fontWeight:900,cursor:"pointer",color:"#2563eb",display:"flex",alignItems:"center",justifyContent:"center" }}>−</button>
                    <span style={{ fontWeight:900,fontSize:14,width:20,textAlign:"center",color:"#0b2545" }}>{item.qty}</span>
                    <button onClick={()=>updateQty(item.id,item.qty+1)}
                      style={{ width:28,height:28,borderRadius:"50%",border:"none",background:"transparent",
                        fontSize:18,fontWeight:900,cursor:"pointer",color:"#2563eb",display:"flex",alignItems:"center",justifyContent:"center" }}>+</button>
                  </div>
                  <div className="font-display" style={{ fontWeight:900,fontSize:16,width:96,textAlign:"right",color:"#2563eb" }}>
                    {item.price===0 ? "FREE" : `${(item.price*item.qty).toLocaleString()}`}
                  </div>
                  <button onClick={()=>removeItem(item.id)}
                    style={{ width:32,height:32,borderRadius:"50%",border:"none",background:"transparent",
                      cursor:"pointer",color:"#cbd5e1",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center" }}
                    onMouseEnter={e=>(e.currentTarget.style.background="#fee2e2")}
                    onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>✕</button>
                </div>
              ))}
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="checkout-section">
                <div className="checkout-section-header">
                  ✨ {lang==="en" ? "Complete your evening" : lang==="ru" ? "Дополните вечер" : "Kammal kareq iriqune"}
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, padding:20 }}>
                  {suggestions.map(s => (
                    <div key={s.id} style={{ display:"flex", alignItems:"center", gap:12, padding:12, borderRadius:16,
                      background:"#f7f9fc", border:"1px solid #e2e8f0" }}>
                      <div style={{ width:44, height:44, borderRadius:12, flexShrink:0, display:"flex", alignItems:"center",
                        justifyContent:"center", fontSize:22, background:"linear-gradient(135deg,#2563eb,#1a4a8a)" }}>
                        {s.emoji}
                      </div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontWeight:700, fontSize:12, color:"#0b2545", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{s.name[lang]}</div>
                        <div style={{ fontWeight:900, fontSize:13, color:"#2563eb", marginTop:2 }}>
                          {s.price===0 ? "FREE" : `${s.price.toLocaleString()} AMD`}
                        </div>
                      </div>
                      <button onClick={()=>addItem({id:s.id,type:"extra",name:s.name[lang],price:s.price,emoji:s.emoji},lang)}
                        className="btn-blue" style={{ padding:"6px 12px",fontSize:11,borderRadius:100,flexShrink:0 }}>
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Delivery form */}
            <div className="checkout-section">
              <div className="checkout-section-header">
                {lang==="en" ? "Delivery details" : lang==="ru" ? "Детали доставки" : "Arakvman manbrepasutyan"}
              </div>
              <div style={{ padding:24, display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                {[
                  { label:{en:"Your name *",ru:"Ваше имя *",hy:"Dzez anune *"}, val:name, set:setName, err:errors.name, type:"text", ph:{en:"Ani Sargsyan",ru:"Аня",hy:"Anush"} },
                  { label:{en:"Phone / WhatsApp *",ru:"Телефон *",hy:"Hamerakat *"}, val:phone, set:setPhone, err:errors.phone, type:"tel", ph:{en:"+374 XX XXX XXX",ru:"+374...",hy:"+374..."} },
                ].map(f => (
                  <div key={f.type}>
                    <label style={{ display:"block", fontSize:11, fontWeight:700, textTransform:"uppercase",
                      letterSpacing:".08em", marginBottom:8, color:"#1a4a8a" }}>{f.label[lang]}</label>
                    <input type={f.type} value={f.val} placeholder={f.ph[lang]}
                      onChange={e=>{f.set(e.target.value); setErrors(p=>({...p,[f.type===`tel`?`phone`:`name`]:undefined}));}}
                      className="ba-input" style={f.err?{borderColor:"#ef4444"}:undefined} />
                    {f.err && <p style={{ fontSize:11, color:"#ef4444", marginTop:6, fontWeight:500 }}>⚠ {f.err}</p>}
                  </div>
                ))}
                <div style={{ gridColumn:"1/-1" }}>
                  <label style={{ display:"block", fontSize:11, fontWeight:700, textTransform:"uppercase",
                    letterSpacing:".08em", marginBottom:8, color:"#1a4a8a" }}>
                    {lang==="en" ? "Delivery address — Yerevan only *" : lang==="ru" ? "Адрес — только Ереван *" : "Hastein — miayn Yerevan *"}
                  </label>
                  <input type="text" value={address} placeholder={lang==="en" ? "Street, building, apartment, Yerevan" : lang==="ru" ? "Улица, дом, квартира, Ереван" : "Poghoc, shen, bnakarann, Yerevan"}
                    onChange={e=>{setAddress(e.target.value); setErrors(p=>({...p,address:undefined}));}}
                    className="ba-input" style={errors.address?{borderColor:"#ef4444"}:undefined} />
                  {errors.address && <p style={{ fontSize:11, color:"#ef4444", marginTop:6, fontWeight:500 }}>⚠ {errors.address}</p>}
                </div>
                <div style={{ gridColumn:"1/-1" }}>
                  <label style={{ display:"block", fontSize:11, fontWeight:700, textTransform:"uppercase",
                    letterSpacing:".08em", marginBottom:8, color:"#1a4a8a" }}>
                    {lang==="en" ? "Note (optional)" : lang==="ru" ? "Примечание" : "Gri (optional)"}
                  </label>
                  <textarea value={note} onChange={e=>setNote(e.target.value)} rows={2}
                    placeholder={lang==="en" ? "Allergies, special requests..." : lang==="ru" ? "Аллергии, пожелания..." : "Alergiaer..."}
                    className="ba-input" style={{ resize:"none" }} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — summary */}
          <div>
            <div className="checkout-section" style={{ position:"sticky", top:96 }}>
              <div className="checkout-section-header">
                {lang==="en" ? "Order summary" : lang==="ru" ? "Итого" : "Patverumi amfopkum"}
              </div>
              <div style={{ padding:24 }}>
                {/* Line items */}
                <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:16 }}>
                  {items.map(item => (
                    <div key={item.id} style={{ display:"flex", justifyContent:"space-between", fontSize:13 }}>
                      <span style={{ color:"#64748b", flex:1, marginRight:8, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{item.emoji} {item.name} ×{item.qty}</span>
                      <span style={{ fontWeight:700, color:"#0b2545", flexShrink:0 }}>{item.price===0?"FREE":`${(item.price*item.qty).toLocaleString()}`}</span>
                    </div>
                  ))}
                </div>

                <div style={{ paddingTop:16, borderTop:"1px dashed #e2e8f0", display:"flex", flexDirection:"column", gap:8 }}>
                  {[
                    { label:{en:"Subtotal",ru:"Подитого",hy:"Michampofkum"}, val:`${total.toLocaleString()} AMD` },
                    { label:{en:"Delivery",ru:"Доставка",hy:"Arakvum"}, val:`${delivery.toLocaleString()} AMD` },
                    { label:{en:"Tax (5%)",ru:"Налог (5%)",hy:"Hardzu (5%)"}, val:`${tax.toLocaleString()} AMD` },
                  ].map(r => (
                    <div key={r.label.en} style={{ display:"flex", justifyContent:"space-between", fontSize:13 }}>
                      <span style={{ color:"#64748b" }}>{r.label[lang]}</span>
                      <span style={{ fontWeight:600, color:"#0b2545" }}>{r.val}</span>
                    </div>
                  ))}
                  <div style={{ display:"flex", justifyContent:"space-between", paddingTop:12, marginTop:4, borderTop:"2px solid #e2e8f0" }}>
                    <span style={{ fontWeight:900, fontSize:15, color:"#0b2545" }}>{lang==="en" ? "Total" : lang==="ru" ? "Итого" : "Gumara"}</span>
                    <span className="font-display" style={{ fontWeight:900, fontSize:22, color:"#2563eb" }}>{grand.toLocaleString()} AMD</span>
                  </div>
                </div>

                {/* Payment buttons */}
                <div style={{ marginTop:24, display:"flex", flexDirection:"column", gap:10 }}>
                  <div style={{ textAlign:"center", fontSize:11, fontWeight:700, textTransform:"uppercase",
                    letterSpacing:".1em", color:"#94a3b8", marginBottom:4 }}>
                    {lang==="en" ? "Pay online" : lang==="ru" ? "Оплатить онлайн" : "Varchel online"}
                  </div>

                  <a href={IDRAM_URL} target="_blank" rel="noopener noreferrer"
                    style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 20px", borderRadius:16,
                      fontWeight:700, color:"#ffffff", textDecoration:"none", fontSize:14,
                      background:"linear-gradient(135deg,#f59e0b,#d97706)", boxShadow:"0 4px 16px rgba(245,158,11,.35)",
                      transition:"transform .2s, box-shadow .2s" }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 8px 24px rgba(245,158,11,.45)"}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="0 4px 16px rgba(245,158,11,.35)"}}>
                    <span style={{ fontSize:22 }}>💳</span>
                    <div>
                      <div>Idram</div>
                      <div style={{ fontSize:11, opacity:.8, fontWeight:400 }}>{grand.toLocaleString()} AMD</div>
                    </div>
                  </a>

                  <a href={TELCELL_URL} target="_blank" rel="noopener noreferrer"
                    style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 20px", borderRadius:16,
                      fontWeight:700, color:"#ffffff", textDecoration:"none", fontSize:14,
                      background:"linear-gradient(135deg,#2563eb,#1a4a8a)", boxShadow:"0 4px 16px rgba(37,99,235,.35)",
                      transition:"transform .2s" }}
                    onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform="translateY(-2px)"}
                    onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform="translateY(0)"}>
                    <span style={{ fontSize:22 }}>📱</span>
                    <div>
                      <div>Telcell Wallet</div>
                      <div style={{ fontSize:11, opacity:.8, fontWeight:400 }}>{grand.toLocaleString()} AMD</div>
                    </div>
                  </a>

                  <div style={{ display:"flex", alignItems:"center", gap:10, margin:"2px 0" }}>
                    <div style={{ flex:1, height:1, background:"#e2e8f0" }} />
                    <span style={{ fontSize:11, fontWeight:700, color:"#94a3b8" }}>{lang==="en"?"or":lang==="ru"?"или":"kam"}</span>
                    <div style={{ flex:1, height:1, background:"#e2e8f0" }} />
                  </div>

                  <a href={`https://wa.me/${WHATSAPP}?text=${waMsg()}`} target="_blank" rel="noopener noreferrer"
                    style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 20px", borderRadius:16,
                      fontWeight:700, color:"#ffffff", textDecoration:"none", fontSize:14,
                      background:"linear-gradient(135deg,#25d366,#128c7e)", boxShadow:"0 4px 16px rgba(37,211,102,.3)",
                      transition:"transform .2s" }}
                    onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform="translateY(-2px)"}
                    onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform="translateY(0)"}>
                    <span style={{ fontSize:22 }}>💬</span>
                    <div>
                      <div>{lang==="en"?"Order via WhatsApp":lang==="ru"?"Заказать через WhatsApp":"Patvirel WhatsApp-ov"}</div>
                      <div style={{ fontSize:11, opacity:.8, fontWeight:400 }}>{lang==="en"?"We call back within 1 hour":lang==="ru"?"Перезвоним за час":"Kkanchareq 1 jevum"}</div>
                    </div>
                  </a>

                  <button onClick={()=>{ if(validate()) setOrdered(true); }}
                    className="btn-blue" style={{ width:"100%", padding:"14px 20px", borderRadius:16, fontSize:14 }}>
                    <span style={{ fontSize:20, marginRight:8 }}>📞</span>
                    {lang==="en"?"Request callback":lang==="ru"?"Заказать звонок":"Xndrel zangaraharcutyun"}
                  </button>
                </div>

                <div style={{ marginTop:16, display:"flex", justifyContent:"center", gap:16, flexWrap:"wrap" }}>
                  {["🔒 Secure","⚡ Same day","❄️ Ice-packed"].map(b=>(
                    <span key={b} style={{ fontSize:11, fontWeight:600, color:"#94a3b8" }}>{b}</span>
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

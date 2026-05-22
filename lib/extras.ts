export type Extra = {
  id: string;
  category: "wine" | "drinks" | "desserts" | "romantic";
  name: { en: string; hy: string; ru: string };
  description: { en: string; hy: string; ru: string };
  price: number;
  emoji: string;
  badge?: { en: string; hy: string; ru: string };
  gradient: string;
};

export const extras: Extra[] = [
  // WINE
  {
    id: "wine-red",
    category: "wine",
    name: { en: "Armenian Red Wine", hy: "Հայկական Կարմիր Գինի", ru: "Армянское красное вино" },
    description: { en: "Areni Noir, full-bodied & rich. Perfect with pasta & meat boxes.", hy: "Արենի Նուար, հարուստ համով:", ru: "Арени Нуар, насыщенный и богатый вкус." },
    price: 4500,
    emoji: "🍷",
    badge: { en: "Local favourite", hy: "Տեղական ֆավorит", ru: "Местный фаворит" },
    gradient: "from-red-600 to-rose-800",
  },
  {
    id: "wine-white",
    category: "wine",
    name: { en: "Armenian White Wine", hy: "Հայկական Սպիտակ Գինի", ru: "Армянское белое вино" },
    description: { en: "Voskehat, crisp & floral. Pairs beautifully with Thai & Japanese boxes.", hy: "Вoskehat, թարմ ու ծաղկային:", ru: "Воскеат, свежий и цветочный. Идеален к тайским и японским боксам." },
    price: 4200,
    emoji: "🥂",
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    id: "wine-rose",
    category: "wine",
    name: { en: "Rosé Wine", hy: "Վարդագույն Գինի", ru: "Розовое вино" },
    description: { en: "Light, fruity rosé. Great for any box, especially summer evenings.", hy: "Թеթев, մрglut rosé:", ru: "Лёгкое фруктовое розе. Подходит к любому боксу." },
    price: 4000,
    emoji: "🌸",
    gradient: "from-pink-400 to-rose-500",
  },
  // DRINKS
  {
    id: "sparkling-water",
    category: "drinks",
    name: { en: "Sparkling Water (2x 500ml)", hy: "Գазированjur (2x 500մl)", ru: "Газированная вода (2x 500мл)" },
    description: { en: "Premium Armenian sparkling mineral water.", hy: "Պрemium հայкaкан mineralJur:", ru: "Премиум армянская минеральная газированная вода." },
    price: 800,
    emoji: "💧",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: "lemonade",
    category: "drinks",
    name: { en: "Homemade Lemonade (1L)", hy: "Տնական Limonad (1L)", ru: "Домашний лимонад (1 л)" },
    description: { en: "Fresh mint & lemon lemonade. Handmade daily.", hy: "Թarм ananasayin limonad:", ru: "Свежий лимонад с мятой и лимоном. Готовится ежедневно." },
    price: 1500,
    emoji: "🍋",
    badge: { en: "Handmade daily", hy: "Aysorva prastrvac", ru: "Готовится каждый день" },
    gradient: "from-yellow-300 to-lime-400",
  },
  {
    id: "kombucha",
    category: "drinks",
    name: { en: "Kombucha (500ml)", hy: "Комbucha (500մl)", ru: "Комбуча (500мл)" },
    description: { en: "Fermented ginger kombucha. Refreshing & good for you.", hy: "Кombucha кendzayin kenjаr:", ru: "Ферментированная имбирная комбуча. Освежает и полезна." },
    price: 1200,
    emoji: "🫙",
    gradient: "from-orange-300 to-amber-400",
  },
  {
    id: "juice",
    category: "drinks",
    name: { en: "Fresh Pomegranate Juice (500ml)", hy: "Թarм Nurayin Hus (500մl)", ru: "Свежий гранатовый сок (500мл)" },
    description: { en: "100% fresh-pressed Armenian pomegranate. No sugar added.", hy: "100% թarм hаykakan нур:", ru: "100% свежевыжатый армянский гранат. Без сахара." },
    price: 1800,
    emoji: "🍎",
    badge: { en: "Armenian special", hy: "Haykakan", ru: "Армянский специалитет" },
    gradient: "from-red-400 to-pink-600",
  },
  // DESSERTS
  {
    id: "chocolate-box",
    category: "desserts",
    name: { en: "Armenian Chocolate Box", hy: "Hаykakan Shokoladi Arkanal", ru: "Армянский набор шоколада" },
    description: { en: "Handcrafted dark chocolate truffles with apricot & walnut filling.", hy: "Ձeռагорц shоkoladneri набор mrikavornerov:", ru: "Ручной работы трюфели с начинкой из абрикоса и грецкого ореха." },
    price: 2500,
    emoji: "🍫",
    badge: { en: "Handcrafted", ru: "Ручная работа", hy: "Ձeragortz" },
    gradient: "from-amber-700 to-stone-800",
  },
  {
    id: "baklava",
    category: "desserts",
    name: { en: "Baklava Set (8 pcs)", hy: "Пахлава (8 hат)", ru: "Пахлава (8 шт)" },
    description: { en: "Traditional Armenian baklava with honey, pistachios & walnuts.", hy: "Avandakan hаykakan paxlava medum ev enjoyznerov:", ru: "Традиционная армянская пахлава с мёдом, фисташками и грецкими орехами." },
    price: 2000,
    emoji: "🍯",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: "fruit-basket",
    category: "desserts",
    name: { en: "Seasonal Fruit Basket", hy: "Ежегодный mrluki zam", ru: "Корзина сезонных фруктов" },
    description: { en: "Fresh seasonal Armenian fruits — figs, apricots, grapes or berries.", hy: "Thazm haykakan mrlukner — tzerani, karmir mrluk, khndzoрн:", ru: "Свежие сезонные армянские фрукты — инжир, абрикосы, виноград или ягоды." },
    price: 2200,
    emoji: "🍇",
    gradient: "from-purple-400 to-violet-600",
  },
  // ROMANTIC EXTRAS
  {
    id: "candles",
    category: "romantic",
    name: { en: "Dinner Candle Set (4 pcs)", hy: "Կerot набор (4 hат)", ru: "Набор обеденных свечей (4 шт)" },
    description: { en: "Elegant white dinner candles with holders. Transform any table.", hy: "Gexecik spitak momenever stolidz gorchadzerov:", ru: "Элегантные белые обеденные свечи с подсвечниками. Преобразят любой стол." },
    price: 1200,
    emoji: "🕯️",
    badge: { en: "Date night must", hy: "Amousnayin iriqun", ru: "Для романтического вечера" },
    gradient: "from-orange-200 to-amber-300",
  },
  {
    id: "flowers",
    category: "romantic",
    name: { en: "Small Flower Bouquet", hy: "Ծaghikneri psak", ru: "Небольшой букет цветов" },
    description: { en: "Seasonal mixed flowers from a local Yerevan florist. Added to your delivery.", hy: "Erevani tsaghkavacharneric sezonain tsaghikner:", ru: "Сезонные цветы от местного ереванского флориста. Добавляются к вашей доставке." },
    price: 3500,
    emoji: "💐",
    badge: { en: "Fresh cut", hy: "Karmir", ru: "Свежесрезанные" },
    gradient: "from-pink-300 to-rose-500",
  },
  {
    id: "gift-wrap",
    category: "romantic",
    name: { en: "Gift Wrapping & Note", hy: "Нвeragelоum yev nkar", ru: "Подарочная упаковка и открытка" },
    description: { en: "Premium branded gift wrap with a handwritten note card for your message.", hy: "Premium Pink Apricot nuerin poketavorum yev jeragortz note:", ru: "Фирменная подарочная упаковка с карточкой для рукописного послания." },
    price: 500,
    emoji: "🎁",
    gradient: "from-pink-400 to-fuchsia-500",
  },
  {
    id: "music-qr",
    category: "romantic",
    name: { en: "Spotify Playlist QR Card", hy: "Spotify playlist QR", ru: "QR-карточка плейлиста Spotify" },
    description: { en: "A printed QR card linking to our curated dinner playlist for each cuisine.", hy: "Tpagrvats QR kart` merа erjshtiakan dinner playlist`i hamar:", ru: "Печатная QR-карточка с кураторским плейлистом для ужина под каждую кухню." },
    price: 0,
    emoji: "🎵",
    badge: { en: "Free!", hy: "Anjaмб!", ru: "Бесплатно!" },
    gradient: "from-green-400 to-emerald-600",
  },
];

export const extraCategories = [
  { id: "wine",     label: { en: "🍷 Wine",       hy: "🍷 Գininer",    ru: "🍷 Вино" } },
  { id: "drinks",   label: { en: "🥤 Drinks",     hy: "🥤 Xmichkner",  ru: "🥤 Напитки" } },
  { id: "desserts", label: { en: "🍫 Desserts",   hy: "🍫 Anourerner", ru: "🍫 Десерты" } },
  { id: "romantic", label: { en: "🕯️ Romantic",  hy: "🕯️ Romantik",  ru: "🕯️ Романтика" } },
] as const;

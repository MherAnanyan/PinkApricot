export type Ingredient = {
  name: { en: string; hy: string; ru: string };
  qty: string;
  cold?: boolean;
  exotic?: boolean;
};

export type Box = {
  id: string;
  flag: string;
  country: { en: string; hy: string; ru: string };
  region: "latin" | "asian" | "european";
  dish: { en: string; hy: string; ru: string };
  tagline: { en: string; hy: string; ru: string };
  description: { en: string; hy: string; ru: string };
  price: number;
  cookTime: string;
  difficulty: "Easy" | "Medium";
  serves: number;
  featured?: boolean;
  gradient: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  bgLight: string;
  emoji: string;
  videoPlaceholder: string;
  ingredients: Ingredient[];
  steps: { en: string; hy: string; ru: string }[];
  freshNote: { en: string; hy: string; ru: string };
  vsRestaurant: number;
};

export const boxes: Box[] = [
  {
    id: "mexico",
    flag: "🇲🇽",
    country: { en: "Mexico", hy: "Մեքsikah", ru: "Мексика" },
    region: "latin",
    dish: { en: "Chicken Tinga Tacos", hy: "Chicken Tinga Tacos", ru: "Тако с курицей Тинга" },
    tagline: { en: "Street food, honest heat", hy: "Poghocayin uzhelik", ru: "Уличная еда, настоящий вкус" },
    description: {
      en: "Smoky chipotle-braised chicken piled into warm corn tortillas with pickled onion and fresh cilantro. The kind of taco that ruins all other tacos.",
      hy: "Chipotle-ov yepu hav` taq tortillanersum spitak souxi yev korianderi het:",
      ru: "Курица тушёная в чипотле, в тёплых кукурузных тортильях с маринованным луком и кинзой."
    },
    price: 8650,
    cookTime: "30 min",
    difficulty: "Easy",
    serves: 2,
    featured: true,
    gradient: "from-orange-500 to-red-600",
    gradientFrom: "#f97316",
    gradientTo: "#dc2626",
    accentColor: "#ea580c",
    bgLight: "#fff7ed",
    emoji: "🌮",
    videoPlaceholder: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1600&q=80",
    freshNote: { en: "Chicken is ice-packed. Chipotle paste imported from Mexico.", hy: "Havn saruycoov e:", ru: "Курица упакована со льдом. Паста чипотле импортирована из Мексики." },
    vsRestaurant: 14000,
    ingredients: [
      { name: { en: "Chicken thighs", hy: "Havi satakner", ru: "Куриные бёдра" }, qty: "300g", cold: true },
      { name: { en: "Chipotle in adobo", hy: "Chipotle adobo-um", ru: "Чипотле в адобо" }, qty: "2 tbsp", exotic: true },
      { name: { en: "Tomatoes", hy: "Pomidorner", ru: "Помидоры" }, qty: "2 medium" },
      { name: { en: "White onion", hy: "Spitак soukh", ru: "Белый лук" }, qty: "1 small" },
      { name: { en: "Corn tortillas", hy: "Egepatsoreni tortilya", ru: "Кукурузные тортильи" }, qty: "6 pcs", exotic: true },
      { name: { en: "Lime", hy: "Limon", ru: "Лайм" }, qty: "2 pcs" },
      { name: { en: "Fresh cilantro", hy: "Koriander", ru: "Кинза" }, qty: "½ bunch" },
      { name: { en: "Elote corn", hy: "Egepatsorenener", ru: "Кукуруза элоте" }, qty: "2 cobs" },
      { name: { en: "Cotija / feta", hy: "Kotija / feta", ru: "Котиха / фета" }, qty: "40g", cold: true },
    ],
    steps: [
      { en: "Simmer chicken thighs with chipotle, tomatoes and onion for 20 min until tender", hy: "Khashacrek havi satakner chipotle-ov, pomidorov, souxhov 20 rop", ru: "Тушите куриные бёдра с чипотле, помидорами и луком 20 минут" },
      { en: "Shred chicken with two forks directly in the braising liquid — it should be saucy", hy: "Paterackrek hav yerkou asparagov — petk e lini sousov", ru: "Разберите курицу двумя вилками прямо в соусе — должно быть сочно" },
      { en: "Grill corn cobs dry in a pan until charred spots appear, then brush with mayo and dust with cotija", hy: "Khorcakrek egepatsorenener chor tapaki mej, apa mayoneziov", ru: "Обжарьте кукурузу на сухой сковороде до подпалин, затем смажьте майонезом" },
      { en: "Warm tortillas over an open flame or dry pan — 20 seconds each side", hy: "Taqacrek tortilyanery vocneri vra — 20 varkyan", ru: "Прогрейте тортильи над газом или на сухой сковороде — 20 секунд с каждой стороны" },
      { en: "Load the tortillas with chicken and top with pickled onion, cilantro and a squeeze of lime", hy: "Letsnem tortillayery haviov, aveleq soukh, koriander, limon", ru: "Наполните тортильи курицей, добавьте лук, кинзу и выжмите лайм" },
    ]
  },
  {
    id: "japan",
    flag: "🇯🇵",
    country: { en: "Japan", hy: "Ճaponia", ru: "Япония" },
    region: "asian",
    dish: { en: "Tonkotsu Ramen", hy: "Tonkotsu Ramen", ru: "Тонкоцу Рамен" },
    tagline: { en: "18 hours of flavour in 35 minutes", hy: "Tokyoyi hamberi", ru: "18 часов вкуса за 35 минут" },
    description: {
      en: "A rich, cloudy pork broth loaded with silky ramen noodles, melt-in-your-mouth chashu belly and a perfectly soft-boiled marinated egg. Tokyo in a bowl.",
      hy: "Pararak khozi arganakn mekaron, khozi pork yev dzviov:",
      ru: "Насыщенный мутный свиной бульон с шелковистой лапшой, тающей во рту свиной грудинкой и маринованным яйцом. Токио в миске."
    },
    price: 9650,
    cookTime: "35 min",
    difficulty: "Medium",
    serves: 2,
    gradient: "from-blue-600 to-indigo-700",
    gradientFrom: "#2563eb",
    gradientTo: "#4338ca",
    accentColor: "#2563eb",
    bgLight: "#eff6ff",
    emoji: "🍜",
    videoPlaceholder: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1600&q=80",
    freshNote: { en: "Pork belly ice-packed. Ramen noodles freshly imported.", hy: "Khozi porn saruycoov:", ru: "Свиная грудинка упакована со льдом. Лапша рамен свежеимпортирована." },
    vsRestaurant: 11000,
    ingredients: [
      { name: { en: "Ramen noodles", hy: "Ramen mekaron", ru: "Лапша рамен" }, qty: "200g", exotic: true },
      { name: { en: "Pork belly (chashu)", hy: "Khozi porn", ru: "Свиная грудинка (тяшю)" }, qty: "200g", cold: true },
      { name: { en: "Soft-boiled egg", hy: "Kizvorex dzou", ru: "Яйцо всмятку" }, qty: "2 pcs", cold: true },
      { name: { en: "Miso paste", hy: "Miso macuk", ru: "Мисо паста" }, qty: "40g", exotic: true },
      { name: { en: "Soy sauce", hy: "Soya sous", ru: "Соевый соус" }, qty: "30ml", exotic: true },
      { name: { en: "Sesame oil", hy: "Kenjouthi dzetj", ru: "Кунжутное масло" }, qty: "15ml", exotic: true },
      { name: { en: "Nori sheets", hy: "Nori", ru: "Листы нори" }, qty: "2 pcs", exotic: true },
      { name: { en: "Spring onion", hy: "Kanach soukh", ru: "Зелёный лук" }, qty: "1 bunch" },
    ],
    steps: [
      { en: "Heat stock with miso and soy sauce until fragrant, about 10 minutes on medium heat", hy: "Taqacrek arganakn miso-yov yev soya-yov 10 rop", ru: "Нагрейте бульон с мисо и соевым соусом около 10 минут на среднем огне" },
      { en: "Cook ramen noodles separately per packet instructions (usually 3 min), drain well", hy: "Khashacrek mekaron arranchhin 3 rop, zarreck", ru: "Отварите лапшу отдельно по инструкции на пакете (обычно 3 мин), хорошо слейте" },
      { en: "Slice pork belly thin and warm gently in a dry pan with a drop of sesame oil", hy: "Katreck khozi porn barak yev taqacrek sesami dzetjov", ru: "Нарежьте грудинку тонко и прогрейте на сковороде с каплей кунжутного масла" },
      { en: "Place noodles in bowls, pour over the hot broth, arrange pork, halved egg and nori", hy: "Dzeq mekaron gavatneri mej, letsnek arganakn, daseq khozi porn, dzou, nori", ru: "Положите лапшу в миски, залейте горячим бульоном, разложите мясо, яйцо и нори" },
      { en: "Finish with spring onion, a drizzle of sesame oil and a pinch of white pepper", hy: "Aveleq kanach soukh, sesami dzetj, spanakagouyn piperner", ru: "Завершите зелёным луком, кунжутным маслом и щепоткой белого перца" },
    ]
  },
  {
    id: "france",
    flag: "🇫🇷",
    country: { en: "France", hy: "Fransa", ru: "Франция" },
    region: "european",
    dish: { en: "French Onion Soup + Croque Monsieur", hy: "Khabiz soupe + Croque Monsieur", ru: "Французский луковый суп + Крок Месье" },
    tagline: { en: "Paris on a cold evening", hy: "Parisi arshavantner", ru: "Париж холодным вечером" },
    description: {
      en: "Slow-caramelised onion soup with a gruyère crouton crust that shatters when you break it — followed by the best toasted ham and cheese sandwich ever made.",
      ru: "Медленно карамелизованный луковый суп с хрустящей шапкой из грюйера и лучший тост с ветчиной и сыром.",
      hy: "Karamelizatsvats soukhi soup gruyere-i kapov yev lav ham-i sandvich:"
    },
    price: 11030,
    cookTime: "45 min",
    difficulty: "Medium",
    serves: 2,
    gradient: "from-slate-700 to-blue-900",
    gradientFrom: "#334155",
    gradientTo: "#1e3a5f",
    accentColor: "#1a4a8a",
    bgLight: "#f1f5f9",
    emoji: "🧅",
    videoPlaceholder: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&q=80",
    freshNote: { en: "Ham and cheese ice-packed. Gruyère imported from France.", hy: "Ham yev kaser saruycoov:", ru: "Ветчина и сыр упакованы со льдом. Грюйер импортирован из Франции." },
    vsRestaurant: 16000,
    ingredients: [
      { name: { en: "Yellow onions", hy: "Dzitakhagouyn soukh", ru: "Жёлтый лук" }, qty: "4 large" },
      { name: { en: "Beef stock", hy: "Khozi arganakn", ru: "Говяжий бульон" }, qty: "600ml" },
      { name: { en: "Dry white wine", hy: "Chor spitак gini", ru: "Сухое белое вино" }, qty: "100ml" },
      { name: { en: "Baguette slices", hy: "Bageti kapner", ru: "Ломтики багета" }, qty: "4 pcs" },
      { name: { en: "Gruyère", hy: "Gruyer kaser", ru: "Грюйер" }, qty: "140g", cold: true, exotic: true },
      { name: { en: "Brioche bread", hy: "Briosh hats", ru: "Бриошь" }, qty: "4 slices" },
      { name: { en: "Ham (thick sliced)", hy: "Khozikhor", ru: "Ветчина (толстая нарезка)" }, qty: "80g", cold: true },
      { name: { en: "Butter", hy: "Karagh", ru: "Сливочное масло" }, qty: "50g", cold: true },
      { name: { en: "Dijon mustard", hy: "Dijon mananekh", ru: "Дижонская горчица" }, qty: "1 tsp", exotic: true },
      { name: { en: "Fresh thyme", hy: "Taza chaman", ru: "Свежий тимьян" }, qty: "3 sprigs" },
    ],
    steps: [
      { en: "Cook onions in butter over low heat for 30–35 min until deep golden — patience is the secret", hy: "Tapat soukhn karakhov tsatsr kapuyci vra 30–35 rop minks vorami voske", ru: "Готовьте лук в масле на слабом огне 30–35 мин до глубокого золотистого цвета — терпение — секрет" },
      { en: "Add wine, let it sizzle, then pour in stock and simmer 10 min with thyme", hy: "Avelez gini, lets arganakn, khashacrek 10 rop chaman-ov", ru: "Добавьте вино, дайте зашипеть, затем влейте бульон и варите 10 мин с тимьяном" },
      { en: "Ladle soup into oven-proof bowls, float a baguette slice on top, pile with gruyère and grill until bubbling", hy: "Letsrek soup oven-i gavatneri mej, verin drek baguette, gruyer, khorekel", ru: "Разлейте суп в жаропрочные миски, положите багет, засыпьте грюйером и запекайте до пузырей" },
      { en: "For the croque: make béchamel with butter + flour + milk, spread on brioche with mustard and ham", hy: "Croque-i hamar: shineq beshamel, toraceq brioshi vra mananexhov, hav-khozikhor", ru: "Для крока: сделайте бешамель, нанесите на бриошь с горчицей и ветчиной" },
      { en: "Top with gruyère, bake at 200°C for 12 min until the cheese is golden and bubbling", hy: "Letsrek gruyer-ov, khornecrek 200°C-um 12 rop minks kaser vorami", ru: "Покройте грюйером, запекайте при 200°C 12 мин до золотистого пузырящегося сыра" },
    ]
  },
  {
    id: "peru",
    flag: "🇵🇪",
    country: { en: "Peru", hy: "Peru", ru: "Перу" },
    region: "latin",
    dish: { en: "Lomo Saltado + Ceviche", hy: "Lomo Saltado + Ceviche", ru: "Ломо Сальтадо + Севиче" },
    tagline: { en: "Lima's two great gifts", hy: "Liman yerkou nverakan uzhelikner", ru: "Два великих дара Лимы" },
    description: {
      en: "Peru's most iconic combo — sizzling wok-fried beef with chips and rice, then the freshest ceviche you've ever tasted: fish cured purely by lime juice.",
      hy: "Peru-i ambogj iconic combo — beef yev brindzh, apa taza ceviche limon-ov:",
      ru: "Самое культовое комбо Перу — шипящая говядина вок с картошкой и рисом, затем свежайшее севиче: рыба, приготовленная только лаймом."
    },
    price: 12860,
    cookTime: "30 min",
    difficulty: "Easy",
    serves: 2,
    gradient: "from-amber-500 to-orange-600",
    gradientFrom: "#f59e0b",
    gradientTo: "#ea580c",
    accentColor: "#d97706",
    bgLight: "#fffbeb",
    emoji: "🥩",
    videoPlaceholder: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=1600&q=80",
    freshNote: { en: "Beef and sea bass ice-packed. Aji amarillo paste imported.", hy: "Beef yev jukn saruycoov:", ru: "Говядина и морской окунь упакованы со льдом. Паста ахи амарилло импортирована." },
    vsRestaurant: 18000,
    ingredients: [
      { name: { en: "Beef sirloin strips", hy: "Khozi strips", ru: "Полоски говяжьей вырезки" }, qty: "250g", cold: true },
      { name: { en: "Sea bass fillet", hy: "Jkani file", ru: "Филе морского окуня" }, qty: "250g", cold: true },
      { name: { en: "Aji amarillo paste", hy: "Aji amarillo macuk", ru: "Паста ахи амарилло" }, qty: "1 tsp", exotic: true },
      { name: { en: "Lime juice", hy: "Limon hus", ru: "Сок лайма" }, qty: "80ml (4 limes)" },
      { name: { en: "Red onion", hy: "Karmir soukh", ru: "Красный лук" }, qty: "1 large" },
      { name: { en: "Cilantro", hy: "Koriander", ru: "Кинза" }, qty: "1 bunch" },
      { name: { en: "White rice", hy: "Spitак brindzh", ru: "Белый рис" }, qty: "160g" },
      { name: { en: "Potatoes (for fries)", hy: "Kartofjil", ru: "Картофель (для фри)" }, qty: "200g" },
      { name: { en: "Soy sauce", hy: "Soya sous", ru: "Соевый соус" }, qty: "2 tbsp", exotic: true },
    ],
    steps: [
      { en: "Make the ceviche first: cut fish into 2cm cubes, toss with lime juice and let cure 15 min in fridge", hy: "Shineq ceviche-n nakhapan: katreck jukn 2sm xoranumov, litrek limon husov, drek soruyt 15 rop", ru: "Сначала приготовьте севиче: нарежьте рыбу кубиками 2 см, залейте соком лайма, поставьте в холодильник на 15 мин" },
      { en: "While ceviche cures: fry potato strips until golden and crispy, set aside on paper towel", hy: "Ceviche-n mardanalouc manr rop: tapakrek kartofjiln minks vorami khortkhrot", ru: "Пока маринуется севиче: обжарьте картофель до золотистой хрустящей корочки" },
      { en: "Get wok or largest pan screaming hot — add beef strips and sear 2 min, don't stir too much", hy: "Sxtor tapak — avelez khozi strips yev tapakrek 2 rop, mi xcheq bazh", ru: "Раскалите вок добела — добавьте говядину и обжарьте 2 мин, не мешайте слишком много" },
      { en: "Add onion wedges and tomatoes to wok, splash in soy sauce and aji amarillo, toss 1 min", hy: "Avelez soukh yev pomidor, lets soya sous yev aji amarillo, xchek 1 rop", ru: "Добавьте лук и помидоры в вок, влейте соевый соус и ахи амарилло, перемешайте 1 мин" },
      { en: "Plate: rice and fries on one side, beef mix on the other. For ceviche: drain excess lime, season, garnish with onion and cilantro", hy: "Sahat: brindzh yev kartofil mi koghmic, beef-merenj mius koghmic. Ceviche-i hamar zarreck limon", ru: "Тарелка: рис и картошка с одной стороны, говядина с другой. Для севиче: слейте лишний сок, приправьте, украсьте" },
    ]
  },
  {
    id: "thailand",
    flag: "🇹🇭",
    country: { en: "Thailand", hy: "Tailand", ru: "Таиланд" },
    region: "asian",
    dish: { en: "Pad Thai", hy: "Pad Thai", ru: "Пад Тай" },
    tagline: { en: "Bangkok wok magic", hy: "Bangkoki tapaki kakhardut", ru: "Магия бангкокского вока" },
    description: {
      en: "Thailand's national noodle — stir-fried rice noodles with plump shrimp, tamarind tang, crunchy peanuts and that unmistakable smoky wok flavour you'll obsess over.",
      hy: "Tailandi azgayin mekaron shrimper-ov, tamarind-ov, enkuyznerov:",
      ru: "Национальная лапша Таиланда — рисовая лапша с сочными креветками, тамариндом, хрустящим арахисом и незабываемым дымным вкусом вока."
    },
    price: 9150,
    cookTime: "25 min",
    difficulty: "Easy",
    serves: 2,
    gradient: "from-teal-500 to-emerald-600",
    gradientFrom: "#14b8a6",
    gradientTo: "#059669",
    accentColor: "#0d9488",
    bgLight: "#f0fdf4",
    emoji: "🥘",
    videoPlaceholder: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1600&q=80",
    freshNote: { en: "Shrimp and eggs ice-packed. Bean sprouts harvested fresh.", hy: "Shrimper yev dzouner saruycoov:", ru: "Креветки и яйца упакованы со льдом. Ростки фасоли свежесобранные." },
    vsRestaurant: 13000,
    ingredients: [
      { name: { en: "Rice noodles", hy: "Brindjari mekaron", ru: "Рисовая лапша" }, qty: "200g", exotic: true },
      { name: { en: "Shrimp (peeled)", hy: "Shrimper (maqrvats)", ru: "Креветки (очищенные)" }, qty: "200g", cold: true, exotic: true },
      { name: { en: "Eggs", hy: "Dzouner", ru: "Яйца" }, qty: "2 pcs", cold: true },
      { name: { en: "Tamarind paste", hy: "Tamarind macuk", ru: "Паста тамаринд" }, qty: "30g", exotic: true },
      { name: { en: "Fish sauce", hy: "Jkani sous", ru: "Рыбный соус" }, qty: "20ml", exotic: true },
      { name: { en: "Palm sugar", hy: "Ardjevi sax", ru: "Пальмовый сахар" }, qty: "20g", exotic: true },
      { name: { en: "Crushed peanuts", hy: "Enkuyzner", ru: "Дроблёный арахис" }, qty: "40g" },
      { name: { en: "Bean sprouts", hy: "Lobyajurem", ru: "Ростки фасоли" }, qty: "80g" },
      { name: { en: "Lime", hy: "Limon", ru: "Лайм" }, qty: "2 pcs" },
    ],
    steps: [
      { en: "Soak noodles in warm water 15 min until just pliable — they finish cooking in the wok", hy: "Treq mekaron taq jrum 15 rop minks tziredanali liney", ru: "Замочите лапшу в тёплой воде на 15 мин до мягкости — они дойдут в воке" },
      { en: "Mix tamarind, fish sauce and palm sugar in a small bowl — taste and adjust. This is your sauce", hy: "Xayreck tamarind, jkani sous, ardjevi sax — karegveck. Sa dzez sous e", ru: "Смешайте тамаринд, рыбный соус и пальмовый сахар — попробуйте и отрегулируйте. Это ваш соус" },
      { en: "High heat wok. Add shrimp, cook until pink (2 min), push to side", hy: "Bard jorou tapak. Avelez shrimper, tapakrek minks vardarakagouyn (2 rop), mots koxm", ru: "Сильный огонь. Добавьте креветки, жарьте до розового (2 мин), сдвиньте в сторону" },
      { en: "Crack eggs into empty space, scramble briefly, mix with shrimp", hy: "Katreck dzouner dator taradzin mej, katrek karrac, xayreck shrimperi het", ru: "Вбейте яйца в свободное место, быстро размешайте, перемешайте с креветками" },
      { en: "Add drained noodles and sauce, toss everything 2 min on high. Off heat: peanuts and bean sprouts. Squeeze lime at table", hy: "Avelez mekaron yev sous, xchek 2 rop. Anech krakic: enkuyzner yev lobyajurem. Kachkrek limon", ru: "Добавьте лапшу и соус, мешайте 2 мин на сильном. Снять с огня: арахис и ростки. Выжмите лайм за столом" },
    ]
  },
  {
    id: "spain",
    flag: "🇪🇸",
    country: { en: "Spain", hy: "Ispania", ru: "Испания" },
    region: "european",
    dish: { en: "Patatas Bravas + Gambas al Ajillo", hy: "Patatas Bravas + Gambas al Ajillo", ru: "Патас Бравас + Гамбас аль Ахильо" },
    tagline: { en: "Tapas for two, no bar required", hy: "Tapas yerkusi, bari petk che", ru: "Тапас на двоих, бар не нужен" },
    description: {
      en: "Two Spanish classics that belong together — crispy potatoes with spiced tomato sauce and garlicky shrimp that sizzle in olive oil. Bread mandatory.",
      hy: "Yerkou ispaniakan klassikaner — khortkhrot kartofil tsakhkayin sousov yev garlic-i shrimper dzitadzethum:",
      ru: "Два испанских классика, которые созданы друг для друга — хрустящий картофель в пряном томатном соусе и чесночные креветки в оливковом масле."
    },
    price: 9190,
    cookTime: "30 min",
    difficulty: "Easy",
    serves: 2,
    gradient: "from-yellow-500 to-red-500",
    gradientFrom: "#eab308",
    gradientTo: "#ef4444",
    accentColor: "#ca8a04",
    bgLight: "#fefce8",
    emoji: "🦐",
    videoPlaceholder: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=1600&q=80",
    freshNote: { en: "Shrimp ice-packed. Smoked paprika imported from La Vera, Spain.", hy: "Shrimper saruycoov:", ru: "Креветки упакованы со льдом. Копчёная паприка импортирована из Ла-Веры, Испания." },
    vsRestaurant: 13500,
    ingredients: [
      { name: { en: "Potatoes", hy: "Kartofil", ru: "Картофель" }, qty: "400g" },
      { name: { en: "Shrimp (peeled)", hy: "Shrimper", ru: "Креветки" }, qty: "200g", cold: true },
      { name: { en: "Garlic", hy: "Sxtor", ru: "Чеснок" }, qty: "6 cloves" },
      { name: { en: "Smoked paprika", hy: "Kapouchatsvats paprik", ru: "Копчёная паприка" }, qty: "1½ tsp", exotic: true },
      { name: { en: "Tomato paste", hy: "Pomidori macuk", ru: "Томатная паста" }, qty: "2 tbsp" },
      { name: { en: "Extra virgin olive oil", hy: "Dzitadzet", ru: "Оливковое масло" }, qty: "4 tbsp" },
      { name: { en: "Dry sherry / white wine", hy: "Chor sherry / gini", ru: "Сухой херес / белое вино" }, qty: "3 tbsp" },
      { name: { en: "Fresh parsley", hy: "Taza petrusinia", ru: "Свежая петрушка" }, qty: "small bunch" },
      { name: { en: "Crusty bread", hy: "Khortkhrot hats", ru: "Хрустящий хлеб" }, qty: "2 thick slices" },
    ],
    steps: [
      { en: "Cut potatoes into rough cubes, parboil 8 min until just tender, drain and steam dry 5 min", hy: "Katreck kartofil xoranumov, khashacrek 8 rop, zarreck yev chor areck 5 rop", ru: "Нарежьте картофель кубиками, отварите 8 мин до мягкости, слейте и подсушите 5 мин" },
      { en: "Fry parboiled potato cubes in hot oil until deeply golden all over, season well with salt", hy: "Tapakrek kartofil sxtor dzetum minks vorami vorami bolor koghmerics, aghacrek lav", ru: "Обжарьте картофель в горячем масле до глубокого золотистого цвета со всех сторон" },
      { en: "Make bravas sauce: soften garlic, add tomato paste and paprika, cook 3 min, thin with a splash of water", hy: "Shineq bravas sous: mxrek sxtor, avelez pomidori macuk yev paprik, yepeq 3 rop", ru: "Приготовьте соус брав: обжарьте чеснок, добавьте томатную пасту и паприку, готовьте 3 мин" },
      { en: "For gambas: get a pan very hot, add olive oil and garlic slices, let sizzle 30 sec", hy: "Gambas-i hamar: sxtor tapak, avelez dzitadzet yev sxtor kapner, taqacrek 30 varkyan", ru: "Для гамбас: раскалите сковороду, добавьте оливковое масло и дольки чеснока, обжаривайте 30 сек" },
      { en: "Add shrimp, sherry and parsley — cook 2 min until pink. Serve sizzling with bread to mop the oil", hy: "Avelez shrimper, sherry, petrusinia — yepeq 2 rop. Matatreck shishaghot hatsi het", ru: "Добавьте креветки, херес и петрушку — готовьте 2 мин. Подавайте шипящими с хлебом" },
    ]
  },
];

export const regions = [
  { id: "all",      label: { en: "All boxes", hy: "Bolor", ru: "Все" } },
  { id: "latin",    label: { en: "Latin",     hy: "Latin",  ru: "Латинские" } },
  { id: "asian",    label: { en: "Asian",     hy: "Asian",  ru: "Азиатские" } },
  { id: "european", label: { en: "European",  hy: "Europen", ru: "Европейские" } },
];

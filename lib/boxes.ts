export type Ingredient = {
  name: { en: string; hy: string; ru: string };
  qty: string;
  cold?: boolean;
  exotic?: boolean;
};

export type Box = {
  id: string;
  flag: string;
  cuisine: { en: string; hy: string; ru: string };
  dish: { en: string; hy: string; ru: string };
  tagline: { en: string; hy: string; ru: string };
  description: { en: string; hy: string; ru: string };
  price: number;
  cookTime: string;
  difficulty: string;
  serves: number;
  featured?: boolean;
  gradient: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  bgLight: string;
  textColor: string;
  emoji: string;
  bigEmoji: string;
  ingredients: Ingredient[];
  steps: { en: string; hy: string; ru: string }[];
  freshNote: { en: string; hy: string; ru: string };
  vsRestaurant: number;
};

export const boxes: Box[] = [
  {
    id: "italian",
    flag: "🇮🇹",
    cuisine: { en: "Italian", hy: "Իտալական", ru: "Итальянская" },
    dish: { en: "Spaghetti Carbonara", hy: "Սպագետտի Կարբոնարա", ru: "Спагетти Карбонара" },
    tagline: { en: "Rome in your kitchen", hy: "Հռոմը ձեր խոհանոցում", ru: "Рим на вашей кухне" },
    description: {
      en: "The most iconic Roman pasta — silky egg sauce, crispy pancetta and clouds of aged Pecorino. Deceptively simple, dangerously delicious.",
      hy: "Ամենահայտնի հռոմեական մակարոնը — шелковый ձվային սոուս, խրթխրթան պանչետա և հին Պեկորինո:",
      ru: "Самая культовая римская паста — шёлковый соус из яиц, хрустящая панчетта и облака выдержанного Пекорино."
    },
    price: 7900,
    cookTime: "25 min",
    difficulty: "Medium",
    serves: 2,
    featured: true,
    gradient: "from-orange-400 via-red-400 to-rose-500",
    gradientFrom: "#fb923c",
    gradientTo: "#f43f5e",
    accentColor: "#f43f5e",
    bgLight: "#fff1f2",
    textColor: "#9f1239",
    emoji: "🍝",
    bigEmoji: "🇮🇹",
    freshNote: {
      en: "Pancetta, eggs & Pecorino are ice-packed for guaranteed freshness",
      hy: "Պանչետան, ձվերը և Պեկորինոն սառեցված են թարմության համար",
      ru: "Панчетта, яйца и Пекорино упакованы со льдом для гарантированной свежести"
    },
    vsRestaurant: 12000,
    ingredients: [
      { name: { en: "Spaghetti", hy: "Սպագետտի", ru: "Спагетти" }, qty: "200g" },
      { name: { en: "Pancetta", hy: "Պանչետա", ru: "Панчетта" }, qty: "150g", cold: true, exotic: true },
      { name: { en: "Fresh eggs", hy: "Թարմ ձու", ru: "Свежие яйца" }, qty: "3 pcs", cold: true },
      { name: { en: "Pecorino Romano", hy: "Պեկորինո Ռոմանո", ru: "Пекорино Романо" }, qty: "80g", cold: true, exotic: true },
      { name: { en: "Black pepper (whole)", hy: "Սև պղպեղ", ru: "Чёрный перец" }, qty: "5g" },
      { name: { en: "Sea salt", hy: "Ծովային աղ", ru: "Морская соль" }, qty: "10g" },
      { name: { en: "Olive oil", hy: "Ձիթաձեթ", ru: "Оливковое масло" }, qty: "20ml", exotic: true },
    ],
    steps: [
      { en: "Boil salted water and cook spaghetti until al dente (8–9 min)", hy: "Եռացրեք աղած ջուր, խաշեք սպագետտին al dente (8–9 րոպե)", ru: "Вскипятите подсоленную воду, варите спагетти до al dente (8–9 мин)" },
      { en: "Fry pancetta in a dry pan until golden and crispy", hy: "Տապակեք պանչետան չոր տապակի մեջ մինչ ոսկեգույն", ru: "Обжарьте панчетту на сухой сковороде до золотистой хрустящей корочки" },
      { en: "Whisk eggs with grated Pecorino and cracked black pepper", hy: "Հարեք ձվերը քերած Պեկորինոյով և սև պղպեղով", ru: "Взбейте яйца с тёртым Пекорино и свежемолотым перцем" },
      { en: "Combine hot pasta with pancetta, remove from heat, add egg mixture", hy: "Խառնեք տաք մակարոնը պանչետայի հետ, հանեք կրակից, ավելացրեք ձվի խառնուրդ", ru: "Соедините горячую пасту с панчеттой, снимите с огня, добавьте яичную смесь" },
      { en: "Toss quickly, adding pasta water for silkiness. Serve immediately!", hy: "Արագ խառնեք, ավելացնելով մակարոնի ջուր։ Անմիջապես մատուցեք!", ru: "Быстро перемешайте, добавляя воду от пасты. Подавайте немедленно!" },
    ]
  },
  {
    id: "japanese",
    flag: "🇯🇵",
    cuisine: { en: "Japanese", hy: "Ճապոնական", ru: "Японская" },
    dish: { en: "Tonkotsu Ramen", hy: "Թոնկոցու Ռամեն", ru: "Тонкоцу Рамен" },
    tagline: { en: "Tokyo in a bowl", hy: "Տոկիոն մի գավաթում", ru: "Токио в миске" },
    description: {
      en: "Rich, cloudy pork bone broth with silky noodles, melt-in-your-mouth pork belly and a perfectly marinated soft egg. A bowl of pure comfort.",
      hy: "Հարուստ խոզի ոսկրային արգանակ մետաքսե մակարոններով, հալվող խոզի փորի կտորներով և կատարյալ ձվով:",
      ru: "Насыщенный мутный бульон из свиных костей с шелковистой лапшой, тающей во рту свиной грудинкой и идеально маринованным яйцом."
    },
    price: 8800,
    cookTime: "35 min",
    difficulty: "Medium",
    serves: 2,
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
    gradientFrom: "#3b82f6",
    gradientTo: "#7c3aed",
    accentColor: "#4f46e5",
    bgLight: "#eef2ff",
    textColor: "#3730a3",
    emoji: "🍜",
    bigEmoji: "🇯🇵",
    freshNote: {
      en: "Pork belly & soft eggs are ice-packed. Ramen noodles imported fresh",
      hy: "Խոզի փորը և ձվերը սառեցված են։ Ռամենի մակարոնը թարմ ներմուծված է",
      ru: "Свиная грудинка и яйца упакованы со льдом. Лапша рамен импортирована свежей"
    },
    vsRestaurant: 10000,
    ingredients: [
      { name: { en: "Ramen noodles", hy: "Ռամենի մակարոն", ru: "Лапша рамен" }, qty: "200g", exotic: true },
      { name: { en: "Pork belly slices", hy: "Խոզի փոր", ru: "Свиная грудинка" }, qty: "200g", cold: true },
      { name: { en: "Soft boiled eggs", hy: "Փափուկ ձու", ru: "Яйца всмятку" }, qty: "2 pcs", cold: true },
      { name: { en: "Miso paste", hy: "Միսո մածուկ", ru: "Мисо паста" }, qty: "40g", exotic: true },
      { name: { en: "Soy sauce", hy: "Սոյայի սոուս", ru: "Соевый соус" }, qty: "30ml", exotic: true },
      { name: { en: "Sesame oil", hy: "Քնջութի ձեթ", ru: "Кунжутное масло" }, qty: "15ml", exotic: true },
      { name: { en: "Nori sheets", hy: "Նորի", ru: "Листы нори" }, qty: "2 pcs", exotic: true },
      { name: { en: "Spring onion", hy: "Կանաչ սոխ", ru: "Зелёный лук" }, qty: "1 bunch" },
    ],
    steps: [
      { en: "Heat broth with miso paste and soy sauce in a pot (10 min)", hy: "Տաքացրեք արգանակը միսո մածուկով և սոյայի սոուսով (10 րոպե)", ru: "Нагрейте бульон с мисо пастой и соевым соусом в кастрюле (10 мин)" },
      { en: "Cook ramen noodles separately (3–4 min), drain", hy: "Առանձին խաշեք ռամենի մակարոնը (3–4 րոպե)", ru: "Отварите лапшу рамен отдельно (3–4 мин), слейте воду" },
      { en: "Warm pork belly slices in a pan with a drizzle of sesame oil", hy: "Տաքացրեք խոզի փորի կտորները ձիթով", ru: "Прогрейте кусочки свиной грудинки на сковороде с кунжутным маслом" },
      { en: "Assemble: noodles in bowl, pour hot broth, arrange toppings", hy: "Հավաքեք. գավաթում մակարոն, լցրեք արգանակ, դասավորեք topping-ները", ru: "Сборка: лапша в миске, налейте горячий бульон, разложите топпинги" },
      { en: "Top with nori, halved egg, spring onion and a sesame oil drizzle", hy: "Ավելացրեք նորի, կիսատ ձու, կանաչ սոխ և քնջութի ձեթ", ru: "Украсьте нори, половинкой яйца, зелёным луком и кунжутным маслом" },
    ]
  },
  {
    id: "mexican",
    flag: "🇲🇽",
    cuisine: { en: "Mexican", hy: "Մեքսիկական", ru: "Мексиканская" },
    dish: { en: "Tacos al Pastor", hy: "Թակոս ալ Պաստոր", ru: "Тако аль Пастор" },
    tagline: { en: "Street food fiesta", hy: "Փողոցային ֆիեստա", ru: "Уличная фиеста" },
    description: {
      en: "Mexico City's most beloved street taco — smoky chipotle-marinated pork with sweet grilled pineapple, fresh cilantro and a squeeze of lime. Fiesta on a tortilla.",
      hy: "Մեխիկո Սիտիի ամենասիրված փողոցային թակոն — ծխապատ chipotle-ում մարինացված խոզ թարմ կoriander-ով:",
      ru: "Самое любимое уличное тако Мехико — свинина в копчёном чипотле с жареным ананасом, кинзой и лаймом."
    },
    price: 7900,
    cookTime: "30 min",
    difficulty: "Easy",
    serves: 2,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    gradientFrom: "#facc15",
    gradientTo: "#ef4444",
    accentColor: "#f97316",
    bgLight: "#fff7ed",
    textColor: "#9a3412",
    emoji: "🌮",
    bigEmoji: "🇲🇽",
    freshNote: {
      en: "Pork shoulder is ice-packed and pre-marinated. Ready to cook on arrival",
      hy: "Խոզի ուսը սառեցված է և նախապես մարինացված։ Ժամանելուն պատրաստ է",
      ru: "Свиная лопатка упакована со льдом и предварительно замаринована. Готова к приготовлению"
    },
    vsRestaurant: 13000,
    ingredients: [
      { name: { en: "Corn tortillas", hy: "Եգիպտացորենի թորթիյա", ru: "Кукурузные тортильи" }, qty: "6 pcs", exotic: true },
      { name: { en: "Pork shoulder", hy: "Խոզի ուս", ru: "Свиная лопатка" }, qty: "250g", cold: true },
      { name: { en: "Chipotle paste", hy: "Chipotle մածուկ", ru: "Паста чипотле" }, qty: "30g", exotic: true },
      { name: { en: "Fresh pineapple", hy: "Թարմ արքայախնձոր", ru: "Свежий ананас" }, qty: "100g" },
      { name: { en: "White onion", hy: "Սպիտակ սոխ", ru: "Белый лук" }, qty: "1 small" },
      { name: { en: "Fresh cilantro", hy: "Կoriander", ru: "Свежая кинза" }, qty: "1 bunch" },
      { name: { en: "Limes", hy: "Կիտրոնախոտ", ru: "Лаймы" }, qty: "2 pcs" },
      { name: { en: "Achiote paste", hy: "Achiote մածուկ", ru: "Паста ачиоте" }, qty: "20g", exotic: true },
    ],
    steps: [
      { en: "Slice pork thin and coat generously with chipotle + achiote mix", hy: "Կտրատեք խոզը բարակ, պատեք chipotle + achiote խառնուրդով", ru: "Нарежьте свинину тонко и щедро покройте смесью чипотле + ачиоте" },
      { en: "Cook pork on high heat pan 3–4 min each side until charred edges", hy: "Տապակեք խոզը բարձր ջերմությամբ 3–4 րոпе, մինչ կողմերը ածխանան", ru: "Жарьте свинину на сильном огне по 3–4 мин с каждой стороны до подпалин" },
      { en: "Grill pineapple chunks in the same pan until caramelized", hy: "Նույն տապակի մեջ տապակեք արqayaxnjori կտորները մինչ կարամելացում", ru: "В той же сковороде обжарьте кусочки ананаса до карамелизации" },
      { en: "Warm tortillas directly over gas flame or dry pan (30 sec each)", hy: "Տաքացրեք թորThiyaerne անմիջապես գազի կրակի վրա (30 վայrkyan)", ru: "Прогрейте тортильи прямо над газовым огнём или на сухой сковороде" },
      { en: "Assemble: pork + pineapple + onion + cilantro. Squeeze lime generously!", hy: "Հավաqabeq: ХОЗ + արqayaxnjor + souX + koriander: Mek lemon lila!", ru: "Соберите: свинина + ананас + лук + кинза. Щедро выжмите лайм!" },
    ]
  },
  {
    id: "thai",
    flag: "🇹🇭",
    cuisine: { en: "Thai", hy: "Թայական", ru: "Тайская" },
    dish: { en: "Pad Thai", hy: "Փադ Թայ", ru: "Пад Тай" },
    tagline: { en: "Bangkok street magic", hy: "Բանգkoqi փողոցային կախardut", ru: "Уличная магия Бангкока" },
    description: {
      en: "Thailand's national noodle dish — stir-fried rice noodles with plump shrimp, tamarind tang, roasted peanuts and a charred wok flavour you'll crave forever.",
      hy: "Թայlandի ազгային мakaronata — brinjarot khachapuri meri shrimperi, tamarind-ov, karuchat enkuyznerov:",
      ru: "Национальное блюдо Таиланда — жареная рисовая лапша с сочными креветками, тамариндом, жареным арахисом и вкусом вока."
    },
    price: 7900,
    cookTime: "25 min",
    difficulty: "Easy",
    serves: 2,
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    gradientFrom: "#34d399",
    gradientTo: "#06b6d4",
    accentColor: "#0d9488",
    bgLight: "#f0fdf4",
    textColor: "#065f46",
    emoji: "🥘",
    bigEmoji: "🇹🇭",
    freshNote: {
      en: "Shrimp & eggs are ice-packed. Bean sprouts are fresh-picked same day",
      hy: "চingapevor yev dzuner sarecvac en: Lobyajurem nuynayes qaqvac en",
      ru: "Креветки и яйца упакованы со льдом. Ростки фасоли свежесрезаны в тот же день"
    },
    vsRestaurant: 13000,
    ingredients: [
      { name: { en: "Rice noodles", hy: "Բrinjari mekaron", ru: "Рисовая лапша" }, qty: "200g", exotic: true },
      { name: { en: "Shrimp", hy: "Chenkapvor", ru: "Креветки" }, qty: "200g", cold: true, exotic: true },
      { name: { en: "Eggs", hy: "Ձu", ru: "Яйца" }, qty: "2 pcs", cold: true },
      { name: { en: "Tamarind paste", hy: "Tamarind macuk", ru: "Паста тамаринд" }, qty: "30g", exotic: true },
      { name: { en: "Fish sauce", hy: "Jkani souс", ru: "Рыбный соус" }, qty: "20ml", exotic: true },
      { name: { en: "Palm sugar", hy: "Arjevi sax", ru: "Пальмовый сахар" }, qty: "20g", exotic: true },
      { name: { en: "Crushed peanuts", hy: "Karuchat ənkuyz", ru: "Дроблёный арахис" }, qty: "40g" },
      { name: { en: "Bean sprouts", hy: "Lobiajurem", ru: "Ростки фасоли" }, qty: "80g" },
      { name: { en: "Limes", hy: "CitronaXot", ru: "Лаймы" }, qty: "2 pcs" },
    ],
    steps: [
      { en: "Soak rice noodles in warm water 15 min until pliable but firm", hy: "Թrjacrek brinjari mekaron taq jrum 15 rope", ru: "Замочите рисовую лапшу в тёплой воде на 15 мин" },
      { en: "Mix tamarind paste, fish sauce, palm sugar — this is your sauce", hy: "Xarnek tamarind, jkani sous, arxevi sax — sa dzez sous e", ru: "Смешайте тамаринд, рыбный соус, пальмовый сахар — это ваш соус" },
      { en: "Stir-fry shrimp in hot wok/pan with oil until pink (2 min)", hy: "Tapakeq chemkapevor sxtor tapaki mej (2 rope)", ru: "Обжарьте креветки в раскалённом воке с маслом до розового цвета (2 мин)" },
      { en: "Push aside, scramble eggs in same pan, then mix everything together", hy: "Meq koxmov sharan dzverse nuynayes tapakum, apa xarnek ambogje", ru: "Отодвиньте, взбейте яйца в той же сковороде, затем всё перемешайте" },
      { en: "Add noodles and sauce, toss 2 min on high heat. Top with peanuts!", hy: "Avaelacreq mekaron yev sous, xarnek 2 rope: Avaelacreq ənkuyz!", ru: "Добавьте лапшу и соус, перемешивайте 2 мин на сильном огне. Посыпьте арахисом!" },
    ]
  }
];

export const PRICE = 2500;
export const OLD_PRICE = 8000;
export const DISCOUNT = Math.floor((1 - PRICE / OLD_PRICE) * 100);
export const CTA_TEXT = "Oui, je veux mes 20 menus de fÃªtes";
export const CHECKOUT_URL =
  "https://cuisine-de-chez-nous.mymaketou.shop/products/special-fetes-20-menus-noel-et-nouvel-an-qui-impressionnent/checkout";
export const COVER_IMG = "/img/cover-n2.webp";

export const fcfa = (n) =>
  `${n.toLocaleString("fr-FR").replace(/\\u202f/g, " ")} FCFA`;

export const HERO_FEATURES = [
  { icon: "ConciergeBell", title: "20 menus", text: "festifs et variÃ©s" },
  { icon: "Coins", title: "3 budgets", text: "15 000 / 25 000 / 50 000 FCFA" },
  { icon: "ClipboardCheck", title: "Checklist", text: "des courses" },
  { icon: "CalendarDays", title: "Planning", text: "Ã  partir de J-7" },
  { icon: "ChefHat", title: "Conseils", text: "dressage & prÃ©sentation" },
];

export const PAINS = [
  {
    icon: "Wallet",
    title: "Le budget qui explose",
    text: "Tu fais les courses au marchÃ©, et Ã  la caisse tu as dÃ©jÃ  dÃ©passÃ© ce que tu avais prÃ©vu.",
  },
  {
    icon: "Repeat",
    title: "Toujours les mÃªmes plats",
    text: "Tu connais 3 ou 4 plats. Chaque annÃ©e, tu tournes en rond pour le menu de NoÃ«l.",
  },
  {
    icon: "Users",
    title: "La belle-famille arrive",
    text: "Ils viennent manger chez toi. Tu veux qu'ils repartent impressionnÃ©s, pas dÃ©Ã§us.",
  },
  {
    icon: "Clock",
    title: "Tout se fait la veille",
    text: "Pas de planning. Tout se bouscule le 24 au soir, et tu passes la fÃªte en cuisine.",
  },
];

export const NOEL_MENUS = [
  "NdolÃ¨ royal",
  "Poulet DG festif",
  "Eru prestige",
  "Poulet braisÃ© + macÃ©doine",
  "Taro sauce jaune",
  "KondrÃ© bÅ“uf",
  "Achu sauce jaune",
  "Koki + poisson braisÃ©",
  "Fufu corn sauce tomate",
  "Riz gras de fÃªte",
];
export const NOUVEL_AN_MENUS = [
  "Porc sautÃ© + plantain",
  "Mbongo sauce noire",
  "Okok + miondo",
  "Sanga maÃ¯s + zom",
  "Riz sautÃ© crevettes",
  "Beignets + jus gingembre",
  "Tapioca coco mangue",
  "Cornchaff + poisson fumÃ©",
  "MacÃ©doine colorÃ©e",
  "BÃ»che locale ananas",
];

export const BENEFITS = [
  {
    icon: "Sparkles",
    from: "Du stress de la veille",
    to: "Ã  une fÃªte prÃ©parÃ©e dÃ¨s J-7",
    text: "Un planning jour par jour : J-7 le menu, J-5 les courses, J-3 la prÃ©paration, J-1 la table, J-0 tu profites.",
  },
  {
    icon: "Crown",
    from: "D'un riz-sauce banal",
    to: "Ã  un festin qui impressionne",
    text: "NdolÃ¨ royal, Poulet DG festif, Eru prestige, bÃ»che locale : 20 menus complets pour NoÃ«l et le Nouvel An.",
  },
  {
    icon: "PiggyBank",
    from: "Du budget qui dÃ©borde",
    to: "Ã  une fÃªte maÃ®trisÃ©e au franc prÃ¨s",
    text: "3 paliers pour une famille de 4 Ã  6 : 15 000, 25 000 ou 50 000 FCFA. Tu choisis, tu sais ce que tu dÃ©penses.",
  },
  {
    icon: "Wine",
    from: "D'une table ordinaire",
    to: "Ã  une table qui fait des photos",
    text: "Nappe, vaisselle, verres, fleurs, pagne discret, lumiÃ¨re. Plus les jus de fÃªte : bissap royal, ananas, gingembre.",
  },
];

export const TESTIMONIALS = [
  {
    name: "AÃ¯cha M.",
    city: "Douala",
    color: "bg-holly",
    result: "8 invitÃ©s servis pour 24 000 FCFA",
    text: "Ma belle-mÃ¨re a demandÃ© la recette du NdolÃ¨ royal. Le planning J-7 m'a sauvÃ©e, rien n'Ã©tait fait la veille.",
  },
  {
    name: "Brigitte N.",
    city: "YaoundÃ©",
    color: "bg-gold-dark",
    result: "3 nouveaux plats appris en 1 semaine",
    text: "Je faisais toujours poulet et riz. Cette annÃ©e j'ai fait Eru prestige et KondrÃ©. Tout le monde a redemandÃ©.",
  },
  {
    name: "Mariam K.",
    city: "Abidjan",
    color: "bg-forest-soft",
    result: "Budget 15 000 FCFA tenu",
    text: "La checklist courses, je l'ai prise au marchÃ© de Treichville. J'ai achetÃ© juste ce qu'il fallait.",
  },
  {
    name: "Ndeye F.",
    city: "Dakar",
    color: "bg-holly-dark",
    result: "Table prÃªte en 45 minutes",
    text: "Les conseils de dressage avec le pagne, c'est simple et c'est beau. Les photos ont fait le tour de la famille.",
  },
  {
    name: "Clarisse E.",
    city: "Douala",
    color: "bg-gold",
    result: "Nouvel An pour 12 personnes",
    text: "J'ai pris le palier 50 000 FCFA. BÃ»che locale Ã  l'ananas en dessert, mes cousines n'en revenaient pas.",
  },
];

export const STATS = [
  { value: "+2 400", label: "lectrices" },
  { value: "4,9/5", label: "note moyenne" },
  { value: "20", label: "menus prÃªts" },
  { value: "< 15 Mo", label: "lÃ©ger sur ton tÃ©lÃ©phone" },
];

export const VALUE_STACK = [
  {
    label:
      "20 menus de fÃªtes (10 NoÃ«l + 10 Nouvel An) avec ingrÃ©dients en FCFA",
    value: 4000,
  },
  { label: "Planning invitÃ©s J-7, Ã©tape par Ã©tape", value: 1500 },
  {
    label: "Budget fÃªte en 3 paliers : 15 000 / 25 000 / 50 000 FCFA",
    value: 1500,
  },
  {
    label: "Table dressage + jus de fÃªte (bissap royal, ananas, gingembre)",
    value: 1000,
  },
];

export const BONUSES = [
  { label: "Checklist courses imprimable A4", value: 1500 },
  { label: "Quiz Â« Quel menu pour ta famille ? Â»", value: 1000 },
  { label: "Canal WhatsApp : 1 menu de fÃªte par jour", value: 2000 },
];

export const CHECKOUT_BULLETS = [
  "20 menus complets NoÃ«l + Nouvel An",
  "IngrÃ©dients et prix marchÃ© en FCFA",
  "Planning invitÃ©s J-7 jour par jour",
  "Budget fÃªte 15 000 / 25 000 / 50 000 FCFA",
  "Table dressage + jus de fÃªte",
  "Bonus : checklist A4 + quiz + canal WhatsApp",
];

export const FAQ = [
  {
    q: "Sous quel format je reÃ§ois les menus ?",
    a: "Un guide numÃ©rique (PDF) lÃ©ger, moins de 15 Mo. Il s'ouvre facilement sur Tecno, Infinix ou tout autre tÃ©lÃ©phone.",
  },
  {
    q: "Quand est-ce que je reÃ§ois le guide ?",
    a: "Tout de suite aprÃ¨s ton paiement. Tu reÃ§ois ton lien de tÃ©lÃ©chargement directement.",
  },
  {
    q: "Comment je paie ?",
    a: "Par Mobile Money : Wave, Orange Money, MTN MoMo ou Moov. Pas besoin de carte bancaire.",
  },
  {
    q: "Je trouve les ingrÃ©dients oÃ¹ ?",
    a: "Au marchÃ©, comme d'habitude : Mokolo, Sandaga, Treichville... Chaque menu donne la liste et le prix en FCFA.",
  },
  {
    q: "Je ne suis pas trÃ¨s douÃ©e en cuisine. C'est pour moi ?",
    a: "Oui. Les Ã©tapes sont courtes et simples. Fatou et Ibrahim t'accompagnent du marchÃ© jusqu'Ã  la table.",
  },
  {
    q: "Pour combien de personnes sont les menus ?",
    a: "Les budgets sont prÃ©vus pour une famille de 4 Ã  6 personnes. Tu peux doubler facilement pour plus d'invitÃ©s.",
  },
  {
    q: "Et si Ã§a ne fonctionne pas ?",
    a: "Si le guide ne t'aide pas Ã  prÃ©parer tes fÃªtes, Ã©cris-nous par email et on trouve une solution ensemble.",
  },
];

export const FOMO_PEOPLE = [
  ["AÃ¯cha", "Douala"],
  ["Brigitte", "YaoundÃ©"],
  ["Mariam", "Abidjan"],
  ["Ndeye", "Dakar"],
  ["Clarisse", "Douala"],
  ["Fatoumata", "Bamako"],
  ["Awa", "ThiÃ¨s"],
  ["Christelle", "Bafoussam"],
  ["Adjoua", "BouakÃ©"],
  ["Sandrine", "Libreville"],
  ["Rokia", "Ouagadougou"],
  ["Estelle", "Garoua"],
  ["Kadiatou", "Conakry"],
  ["Josiane", "LomÃ©"],
  ["Blandine", "Cotonou"],
];

export const FOMO_ACTIONS = [
  "vient d'acheter les 20 menus de fÃªtes",
  "lit le menu NoÃ«l 2 : Poulet DG festif",
  "a bouclÃ© son budget fÃªte Ã  25 000 FCFA",
  "prÃ©pare son 1er NdolÃ¨ royal",
  "vient de tÃ©lÃ©charger ses bonus",
];
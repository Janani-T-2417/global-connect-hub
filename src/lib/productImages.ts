// Deterministic royalty-free image URLs per product via LoremFlickr (CC-licensed Flickr photos).
// No AI credits used. Each product gets a stable image (seeded by slug hash) that matches
// keywords derived from the product name.

const BASE = "https://loremflickr.com";

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % 999983;
}

/** Per-product keyword overrides — matched against the product slug.
 *  Keys are exact product slugs; values are comma-separated Flickr search tags. */
const PRODUCT_KEYWORDS: Record<string, string> = {
  // Eco-friendly tableware
  "bagasse-plates-bowls-clamshell-boxes": "bagasse,plate,eco,tableware",
  "bagasse-cutlery-spoons-forks-knives": "bagasse,cutlery,spoon,eco",
  "ragi-bran-plates-platters-and-bowls": "millet,bowl,eco,tableware",
  "wheat-bran-plates-platters-and-bowls": "wheat,bran,plate,eco",
  "edible-spoons-forks-and-straws": "edible,spoon,biodegradable",
  "sal-leaf-bamboo-leaf-plates": "leaf,plate,traditional,indian",
  "biodegradable-paper-plates-and-cups": "paper,plate,cup,eco",
  "sugarcane-bagasse-hot-cup-lids": "cup,lid,paper,coffee",
  "paper-straws": "paper,straw",
  "birchwood-bamboo-cutlery": "bamboo,cutlery,wooden,spoon",
  "bamboo-veneer-plates-tasting-cones": "bamboo,plate,cone,tasting",
  "kraft-paper-salad-bowls-takeaway-boxes": "kraft,paper,box,takeaway",
  "cpla-cutlery-and-translucent-pla-drink-cups": "compostable,cup,cutlery",

  // Dehydrated powders
  "moringa-leaf-powder": "moringa,powder,green",
  "tomato-powder": "tomato,powder,red",
  "beetroot-powder": "beetroot,powder,purple",
  "carrot-powder": "carrot,powder,orange",
  "freeze-dried-spinach-kale-powder": "spinach,kale,powder,green",
  "banana-powder": "banana,powder",
  "ginger-powder": "ginger,powder,root",
  "dehydrated-garlic-flakes": "garlic,flakes",
  "dehydrated-garlic-powder": "garlic,powder",
  "dehydrated-mushroom-powder-shiitake-mane": "mushroom,shiitake,powder",
  "dehydrated-garlic-powder-alternative-coding": "garlic,powder,bowl",
  "dehydrated-avocado-powder": "avocado,powder,green",
  "freeze-dried-wheatgrass-powder": "wheatgrass,powder,green",
  "dehydrated-onion-powder": "onion,powder",
  "lemon-lime-powder": "lemon,lime,powder,citrus",

  // Jewellery
  "combs-hair-slides-and-hairpins": "comb,hairpin,accessory",
  "rakhi-threads-traditional-decorative-bands": "rakhi,thread,indian,festival",
  "other-artificial-jewellery-plastic-acrylic-wood-leather": "jewellery,fashion,accessory",
  "jewellery-studded-with-imitation-pearls-synthetic-stones": "pearl,jewellery,necklace",
  "titanium-stainless-steel-piercing-jewelry": "piercing,jewelry,steel",
  "plain-base-metal-pieces-necklaces-rings-earrings": "necklace,ring,earring,metal",
  "german-silver-jewellery": "silver,jewellery,indian",
  "imitation-bangles": "bangle,indian,jewellery,gold",
  "cufflinks-and-studs": "cufflink,formal,accessory",
  "decorative-elastic-hair-bands-scrunchies": "scrunchie,hairband,accessory",
  "clay-polymer-clay-statement-earrings": "clay,earring,handmade",
  "enamel-lapel-pins-brooches": "brooch,pin,enamel",

  // Oils
  "wooden-pressed-neem-oil": "neem,oil,bottle,herbal",
  "wooden-pressed-sesame-oil": "sesame,oil,bottle",
  "wooden-pressed-castor-oil": "castor,oil,bottle",
  "wooden-pressed-mustard-oil": "mustard,oil,bottle,yellow",
  "virgin-coconut-oil-vco": "coconut,oil,bottle",
  "wooden-pressed-sunflower-oil": "sunflower,oil,bottle",
  "wooden-pressed-groundnut-oil": "peanut,groundnut,oil,bottle",
  "wooden-pressed-black-seed-oil-kalonji": "kalonji,black,seed,oil",
  "wooden-pressed-flaxseed-oil-linseed": "flaxseed,linseed,oil,bottle",
  "wooden-pressed-pumpkin-seed-oil": "pumpkin,seed,oil,bottle",

  // Millets
  "finger-millet-ragi-flour-powder": "ragi,millet,flour",
  "finger-millet-ragi-germ-flaked-flour": "ragi,millet,flakes",
  "pearl-millet-bajra-powder-flour": "bajra,pearl,millet,flour",
  "sorghum-jowar-flour-powder": "sorghum,jowar,flour",
  "foxtail-little-barnyard-millet-flour": "foxtail,millet,grain",
  "sprouted-malted-millet-powders": "millet,sprouted,malted,powder",
  "dehydrated-milk-protein-concentrate-mpc": "milk,protein,powder",

  // Food industrial powders
  "coconut-shell-powder": "coconut,shell,brown,powder",
  "tamarind-kernel-powder-tkp": "tamarind,powder,brown",
  "turmeric-powder": "turmeric,powder,yellow,spice",
  "chilli-powder": "chilli,red,powder,spice",
  "paprika-oleoresin-natural-colorant": "paprika,red,spice",
  "capsicum-oleoresin-standardized-heat": "capsicum,pepper,red",
  "dried-garlic": "garlic,dried",
  "activated-coconut-shell-charcoal-powder": "charcoal,activated,black,powder",
  "carboxymethyl-cellulose-cmc-treated-tkp": "powder,industrial,tamarind",

  // Agro commodities
  "mixtures-of-dried-fruit": "dried,fruit,mix",
  "tamarind-dried": "tamarind,dried,pod",
  "lemons-limes-fresh-or-dried": "lemon,lime,citrus,fresh",
  "coconut-dried-excl-desiccated-endocarp": "coconut,dried",
  "coconut-fresh-excl-desiccated-endocarp": "coconut,fresh,tropical",
  "coconut-desiccated": "coconut,desiccated,shredded",
  "freeze-dried-whole-berries-strawberry-blueberry": "strawberry,blueberry,berry",
  "dried-jackfruit-strips-vegan-meat-alternative": "jackfruit,dried,vegan",

  // Starches, flours, milling
  "starch-of-potato": "potato,starch,white",
  "starch-of-maize-corn": "corn,maize,starch",
  "starch-of-wheat": "wheat,starch,flour",
  "flakes-of-potatoes": "potato,flakes",
  "flour-and-meal-of-potatoes": "potato,flour",
  "cereal-germ-whole-rolled-flaked-or-ground": "cereal,germ,grain,flakes",
  "other-cereal-flours-gluten-free-specialties": "flour,gluten,free,cereal",
  "maize-corn-flour": "corn,maize,flour,yellow",
  "modified-starches-esterified-etherified": "starch,white,industrial",
  "tapioca-starch-cassava-flour": "tapioca,cassava,starch",
  "vital-wheat-gluten": "wheat,gluten,flour",

  // Animal feed / oil cakes
  "groundnut-peanut-oil-cake": "peanut,oil,cake,feed",
  "rapeseed-mustard-oil-cake": "rapeseed,mustard,cake,feed",
  "cottonseed-oil-cake-meal": "cottonseed,cake,feed",
  "coconut-copra-oil-cake": "copra,coconut,cake",
  "soybean-de-oiled-cake-doc-meal": "soybean,meal,feed",
  "neem-de-oiled-cake-organic-fertilizer": "neem,fertilizer,organic",
  "castor-de-oiled-cake-meal": "castor,cake,feed",

  // Superfoods
  "spirulina-powder": "spirulina,green,powder",
  "wheatgrass-powder": "wheatgrass,green,powder",
  "rose-petal-powder": "rose,petal,pink,powder",
  "hibiscus-powder": "hibiscus,red,flower,powder",
  "egg-powder-whole-yolk-or-white": "egg,powder,yolk",
  "ashwagandha-root-powder": "ashwagandha,root,herb,powder",
  "amla-indian-gooseberry-powder": "amla,gooseberry,powder",
  "matcha-green-tea-powder": "matcha,green,tea,powder",

  // Honey
  "natural-honey": "honey,jar,gold,bee",
  "natural-bee-pollen": "bee,pollen,yellow,granule",
  "pure-royal-jelly-fresh-lyophilized": "royal,jelly,bee,cream",
};

const CATEGORY_KEYWORDS: Record<string, string> = {
  "biodegradable-and-eco-friendly-products-sustainable-tableware-eco-packaging":
    "eco,bagasse,plate,bamboo,sustainable",
  "agricultural-dehydrated-powders": "spice,powder,bowl,colorful",
  "fashion-accessories-imitation-jewellery": "jewellery,indian,fashion,bangles",
  "wooden-pressed-virgin-oils": "oil,bottle,coconut,sesame,cold-pressed",
  "millets-powders": "millet,grain,ragi,sack",
  "food-industrial-powders": "turmeric,spice,powder,indian",
  "agro-commodities-fresh-dried": "agriculture,harvest,farm,indian",
  "agricultural-starches-flours-milling-products": "flour,mill,wheat,sack",
  "animal-feed-oil-cakes": "feed,cattle,farm,pellet",
  "premium-superfood-botanical-powders": "matcha,moringa,superfood,green,powder",
  "natural-honey": "honey,jar,honeycomb,gold,bee",
};

const HERO_SLIDES: { key: string; keywords: string; alt: string }[] = [
  { key: "cargo-ship", keywords: "cargo,ship,ocean,container", alt: "International cargo ship at sea" },
  { key: "container-port", keywords: "port,containers,shipping,crane", alt: "Global shipping port" },
  { key: "warehouse", keywords: "warehouse,logistics,pallet,industrial", alt: "Modern export warehouse" },
  { key: "agriculture", keywords: "agriculture,farm,india,field,harvest", alt: "Indian farmland at sunrise" },
  { key: "eco-products", keywords: "eco,bamboo,tableware,sustainable,leaf", alt: "Eco-friendly products" },
  { key: "spices", keywords: "spices,turmeric,indian,market,color", alt: "Indian export spices" },
  { key: "logistics", keywords: "truck,logistics,highway,delivery", alt: "Global logistics" },
];

export function productImage(slug: string, w = 800, h = 800): string {
  const kw = PRODUCT_KEYWORDS[slug] ?? slug.replace(/-/g, ",");
  const lock = hashSeed(slug);
  return `${BASE}/${w}/${h}/${encodeURIComponent(kw)}?lock=${lock}`;
}

export function categoryImageUrl(slug: string, w = 1600, h = 900): string {
  const kw = CATEGORY_KEYWORDS[slug] ?? slug.replace(/-/g, ",");
  const lock = hashSeed("cat-" + slug);
  return `${BASE}/${w}/${h}/${encodeURIComponent(kw)}?lock=${lock}`;
}

export function heroSlides(w = 1920, h = 1080) {
  return HERO_SLIDES.map((s) => ({
    key: s.key,
    alt: s.alt,
    url: `${BASE}/${w}/${h}/${encodeURIComponent(s.keywords)}?lock=${hashSeed("hero-" + s.key)}`,
  }));
}

export function marqueeImages(theme: string, count = 8, w = 600, h = 400): string[] {
  const tokens = theme.split(",");
  return Array.from({ length: count }, (_, i) => {
    const kw = tokens.concat(String(i)).join(",");
    return `${BASE}/${w}/${h}/${encodeURIComponent(kw)}?lock=${hashSeed(theme + i)}`;
  });
}

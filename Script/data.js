/**
 * MONNALISA — WOMEN'S FASHION (ROMA, ITALIA)
 * Data Architecture: Products, Translations, Currencies & Testimonials
 */

// Multi-Currency Converter (Base: EUR)
const MONNALISA_CURRENCIES = {
  EUR: { rate: 1.0, symbol: "€", label: "EUR (€)" },
  USD: { rate: 1.08, symbol: "$", label: "USD ($)" },
  GBP: { rate: 0.86, symbol: "£", label: "GBP (£)" },
  JPY: { rate: 164.0, symbol: "¥", label: "JPY (¥)" }
};

// Monnalisa Boutique Rome Contact & Information
const MONNALISA_INFO = {
  name: "MONNALISA",
  legalName: "Monnalisa Shop",
  tagline_it: "Alta Moda Femminile a Roma",
  tagline_en: "Premium Women's Fashion in Rome",
  address: "VFX9+Q2 Roma, Città Metropolitana di Roma Capitale, Italia",
  phone: "+393404825926",
  phoneDisplay: "+39 340 482 5926",
  whatsappUrl: "https://wa.me/393404825926",
  googleMapsUrl: "https://maps.app.goo.gl/5teJvapkdo6K3t237",
  email: "boutique@monnalisaroma.it",
  hours_it: "Lun - Sab: 10:00 - 19:30 | Dom: Su appuntamento",
  hours_en: "Mon - Sat: 10:00 AM - 7:30 PM | Sun: By appointment",
  instagramPlaceholder: "#monnalisa_roma"
};

// Curated Women's Fashion Products (Featuring Real Rome Boutique Assets)
const MONNALISA_PRODUCTS = [
  {
    id: "MONNA-001",
    title_it: "Abito Lungo Ricamato Peonia",
    title_en: "Peony Embroidered Maxi Dress",
    category: "dresses",
    category_it: "Abiti",
    category_en: "Dresses",
    priceEUR: 340,
    salePriceEUR: 280,
    onSale: true,
    isNew: true,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 16,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name_it: "Sabbia & Fiori", name_en: "Sand & Floral", hex: "#d8c4b2" },
      { name_it: "Cipria Pastello", name_en: "Powder Pink", hex: "#f1d4d4" }
    ],
    img: "images/couture-embroidered-peony.jpg",
    gallery: [
      "images/couture-embroidered-peony.jpg",
      "images/boutique-entrance-mannequin.jpg",
      "images/boutique-facade-rome.jpg"
    ],
    desc_it: "Abito d'alta sartoria in garza di seta e cotone con pregiati ricami botanici policromi floreali. Dotato di elegante fusciacca in raso rosso vivo e scollo a V delicato, ideale per eventi esclusivi e serate romane.",
    desc_en: "Haute couture gown in silk-cotton gauze featuring exquisite polychrome botanical floral embroideries. Finished with an elegant ruby satin sash and delicate V-neckline, designed for exclusive events and Roman evenings.",
    details_it: [
      "Tessuto: 65% Seta naturale, 35% Cotone leggero",
      "Ricamo eseguito artigianalmente a mano",
      "Cintura rimovibile in nastro satin rubino",
      "Cura: Lavaggio a secco specialistico",
      "Disponibilità: Pronto atelier a Roma"
    ],
    details_en: [
      "Fabric: 65% Natural silk, 35% Featherweight cotton",
      "Handcrafted artisanal embroidery",
      "Detachable ruby satin ribbon sash",
      "Care: Specialist dry clean only",
      "Availability: Ready at Rome atelier"
    ]
  },
  {
    id: "MONNA-002",
    title_it: "Gonna in Tulle con Petali 3D",
    title_en: "3D Floral Appliqué Tulle Skirt",
    category: "skirts",
    category_it: "Gonne",
    category_en: "Skirts",
    priceEUR: 210,
    salePriceEUR: null,
    onSale: false,
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 22,
    sizes: ["S", "M", "L"],
    colors: [
      { name_it: "Avorio Perlato", name_en: "Pearl Ivory", hex: "#f9f8f2" },
      { name_it: "Rosa Petalo", name_en: "Petal Pink", hex: "#fad2e1" }
    ],
    img: "images/tulle-floral-skirts-rack.jpg",
    gallery: [
      "images/tulle-floral-skirts-rack.jpg",
      "images/boutique-entrance-mannequin.jpg",
      "images/curator-styling-boutique.jpg"
    ],
    desc_it: "Eterea gonna a ruota confezionata in doppio strato di tulle mano seta, impreziosita da petali floreali tridimensionali applicati manualmente. Elastico in vita tono su tono per una vestibilità confortevole ed elegante.",
    desc_en: "Ethereal circle skirt crafted in double-layered silk-touch tulle, enriched with three-dimensional floral petals hand-applied throughout. Tone-on-tone elasticated waistband for comfortable yet statuesque elegance.",
    details_it: [
      "Strati multipli di tulle morbido anti-pizzico",
      "Applicazioni floreali 3D in organza",
      "Fodera interna opaca in pura viscosa",
      "Lunghezza midi al polpaccio",
      "Prodotto artigianale Monnalisa Roma"
    ],
    details_en: [
      "Multiple soft non-scratch tulle tiers",
      "3D organza floral petal appliqués",
      "Opaque internal pure viscose lining",
      "Midi calf length silhouette",
      "Monnalisa Rome artisanal creation"
    ]
  },
  {
    id: "MONNA-003",
    title_it: "Gonna Plissé Dorata & Top Nocciola",
    title_en: "Champagne Pleated Skirt & Knit Set",
    category: "skirts",
    category_it: "Gonne & Completi",
    category_en: "Skirts & Sets",
    priceEUR: 235,
    salePriceEUR: 195,
    onSale: true,
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 14,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name_it: "Champagne Dorato", name_en: "Golden Champagne", hex: "#e4cc9f" },
      { name_it: "Bronzo & Cioccolato", name_en: "Bronze & Chocolate", hex: "#8c6b4e" }
    ],
    img: "images/boutique-entrance-mannequin.jpg",
    gallery: [
      "images/boutique-entrance-mannequin.jpg",
      "images/boutique-facade-rome.jpg",
      "images/tulle-floral-skirts-rack.jpg"
    ],
    desc_it: "Abbinamento iconico della vetrina Monnalisa: gonna plissettata con riflessi metallici dorati e top a costine senza maniche con collo alto in filato stretch confortevole e raffinato.",
    desc_en: "Iconic Monnalisa Rome storefront ensemble: sunray pleated skirt with shimmering golden reflections paired with a sleeveless ribbed high-neck top in refined stretch yarn.",
    details_it: [
      "Gonna plissé sole con finitura metallizzata leggera",
      "Top a collo alto in maglia fine a costine",
      "Versatile sia insieme che spezzato",
      "Disegnato per la stagione romana"
    ],
    details_en: [
      "Sunray pleated skirt with subtle metallic sheen",
      "High-neck sleeveless top in fine ribbed knit",
      "Versatile together or as separate staples",
      "Designed for the Roman fashion lifestyle"
    ]
  },
  {
    id: "MONNA-004",
    title_it: "Completo Sartoriale Seta con Corsetto",
    title_en: "White Silk Tailored Suit & Corset",
    category: "jackets",
    category_it: "Giacche & Completi",
    category_en: "Jackets & Suits",
    priceEUR: 490,
    salePriceEUR: 395,
    onSale: true,
    isNew: true,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 28,
    sizes: ["S", "M", "L"],
    colors: [
      { name_it: "Bianco Seta & Nero", name_en: "Silk White & Black", hex: "#fbfbf8" },
      { name_it: "Avorio Puro", name_en: "Pure Ivory", hex: "#fffef0" }
    ],
    img: "images/curator-styling-boutique.jpg",
    gallery: [
      "images/curator-styling-boutique.jpg",
      "images/couture-embroidered-peony.jpg",
      "images/boutique-facade-rome.jpg"
    ],
    desc_it: "Completo di eccezionale caratura sartoriale: blazer monopetto a revers a lancia in raso lucido bianco latte, abbinato a corsetto stringato modellante e collana statement con perle maxi.",
    desc_en: "Masterpiece of Italian tailoring: single-breasted blazer with peaked satin lapels in milk white, accompanied by a structured lace-up corset belt and statement pearl collar.",
    details_it: [
      "Tessuto: Raso di seta pesante e lana vergine",
      "Corsetto modellante rimovibile con stecche flessibili",
      "Spalline strutturate d'ispirazione haute couture",
      "Rifiniture eseguite a mano nell'atelier di Roma"
    ],
    details_en: [
      "Fabric: Heavy silk satin and virgin wool blend",
      "Detachable sculpting corset with flexible boning",
      "Structured haute couture shoulder silhouette",
      "Hand-finished in our Rome atelier"
    ]
  },
  {
    id: "MONNA-005",
    title_it: "Cappotto Bouclé Drapé con Collo Velluto",
    title_en: "Bouclé Draped Coat with Velvet Collar",
    category: "outerwear",
    category_it: "Cappotti & Capispalla",
    category_en: "Coats & Outerwear",
    priceEUR: 580,
    salePriceEUR: null,
    onSale: false,
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 19,
    sizes: ["Unica / One Size", "M", "L"],
    colors: [
      { name_it: "Panna & Ottanio", name_en: "Cream & Teal Velvet", hex: "#f7f4ee" },
      { name_it: "Cammello Caldo", name_en: "Warm Camel", hex: "#c49a6c" }
    ],
    img: "images/atelier-textured-coat-mannequin.jpg",
    gallery: [
      "images/atelier-textured-coat-mannequin.jpg",
      "images/boutique-bicycle-interior.jpg",
      "images/boutique-entrance-mannequin.jpg"
    ],
    desc_it: "Cappotto scultura in pura lana vergine bouclé color panna. Il maxi colletto a cascata foderato in morbido velluto color petrolio crea un contrasto cromatico e materico di altissimo livello estetico.",
    desc_en: "Sculptural coat in pure virgin bouclé wool in off-white cream. The cascading shawl collar lined in deep teal velvet creates an exquisite contrast of textures and tones.",
    details_it: [
      "Composizione: 85% Lana bouclé italiana, 15% Cashmere",
      "Fodera colletto in velluto di seta cangiante",
      "Vestibilità rilassata ed elegante a portafoglio",
      "Spilla floreale artigianale inclusa"
    ],
    details_en: [
      "Composition: 85% Italian bouclé wool, 15% Cashmere",
      "Collar lining in iridescent silk velvet",
      "Effortless relaxed wrap silhouette",
      "Artisanal floral brooch pin included"
    ]
  },
  {
    id: "MONNA-006",
    title_it: "Abito Kimono in Seta Botanica",
    title_en: "Botanical Silk Kimono Dress",
    category: "dresses",
    category_it: "Abiti",
    category_en: "Dresses",
    priceEUR: 295,
    salePriceEUR: 245,
    onSale: true,
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 11,
    sizes: ["S", "M", "L"],
    colors: [
      { name_it: "Stampa Botanica Roma", name_en: "Rome Botanical Print", hex: "#d5c39f" },
      { name_it: "Seta Notte", name_en: "Midnight Silk", hex: "#1c2430" }
    ],
    img: "images/boutique-bicycle-interior.jpg",
    gallery: [
      "images/boutique-bicycle-interior.jpg",
      "images/couture-embroidered-peony.jpg",
      "images/tulle-floral-skirts-rack.jpg"
    ],
    desc_it: "Abito stile kimono in pregiato crepe di seta con stampa floreale d'archivio. Maniche a campana, allacciatura laterale e taglio fluido che valorizza ogni silhouette con grazia naturale.",
    desc_en: "Kimono style dress in premium silk crepe featuring an archival botanical print. Flared sleeves, wrap closure, and a fluid silhouette celebrating natural graceful movement.",
    details_it: [
      "100% Seta crepe fluida e traspirante",
      "Stampa digitale ad alta definizione",
      "Chiusura a vestaglia con cintura abbinata",
      "Pezzo a tiratura limitata"
    ],
    details_en: [
      "100% Breathable fluid silk crepe",
      "High-definition artisanal floral print",
      "Wrap-around tie waist design",
      "Limited edition Roman capsule piece"
    ]
  },
  {
    id: "MONNA-007",
    title_it: "Abito Cocktail Rosa Petalo Monnalisa",
    title_en: "Monnalisa Petal Pink Cocktail Dress",
    category: "dresses",
    category_it: "Abiti",
    category_en: "Dresses",
    priceEUR: 320,
    salePriceEUR: null,
    onSale: false,
    isNew: true,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 31,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name_it: "Rosa Monnalisa", name_en: "Monnalisa Pink", hex: "#f4a6b8" },
      { name_it: "Rosso Rubino", name_en: "Ruby Red", hex: "#9b111e" }
    ],
    img: "images/boutique-facade-rome.jpg",
    gallery: [
      "images/boutique-facade-rome.jpg",
      "images/couture-embroidered-peony.jpg",
      "images/curator-styling-boutique.jpg"
    ],
    desc_it: "L'abito firma che accoglie le clienti nella nostra storica boutique nel cuore di Roma. Realizzato in duchesse di seta con corpino sagomato e gonna a campana, completato da spilla scultura a peonia.",
    desc_en: "The signature statement dress welcoming visitors to our Rome boutique. Crafted in silk duchesse with a tailored bodice and flared skirt, complemented by an artisanal peony sculpture pin.",
    details_it: [
      "Duchesse di seta italiana a tenuta strutturale",
      "Corpino con stecche invisibili e zip posteriore",
      "Tasche a scomparsa nelle cuciture laterali",
      "Capolavoro dell'artigianato romano"
    ],
    details_en: [
      "Structural Italian silk duchesse",
      "Hidden boned bodice with invisible back zip",
      "Concealed side-seam pockets",
      "A true Roman boutique masterpiece"
    ]
  },
  {
    id: "MONNA-008",
    title_it: "Blusa Romantica in Chiffon con Rouches",
    title_en: "Romantic Chiffon Blouse with Ruffles",
    category: "tops",
    category_it: "Top & Camicie",
    category_en: "Tops & Blouses",
    priceEUR: 165,
    salePriceEUR: 135,
    onSale: true,
    isNew: false,
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 9,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name_it: "Bianco Latte", name_en: "Milk White", hex: "#fcfbf7" },
      { name_it: "Nero Notte", name_en: "Night Black", hex: "#111113" }
    ],
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
      "images/curator-styling-boutique.jpg"
    ],
    desc_it: "Blusa femminile in morbido chiffon trasparente con collo a fiocco lavallière e polsini arricciati con bottoni in madreperla naturale. Da indossare con canotta sottile tono su tono inclusa.",
    desc_en: "Feminine blouse in soft translucent chiffon featuring a lavallière pussy-bow necktie and ruffled cuffs with natural mother-of-pearl buttons. Includes a matching tone-on-tone camisole.",
    details_it: [
      "Tessuto: Chiffon di viscosa e seta fluida",
      "Collo a fiocco regolabile",
      "Polsini elasticizzati con rouches delicate",
      "Lavabile a mano a freddo"
    ],
    details_en: [
      "Fabric: Silk and viscose fluid chiffon",
      "Adjustable bow necktie",
      "Elasticated cuffs with delicate ruffles",
      "Hand washable in cold water"
    ]
  },
  {
    id: "MONNA-009",
    title_it: "Pantaloni a Palazzo a Vita Alta",
    title_en: "High-Waist Wide-Leg Palazzo Trousers",
    category: "trousers",
    category_it: "Pantaloni",
    category_en: "Trousers",
    priceEUR: 210,
    salePriceEUR: null,
    onSale: false,
    isNew: true,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 18,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name_it: "Nero Sartoriale", name_en: "Tailored Black", hex: "#0c0d0e" },
      { name_it: "Crema Chiaro", name_en: "Light Cream", hex: "#f4f1ea" }
    ],
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
      "images/curator-styling-boutique.jpg"
    ],
    desc_it: "Pantaloni sartoriali a gamba ampia con doppie pince profonde sul davanti. Taglio fluido che allunga la silhouette, perfetti sia con décolleté che con sandali da giorno.",
    desc_en: "Tailored wide-leg trousers featuring double front deep pleats. Fluid architectural drape lengthening the figure, seamlessly styled with heels or flat boutique sandals.",
    details_it: [
      "Lana fredda vergine e gabardina stretch",
      "Cinturino alto con passanti e chiusura a scomparsa",
      "Tasche a filo laterali e posteriori",
      "Taglio e cucito sartoriale italiano"
    ],
    details_en: [
      "Cool virgin wool and stretch gabardine",
      "High waistband with concealed Italian hook fastening",
      "Side slash and rear welt pockets",
      "Authentic Italian artisan tailoring"
    ]
  },
  {
    id: "MONNA-010",
    title_it: "Giacca Tweed Bouclé con Bottoni Vintage",
    title_en: "Bouclé Tweed Jacket with Vintage Buttons",
    category: "jackets",
    category_it: "Giacche",
    category_en: "Jackets",
    priceEUR: 360,
    salePriceEUR: 295,
    onSale: true,
    isNew: false,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 24,
    sizes: ["S", "M", "L"],
    colors: [
      { name_it: "Tweed Bianco & Oro", name_en: "White & Gold Tweed", hex: "#f7f5ee" },
      { name_it: "Nero Mélange", name_en: "Black Mélange", hex: "#222326" }
    ],
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
      "images/tulle-floral-skirts-rack.jpg"
    ],
    desc_it: "Giacca corta ispirata all'alta moda classica rivisitata in chiave contemporanea. Rifinita con bordi sfilacciati a mano e bottoni in metallo dorato con incisioni barocche.",
    desc_en: "Cropped jacket honoring classic haute couture heritage with a contemporary modern edge. Finished with hand-frayed trim borders and ornate baroque gold metal buttons.",
    details_it: [
      "Tweed bouclé con fili metallizzati oro integrati",
      "Fodera in puro raso jacquard monogram",
      "Quattro taschini frontali applicati",
      "Vestibilità strutturata chic"
    ],
    details_en: [
      "Bouclé tweed with subtle golden woven threads",
      "Monogram jacquard silk satin lining",
      "Four frontal tailored patch pockets",
      "Chic structural silhouette"
    ]
  },
  {
    id: "MONNA-011",
    title_it: "Cardigan Soffice in Kid-Mohair & Seta",
    title_en: "Fluffy Kid-Mohair & Silk Cardigan",
    category: "tops",
    category_it: "Top & Maglieria",
    category_en: "Tops & Knitwear",
    priceEUR: 185,
    salePriceEUR: null,
    onSale: false,
    isNew: true,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 13,
    sizes: ["S", "M", "L"],
    colors: [
      { name_it: "Burro Caldo", name_en: "Warm Butter", hex: "#f3ebda" },
      { name_it: "Grigio Perla", name_en: "Pearl Grey", hex: "#d8d8d8" }
    ],
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
      "images/boutique-entrance-mannequin.jpg"
    ],
    desc_it: "Maglia a cardigan lavorata a maglia soffice e vaporosa. Caldissima e leggera come una piuma, da indossare a fior di pelle o sopra abiti da sera per le serate fresche.",
    desc_en: "Featherlight cloudy knit cardigan spun from soft kid-mohair and mulberry silk. Incredibly warm yet weightless, effortlessly draped over bare shoulders or evening slips.",
    details_it: [
      "70% Super Kid-Mohair, 30% Seta Mulberry",
      "Lavorazione artigianale a nido d'ape morbido",
      "Bottoni in corno e madreperla",
      "Prodotto nelle colline italiane"
    ],
    details_en: [
      "70% Super Kid-Mohair, 30% Mulberry Silk",
      "Artisanal airy honeycomb openwork",
      "Natural horn and mother-of-pearl buttons",
      "Spun in traditional Italian mills"
    ]
  },
  {
    id: "MONNA-012",
    title_it: "Abito da Sera a Sirena in Velluto Notte",
    title_en: "Midnight Velvet Mermaid Evening Gown",
    category: "dresses",
    category_it: "Abiti",
    category_en: "Dresses",
    priceEUR: 450,
    salePriceEUR: 360,
    onSale: true,
    isNew: false,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 27,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name_it: "Nero Velluto Intenso", name_en: "Deep Velvet Black", hex: "#0b0b0c" },
      { name_it: "Smeraldo Notturno", name_en: "Night Emerald", hex: "#0d2b1d" }
    ],
    img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
      "images/atelier-textured-coat-mannequin.jpg"
    ],
    desc_it: "Lussuoso abito da cerimonia in velluto di seta elasticizzato. Scollo omerale che mette in risalto le spalle, spacco laterale discreto e strascico accennato sul retro.",
    desc_en: "Sumptuous black-tie gown in stretch silk velvet. Off-the-shoulder boat neckline framing the collarbones, subtle side slit, and graceful mermaid trailing hem.",
    details_it: [
      "Velluto di seta con elastan per comfort impeccabile",
      "Busto rinforzato con coppe interne morbide",
      "Spacco laterale con bordatura rifinita a mano",
      "Ideale per prime teatrali ed eventi di gala"
    ],
    details_en: [
      "Silk velvet infused with elastane for flawless contouring",
      "Internal soft sculpted bustier cups",
      "Side slit with hand-bound inner piping",
      "Perfect for opera premieres and gala events"
    ]
  },
  {
    id: "MONNA-013",
    title_it: "Collana Girocollo con Maxi Perle Barocche",
    title_en: "Baroque Pearl Statement Choker",
    category: "accessories",
    category_it: "Accessori & Gioielli",
    category_en: "Accessories & Jewelry",
    priceEUR: 140,
    salePriceEUR: null,
    onSale: false,
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 15,
    sizes: ["Unica / One Size"],
    colors: [
      { name_it: "Perla Bianca & Oro", name_en: "White Pearl & Gold", hex: "#f9f8f2" }
    ],
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
      "images/curator-styling-boutique.jpg"
    ],
    desc_it: "Collana d'effetto presente nei lookbook della boutique: perle barocche d'acqua dolce irregolari, ciascuna unica, montate su catena in ottone anallergico placcato oro 24kt.",
    desc_en: "Show-stopping statement necklace featured across our Rome lookbooks: organic freshwater baroque pearls, each completely unique, joined by hypoallergenic 24k gold-plated chain links.",
    details_it: [
      "Perle coltivate naturali di forma irregolare",
      "Placcatura oro 24kt a spessore resistente",
      "Chiusura a T d'ispirazione scultorea",
      "Custodia protettiva in velluto inclusa"
    ],
    details_en: [
      "Natural cultured irregular baroque pearls",
      "Heavy durable 24kt gold electroplating",
      "Sculptural T-bar toggle clasp",
      "Protective velvet pouch included"
    ]
  },
  {
    id: "MONNA-014",
    title_it: "Borsa a Mano Plissettata Roma in Nappa",
    title_en: "Rome Pleated Nappa Leather Handbag",
    category: "accessories",
    category_it: "Accessori & Borse",
    category_en: "Accessories & Bags",
    priceEUR: 280,
    salePriceEUR: 225,
    onSale: true,
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 17,
    sizes: ["Unica / One Size"],
    colors: [
      { name_it: "Cuoio Nocciola", name_en: "Hazel Tan", hex: "#b87d4b" },
      { name_it: "Nero Assoluto", name_en: "Pitch Black", hex: "#111112" }
    ],
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
      "images/boutique-facade-rome.jpg"
    ],
    desc_it: "Borsa a mano con tracolla removibile in morbidissima pelle di nappa lavorata a pieghe orizzontali. Chiusura a scatto magnetico dorata e interno foderato in suede.",
    desc_en: "Handbag with detachable shoulder crossbody strap in buttery-soft nappa leather folded into accordion pleats. Magnetic gold closure and lush suede-lined interior.",
    details_it: [
      "100% Vera pelle nappa concia vegetale",
      "Accessori metallici dorati anti-ossidazione",
      "Tasca interna con zip e vano portacellulare",
      "Dimensioni: 28 x 18 x 10 cm"
    ],
    details_en: [
      "100% Vegetable-tanned supple nappa leather",
      "Anti-tarnish polished gold-tone hardware",
      "Zipped inner pocket and phone compartment",
      "Dimensions: 28 x 18 x 10 cm"
    ]
  },
  {
    id: "MONNA-015",
    title_it: "Trench Scivolato Duster in Raso di Viscosa",
    title_en: "Fluid Viscose Satin Duster Trench",
    category: "outerwear",
    category_it: "Cappotti & Capispalla",
    category_en: "Coats & Outerwear",
    priceEUR: 390,
    salePriceEUR: null,
    onSale: false,
    isNew: true,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 12,
    sizes: ["S", "M", "L"],
    colors: [
      { name_it: "Sabbia Dorata", name_en: "Golden Sand", hex: "#d8c5a4" },
      { name_it: "Verde Salvia", name_en: "Sage Green", hex: "#8a9a86" }
    ],
    img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop",
      "images/boutique-entrance-mannequin.jpg"
    ],
    desc_it: "Spolverino leggero senza fodera dal drappeggio ultra-fluido. Cintura coordinata da annodare in vita, rever classici destrutturati e maniche con cinturino regolabile.",
    desc_en: "Unlined lightweight duster trench boasting an ultra-fluid movement. Matching tie belt, softly deconstructed notch lapels, and adjustable belted cuffs.",
    details_it: [
      "Raso di viscosa pesante opaco",
      "Taglio destrutturato moderno",
      "Spacco posteriore profondo per movimento libero",
      "Ideale per le mezze stagioni romane"
    ],
    details_en: [
      "Heavyweight matte viscose satin",
      "Modern unconstructed tailoring",
      "Deep back vent for fluid stride",
      "Ideal for Roman spring and autumn evenings"
    ]
  },
  {
    id: "MONNA-016",
    title_it: "Gonna Lunga Taglio Sbieco in Seta",
    title_en: "Bias-Cut Silk Slip Maxi Skirt",
    category: "skirts",
    category_it: "Gonne",
    category_en: "Skirts",
    priceEUR: 175,
    salePriceEUR: 145,
    onSale: true,
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 20,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name_it: "Champagne Satin", name_en: "Champagne Satin", hex: "#eedec7" },
      { name_it: "Nero Satinato", name_en: "Satin Black", hex: "#141517" }
    ],
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
      "images/tulle-floral-skirts-rack.jpg"
    ],
    desc_it: "Gonna lunga scivolata tagliata rigorosamente in sbieco per abbracciare le forme con naturalezza. Elastico morbido a scomparsa in vita per il massimo comfort.",
    desc_en: "Long fluid slip skirt cut strictly on the true bias to contour feminine curves with effortless grace. Concealed elasticated waistline for peerless comfort.",
    details_it: [
      "100% Seta satin con caduta fluida",
      "Taglio in sbieco anti-stropicciamento naturale",
      "Orlo arrotolato con micro-costina",
      "Abbinabile con camicie o maglieria morbida"
    ],
    details_en: [
      "100% Silk satin with liquid drape",
      "True bias cut allowing natural stretch",
      "Micro-hem delicate finish",
      "Pairs effortlessly with tailored shirts or plush knits"
    ]
  }
];

// Customer Reviews (Authentic Roman Boutique Demonstration Testimonials)
const MONNALISA_REVIEWS = [
  {
    author: "Chiara Moretti",
    location: "Roma (Parioli)",
    rating: 5,
    date: "12 Ottobre 2026",
    text_it: "Monnalisa è un autentico tesoro nascosto a Roma! Ho acquistato l'abito ricamato peonia per un matrimonio a Villa Borghese: tessuti sontuosi e cura artigianale impareggiabile. Complimenti di cuore!",
    text_en: "Monnalisa is a true hidden jewel in Rome! I purchased the peony embroidered gown for a wedding at Villa Borghese: sumptuous fabrics and unmatched Italian craftsmanship. Highly recommended!"
  },
  {
    author: "Federica Rinaldi",
    location: "Milano & Roma",
    rating: 5,
    date: "28 Settembre 2026",
    text_it: "La boutique trasmette subito una sensazione di eleganza accogliente e senza tempo. Il completo sartoriale bianco con il corsetto ha una vestibilità favolosa. Spedizione rapida e confezione curatissima.",
    text_en: "The boutique immediately imparts a feeling of warm, timeless elegance. The white tailored suit with corset fits like a dream. Fast shipping and beautiful packaging."
  },
  {
    author: "Eleanor Vance",
    location: "London / Rome visitor",
    rating: 5,
    date: "4 Settembre 2026",
    text_it: "Mentre passeggiavo per Roma ho notato la splendida vetrina fiorita. I capi in tulle e la maglieria sono di una qualità che oggi si trova raramente altrove. Servizio impeccabile anche su WhatsApp!",
    text_en: "While strolling through Rome I spotted the gorgeous floral storefront. The tulle skirts and knitwear are of a quality rarely found nowadays. Flawless consultation via WhatsApp!"
  },
  {
    author: "Beatrice De Luca",
    location: "Roma (Centro Storico)",
    rating: 5,
    date: "19 Agosto 2026",
    text_it: "Amo sostenere le vere boutique indipendenti della mia città. I capi di Monnalisa non seguono il fast fashion ma donano un'allure aristocratica e femminile. Tornerò sicuramente per la collezione autunnale.",
    text_en: "I love supporting authentic independent boutiques in my city. Monnalisa's pieces eschew fast fashion in favor of an aristocratic, feminine allure. Will definitely return for autumn!"
  }
];

// Complete Bilingual UI Translation Dictionary
const MONNALISA_TRANSLATIONS = {
  it: {
    // Navigation
    nav_home: "Home",
    nav_shop: "Collezione",
    nav_new: "Nuovi Arrivi",
    nav_collections: "Categorie",
    nav_sale: "Saldi",
    nav_about: "Chi Siamo",
    nav_contact: "Contatti",
    nav_wishlist: "Preferiti",
    nav_cart: "Carrello",
    nav_currency: "Valuta",
    nav_lang: "Lingua",
    
    // Top Bar
    announcement_text: "BOUTIQUE MONNALISA ROMA — SPEDIZIONE COMPLIMENTARE SU TUTTI GLI ORDINI IN ITALIA ED EUROPA",
    announcement_clock: "ROMA",
    
    // Hero
    hero_tag: "ROMA — CAPITALE DELLA MODA",
    hero_title: "MONNALISA",
    hero_subtitle: "ALTA MODA FEMMINILE & ATELIER A ROMA",
    hero_desc: "Nel cuore eterno di Roma, una boutique dedicata alla donna contemporanea. Creazioni d'autore, tessuti preziosi e cura sartoriale per chi ama distinguersi.",
    hero_btn_shop: "SCOPRI LA COLLEZIONE",
    hero_btn_explore: "VISITA L'ATELIER",
    hero_coords: "VFX9+Q2 ROMA, ITALIA",
    
    // Split hero cards
    hero_card1_tag: "BOUTIQUE DI ROMA",
    hero_card1_title: "Atelier Storico",
    hero_card1_desc: "Atmosfera intima, archi romani e accoglienza sartoriale su misura.",
    hero_card1_btn: "SCOPRI LA BOUTIQUE",
    hero_card2_tag: "CAPSULA FIRMATA",
    hero_card2_title: "Couture Ricamata",
    hero_card2_desc: "Abiti in seta, ricami floreali a mano e tessuti italiani di prima scelta.",
    hero_card2_btn: "ACQUISTA LA CAPSULA",
    
    // Sections
    sec_collections_title: "LE NOSTRE COLLEZIONI",
    sec_collections_sub: "SELEZIONE CURATA PER OGNI OCCASIONE",
    sec_featured_title: "CAPI IN PRIMO PIANO",
    sec_featured_sub: "L'ECCELLENZA DELLA BOUTIQUE ROMANA",
    sec_new_title: "NUOVI ARRIVI",
    sec_new_sub: "FRESCHEZZA, GRAZIA E STILE ITALIANO",
    sec_sale_title: "SALDI & PROMOZIONI",
    sec_sale_sub: "PEZZI ICONICI A CONDIZIONI SPECIALI",
    sec_reviews_title: "PARLANO DI NOI",
    sec_reviews_sub: "L'ESPERIENZA DELLE NOSTRE CLIENTI",
    sec_instagram_title: "ATMOSFERA ROMANA",
    sec_instagram_sub: "SCATTI DALLA NOSTRA BOUTIQUE A ROMA",
    sec_concierge_title: "APPUNTAMENTO PRIVATO",
    sec_concierge_sub: "CONSULENZA D'IMMAGINE IN BOUTIQUE",
    
    // Categories
    cat_all: "Tutti i Capi",
    cat_dresses: "Abiti da Sera & Giorno",
    cat_tops: "Top & Camicie",
    cat_skirts: "Gonne Eleganti",
    cat_trousers: "Pantaloni Sartoriali",
    cat_jackets: "Giacche & Completi",
    cat_outerwear: "Cappotti & Capispalla",
    cat_accessories: "Accessori & Gioielli",
    
    // Product Card
    badge_new: "NUOVO",
    badge_sale: "SALDI",
    btn_add_cart: "AGGIUNGI AL CARRELLO",
    btn_quick_view: "ANTEPRIMA",
    btn_details: "DETTAGLI CAPO",
    btn_view_product: "VEDI DETTAGLI",
    btn_whatsapp_inquire: "RICHIEDI SU WHATSAPP",
    btn_load_more: "CARICA ALTRI CAPI",
    showing_items: "Visualizzati {current} di {total} capi",
    
    // Filters & Sorting
    filter_all: "Tutti",
    filter_search_placeholder: "Cerca abiti, gonne, giacche...",
    filter_category: "Categoria",
    filter_price: "Fascia di Prezzo",
    filter_sort: "Ordina per",
    sort_default: "Consigliati",
    sort_price_asc: "Prezzo: dal più basso",
    sort_price_desc: "Prezzo: dal più alto",
    sort_newest: "Più Recenti",
    sort_popular: "Più Popolari",
    filter_clear: "Azzera Filtri",
    no_products: "Nessun capo trovato con i criteri selezionati.",
    
    // Product Detail Page & Modal
    prod_size: "Seleziona Taglia",
    prod_color: "Colore Selezionato",
    prod_qty: "Quantità",
    prod_availability: "Disponibilità",
    prod_in_stock: "Disponibile subito in atelier a Roma",
    prod_care: "Dettagli & Manutenzione",
    prod_share: "Condividi",
    prod_continue_shopping: "Continua lo Shopping",
    prod_related: "POTREBBERO INTERESSARTI ANCHE",
    prod_reviews_heading: "Recensioni per questo capo",
    
    // Cart & Wishlist
    cart_title: "IL TUO CARRELLO",
    cart_empty: "Il tuo carrello è attualmente vuoto.",
    cart_subtotal: "Subtotale",
    cart_shipping: "Spedizione",
    cart_shipping_free: "Gratuita (Offerta Boutique)",
    cart_total: "Totale",
    cart_checkout_btn: "PROCEDI ALL'ACQUISTO",
    cart_continue: "TORNA ALLO SHOP",
    cart_clear: "Svuota Carrello",
    cart_item_removed: "Capo rimosso dal carrello",
    cart_item_added: "Aggiunto al carrello!",
    cart_demo_alert: "Dimostrazione Frontend: Il checkout non richiede pagamenti reali.",
    
    wishlist_title: "I TUOI PREFERITI",
    wishlist_empty: "Non hai ancora salvato nessun capo tra i preferiti.",
    wishlist_move_all: "SPOSTA TUTTI NEL CARRELLO",
    wishlist_added: "Aggiunto ai preferiti!",
    wishlist_removed: "Rimosso dai preferiti",
    
    // Contact Page
    contact_title: "CONTATTACI O VIENI A TROVARCI",
    contact_desc: "Siamo sempre felici di accoglierti nella nostra boutique a Roma o assisterti tramite WhatsApp e telefono per qualsiasi consiglio di stile o taglia.",
    contact_info_heading: "INFORMAZIONI BOUTIQUE",
    contact_address_label: "Indirizzo",
    contact_phone_label: "Telefono Diretto",
    contact_whatsapp_label: "WhatsApp Assistenza",
    contact_hours_label: "Orari di Apertura",
    contact_form_heading: "INVIA UN MESSAGGIO",
    form_name: "Nome Completo",
    form_email: "Indirizzo Email",
    form_subject: "Oggetto",
    form_message: "Il Tuo Messaggio",
    form_submit: "INVIA RICHIESTA",
    form_success: "Grazie! Il tuo messaggio è stato ricevuto (dimostrazione frontend). Il nostro team ti contatterà al più presto.",
    form_err_req: "Per favore compila tutti i campi obbligatori.",
    form_err_email: "Inserisci un indirizzo email valido.",
    open_maps: "APRI SU GOOGLE MAPS",
    call_now: "CHIAMA ORA",
    chat_whatsapp: "SCRIVICI SU WHATSAPP",
    
    // About Page
    about_title: "L'ESSENZA DI MONNALISA",
    about_lead: "Un'ode alla bellezza femminile, all'eleganza sartoriale italiana e al fascino eterno di Roma.",
    about_story_title: "La Nostra Storia a Roma",
    about_story_p1: "Monnalisa nasce dal desiderio di offrire alle donne capi unici, capaci di coniugare la grazia sartoriale della tradizione italiana con un tocco contemporaneo e romantico. Nel nostro spazio a Roma, ogni cliente trova un'atmosfera raccolta e personalizzata, lontana dall'omologazione delle catene commerciali.",
    about_story_p2: "Dagli abiti ricamati con dettagli floreali alle gonne vaporose in tulle, fino ai completi sartoriali impeccabili, curiamo ogni silhouette con passione autentica e tessuti selezionati.",
    about_values_title: "I Nostri Valori",
    val_craft_title: "Cura Sartoriale",
    val_craft_desc: "Rifiniture eseguite con maestria, rispetto dei tagli anatomici e vestibilità calibrate per valorizzare ogni donna.",
    val_fabrics_title: "Tessuti Pregiati",
    val_fabrics_desc: "Seta naturale, lana vergine, boucle e tulle di altissima qualità per una sensazione impareggiabile sulla pelle.",
    val_boutique_title: "Accoglienza & Intimità",
    val_boutique_desc: "Una vera boutique dove la relazione con la cliente e il consiglio sincero sono al primo posto.",
    
    // Newsletter & Footer
    newsletter_title: "NEWSLETTER MONNALISA PRIVÉ",
    newsletter_desc: "Ricevi in anteprima le nuove collezioni, gli inviti agli eventi privati in boutique e le promozioni esclusive.",
    newsletter_placeholder: "INSERISCI LA TUA EMAIL",
    newsletter_btn: "ISCRIVITI",
    newsletter_success: "Grazie per esserti iscritta alla nostra newsletter (dimostrazione frontend)!",
    
    footer_desc: "Boutique di moda femminile a Roma. Abiti eleganti, completi sartoriali, maglieria di lusso e accessori preziosi.",
    footer_col_nav: "Esplora",
    footer_col_categories: "Collezioni",
    footer_col_service: "Servizi Clienti",
    footer_serv_fitting: "Consulenza di Stile",
    footer_serv_shipping: "Spedizioni & Consegne",
    footer_serv_care: "Guida alle Taglie",
    footer_serv_whatsapp: "Assistenza WhatsApp",
    footer_rights: "MONNALISA SHOP ROMA. TUTTI I DIRITTI RISERVATI.",
    
    // Floating WhatsApp
    whatsapp_floating_tooltip: "Chatta con Monnalisa Roma",
    whatsapp_prefill_general: "Buongiorno Monnalisa Roma, vorrei informazioni sulla vostra boutique e sulle nuove collezioni.",
    whatsapp_prefill_product: "Buongiorno Monnalisa Roma, vorrei informazioni e disponibilità per il capo: {product} (Rif: {id})."
  },
  
  en: {
    // Navigation
    nav_home: "Home",
    nav_shop: "Collection",
    nav_new: "New Arrivals",
    nav_collections: "Categories",
    nav_sale: "Sale",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_wishlist: "Wishlist",
    nav_cart: "Bag",
    nav_currency: "Currency",
    nav_lang: "Language",
    
    // Top Bar
    announcement_text: "MONNALISA ROME BOUTIQUE — COMPLIMENTARY COURIER DELIVERY ON ALL ORDERS ACROSS ITALY & EUROPE",
    announcement_clock: "ROME",
    
    // Hero
    hero_tag: "ROME — ETERNAL FASHION CAPITAL",
    hero_title: "MONNALISA",
    hero_subtitle: "HAUTE WOMEN'S FASHION & ATELIER IN ROME",
    hero_desc: "In the eternal heart of Rome, a refined boutique dedicated to the contemporary woman. Artisanal creations, precious fabrics, and bespoke care for women who celebrate individuality.",
    hero_btn_shop: "DISCOVER COLLECTION",
    hero_btn_explore: "VISIT ATELIER",
    hero_coords: "VFX9+Q2 ROME, ITALY",
    
    // Split hero cards
    hero_card1_tag: "ROME BOUTIQUE",
    hero_card1_title: "Historic Atelier",
    hero_card1_desc: "Intimate atmosphere, Roman stone arches, and personalized tailoring guidance.",
    hero_card1_btn: "DISCOVER BOUTIQUE",
    hero_card2_tag: "SIGNATURE CAPSULE",
    hero_card2_title: "Embroidered Couture",
    hero_card2_desc: "Pure silk dresses, hand-embroidered botanical florals, and premier Italian fabrics.",
    hero_card2_btn: "SHOP CAPSULE",
    
    // Sections
    sec_collections_title: "OUR CURATED COLLECTIONS",
    sec_collections_sub: "DISTINGUISHED PIECES FOR EVERY OCCASION",
    sec_featured_title: "FEATURED PIECES",
    sec_featured_sub: "THE PINNACLE OF ROMAN BOUTIQUE ELEGANCE",
    sec_new_title: "NEW ARRIVALS",
    sec_new_sub: "FRESH SILHOUETTES, GRACE & ITALIAN ALLURE",
    sec_sale_title: "SALE & PRIVILEGES",
    sec_sale_sub: "ICONIC ARCHIVES AT SPECIAL ADVANTAGE",
    sec_reviews_title: "CLIENT TESTIMONIALS",
    sec_reviews_sub: "AUTHENTIC WORDS FROM OUR CHERISHED PATRONS",
    sec_instagram_title: "ROMAN ATMOSPHERE",
    sec_instagram_sub: "CAPTURED MOMENTS FROM OUR ROME BOUTIQUE",
    sec_concierge_title: "PRIVATE APPOINTMENT",
    sec_concierge_sub: "BESPOKE WARDROBE CONSULTATION IN ROME",
    
    // Categories
    cat_all: "All Garments",
    cat_dresses: "Evening & Day Dresses",
    cat_tops: "Tops & Blouses",
    cat_skirts: "Fine Skirts",
    cat_trousers: "Tailored Trousers",
    cat_jackets: "Jackets & Suits",
    cat_outerwear: "Coats & Outerwear",
    cat_accessories: "Accessories & Jewels",
    
    // Product Card
    badge_new: "NEW",
    badge_sale: "SALE",
    btn_add_cart: "ADD TO BAG",
    btn_quick_view: "QUICK VIEW",
    btn_details: "GARMENT DETAILS",
    btn_view_product: "VIEW DETAILS",
    btn_whatsapp_inquire: "INQUIRE ON WHATSAPP",
    btn_load_more: "LOAD MORE PIECES",
    showing_items: "Showing {current} of {total} pieces",
    
    // Filters & Sorting
    filter_all: "All",
    filter_search_placeholder: "Search dresses, skirts, blazers...",
    filter_category: "Category",
    filter_price: "Price Range",
    filter_sort: "Sort by",
    sort_default: "Recommended",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_newest: "Newest Arrivals",
    sort_popular: "Most Popular",
    filter_clear: "Reset Filters",
    no_products: "No garments found matching the selected criteria.",
    
    // Product Detail Page & Modal
    prod_size: "Select Size",
    prod_color: "Selected Shade",
    prod_qty: "Quantity",
    prod_availability: "Availability",
    prod_in_stock: "Ready immediately at Rome atelier",
    prod_care: "Details & Garment Care",
    prod_share: "Share",
    prod_continue_shopping: "Continue Shopping",
    prod_related: "YOU MAY ALSO CHERISH",
    prod_reviews_heading: "Customer Reviews for this Piece",
    
    // Cart & Wishlist
    cart_title: "YOUR SHOPPING BAG",
    cart_empty: "Your shopping bag is currently empty.",
    cart_subtotal: "Subtotal",
    cart_shipping: "Shipping",
    cart_shipping_free: "Complimentary (Boutique Privilege)",
    cart_total: "Total",
    cart_checkout_btn: "PROCEED TO CHECKOUT",
    cart_continue: "RETURN TO SHOP",
    cart_clear: "Clear Bag",
    cart_item_removed: "Item removed from bag",
    cart_item_added: "Added to shopping bag!",
    cart_demo_alert: "Frontend Demonstration: Checkout is simulated, no payment required.",
    
    wishlist_title: "SAVED WISHLIST",
    wishlist_empty: "You have not saved any garments to your wishlist yet.",
    wishlist_move_all: "MOVE ALL TO BAG",
    wishlist_added: "Added to your wishlist!",
    wishlist_removed: "Removed from wishlist",
    
    // Contact Page
    contact_title: "CONTACT US OR VISIT OUR BOUTIQUE",
    contact_desc: "We are always delighted to welcome you to our Rome boutique or assist you via WhatsApp and telephone with personalized styling and sizing advice.",
    contact_info_heading: "BOUTIQUE INFORMATION",
    contact_address_label: "Location",
    contact_phone_label: "Direct Telephone",
    contact_whatsapp_label: "WhatsApp Concierge",
    contact_hours_label: "Opening Hours",
    contact_form_heading: "SEND US A MESSAGE",
    form_name: "Full Name",
    form_email: "Email Address",
    form_subject: "Subject",
    form_message: "Your Inquiries",
    form_submit: "SEND INQUIRY",
    form_success: "Thank you! Your message was received (frontend demonstration). Our Rome atelier will be in touch shortly.",
    form_err_req: "Please complete all required fields.",
    form_err_email: "Please provide a valid email address.",
    open_maps: "OPEN IN GOOGLE MAPS",
    call_now: "CALL NOW",
    chat_whatsapp: "CHAT ON WHATSAPP",
    
    // About Page
    about_title: "THE ESSENCE OF MONNALISA",
    about_lead: "An ode to feminine grace, Italian sartorial mastery, and the eternal poetry of Rome.",
    about_story_title: "Our Roman Atelier Heritage",
    about_story_p1: "Monnalisa was founded upon the desire to offer women unique garments that seamlessly blend traditional Italian tailoring with romantic modern individuality. Within our intimate boutique in Rome, every visitor discovers a thoughtful, personalized experience far removed from homogenized fast-fashion.",
    about_story_p2: "From intricately hand-embroidered floral gowns to cloud-like tulle skirts and impeccably tailored suits, each silhouette is curated with authentic dedication and hand-selected fabrics.",
    about_values_title: "Our Guiding Values",
    val_craft_title: "Sartorial Dedication",
    val_craft_desc: "Artisanal finishes, anatomical draping, and silhouettes calibrated to accentuate natural feminine beauty.",
    val_fabrics_title: "Exceptional Textiles",
    val_fabrics_desc: "Natural silk, pure virgin wool, textured bouclé, and soft ethereal tulle offering an unparalleled sensation.",
    val_boutique_title: "Warm Boutique Intimacy",
    val_boutique_desc: "A genuine Roman atelier where genuine relationships and bespoke advice always take pride of place.",
    
    // Newsletter & Footer
    newsletter_title: "MONNALISA PRIVÉ GAZETTE",
    newsletter_desc: "Receive private previews of upcoming capsules, invitations to boutique gatherings, and exclusive offers.",
    newsletter_placeholder: "ENTER YOUR EMAIL",
    newsletter_btn: "SUBSCRIBE",
    newsletter_success: "Thank you for subscribing to our gazette (frontend demonstration)!",
    
    footer_desc: "Women's fashion boutique in Rome. Elegant dresses, tailored suits, luxury knitwear, and fine accessories.",
    footer_col_nav: "Explore",
    footer_col_categories: "Collections",
    footer_col_service: "Client Care",
    footer_serv_fitting: "Private Styling",
    footer_serv_shipping: "Shipping & Delivery",
    footer_serv_care: "Size & Fabric Guide",
    footer_serv_whatsapp: "WhatsApp Concierge",
    footer_rights: "MONNALISA SHOP ROME. ALL RIGHTS RESERVED.",
    
    // Floating WhatsApp
    whatsapp_floating_tooltip: "Chat with Monnalisa Rome",
    whatsapp_prefill_general: "Hello Monnalisa Rome, I would love some information regarding your boutique and new collection.",
    whatsapp_prefill_product: "Hello Monnalisa Rome, I would like to inquire about availability for: {product} (Ref: {id})."
  }
};

export const coffeeShops = [
  {
    id: 1,
    name: "Art Gallery Café",
    description: "Un café tendance avec une galerie d'art intégrée, situé sur Leidseplein.",
    address: "Leidseplein 17, 1017 PS Amsterdam",
    image: "https://images.unsplash.com/photo-1594115584109-938fbcd11931",
    coordinates: [4.8827, 52.3641],
  },
  {
    id: 2,
    name: "Waterside Lounge",
    description: "Café pittoresque au bord de l'eau, connu pour son ambiance détendue et sa vue sur les canaux.",
    address: "Oudezijds Voorburgwal 191, 1012 EW Amsterdam",
    image: "https://images.unsplash.com/photo-1628772201761-b9d997f90d18",
    coordinates: [4.8961, 52.3731],
  },
  {
    id: 3,
    name: "Vintage Corner",
    description: "Petit café authentique avec une décoration vintage et des produits de qualité.",
    address: "Oude Leliestraat 2, 1015 AW Amsterdam",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    coordinates: [4.8839, 52.3768],
  },
  {
    id: 4,
    name: "Canal View Café",
    description: "Café établi depuis longtemps, apprécié pour sa vue sur les canaux et son ambiance locale et détendue.",
    address: "Eerste Bloemdwarsstraat 2, 1016 KS Amsterdam",
    image: "https://images.unsplash.com/photo-1576600245007-ba9234214895",
    coordinates: [4.8796, 52.3708],
  },
];

export const bikeRoutes = [
  {
    id: 1,
    name: "Tour des Canaux",
    description: "Une balade relaxante le long des canaux historiques d'Amsterdam.",
    distance: "8 km",
    duration: "1 heure",
    difficulty: "Facile",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4",
    coordinates: [
      [4.8852, 52.3702],
      [4.8839, 52.3681],
      [4.8895, 52.3662],
      [4.8950, 52.3702],
      [4.8852, 52.3702]
    ]
  },
  {
    id: 2,
    name: "Vers Waterland",
    description: "Échappez-vous de la ville en direction du nord et découvrez la campagne néerlandaise.",
    distance: "25 km",
    duration: "3 heures",
    difficulty: "Moyen",
    image: "https://images.unsplash.com/photo-1528583653587-619a30171338",
    coordinates: [
      [4.9044, 52.3807],
      [4.9319, 52.3977],
      [4.9957, 52.4328],
      [4.9957, 52.4328],
      [4.9044, 52.3807]
    ]
  },
  {
    id: 3,
    name: "Tour du Vondelpark",
    description: "Une agréable promenade à vélo dans et autour du plus grand parc d'Amsterdam.",
    distance: "5 km",
    duration: "30 minutes",
    difficulty: "Facile",
    image: "https://images.unsplash.com/photo-1567610095935-89ba81239e3a",
    coordinates: [
      [4.8661, 52.3580],
      [4.8731, 52.3583],
      [4.8786, 52.3593],
      [4.8702, 52.3619],
      [4.8661, 52.3580]
    ]
  },
];

export const secretSpots = [
  {
    id: 1,
    name: "Jardin de Begijnhof",
    description: "Un jardin caché au cœur d'Amsterdam, entouré d'habitations historiques.",
    address: "Begijnhof 30, 1012 WT Amsterdam",
    image: "https://images.unsplash.com/photo-1626197121454-96a9f35c420d",
    coordinates: [4.8899, 52.3702],
  },
  {
    id: 2,
    name: "Bibliothèque OBA Rooftop",
    description: "Vue panoramique méconnue depuis le toit de la bibliothèque publique d'Amsterdam.",
    address: "Oosterdokskade 143, 1011 DL Amsterdam",
    image: "https://images.unsplash.com/photo-1621363428375-b24e10f58307",
    coordinates: [4.9040, 52.3758],
  },
  {
    id: 3,
    name: "Café Papeneiland",
    description: "Un des plus anciens cafés bruns d'Amsterdam, fondé en 1642.",
    address: "Prinsengracht 2, 1015 DV Amsterdam",
    image: "https://images.unsplash.com/photo-1619229666372-3c26c399a06e",
    coordinates: [4.8836, 52.3748],
  },
];

export const quizQuestions = [
  {
    id: 1,
    question: "Comment préfères-tu passer une journée à Amsterdam ?",
    options: [
      { text: "Explorer des musées et sites historiques", type: "culture" },
      { text: "Découvrir des bars et la vie nocturne", type: "fete" },
      { text: "Se promener le long des canaux et dans les parcs", type: "detente" },
      { text: "Chercher des boutiques uniques et des marchés", type: "shopping" }
    ]
  },
  {
    id: 2,
    question: "Quel est ton budget quotidien pour ton séjour ?",
    options: [
      { text: "Moins de 50€ par jour", type: "economique" },
      { text: "Entre 50€ et 100€ par jour", type: "moderé" },
      { text: "Entre 100€ et 200€ par jour", type: "confort" },
      { text: "Plus de 200€ par jour", type: "luxe" }
    ]
  },
  {
    id: 3,
    question: "Avec qui voyages-tu à Amsterdam ?",
    options: [
      { text: "En solo", type: "solo" },
      { text: "En couple", type: "romantique" },
      { text: "Entre amis", type: "groupe" },
      { text: "En famille", type: "famille" }
    ]
  },
  {
    id: 4,
    question: "Qu'est-ce qui t'attire le plus dans cette ville ?",
    options: [
      { text: "Son histoire et son architecture", type: "culture" },
      { text: "Sa scène culinaire", type: "gastronomie" },
      { text: "Sa réputation libérale et ouverte", type: "experience" },
      { text: "Son ambiance et sa qualité de vie", type: "detente" }
    ]
  },
  {
    id: 5,
    question: "Comment te déplacerais-tu principalement à Amsterdam ?",
    options: [
      { text: "À vélo comme un vrai local", type: "aventurier" },
      { text: "En transports en commun", type: "pratique" },
      { text: "À pied pour ne rien manquer", type: "explorateur" },
      { text: "En taxi ou Uber pour plus de confort", type: "confort" }
    ]
  }
];

export const travelerTypes = {
  culture: {
    title: "Le Passionné de Culture",
    description: "Tu apprécies l'histoire, l'art et l'architecture. Amsterdam est parfaite pour toi avec ses nombreux musées de classe mondiale.",
    recommendation: "Ne manque pas le Rijksmuseum, le Van Gogh Museum et le quartier historique de Jordaan.",
    image: "https://images.unsplash.com/photo-1594408052115-7e8b8a6261f8",
  },
  fete: {
    title: "Le Fêtard",
    description: "Tu aimes l'ambiance nocturne et les sorties. Amsterdam offre une vie nocturne dynamique qui te plaira !",
    recommendation: "Explore le quartier de Leidseplein et Rembrandtplein pour les meilleurs bars et clubs.",
    image: "https://images.unsplash.com/photo-1545128485-fd1d8dc2b477",
  },
  detente: {
    title: "L'Amoureux du Calme",
    description: "Tu préfères les balades tranquilles et les moments de détente. Amsterdam a beaucoup d'espaces verts et de canaux paisibles.",
    recommendation: "Profite du Vondelpark et d'une croisière tranquille sur les canaux au coucher du soleil.",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4",
  },
  economique: {
    title: "Le Voyageur Économe",
    description: "Tu sais apprécier Amsterdam sans te ruiner. La ville offre de nombreuses activités gratuites ou à petit prix.",
    recommendation: "Visite les marchés locaux, profite des nombreux parcs et utilise une carte de transport public pour économiser.",
    image: "https://images.unsplash.com/photo-1544971587-b842c27f8e13",
  },
  luxe: {
    title: "L'Amateur de Luxe",
    description: "Tu apprécies le confort et les expériences haut de gamme. Amsterdam possède d'excellents hôtels 5 étoiles et restaurants étoilés.",
    recommendation: "Séjourne dans le quartier du Canal Ring, dîne dans des restaurants étoilés et réserve une croisière privée.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  },
};

export const topLists = [
  {
    id: 1,
    title: "Top 10 des lieux Instagrammables à Amsterdam",
    slug: "instagrammable-spots",
    intro: "Amsterdam est un paradis pour les photographes avec ses canaux pittoresques et son architecture unique. Voici les 10 meilleurs spots pour des photos inoubliables.",
    image: "https://images.unsplash.com/photo-1576924542622-772bbe2adb5b",
    items: [
      {
        title: "Les maisons dansantes du canal Damrak",
        description: "Ces façades colorées et inégales sont l'un des clichés les plus populaires d'Amsterdam.",
        image: "https://images.unsplash.com/photo-1583295125721-766a0088cd3f",
      },
      {
        title: "Le pont 'LOVE' de Vondelpark",
        description: "Un pont romantique dans le plus grand parc d'Amsterdam, parfait pour les couples.",
        image: "https://images.unsplash.com/photo-1618559633950-8142d99d5cb0",
      },
      {
        title: "L'enseigne 'I Amsterdam' à l'aéroport de Schiphol",
        description: "L'emblématique enseigne, maintenant située à l'aéroport après avoir été retirée du Museumplein.",
        image: "https://images.unsplash.com/photo-1541793647-f3cb1a7b2194",
      },
    ]
  },
  {
    id: 2,
    title: "7 musées à faire si tu détestes les musées",
    slug: "museums-for-haters",
    intro: "Pas fan des musées traditionnels ? Ces lieux atypiques à Amsterdam pourraient bien te faire changer d'avis.",
    image: "https://images.unsplash.com/photo-1583295125721-766a0088cd3f",
    items: [
      {
        title: "Heineken Experience",
        description: "Plus qu'un musée, une expérience interactive sur la célèbre bière néerlandaise avec dégustation.",
        image: "https://images.unsplash.com/photo-1584802370413-43956588964d",
      },
      {
        title: "NDSM Werf",
        description: "Un ancien chantier naval transformé en espace culturel avec street art et événements.",
        image: "https://images.unsplash.com/photo-1557585440-a4836ff029df",
      },
      {
        title: "Micropia",
        description: "Le seul musée au monde des microbes, une expérience fascinante sur la vie invisible.",
        image: "https://images.unsplash.com/photo-1566834176667-7a3d6335eefc",
      },
    ]
  },
];

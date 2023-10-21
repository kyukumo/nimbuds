import { Bud, Element, Move } from "../types";

export const starters = [
  "amazwing",
  "cherubud",
  "flagoon",
  "flarva",
  "flitten",
  "galephin",
  "gloominnow",
  "lopilot",
  "luxureef",
  "meadowisp",
  "nebulon",
  "oakindle",
  "silten",
  "smoldit",
  "snakelit",
  "specalf",
  "spookecko",
  "sproutide",
  "voidixie",
  "windeed",
  "wispyre",
];

export const buds: Record<string, Bud> = {
  spookecko: {
    description:
      "This mysterious and eerie reptile lurks in the shadows, using its ghastly powers to frighten and confuse opponents.",
    element: [Element.Dark],
    id: "spookecko",
    moves: [Move.Gloom],
    name: "Spookecko",
    next: "shadile",
    stage: 1,
    stats: {
      attack: 2,
      defense: 2,
      speed: 1,
    },
    tile: {
      x: 0,
      y: 0,
    },
  },
  shadile: {
    description:
      "It lurks in the depths of the night, preying on the fears and weaknesses of its opponents with its sinister powers.",
    element: [Element.Dark],
    id: "shadile",
    moves: [Move.Shade],
    name: "Shadile",
    next: "spectraptor",
    previous: "spookecko",
    stage: 2,
    stats: {
      attack: 3,
      defense: 2,
      speed: 1,
    },
    tile: {
      x: 10,
      y: 0,
    },
  },
  spectraptor: {
    description:
      "If you feel a sudden chill, you may be experiencing the ghostly aura of this sinister raptor, silently stalking its prey.",
    element: [Element.Dark],
    id: "spectraptor",
    moves: [Move.Eclipse],
    name: "Spectraptor",
    previous: "shadile",
    stage: 3,
    stats: {
      attack: 4,
      defense: 3,
      speed: 1,
    },
    tile: {
      x: 20,
      y: 0,
    },
  },
  smoldit: {
    description: "The smoldering embodiment of lingering spectral energy.",
    element: [Element.Dark, Element.Fire],
    id: "smoldit",
    moves: [Move.Blaze],
    name: "Smoldit",
    next: "embergeist",
    stage: 1,
    stats: {
      attack: 1,
      defense: 1,
      speed: 3,
    },
    tile: {
      x: 0,
      y: 20,
    },
  },
  embergeist: {
    description:
      "Flickering, mysterious flames that haunt their surroundings with an ominous presence.",
    element: [Element.Dark, Element.Fire],
    id: "embergeist",
    moves: [Move.Inferno],
    name: "Embergeist",
    previous: "smoldit",
    stage: 2,
    stats: {
      attack: 2,
      defense: 3,
      speed: 4,
    },
    tile: {
      x: 10,
      y: 20,
    },
  },
  specalf: {
    description:
      "Awaiting the return of its doting parent, this bovine animal conceals itself beneath a veil of spectral flora.",
    element: [Element.Dark, Element.Earth],
    id: "specalf",
    moves: [Move.Shade, Move.Flower],
    name: "Specalf",
    next: "thornox",
    stage: 1,
    stats: {
      attack: 2,
      defense: 3,
      speed: 1,
    },
    tile: {
      x: 0,
      y: 40,
    },
  },
  thornox: {
    description:
      "It seeks to exact revenge on anyone it can find using its razor-sharp thorns.",
    element: [Element.Dark, Element.Earth],
    id: "thornox",
    moves: [Move.Eclipse, Move.Blossom],
    name: "Thornox",
    previous: "specalf",
    stage: 2,
    stats: {
      attack: 3,
      defense: 4,
      speed: 2,
    },
    tile: {
      x: 10,
      y: 40,
    },
  },
  voidixie: {
    description:
      "The few who have witnessed its otherworldly aura have professed conflicting feelings of curiosity and trepidation.",
    element: [Element.Dark, Element.Light],
    id: "voidixie",
    moves: [Move.Shade, Move.Gleam],
    name: "Voidixie",
    next: "faeclipse",
    stage: 1,
    stats: {
      attack: 2,
      defense: 1,
      speed: 2,
    },
    tile: {
      x: 0,
      y: 60,
    },
  },
  faeclipse: {
    description:
      "Hauntingly sinister, menacing, and alluring. It has an aura of cosmic destruction.",
    element: [Element.Dark, Element.Light],
    id: "faeclipse",
    moves: [Move.Eclipse, Move.Starfall],
    name: "Faeclipse",
    previous: "voidixie",
    stage: 2,
    stats: {
      attack: 4,
      defense: 1,
      speed: 3,
    },
    tile: {
      x: 10,
      y: 60,
    },
  },
  gloominnow: {
    description:
      "A glint from its shimmering, iridescent scales will catch your eye from deep below the waters.",
    element: [Element.Dark, Element.Water],
    id: "gloominnow",
    moves: [Move.Gloom, Move.Soak],
    name: "Gloominnow",
    next: "barrabyss",
    stage: 1,
    stats: {
      attack: 1,
      defense: 1,
      speed: 2,
    },
    tile: {
      x: 0,
      y: 80,
    },
  },
  barrabyss: {
    description:
      "Be careful where you swim. Legend has it that when you see its eerie, glowing eyes, it's already too late for you.",
    element: [Element.Dark, Element.Water],
    id: "barrabyss",
    moves: [Move.Shade, Move.Drench],
    name: "Barrabyss",
    next: "umbracuda",
    previous: "gloominnow",
    stage: 2,
    stats: {
      attack: 2,
      defense: 1,
      speed: 3,
    },
    tile: {
      x: 10,
      y: 80,
    },
  },
  umbracuda: {
    description:
      "Its sleek, etherial fins cascade through the water, appearing in and vanishing from the ocean at will.",
    element: [Element.Dark, Element.Water],
    id: "umbracuda",
    moves: [Move.Eclipse, Move.Cascade],
    name: "Umbracuda",
    previous: "barrabyss",
    stage: 3,
    stats: {
      attack: 4,
      defense: 1,
      speed: 4,
    },
    tile: {
      x: 20,
      y: 80,
    },
  },
  nebulon: {
    description:
      "Often mistaken for an unidentified flying object, it has a markedly unassuming face.",
    element: [Element.Dark, Element.Wind],
    id: "nebulon",
    moves: [Move.Shade, Move.Gust],
    name: "Nebulon",
    next: "nebulisk",
    stage: 1,
    stats: {
      attack: 1,
      defense: 4,
      speed: 2,
    },
    tile: {
      x: 0,
      y: 100,
    },
  },
  nebulisk: {
    description:
      "Seemingly extraterrestrial, it is highly skilled in piloting its sleek spacecraft.",
    element: [Element.Dark, Element.Wind],
    id: "nebulisk",
    moves: [Move.Eclipse, Move.Tornado],
    name: "Nebulisk",
    previous: "nebulon",
    stage: 2,
    stats: {
      attack: 3,
      defense: 3,
      speed: 3,
    },
    tile: {
      x: 10,
      y: 100,
    },
  },
  snakelit: {
    description: "An emerald, fiery glow emits from this serpentine creature.",
    element: [Element.Fire],
    id: "snakelit",
    moves: [Move.Ignite],
    name: "Snakelit",
    next: "serpyro",
    stage: 1,
    stats: {
      attack: 2,
      defense: 2,
      speed: 2,
    },
    tile: {
      x: 0,
      y: 120,
    },
  },
  serpyro: {
    description:
      "It uses the scorching jade flames emitting from its tail to extinguish its opponents.",
    element: [Element.Fire],
    id: "serpyro",
    moves: [Move.Blaze],
    name: "Serpyro",
    next: "pyroconda",
    previous: "snakelit",
    stage: 2,
    stats: {
      attack: 3,
      defense: 2,
      speed: 3,
    },
    tile: {
      x: 10,
      y: 120,
    },
  },
  pyroconda: {
    description:
      "Majestic, some consider it a deity. Its fiery plumage exudes power and grace.",
    element: [Element.Fire],
    id: "pyroconda",
    moves: [Move.Inferno],
    name: "Pyroconda",
    previous: "serpyro",
    stage: 3,
    stats: {
      attack: 4,
      defense: 2,
      speed: 4,
    },
    tile: {
      x: 20,
      y: 120,
    },
  },
  oakindle: {
    description: "A small seedling engulfed in flames.",
    element: [Element.Earth, Element.Fire],
    id: "oakindle",
    moves: [Move.Flower, Move.Blaze],
    name: "Oakindle",
    next: "torchwood",
    stage: 1,
    stats: {
      attack: 3,
      defense: 1,
      speed: 1,
    },
    tile: {
      x: 0,
      y: 140,
    },
  },
  torchwood: {
    description:
      "It is fiercely loyal to mother nature, using her powers to protect those it considers vulnerable.",
    element: [Element.Earth, Element.Fire],
    id: "torchwood",
    moves: [Move.Blossom, Move.Inferno],
    name: "Torchwood",
    previous: "oakindle",
    stage: 2,
    stats: {
      attack: 4,
      defense: 1,
      speed: 1,
    },
    tile: {
      x: 10,
      y: 140,
    },
  },
  wispyre: {
    description:
      "It's playful and mischievous, dazzling its opponents with sublime flames and whimsical charm.",
    element: [Element.Fire, Element.Light],
    id: "wispyre",
    moves: [Move.Inferno, Move.Starfall],
    name: "Wispyre",
    stage: 1,
    stats: {
      attack: 4,
      defense: 3,
      speed: 4,
    },
    tile: {
      x: 0,
      y: 160,
    },
  },
  flagoon: {
    description:
      "It releases infernal steam to drive intruders away from its den.",
    element: [Element.Fire, Element.Water],
    id: "flagoon",
    moves: [Move.Ignite, Move.Soak],
    name: "Flagoon",
    next: "blazesea",
    stage: 1,
    stats: {
      attack: 1,
      defense: 2,
      speed: 3,
    },
    tile: {
      x: 0,
      y: 180,
    },
  },
  blazesea: {
    description:
      "It is widely known that Blazesea should not be approached. It unceasingly combusts as it maintains a cooling aura of water around its body.",
    element: [Element.Fire, Element.Water],
    id: "blazesea",
    moves: [Move.Blaze, Move.Drench],
    name: "Blazesea",
    next: "infernocean",
    previous: "flagoon",
    stage: 2,
    stats: {
      attack: 3,
      defense: 1,
      speed: 2,
    },
    tile: {
      x: 10,
      y: 180,
    },
  },
  infernocean: {
    description:
      "It is described as titanic, commanding the destructive power of roaring tides and wildfire.",
    element: [Element.Fire, Element.Water],
    id: "infernocean",
    moves: [Move.Inferno, Move.Cascade],
    name: "Infernocean",
    previous: "blazesea",
    stage: 3,
    stats: {
      attack: 4,
      defense: 2,
      speed: 1,
    },
    tile: {
      x: 20,
      y: 180,
    },
  },
  flarva: {
    description:
      "On a clear summer night, you can see the faint blue glow of Flarva swarming on the trees.",
    element: [Element.Fire, Element.Wind],
    id: "flarva",
    moves: [Move.Ignite, Move.Breeze],
    name: "Flarva",
    next: "chrysfire",
    stage: 1,
    stats: {
      attack: 1,
      defense: 2,
      speed: 1,
    },
    tile: {
      x: 0,
      y: 200,
    },
  },
  chrysfire: {
    description:
      "Its shell is warm to the touch. Wildfire experts relocate Chrysfire away from forests before they hatch.",
    element: [Element.Fire, Element.Wind],
    id: "chrysfire",
    moves: [Move.Blaze, Move.Gust],
    name: "Chrysfire",
    next: "ignimoth",
    previous: "flarva",
    stage: 2,
    stats: {
      attack: 2,
      defense: 4,
      speed: 1,
    },
    tile: {
      x: 10,
      y: 200,
    },
  },
  ignimoth: {
    description:
      "It flutters, trailed by delicate blue sparks. Many Chrysfire do not survive relocation, so it is said that an Ignimoth sighting brings one good luck.",
    element: [Element.Fire, Element.Wind],
    id: "ignimoth",
    moves: [Move.Inferno, Move.Tornado],
    name: "Ignimoth",
    previous: "chrysfire",
    stage: 3,
    stats: {
      attack: 4,
      defense: 1,
      speed: 2,
    },
    tile: {
      x: 20,
      y: 200,
    },
  },
  meadowisp: {
    description:
      "A stoic spirit of nature. If you look closely, you can find it tailing far behind you as you walk the forest trails.",
    element: [Element.Earth],
    id: "meadowisp",
    moves: [Move.Blossom],
    name: "Meadowisp",
    stage: 1,
    stats: {
      attack: 4,
      defense: 4,
      speed: 1,
    },
    tile: {
      x: 0,
      y: 220,
    },
  },
  cherubud: {
    description:
      "It has a serene nature and captivating aroma that will bring peace to anyone in its presence.",
    element: [Element.Earth, Element.Light],
    id: "cherubud",
    moves: [Move.Flower, Move.Gleam],
    name: "Cherubud",
    next: "angelily",
    stage: 1,
    stats: {
      attack: 1,
      defense: 2,
      speed: 2,
    },
    tile: {
      x: 0,
      y: 240,
    },
  },
  angelily: {
    description:
      "Its many faces resemble flowers that radiate a pure and heavenly aura. Culturally, it symbolizes a return to happiness.",
    element: [Element.Earth, Element.Light],
    id: "angelily",
    moves: [Move.Blossom, Move.Starfall],
    name: "Angelily",
    previous: "cherubud",
    stage: 2,
    stats: {
      attack: 2,
      defense: 3,
      speed: 3,
    },
    tile: {
      x: 10,
      y: 240,
    },
  },
  sproutide: {
    description:
      "A playful dragon hatchling born from a river, embodying the energy of nature.",
    element: [Element.Earth, Element.Water],
    id: "sproutide",
    moves: [Move.Flower, Move.Drench],
    name: "Sproutide",
    next: "floriver",
    stage: 1,
    stats: {
      attack: 2,
      defense: 1,
      speed: 4,
    },
    tile: {
      x: 0,
      y: 260,
    },
  },
  floriver: {
    description:
      "A revered deity of the river. It manipulates the flow of water where it swims, growing lily pads in its wake.",
    element: [Element.Earth, Element.Water],
    id: "floriver",
    moves: [Move.Blossom, Move.Cascade],
    name: "Floriver",
    previous: "sproutide",
    stage: 2,
    stats: {
      attack: 4,
      defense: 2,
      speed: 2,
    },
    tile: {
      x: 10,
      y: 260,
    },
  },
  windeed: {
    description:
      "It hides among planted beetroots, zipping into the sky before it is picked.",
    element: [Element.Earth, Element.Wind],
    id: "windeed",
    moves: [Move.Flower, Move.Gust],
    name: "Windeed",
    next: "zephyroot",
    stage: 1,
    stats: {
      attack: 1,
      defense: 3,
      speed: 3,
    },
    tile: {
      x: 0,
      y: 280,
    },
  },
  zephyroot: {
    description:
      "A spring festival celebrates the migration of Zephyroot. They carry themselves on the air with a fan of leaves.",
    element: [Element.Earth, Element.Wind],
    id: "zephyroot",
    moves: [Move.Blossom, Move.Tornado],
    name: "Zephyroot",
    previous: "windeed",
    stage: 2,
    stats: {
      attack: 2,
      defense: 4,
      speed: 4,
    },
    tile: {
      x: 10,
      y: 280,
    },
  },
  flitten: {
    description:
      "It's known for its mischievous, playful nature. It manipulates your dreams, hoping to be fed when you wake.",
    element: [Element.Light],
    id: "flitten",
    moves: [Move.Gleam],
    name: "Flitten",
    next: "glimmew",
    stage: 1,
    stats: {
      attack: 3,
      defense: 2,
      speed: 2,
    },
    tile: {
      x: 0,
      y: 300,
    },
  },
  glimmew: {
    description:
      "Nocturnal, its luminescent fur glimmers in the moonlight, charming opponents with its graceful movements.",
    element: [Element.Light],
    id: "glimmew",
    moves: [Move.Starfall],
    name: "Glimmew",
    previous: "flitten",
    stage: 2,
    stats: {
      attack: 4,
      defense: 2,
      speed: 3,
    },
    tile: {
      x: 10,
      y: 300,
    },
  },
  silten: {
    description:
      "It posesses a protective shell that provides for it remarkable resilience and adaptability.",
    element: [Element.Light, Element.Water],
    id: "silten",
    moves: [Move.Twinkle, Move.Soak],
    name: "Silten",
    next: "boglow",
    stage: 1,
    stats: {
      attack: 1,
      defense: 3,
      speed: 2,
    },
    tile: {
      x: 0,
      y: 320,
    },
  },
  boglow: {
    description:
      "A tiny luminescent creature with a resilient body. It thrives in extreme aquatic environments.",
    element: [Element.Light, Element.Water],
    id: "boglow",
    moves: [Move.Gleam, Move.Drench],
    name: "Boglow",
    next: "gleamoss",
    previous: "silten",
    stage: 2,
    stats: {
      attack: 2,
      defense: 4,
      speed: 2,
    },
    tile: {
      x: 10,
      y: 320,
    },
  },
  gleamoss: {
    description:
      "Its shimmering moss-like exterior grants it the ability to regenerate and endure harsh environments. It is not visible to the naked eye.",
    element: [Element.Light, Element.Water],
    id: "gleamoss",
    moves: [Move.Starfall, Move.Cascade],
    name: "Gleamoss",
    previous: "boglow",
    stage: 3,
    stats: {
      attack: 3,
      defense: 4,
      speed: 1,
    },
    tile: {
      x: 20,
      y: 320,
    },
  },
  amazwing: {
    description:
      "Tales of cupid can usually be attributed to Amazwing. It spreads love and joy as it flies.",
    element: [Element.Light, Element.Wind],
    id: "amazwing",
    moves: [Move.Twinkle, Move.Breeze],
    name: "Amazwing",
    next: "featherall",
    stage: 1,
    stats: {
      attack: 1,
      defense: 1,
      speed: 4,
    },
    tile: {
      x: 0,
      y: 340,
    },
  },
  featherall: {
    description:
      "It enchants the hearts of those it pierces with its tail feathers.",
    element: [Element.Light, Element.Wind],
    id: "featherall",
    moves: [Move.Gleam, Move.Gust],
    name: "Featherall",
    next: "enchantalon",
    previous: "amazwing",
    stage: 2,
    stats: {
      attack: 2,
      defense: 2,
      speed: 4,
    },
    tile: {
      x: 10,
      y: 340,
    },
  },
  enchantalon: {
    description:
      "It is a graceful and affectionate parter, but it lulls its enemies into a false sense of security with its enchanting melodies.",
    element: [Element.Light, Element.Wind],
    id: "enchantalon",
    moves: [Move.Starfall, Move.Tornado],
    name: "Enchantalon",
    previous: "featherall",
    stage: 3,
    stats: {
      attack: 3,
      defense: 3,
      speed: 4,
    },
    tile: {
      x: 20,
      y: 340,
    },
  },
  luxureef: {
    description:
      "Vibrant coral climbs its body. It is capable of producing captivating displays of bioluminescence.",
    element: [Element.Water],
    id: "luxureef",
    moves: [Move.Drench],
    name: "Luxureef",
    next: "coraluxe",
    stage: 1,
    stats: {
      attack: 2,
      defense: 3,
      speed: 2,
    },
    tile: {
      x: 0,
      y: 360,
    },
  },
  coraluxe: {
    description:
      "It can manipulate the flow of water currents, which often results in conflict with Floriver. Whirlpools form where they clash.",
    element: [Element.Water],
    id: "coraluxe",
    moves: [Move.Cascade],
    name: "Coraluxe",
    previous: "luxureef",
    stage: 2,
    stats: {
      attack: 3,
      defense: 4,
      speed: 3,
    },
    tile: {
      x: 10,
      y: 360,
    },
  },
  galephin: {
    description:
      "Its sleek dolphin-like body allows it to soar through the sky. Funnel clouds form in its trail.",
    element: [Element.Water, Element.Wind],
    id: "galephin",
    moves: [Move.Drench, Move.Gust],
    name: "Galephin",
    next: "typhorca",
    stage: 1,
    stats: {
      attack: 3,
      defense: 1,
      speed: 3,
    },
    tile: {
      x: 0,
      y: 380,
    },
  },
  typhorca: {
    description:
      "Gliding through the air with agility, it uses its windswept tail to create powerful gusts and summon storms at sea.",
    element: [Element.Water, Element.Wind],
    id: "typhorca",
    moves: [Move.Cascade, Move.Tornado],
    name: "Typhorca",
    previous: "galephin",
    stage: 2,
    stats: {
      attack: 3,
      defense: 1,
      speed: 4,
    },
    tile: {
      x: 10,
      y: 380,
    },
  },
  lopilot: {
    description:
      "Its large ears allow it to effortlessly navigate the winds. Lost travelers are guided by Lopilot to safety.",
    element: [Element.Wind],
    id: "lopilot",
    moves: [Move.Gust],
    name: "Lopilot",
    next: "aviare",
    stage: 1,
    stats: {
      attack: 2,
      defense: 2,
      speed: 3,
    },
    tile: {
      x: 0,
      y: 400,
    },
  },
  aviare: {
    description:
      "A skilled pilot of the skies, it is rare to see Aviare on solid ground. Its fur has evolved to resemble fluffy clouds.",
    element: [Element.Wind],
    id: "aviare",
    moves: [Move.Tornado],
    name: "Aviare",
    previous: "lopilot",
    stage: 2,
    stats: {
      attack: 3,
      defense: 2,
      speed: 4,
    },
    tile: {
      x: 10,
      y: 400,
    },
  },
};

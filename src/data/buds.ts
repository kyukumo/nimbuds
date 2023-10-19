import { Bud, Element } from "../types";

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
    name: "Spookecko",
    next: "shadile",
    tile: {
      x: 0,
      y: 0,
    },
    stats: {
      attack: 2,
      defense: 2,
      speed: 1,
    },
  },
  shadile: {
    description:
      "It lurks in the depths of the night, preying on the fears and weaknesses of its opponents with its sinister powers.",
    element: [Element.Dark],
    id: "shadile",
    name: "Shadile",
    next: "spectraptor",
    previous: "spookecko",
    tile: {
      x: 10,
      y: 0,
    },
    stats: {
      attack: 3,
      defense: 2,
      speed: 1,
    },
  },
  spectraptor: {
    description:
      "If you feel a sudden chill, you may be experiencing the ghostly aura of this sinister raptor, silently stalking its prey.",
    element: [Element.Dark],
    id: "spectraptor",
    name: "Spectraptor",
    previous: "shadile",
    tile: {
      x: 20,
      y: 0,
    },
    stats: {
      attack: 4,
      defense: 3,
      speed: 1,
    },
  },
  smoldit: {
    description: "The smoldering embodiment of lingering spectral energy.",
    element: [Element.Dark, Element.Fire],
    id: "smoldit",
    name: "Smoldit",
    next: "embergeist",
    tile: {
      x: 0,
      y: 20,
    },
    stats: {
      attack: 1,
      defense: 1,
      speed: 3,
    },
  },
  embergeist: {
    description:
      "Flickering, mysterious flames that haunt their surroundings with an ominous presence.",
    element: [Element.Dark, Element.Fire],
    id: "embergeist",
    name: "Embergeist",
    previous: "smoldit",
    tile: {
      x: 10,
      y: 20,
    },
    stats: {
      attack: 2,
      defense: 3,
      speed: 4,
    },
  },
  specalf: {
    description:
      "Awaiting the return of its doting parent, this bovine animal conceals itself beneath a veil of spectral flora.",
    element: [Element.Dark, Element.Earth],
    id: "specalf",
    name: "Specalf",
    next: "thornox",
    tile: {
      x: 0,
      y: 40,
    },
    stats: {
      attack: 2,
      defense: 3,
      speed: 1,
    },
  },
  thornox: {
    description:
      "It seeks to exact revenge on anyone it can find using its razor-sharp thorns.",
    element: [Element.Dark, Element.Earth],
    id: "thornox",
    name: "Thornox",
    previous: "specalf",
    tile: {
      x: 10,
      y: 40,
    },
    stats: {
      attack: 3,
      defense: 4,
      speed: 2,
    },
  },
  voidixie: {
    description:
      "The few who have witnessed its otherworldly aura have professed conflicting feelings of curiosity and trepidation.",
    element: [Element.Dark, Element.Light],
    id: "voidixie",
    name: "Voidixie",
    next: "faeclipse",
    tile: {
      x: 0,
      y: 60,
    },
    stats: {
      attack: 2,
      defense: 1,
      speed: 2,
    },
  },
  faeclipse: {
    description:
      "Hauntingly sinister, menacing, and alluring. It has an aura of cosmic destruction.",
    element: [Element.Dark, Element.Light],
    id: "faeclipse",
    name: "Faeclipse",
    previous: "voidixie",
    tile: {
      x: 10,
      y: 60,
    },
    stats: {
      attack: 4,
      defense: 1,
      speed: 3,
    },
  },
  gloominnow: {
    description:
      "A glint from its shimmering, iridescent scales will catch your eye from deep below the waters.",
    element: [Element.Dark, Element.Water],
    id: "gloominnow",
    name: "Gloominnow",
    next: "barrabyss",
    tile: {
      x: 0,
      y: 80,
    },
    stats: {
      attack: 1,
      defense: 1,
      speed: 2,
    },
  },
  barrabyss: {
    description:
      "Be careful where you swim. Legend has it that when you see its eerie, glowing eyes, it's already too late for you.",
    element: [Element.Dark, Element.Water],
    id: "barrabyss",
    name: "Barrabyss",
    next: "umbracuda",
    previous: "gloominnow",
    tile: {
      x: 10,
      y: 80,
    },
    stats: {
      attack: 2,
      defense: 1,
      speed: 3,
    },
  },
  umbracuda: {
    description:
      "Its sleek, etherial fins cascade through the water, appearing in and vanishing from the ocean at will.",
    element: [Element.Dark, Element.Water],
    id: "umbracuda",
    name: "Umbracuda",
    previous: "barrabyss",
    tile: {
      x: 20,
      y: 80,
    },
    stats: {
      attack: 4,
      defense: 1,
      speed: 4,
    },
  },
  nebulon: {
    description:
      "Often mistaken for an unidentified flying object, it has a markedly unassuming face.",
    element: [Element.Dark, Element.Wind],
    id: "nebulon",
    name: "Nebulon",
    next: "nebulisk",
    tile: {
      x: 0,
      y: 100,
    },
    stats: {
      attack: 1,
      defense: 4,
      speed: 2,
    },
  },
  nebulisk: {
    description:
      "Seemingly extraterrestrial, it is highly skilled in piloting its sleek spacecraft.",
    element: [Element.Dark, Element.Wind],
    id: "nebulisk",
    name: "Nebulisk",
    previous: "nebulon",
    tile: {
      x: 10,
      y: 100,
    },
    stats: {
      attack: 3,
      defense: 3,
      speed: 3,
    },
  },
  snakelit: {
    description: "An emerald, fiery glow emits from this serpentine creature.",
    element: [Element.Fire],
    id: "snakelit",
    name: "Snakelit",
    next: "serpyro",
    tile: {
      x: 0,
      y: 120,
    },
    stats: {
      attack: 2,
      defense: 2,
      speed: 2,
    },
  },
  serpyro: {
    description:
      "It uses the scorching jade flames emitting from its tail to extinguish its opponents.",
    element: [Element.Fire],
    id: "serpyro",
    name: "Serpyro",
    next: "pyroconda",
    previous: "snakelit",
    tile: {
      x: 10,
      y: 120,
    },
    stats: {
      attack: 3,
      defense: 2,
      speed: 3,
    },
  },
  pyroconda: {
    description:
      "Majestic, some consider it a deity. Its fiery plumage exudes power and grace.",
    element: [Element.Fire],
    id: "pyroconda",
    name: "Pyroconda",
    previous: "serpyro",
    tile: {
      x: 20,
      y: 120,
    },
    stats: {
      attack: 4,
      defense: 2,
      speed: 4,
    },
  },
  oakindle: {
    description: "A small seedling engulfed in flames.",
    element: [Element.Earth, Element.Fire],
    id: "oakindle",
    name: "Oakindle",
    next: "torchwood",
    tile: {
      x: 0,
      y: 140,
    },
    stats: {
      attack: 3,
      defense: 1,
      speed: 1,
    },
  },
  torchwood: {
    description:
      "It is fiercely loyal to mother nature, using her powers to protect those it considers vulnerable.",
    element: [Element.Earth, Element.Fire],
    id: "torchwood",
    name: "Torchwood",
    previous: "oakindle",
    tile: {
      x: 10,
      y: 140,
    },
    stats: {
      attack: 4,
      defense: 1,
      speed: 1,
    },
  },
  wispyre: {
    description:
      "It's playful and mischievous, dazzling its opponents with sublime flames and whimsical charm.",
    element: [Element.Fire, Element.Light],
    id: "wispyre",
    name: "Wispyre",
    tile: {
      x: 0,
      y: 160,
    },
    stats: {
      attack: 4,
      defense: 3,
      speed: 4,
    },
  },
  flagoon: {
    description:
      "It releases infernal steam to drive intruders away from its den.",
    element: [Element.Fire, Element.Water],
    id: "flagoon",
    name: "Flagoon",
    next: "blazesea",
    tile: {
      x: 0,
      y: 180,
    },
    stats: {
      attack: 1,
      defense: 2,
      speed: 3,
    },
  },
  blazesea: {
    description:
      "It is widely known that Blazesea should not be approached. It unceasingly combusts as it maintains a cooling aura of water around its body.",
    element: [Element.Fire, Element.Water],
    id: "blazesea",
    name: "Blazesea",
    next: "infernocean",
    previous: "flagoon",
    tile: {
      x: 10,
      y: 180,
    },
    stats: {
      attack: 3,
      defense: 1,
      speed: 2,
    },
  },
  infernocean: {
    description:
      "It is described as titanic, commanding the destructive power of roaring tides and wildfire.",
    element: [Element.Fire, Element.Water],
    id: "infernocean",
    name: "Infernocean",
    previous: "blazesea",
    tile: {
      x: 20,
      y: 180,
    },
    stats: {
      attack: 4,
      defense: 2,
      speed: 1,
    },
  },
  flarva: {
    description:
      "On a clear summer night, you can see the faint blue glow of Flarva swarming on the trees.",
    element: [Element.Fire, Element.Wind],
    id: "flarva",
    name: "Flarva",
    next: "chrysfire",
    tile: {
      x: 0,
      y: 200,
    },
    stats: {
      attack: 1,
      defense: 2,
      speed: 1,
    },
  },
  chrysfire: {
    description:
      "Its shell is warm to the touch. Wildfire experts relocate Chrysfire away from forests before they hatch.",
    element: [Element.Fire, Element.Wind],
    id: "chrysfire",
    name: "Chrysfire",
    next: "ignimoth",
    previous: "flarva",
    tile: {
      x: 10,
      y: 200,
    },
    stats: {
      attack: 2,
      defense: 4,
      speed: 1,
    },
  },
  ignimoth: {
    description:
      "It flutters, trailed by delicate blue sparks. Many Chrysfire do not survive relocation, so it is said that an Ignimoth sighting brings one good luck.",
    element: [Element.Fire, Element.Wind],
    id: "ignimoth",
    name: "Ignimoth",
    previous: "chrysfire",
    tile: {
      x: 20,
      y: 200,
    },
    stats: {
      attack: 4,
      defense: 1,
      speed: 2,
    },
  },
  meadowisp: {
    description:
      "A stoic spirit of nature. If you look closely, you can find it tailing far behind you as you walk the forest trails.",
    element: [Element.Earth],
    id: "meadowisp",
    name: "Meadowisp",
    tile: {
      x: 0,
      y: 220,
    },
    stats: {
      attack: 4,
      defense: 4,
      speed: 1,
    },
  },
  cherubud: {
    description:
      "It has a serene nature and captivating aroma that will bring peace to anyone in its presence.",
    element: [Element.Earth, Element.Light],
    id: "cherubud",
    name: "Cherubud",
    next: "angelily",
    tile: {
      x: 0,
      y: 240,
    },
    stats: {
      attack: 1,
      defense: 2,
      speed: 2,
    },
  },
  angelily: {
    description:
      "Its many faces resemble flowers that radiate a pure and heavenly aura. Culturally, it symbolizes a return to happiness.",
    element: [Element.Earth, Element.Light],
    id: "angelily",
    name: "Angelily",
    previous: "cherubud",
    tile: {
      x: 10,
      y: 240,
    },
    stats: {
      attack: 2,
      defense: 3,
      speed: 3,
    },
  },
  sproutide: {
    description:
      "A playful dragon hatchling born from a river, embodying the energy of nature.",
    element: [Element.Earth, Element.Water],
    id: "sproutide",
    name: "Sproutide",
    next: "floriver",
    tile: {
      x: 0,
      y: 260,
    },
    stats: {
      attack: 2,
      defense: 1,
      speed: 4,
    },
  },
  floriver: {
    description:
      "A revered deity of the river. It manipulates the flow of water where it swims, growing lily pads in its wake.",
    element: [Element.Earth, Element.Water],
    id: "floriver",
    name: "Floriver",
    previous: "sproutide",
    tile: {
      x: 10,
      y: 260,
    },
    stats: {
      attack: 4,
      defense: 2,
      speed: 2,
    },
  },
  windeed: {
    description:
      "It hides among planted beetroots, zipping into the sky before it is picked.",
    element: [Element.Earth, Element.Wind],
    id: "windeed",
    name: "Windeed",
    next: "zephyroot",
    tile: {
      x: 0,
      y: 280,
    },
    stats: {
      attack: 1,
      defense: 3,
      speed: 3,
    },
  },
  zephyroot: {
    description:
      "A spring festival celebrates the migration of Zephyroot. They carry themselves on the air with a fan of leaves.",
    element: [Element.Earth, Element.Wind],
    id: "zephyroot",
    name: "Zephyroot",
    previous: "windeed",
    tile: {
      x: 10,
      y: 280,
    },
    stats: {
      attack: 2,
      defense: 4,
      speed: 4,
    },
  },
  flitten: {
    description:
      "It's known for its mischievous, playful nature. It manipulates your dreams, hoping to be fed when you wake.",
    element: [Element.Light],
    id: "flitten",
    name: "Flitten",
    next: "glimmew",
    tile: {
      x: 0,
      y: 300,
    },
    stats: {
      attack: 3,
      defense: 2,
      speed: 2,
    },
  },
  glimmew: {
    description:
      "Nocturnal, its luminescent fur glimmers in the moonlight, charming opponents with its graceful movements.",
    element: [Element.Light],
    id: "glimmew",
    name: "Glimmew",
    previous: "flitten",
    tile: {
      x: 10,
      y: 300,
    },
    stats: {
      attack: 4,
      defense: 2,
      speed: 3,
    },
  },
  silten: {
    description:
      "It posesses a protective shell that provides for it remarkable resilience and adaptability.",
    element: [Element.Light, Element.Water],
    id: "silten",
    name: "Silten",
    next: "boglow",
    tile: {
      x: 0,
      y: 320,
    },
    stats: {
      attack: 1,
      defense: 3,
      speed: 2,
    },
  },
  boglow: {
    description:
      "A tiny luminescent creature with a resilient body. It thrives in extreme aquatic environments.",
    element: [Element.Light, Element.Water],
    id: "boglow",
    name: "Boglow",
    next: "gleamoss",
    previous: "silten",
    tile: {
      x: 10,
      y: 320,
    },
    stats: {
      attack: 2,
      defense: 4,
      speed: 2,
    },
  },
  gleamoss: {
    description:
      "Its shimmering moss-like exterior grants it the ability to regenerate and endure harsh environments. It is not visible to the naked eye.",
    element: [Element.Light, Element.Water],
    id: "gleamoss",
    name: "Gleamoss",
    previous: "boglow",
    tile: {
      x: 20,
      y: 320,
    },
    stats: {
      attack: 3,
      defense: 4,
      speed: 1,
    },
  },
  amazwing: {
    description:
      "Tales of cupid can usually be attributed to Amazwing. It spreads love and joy as it flies.",
    element: [Element.Light, Element.Wind],
    id: "amazwing",
    name: "Amazwing",
    next: "featherall",
    tile: {
      x: 0,
      y: 340,
    },
    stats: {
      attack: 1,
      defense: 1,
      speed: 4,
    },
  },
  featherall: {
    description:
      "It enchants the hearts of those it pierces with its tail feathers.",
    element: [Element.Light, Element.Wind],
    id: "featherall",
    name: "Featherall",
    next: "enchantalon",
    previous: "amazwing",
    tile: {
      x: 10,
      y: 340,
    },
    stats: {
      attack: 2,
      defense: 2,
      speed: 4,
    },
  },
  enchantalon: {
    description:
      "It is a graceful and affectionate parter, but it lulls its enemies into a false sense of security with its enchanting melodies.",
    element: [Element.Light, Element.Wind],
    id: "enchantalon",
    name: "Enchantalon",
    previous: "featherall",
    tile: {
      x: 20,
      y: 340,
    },
    stats: {
      attack: 3,
      defense: 3,
      speed: 4,
    },
  },
  luxureef: {
    description:
      "Vibrant coral climbs its body. It is capable of producing captivating displays of bioluminescence.",
    element: [Element.Water],
    id: "luxureef",
    name: "Luxureef",
    next: "coraluxe",
    tile: {
      x: 0,
      y: 360,
    },
    stats: {
      attack: 2,
      defense: 3,
      speed: 2,
    },
  },
  coraluxe: {
    description:
      "It can manipulate the flow of water currents, which often results in conflict with Floriver. Whirlpools form where they clash.",
    element: [Element.Water],
    id: "coraluxe",
    name: "Coraluxe",
    previous: "luxureef",
    tile: {
      x: 10,
      y: 360,
    },
    stats: {
      attack: 3,
      defense: 4,
      speed: 3,
    },
  },
  galephin: {
    description:
      "Its sleek dolphin-like body allows it to soar through the sky. Funnel clouds form behind it.",
    element: [Element.Water, Element.Wind],
    id: "galephin",
    name: "Galephin",
    next: "typhorca",
    tile: {
      x: 0,
      y: 380,
    },
    stats: {
      attack: 3,
      defense: 1,
      speed: 3,
    },
  },
  typhorca: {
    description:
      "Gliding through the air with agility, it uses its windswept tail to create powerful gusts and summon storms at sea.",
    element: [Element.Water, Element.Wind],
    id: "typhorca",
    name: "Typhorca",
    previous: "galephin",
    tile: {
      x: 10,
      y: 380,
    },
    stats: {
      attack: 3,
      defense: 1,
      speed: 4,
    },
  },
  lopilot: {
    description:
      "Its large ears allow it to effortlessly navigate the winds. Lost travelers are guided by Lopilot to safety.",
    element: [Element.Wind],
    id: "lopilot",
    name: "Lopilot",
    next: "aviare",
    tile: {
      x: 0,
      y: 400,
    },
    stats: {
      attack: 2,
      defense: 2,
      speed: 3,
    },
  },
  aviare: {
    description:
      "A skilled pilot of the skies, it is rare to see Aviare on solid ground. Its fur has evolved to resemble fluffy clouds.",
    element: [Element.Wind],
    id: "aviare",
    name: "Aviare",
    previous: "lopilot",
    tile: {
      x: 10,
      y: 400,
    },
    stats: {
      attack: 3,
      defense: 2,
      speed: 4,
    },
  },
};

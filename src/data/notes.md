Spookecko
Shadile
Spectraptor (dark)

Smoldit
Embergeist (dark/fire)

Specalf
Thornox (dark/earth)

Voidixie
Faeclipse (dark/light)

Gloominnow
Barrabyss
Umbracuda (dark/water)

Nebulon
Nebulisk (dark/wind)

Snakelit
Serpyro
Pyroconda (fire)

Oakindle
Torchwood (fire/earth)

Wispyre (fire/light)

Flagoon
Blazesea
Infernocean (fire/water)

Flarva
Chrysfire
Ignimoth (fire/wind)

Meadowisp (earth)

Cherubud
Angelily (earth/light)

Sproutide
Floriver (earth/water)

Windeed
Zephyroot (earth/wind)

Flitten
Glimmew (light)

Silten
Boglow
Gleamoss (light/water)

Amazwing
Featherall
Enchantalon (light/wind)

Luxureef
Coraluxe (water)

Galephin
Typhorca (water/wind)

Lopilot
Aviare (wind)

|       | dark | light | fire | water | earth | wind |
| ----- | ---- | ----- | ---- | ----- | ----- | ---- |
| dark  |      | 2     |      |       |       |      |
| light | 2    |       |      |       |       |      |
| fire  |      |       |      | 2     |       | .5   |
| water |      |       | .5   |       | 2     |      |
| earth |      |       |      | .5    |       | 2    |
| wind  |      |       | 2    |       | .5    |      |

(dark)
strong: light
weak: light
resist: n/a

(dark/fire)
strong: light, wind
weak: light, water
resist: wind

(dark/earth)
strong: light, water
weak: light, wind
resist: water

(dark/light)
strong: dark, light
weak: dark, light
resist: n/a

(dark/water)
strong: light, fire
weak: light, earth
resist: fire

(dark/wind)
strong: light, earth
weak: light, fire
resist: earth

(fire)
strong: wind
weak: water
resist: wind

(fire/light)
strong: wind, dark
weak: water, dark
resist: wind

(fire/water)
strong: wind, fire
weak: earth
resist: wind, fire

(fire/wind)
strong: wind, earth
weak: water
resist: wind, earth

(earth/light)
strong: water, dark
weak: wind, dark
resist: water

(earth/water)
strong: water, fire
weak: wind
resist: water, fire

(light/water)
strong: dark, fire
weak: dark, earth
resist: fire

(light/wind)
strong: dark, earth
weak: dark, fire
resist: earth

(earth/wind)
strong: water, earth
weak: fire
resist: water, earth

(water/wind)
strong: fire, earth
weak: n/a
resist: fire, earth

(fire/earth)
strong: wind, water
weak: n/a
resist: wind, water

(wind)
strong: earth
weak: fire
resist: earth

(water)
strong: fire
weak: earth
resist: fire

(light)
strong: dark
weak: dark
resist: n/a

(earth)
strong: water
weak: wind
resist: water

---

Train

Rival

> Trade
> Taunt

```
if (attack >= defense) {
    damage = attack * 2 - defense;
} else {
    damage = attack * attack / defense;
}

damage = (a.atk * 4) - (b.def * 2);

xpNeededToLevelUp = currentLevel^x + C
levelUpXP = (lastLevel + currentlevel) \* 1.2

https://howtomakeanrpg.com/a/how-to-make-an-rpg-levels.html
function nextLevel(level)
    return round((4 \* (level ^ 3)) / 5)
end

(stat * 1.5) * level = stat scale

HP
floor(((B × 2) × L) ÷ 10) + L + 4.
Math.floor(((base * 2) * level) / 10) + level + 4

Attack, Defense, Speed
floor(((B × 2) × L) ÷ 10) + 2
Math.floor(((base * 2) * level) / 10) + 2
```

```
damage = attack >= defense
    ? (attack * 2 - defense)
    : (attack * attack / defense)

//hp
Math.floor((level * 2) / 10) + level + 4

//stats
Math.floor(((base * 2) * level) / 10) + 2
```

moves & cooldowns based on speed
maybe moves are just named after elements
defend increase defense temporarily

---

- gloom
- shade
- eclipse

- twinkle
- gleam
- starfall

- ignite
- blaze
- inferno

- soak
- drench
- cascade

- seed
- flower
- blossom

- breeze
- gust
- tornado

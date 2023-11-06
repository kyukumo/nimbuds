var e=(t=>(t.Dark="dark",t.Earth="earth",t.Fire="fire",t.Light="light",t.Water="water",t.Wind="wind",t))(e||{}),a=(t=>(t.Blaze="blaze",t.Blossom="blossom",t.Breeze="breeze",t.Cascade="cascade",t.Drench="drench",t.Eclipse="eclipse",t.Flower="flower",t.Gleam="gleam",t.Gloom="gloom",t.Gust="gust",t.Ignite="ignite",t.Inferno="inferno",t.Seed="seed",t.Shade="shade",t.Soak="soak",t.Starfall="starfall",t.Tornado="tornado",t.Twinkle="twinkle",t))(a||{}),T=(t=>(t.Four="Four",t.Three="Three",t.Two="Two",t))(T||{}),g=(t=>(t.Train="train",t.Battle="battle",t))(g||{});const G=100,z=3,x=["amazwing","cherubud","flagoon","flarva","flitten","galephin","gloominnow","lopilot","luxureef","meadowisp","nebulon","oakindle","silten","smoldit","snakelit","specalf","spookecko","sproutide","voidixie","windeed","wispyre"],F={spookecko:{advantage:[],ascends:3,description:"This mysterious and eerie reptile lurks in the shadows, using its ghastly powers to frighten and confuse opponents.",disadvantage:[e.Light],element:[e.Dark],id:"spookecko",moves:[a.Gloom],name:"Spookecko",next:"shadile",stage:1,stats:{attack:2,defense:2,speed:1},tile:{x:0,y:0}},shadile:{advantage:[],ascends:4,description:"It lurks in the depths of the night, preying on the fears and weaknesses of its opponents with its sinister powers.",disadvantage:[e.Light],element:[e.Dark],id:"shadile",moves:[a.Shade],name:"Shadile",next:"spectraptor",previous:"spookecko",stage:2,stats:{attack:3,defense:2,speed:1},tile:{x:10,y:0}},spectraptor:{advantage:[],description:"If you feel a sudden chill, you may be experiencing the ghostly aura of this sinister raptor, silently stalking its prey.",disadvantage:[e.Light],element:[e.Dark],id:"spectraptor",moves:[a.Eclipse],name:"Spectraptor",previous:"shadile",stage:3,stats:{attack:4,defense:3,speed:1},tile:{x:20,y:0}},smoldit:{advantage:[e.Wind],ascends:7,description:"The smoldering embodiment of lingering spectral energy.",disadvantage:[e.Light,e.Water],element:[e.Dark,e.Fire],id:"smoldit",moves:[a.Blaze],name:"Smoldit",next:"embergeist",stage:1,stats:{attack:1,defense:1,speed:3},tile:{x:0,y:20}},embergeist:{advantage:[e.Wind],description:"Flickering, mysterious flames that haunt their surroundings with an ominous presence.",disadvantage:[e.Light,e.Water],element:[e.Dark,e.Fire],id:"embergeist",moves:[a.Inferno],name:"Embergeist",previous:"smoldit",stage:2,stats:{attack:2,defense:3,speed:4},tile:{x:10,y:20}},specalf:{advantage:[e.Water],ascends:5,description:"Awaiting the return of its doting parent, this bovine animal conceals itself beneath a veil of spectral flora.",disadvantage:[e.Light,e.Wind],element:[e.Dark,e.Earth],id:"specalf",moves:[a.Shade,a.Flower],name:"Specalf",next:"thornox",stage:1,stats:{attack:2,defense:3,speed:1},tile:{x:0,y:40}},thornox:{advantage:[e.Water],description:"It seeks to exact revenge on anyone it can find using its razor-sharp thorns.",disadvantage:[e.Light,e.Wind],element:[e.Dark,e.Earth],id:"thornox",moves:[a.Eclipse,a.Blossom],name:"Thornox",previous:"specalf",stage:2,stats:{attack:3,defense:4,speed:2},tile:{x:10,y:40}},voidixie:{advantage:[],ascends:7,description:"Few have witnessed its otherworldly aura, professing conflicting feelings of curiosity and trepidation.",disadvantage:[e.Dark,e.Light],element:[e.Dark,e.Light],id:"voidixie",moves:[a.Shade,a.Gleam],name:"Voidixie",next:"faeclipse",stage:1,stats:{attack:2,defense:1,speed:2},tile:{x:0,y:60}},faeclipse:{advantage:[],description:"Hauntingly sinister, menacing, and alluring. It has an aura of cosmic destruction.",disadvantage:[e.Dark,e.Light],element:[e.Dark,e.Light],id:"faeclipse",moves:[a.Eclipse,a.Starfall],name:"Faeclipse",previous:"voidixie",stage:2,stats:{attack:4,defense:1,speed:3},tile:{x:10,y:60}},gloominnow:{advantage:[e.Fire],ascends:5,description:"A glint from its shimmering, iridescent scales will catch your eye from deep below the waters.",disadvantage:[e.Earth,e.Light],element:[e.Dark,e.Water],id:"gloominnow",moves:[a.Gloom,a.Soak],name:"Gloominnow",next:"barrabyss",stage:1,stats:{attack:1,defense:1,speed:2},tile:{x:0,y:80}},barrabyss:{advantage:[e.Fire],ascends:8,description:"Be careful where you swim. Legend has it that when you see its eerie, glowing eyes, it's already too late for you.",disadvantage:[e.Earth,e.Light],element:[e.Dark,e.Water],id:"barrabyss",moves:[a.Shade,a.Drench],name:"Barrabyss",next:"umbracuda",previous:"gloominnow",stage:2,stats:{attack:2,defense:1,speed:3},tile:{x:10,y:80}},umbracuda:{advantage:[e.Fire],description:"Its sleek, etherial fins cascade through the water, appearing in and vanishing from the ocean at will.",disadvantage:[e.Earth,e.Light],element:[e.Dark,e.Water],id:"umbracuda",moves:[a.Eclipse,a.Cascade],name:"Umbracuda",previous:"barrabyss",stage:3,stats:{attack:4,defense:1,speed:4},tile:{x:20,y:80}},nebulon:{advantage:[e.Earth],ascends:6,description:"Often mistaken for an unidentified flying object, it has a markedly unassuming face.",disadvantage:[e.Fire,e.Light],element:[e.Dark,e.Wind],id:"nebulon",moves:[a.Shade,a.Gust],name:"Nebulon",next:"nebulisk",stage:1,stats:{attack:1,defense:4,speed:2},tile:{x:0,y:100}},nebulisk:{advantage:[e.Earth],description:"Seemingly extraterrestrial, it is highly skilled in piloting its sleek spacecraft.",disadvantage:[e.Fire,e.Light],element:[e.Dark,e.Wind],id:"nebulisk",moves:[a.Eclipse,a.Tornado],name:"Nebulisk",previous:"nebulon",stage:2,stats:{attack:3,defense:3,speed:3},tile:{x:10,y:100}},snakelit:{advantage:[e.Wind],ascends:4,description:"An emerald, fiery glow emits from this serpentine creature.",disadvantage:[e.Water],element:[e.Fire],id:"snakelit",moves:[a.Ignite],name:"Snakelit",next:"serpyro",stage:1,stats:{attack:2,defense:2,speed:2},tile:{x:0,y:120}},serpyro:{advantage:[e.Wind],ascends:8,description:"It uses the scorching jade flames emitting from its tail to extinguish its opponents.",disadvantage:[e.Water],element:[e.Fire],id:"serpyro",moves:[a.Blaze],name:"Serpyro",next:"pyroconda",previous:"snakelit",stage:2,stats:{attack:3,defense:2,speed:3},tile:{x:10,y:120}},pyroconda:{advantage:[e.Wind],description:"Majestic, some consider it a deity. Its fiery plumage exudes power and grace.",disadvantage:[e.Water],element:[e.Fire],id:"pyroconda",moves:[a.Inferno],name:"Pyroconda",previous:"serpyro",stage:3,stats:{attack:4,defense:2,speed:4},tile:{x:20,y:120}},oakindle:{advantage:[e.Water,e.Wind],ascends:5,description:"A small seedling engulfed in flames.",disadvantage:[],element:[e.Earth,e.Fire],id:"oakindle",moves:[a.Flower,a.Blaze],name:"Oakindle",next:"torchwood",stage:1,stats:{attack:3,defense:1,speed:1},tile:{x:0,y:140}},torchwood:{advantage:[e.Water,e.Wind],description:"It is fiercely loyal to mother nature, using her powers to protect those it considers vulnerable.",disadvantage:[],element:[e.Earth,e.Fire],id:"torchwood",moves:[a.Blossom,a.Inferno],name:"Torchwood",previous:"oakindle",stage:2,stats:{attack:4,defense:1,speed:1},tile:{x:10,y:140}},wispyre:{advantage:[e.Wind],description:"It's playful and mischievous, dazzling its opponents with sublime flames and whimsical charm.",disadvantage:[e.Dark,e.Water],element:[e.Fire,e.Light],id:"wispyre",moves:[a.Inferno,a.Starfall],name:"Wispyre",stage:1,stats:{attack:4,defense:3,speed:4},tile:{x:0,y:160}},flagoon:{advantage:[e.Fire,e.Wind],ascends:4,description:"It releases infernal steam to drive intruders away from its den.",disadvantage:[e.Earth],element:[e.Fire,e.Water],id:"flagoon",moves:[a.Ignite,a.Soak],name:"Flagoon",next:"blazesea",stage:1,stats:{attack:1,defense:2,speed:3},tile:{x:0,y:180}},blazesea:{advantage:[e.Fire,e.Wind],ascends:8,description:"It is widely known that Blazesea should not be approached. It unceasingly combusts as it maintains a cooling aura of water around its body.",disadvantage:[e.Earth],element:[e.Fire,e.Water],id:"blazesea",moves:[a.Blaze,a.Drench],name:"Blazesea",next:"infernocean",previous:"flagoon",stage:2,stats:{attack:3,defense:1,speed:2},tile:{x:10,y:180}},infernocean:{advantage:[e.Fire,e.Wind],description:"It is described as titanic, commanding the destructive power of roaring tides and wildfire.",disadvantage:[e.Earth],element:[e.Fire,e.Water],id:"infernocean",moves:[a.Inferno,a.Cascade],name:"Infernocean",previous:"blazesea",stage:3,stats:{attack:4,defense:2,speed:1},tile:{x:20,y:180}},flarva:{advantage:[e.Earth,e.Wind],ascends:3,description:"On a clear summer night, you can see the faint blue glow of Flarva swarming on the trees.",disadvantage:[e.Water],element:[e.Fire,e.Wind],id:"flarva",moves:[a.Ignite,a.Breeze],name:"Flarva",next:"chrysfire",stage:1,stats:{attack:1,defense:2,speed:1},tile:{x:0,y:200}},chrysfire:{advantage:[e.Earth,e.Wind],ascends:6,description:"Its shell is warm to the touch. Wildfire experts relocate Chrysfire away from forests before they hatch.",disadvantage:[e.Water],element:[e.Fire,e.Wind],id:"chrysfire",moves:[a.Blaze,a.Gust],name:"Chrysfire",next:"ignimoth",previous:"flarva",stage:2,stats:{attack:2,defense:4,speed:1},tile:{x:10,y:200}},ignimoth:{advantage:[e.Earth,e.Wind],description:"It flutters, trailed by delicate blue sparks. Many Chrysfire do not survive relocation, so it is said that an Ignimoth sighting brings one good luck.",disadvantage:[e.Water],element:[e.Fire,e.Wind],id:"ignimoth",moves:[a.Inferno,a.Tornado],name:"Ignimoth",previous:"chrysfire",stage:3,stats:{attack:4,defense:1,speed:2},tile:{x:20,y:200}},meadowisp:{advantage:[e.Water],description:"A stoic spirit of nature. If you look closely, you can find it tailing far behind you as you walk the forest trails.",disadvantage:[e.Wind],element:[e.Earth],id:"meadowisp",moves:[a.Blossom],name:"Meadowisp",stage:1,stats:{attack:4,defense:4,speed:1},tile:{x:0,y:220}},cherubud:{advantage:[e.Water],ascends:5,description:"It has a serene nature and captivating aroma that will bring peace to anyone in its presence.",disadvantage:[e.Dark,e.Wind],element:[e.Earth,e.Light],id:"cherubud",moves:[a.Flower,a.Gleam],name:"Cherubud",next:"angelily",stage:1,stats:{attack:1,defense:2,speed:2},tile:{x:0,y:240}},angelily:{advantage:[e.Water],description:"Its many faces resemble flowers that radiate a pure and heavenly aura. Culturally, it symbolizes a return to happiness.",disadvantage:[e.Dark,e.Wind],element:[e.Earth,e.Light],id:"angelily",moves:[a.Blossom,a.Starfall],name:"Angelily",previous:"cherubud",stage:2,stats:{attack:2,defense:3,speed:3},tile:{x:10,y:240}},sproutide:{advantage:[e.Fire,e.Water],ascends:7,description:"A playful dragon hatchling born from a river, embodying the energy of nature.",disadvantage:[e.Wind],element:[e.Earth,e.Water],id:"sproutide",moves:[a.Flower,a.Drench],name:"Sproutide",next:"floriver",stage:1,stats:{attack:2,defense:1,speed:4},tile:{x:0,y:260}},floriver:{advantage:[e.Fire,e.Water],description:"A revered deity of the river. It manipulates the flow of water where it swims, growing lily pads in its wake.",disadvantage:[e.Wind],element:[e.Earth,e.Water],id:"floriver",moves:[a.Blossom,a.Cascade],name:"Floriver",previous:"sproutide",stage:2,stats:{attack:4,defense:2,speed:2},tile:{x:10,y:260}},windeed:{advantage:[e.Earth,e.Water],ascends:7,description:"It hides among planted beetroots, zipping into the sky before it is picked.",disadvantage:[e.Fire],element:[e.Earth,e.Wind],id:"windeed",moves:[a.Flower,a.Gust],name:"Windeed",next:"zephyroot",stage:1,stats:{attack:1,defense:3,speed:3},tile:{x:0,y:280}},zephyroot:{advantage:[e.Earth,e.Water],description:"A spring festival celebrates the migration of Zephyroot. They carry themselves on the air with a fan of leaves.",disadvantage:[e.Fire],element:[e.Earth,e.Wind],id:"zephyroot",moves:[a.Blossom,a.Tornado],name:"Zephyroot",previous:"windeed",stage:2,stats:{attack:2,defense:4,speed:4},tile:{x:10,y:280}},flitten:{advantage:[],ascends:7,description:"It's known for its mischievous, playful nature. It manipulates your dreams, hoping to be fed when you wake.",disadvantage:[e.Dark],element:[e.Light],id:"flitten",moves:[a.Gleam],name:"Flitten",next:"glimmew",stage:1,stats:{attack:3,defense:2,speed:2},tile:{x:0,y:300}},glimmew:{advantage:[],description:"Nocturnal, its luminescent fur glimmers in the moonlight, charming opponents with its graceful movements.",disadvantage:[e.Dark],element:[e.Light],id:"glimmew",moves:[a.Starfall],name:"Glimmew",previous:"flitten",stage:2,stats:{attack:4,defense:2,speed:3},tile:{x:10,y:300}},silten:{advantage:[e.Fire],ascends:4,description:"It posesses a protective shell that provides for it remarkable resilience and adaptability.",disadvantage:[e.Dark,e.Earth],element:[e.Light,e.Water],id:"silten",moves:[a.Twinkle,a.Soak],name:"Silten",next:"boglow",stage:1,stats:{attack:1,defense:3,speed:2},tile:{x:0,y:320}},boglow:{advantage:[e.Fire],ascends:7,description:"A tiny luminescent creature with a resilient body. It thrives in extreme aquatic environments.",disadvantage:[e.Dark,e.Earth],element:[e.Light,e.Water],id:"boglow",moves:[a.Gleam,a.Drench],name:"Boglow",next:"gleamoss",previous:"silten",stage:2,stats:{attack:2,defense:4,speed:2},tile:{x:10,y:320}},gleamoss:{advantage:[e.Fire],description:"Its shimmering moss-like exterior grants it the ability to regenerate and endure harsh environments. It is not visible to the naked eye.",disadvantage:[e.Dark,e.Earth],element:[e.Light,e.Water],id:"gleamoss",moves:[a.Starfall,a.Cascade],name:"Gleamoss",previous:"boglow",stage:3,stats:{attack:3,defense:4,speed:1},tile:{x:20,y:320}},amazwing:{advantage:[e.Earth],ascends:5,description:"Tales of cupid can usually be attributed to Amazwing. It spreads love and joy as it flies.",disadvantage:[e.Dark,e.Fire],element:[e.Light,e.Wind],id:"amazwing",moves:[a.Twinkle,a.Breeze],name:"Amazwing",next:"featherall",stage:1,stats:{attack:1,defense:1,speed:4},tile:{x:0,y:340}},featherall:{advantage:[e.Earth],ascends:8,description:"It enchants the hearts of those it pierces with its tail feathers.",disadvantage:[e.Dark,e.Fire],element:[e.Light,e.Wind],id:"featherall",moves:[a.Gleam,a.Gust],name:"Featherall",next:"enchantalon",previous:"amazwing",stage:2,stats:{attack:2,defense:2,speed:4},tile:{x:10,y:340}},enchantalon:{advantage:[e.Earth],description:"It is a graceful and affectionate partner, but it lulls its enemies into a false sense of security with its enchanting melodies.",disadvantage:[e.Dark,e.Fire],element:[e.Light,e.Wind],id:"enchantalon",moves:[a.Starfall,a.Tornado],name:"Enchantalon",previous:"featherall",stage:3,stats:{attack:3,defense:3,speed:4},tile:{x:20,y:340}},luxureef:{advantage:[e.Fire],ascends:7,description:"Vibrant coral climbs its body. It is capable of producing captivating displays of bioluminescence.",disadvantage:[e.Earth],element:[e.Water],id:"luxureef",moves:[a.Drench],name:"Luxureef",next:"coraluxe",stage:1,stats:{attack:2,defense:3,speed:2},tile:{x:0,y:360}},coraluxe:{advantage:[e.Fire],description:"It can manipulate the flow of water currents, which often results in conflict with Floriver. Whirlpools form where they clash.",disadvantage:[e.Earth],element:[e.Water],id:"coraluxe",moves:[a.Cascade],name:"Coraluxe",previous:"luxureef",stage:2,stats:{attack:3,defense:4,speed:3},tile:{x:10,y:360}},galephin:{advantage:[e.Earth,e.Fire],ascends:7,description:"Its sleek dolphin-like body allows it to soar through the sky. Funnel clouds form in its trail.",disadvantage:[],element:[e.Water,e.Wind],id:"galephin",moves:[a.Drench,a.Gust],name:"Galephin",next:"typhorca",stage:1,stats:{attack:3,defense:1,speed:3},tile:{x:0,y:380}},typhorca:{advantage:[e.Earth,e.Fire],description:"Gliding through the air with agility, it uses its windswept tail to create powerful gusts and summon storms at sea.",disadvantage:[],element:[e.Water,e.Wind],id:"typhorca",moves:[a.Cascade,a.Tornado],name:"Typhorca",previous:"galephin",stage:2,stats:{attack:3,defense:1,speed:4},tile:{x:10,y:380}},lopilot:{advantage:[e.Earth],ascends:7,description:"Its large ears allow it to effortlessly navigate the winds. Lost travelers are guided by Lopilot to safety.",disadvantage:[e.Fire],element:[e.Wind],id:"lopilot",moves:[a.Gust],name:"Lopilot",next:"aviare",stage:1,stats:{attack:2,defense:2,speed:3},tile:{x:0,y:400}},aviare:{advantage:[e.Earth],description:"A skilled pilot of the skies, it is rare to see Aviare on solid ground. Its fur has evolved to resemble fluffy clouds.",disadvantage:[e.Fire],element:[e.Wind],id:"aviare",moves:[a.Tornado],name:"Aviare",previous:"lopilot",stage:2,stats:{attack:3,defense:2,speed:4},tile:{x:10,y:400}}},_=({players:t})=>s=>{const n=t[s];n.cooldowns={}},$=(t=1)=>Math.ceil(t*2/5)+t+4,b=(t,s,n=[])=>{const i=[];for(let r=t;r<=s;r++)n.includes(r)||i.push(r);if(!i.length)return-1;const o=Math.floor(Math.random()*i.length);return i[o]},q=(t,s)=>s,V=()=>Math.random()-.5,X=(t,s=10)=>{const n=Array(s).fill(null).map(q);return n.sort(V),n.slice(0,t)},O=t=>{const s=x[t],n=F[s];return{...n,stats:{...n.stats,hp:$(1),level:1,xp:0}}},Z=t=>x.indexOf(t),J=t=>{const s=(t==null?void 0:t.map(Z))??[],n=b(0,x.length-1,s);return O(n)},K=(t=3)=>X(t,x.length).map(O),Q=(t=1)=>K(t),B={[a.Blaze]:{element:e.Fire,label:"Blaze",level:2},[a.Blossom]:{element:e.Earth,label:"Blossom",level:3},[a.Breeze]:{element:e.Wind,label:"Breeze",level:1},[a.Cascade]:{element:e.Water,label:"Cascade",level:3},[a.Drench]:{element:e.Water,label:"Drench",level:2},[a.Eclipse]:{element:e.Dark,label:"Eclipse",level:3},[a.Flower]:{element:e.Earth,label:"Flower",level:2},[a.Gleam]:{element:e.Light,label:"Gleam",level:2},[a.Gloom]:{element:e.Dark,label:"Gloom",level:1},[a.Gust]:{element:e.Wind,label:"Gust",level:2},[a.Ignite]:{element:e.Fire,label:"Ignite",level:1},[a.Inferno]:{element:e.Fire,label:"Inferno",level:3},[a.Seed]:{element:e.Earth,label:"Seed",level:1},[a.Shade]:{element:e.Dark,label:"Shade",level:2},[a.Soak]:{element:e.Water,label:"Soak",level:2},[a.Starfall]:{element:e.Light,label:"Starfall",level:3},[a.Tornado]:{element:e.Wind,label:"Tornado",level:3},[a.Twinkle]:{element:e.Light,label:"Twinkle",level:1}},L=30,v=({event:t,game:s,id:n})=>{if(n){const i=s.players[n];i.events.length===L&&i.events.shift(),i.events.push(t)}else s.events.length===L&&s.events.shift(),s.events.push(t)},M=({event:t,game:s,id:n})=>{const i=l=>v({game:s,event:t,id:l}),o=[...s.playerIds],r=o.indexOf(n);o.splice(r,1),o.forEach(i)},k=({events:t,game:s,id:n})=>{v({game:s,event:t.public}),v({game:s,event:t.player,id:n}),M({game:s,event:t.rival,id:n})},ee=(t,s)=>n=>{const{players:i}=t,o=i[s];if(!o)return;const{target:r}=o;if(!r)return;const[l]=o.buds;if(!l)return;const{stats:d}=l,c=i[r];if(!(c!=null&&c.buds.length))return;const[h]=c.buds,{advantage:u,disadvantage:p,stats:m}=h,{hp:w=1,defense:f}=m,{attack:A}=d,{element:E,label:R}=B[n],I=u.includes(E),D=p.includes(E),j=b(0,255),P=b(0,2),S=j<=P;let y=A;I&&(y*=.5),D&&(y*=2),S&&(y*=1.5);const N=Math.ceil(y>=f?y*2-f:y*y/f);m.hp=w-N;const U=l.element.join("-"),Y=h.element.join("-"),H=[`<span class="${U}">${l.name}</span> used <span class="${E}">${R}</span> on <span class="${Y}">${h.name}</span>!`,S&&'<span class="fire">Critical hit!</span>',I&&`<span class="water">It's ineffective...</span>`,D&&`<span class="earth">It's effective!</span>`].filter(Boolean).join(" ");v({event:H,game:t})},te=1,ae=(t,s)=>()=>{const{players:n}=t,i=n[s];if(!(i!=null&&i.buds.length))return;const[o]=i.buds,{moves:{length:r},name:l,stats:{level:d=1,xp:c=0}}=o;o.stats.xp=c+te*(1/r);const h=Math.ceil((d*2-1)*1.2);if(o.stats.xp>=h){o.stats.level=d+1,o.stats.hp=$(o.stats.level);const p=`<span class="${o.element.join("-")}">${l}</span> leveled up to <span class="earth">${o.stats.level}</span>!`;k({game:t,events:{player:p,public:p,rival:`Your rival's ${p}`},id:s})}},se=t=>(s,[n,{time:i,duration:o}])=>{const r=n;return t-i>=o?[...s,r]:s},ne=t=>B[t].element,ie=(t,s)=>{const{duration:n,phase:i,players:o}=t,r=o[s];if(!r||!!!Object.keys(r.cooldowns).sort().length)return;const d=se(n),c=Object.entries(r.cooldowns).sort().reduce(d,[]),h=p=>delete r.cooldowns[p];c.forEach(h);const u=c.map(ne);if(i===g.Train){if(!(r!=null&&r.buds.length))return;const[{stats:{level:p=0}}]=r.buds;if(p<G){const m=ae(t,s);c.forEach(m)}r.sounds.push(...u)}else if(i===g.Battle){const p=ee(t,s);c.forEach(p),t.sounds.push(...u)}},oe=(t,s)=>{const{stats:{hp:n=0}}=s,{nextDefeatedBuds:i,nextBuds:o}=t,r=n<=0,l={...s};return r?{...t,nextDefeatedBuds:[...i,l]}:{...t,nextBuds:[...o,l]}},re=(t,s)=>{const{players:n}=t,i=n[s],{buds:o,defeatedBuds:r}=i,{nextBuds:l,nextDefeatedBuds:d}=[...o].reduce(oe,{nextBuds:[],nextDefeatedBuds:[]});i.buds=l,i.defeatedBuds=[...r,...d],d.length&&(i.cooldowns={});const c=({element:h,name:u})=>{const p=h.join("-");v({game:t,event:`<span class="${p}">${u}</span> was defeated!`});const[m]=i.buds,w=(m==null?void 0:m.element.join("-"))??"";m&&v({game:t,event:`<span class="${w}">${m.name}</span> was called out!`})};d.forEach(c)},le=([,{gameOver:t}])=>t,de=(t,s)=>{const{[s]:n,...i}=t.players;if(!Object.entries(i).sort().every(le)){const r=(n==null?void 0:n.buds.length)===0;r&&!n.gameOver&&v({game:t,event:"A rival wiped out!"}),n.gameOver=r}},ce=(t,s)=>{const{players:n}=t,i=n[s];if(i&&(i.lastEvent=t.duration,i.buds.length<z)){const o=J(i.starters);i.buds.push(o),i.starters.push(o.id);const{element:r,name:l}=o,d=r.join("-");k({game:t,events:{player:`You befriended <span class="${d}">${l}</span>!`,public:`<span class="${d}">${l}</span> was befriended!`,rival:`Your rival befriended <span class="${d}">${l}</span>!`},id:s})}},pe=6e4,he=(t,s)=>{const{duration:n,players:i}=t,o=i[s];if(!o)return;const{lastEvent:r}=o;n-r>pe&&ce(t,s)},W=(t,s)=>{const n=s.indexOf(t),i=[...s];i.splice(n,1);const o=b(0,i.length-1);return i[o]},ue=t=>(s,n)=>{const{gameOver:i}=t.players[n],o=i?"LOST":"WON";return{...s,[n]:o}},me=t=>(s,n,i,o)=>{const r=s[n];return r.target===t&&(r.target=W(n,o)),s},ge=({players:t,playerIds:s})=>n=>{const i=o=>{const r=t[o];r.target===n&&(r.target=W(o,s))};s.forEach(i)},ve=6e4,C=(t,s,n=0)=>{const i=Math.min(Math.max(Math.ceil(n/ve),1),z),o=Q(i),[{id:r}]=o;return{buds:o,cooldowns:{},defeatedBuds:[],events:[],gameOver:!1,id:t,lastEvent:0,name:t,ping:0,sounds:[],stars:3e3,starters:[r],target:W(t,s)}},fe=(t,s,n,i)=>({...t,[s]:C(s,i)}),ye=t=>(s,n)=>{ie(t,n);const{phase:i}=t;return i===g.Train?he(t,n):(re(t,n),de(t,n)),t.players[n].gameOver?[...s,n]:s};Rune.initLogic({minPlayers:1,maxPlayers:4,setup:t=>({battleType:T.Four,duration:0,ended:!1,events:[],phase:g.Train,phases:{[g.Train]:60*3*1e3},players:t.reduce(fe,{}),playerIds:t,sounds:[]}),events:{playerJoined:(t,{game:s})=>{const{duration:n,playerIds:i}=s;if(s.playerIds.push(t),s.players[t]=C(t,i,n),i.length>1){const[o]=i,r=s.players[o];r.target||(r.target=W(o,i))}},playerLeft:(t,{game:s})=>{const{playerIds:n}=s,i=n.indexOf(t);n.splice(i,1),delete s.players[t];const o=me(t);s.players=n.reduce(o,s.players)}},actions:{attack:({move:t,speed:s},{game:n,playerId:i})=>{const o=(6-s)*1e3,{duration:r,phase:l,players:d}=n,c=d[i];if(!c)throw Rune.invalidAction();if(c.cooldowns[t]){const{element:h,label:u}=B[t];v({event:`<span class="${h}">${u}</span> has to recharge!`,game:n,id:i})}if(l===g.Train){const h=c.cooldowns[t]??{duration:o};c.cooldowns[t]={...h,time:r}}else c.cooldowns={[t]:{duration:o,time:r}}},clearSounds:({sounds:t},{game:s,playerId:n})=>{const{phase:i,players:o,sounds:r}=s,l=d=>!t.includes(d);if(i===g.Battle)s.sounds=r.filter(l);else{const d=o[n],{sounds:c}=d;d.sounds=c.filter(l)}},ascend:(t,{game:s,playerId:n})=>{const{players:i}=s,o=i[n];if(!o)throw Rune.invalidAction();const[r]=o.buds;if(!r)throw Rune.invalidAction();const{ascends:l=G,next:d}=r;if(!d)throw Rune.invalidAction();const{stats:{hp:c,level:h=1,xp:u}}=r;if(h<l)throw Rune.invalidAction();const p={...F[d],stats:{...F[d].stats,hp:c,level:h,xp:u}};o.buds[0]=p,o.cooldowns={},o.sounds.push("ascend");const{element:m}=p,w=m.join("-"),f=`<span class="${w}">${r.name}</span> ascended to <span class="${w}">${p.name}</span>!`;k({game:s,events:{player:f,public:f,rival:`Your rival's ${f}`},id:n})},switch:(t,{game:s,playerId:n})=>{const{players:i}=s,o=i[n],{cooldowns:r}=o;if(!!Object.keys(r).sort().length)throw Rune.invalidAction();const d=o.buds.shift();if(d){o.buds.push(d);const[c]=o.buds,h=d.element.join("-"),u=(c==null?void 0:c.element.join("-"))??"",p=`<span class="${h}">${d==null?void 0:d.name}</span> switched with <span class="${u}">${c==null?void 0:c.name}</span>!`;k({game:s,events:{player:p,public:p,rival:`Your rival's ${p}`},id:n})}},target:({target:t},{game:s,playerId:n})=>{s.players[n].target=t}},update:({game:t})=>{const s=Rune.gameTime();t.duration=s;const{phases:{[g.Train]:n}}=t;if(s===n){t.phase=g.Battle;const r=_(t);t.playerIds.forEach(r)}const i=ye(t),o=t.playerIds.reduce(i,[]);if(t.phase===g.Battle)if(o.length===t.playerIds.length-1){t.ended=!0;const l=ue(t);Rune.gameOver({players:t.playerIds.reduce(l,{})})}else{const l=ge(t);o.forEach(l)}}});export{T as B,e as E,g as P,F as b,$ as g,B as m};

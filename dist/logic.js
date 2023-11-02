var e=(t=>(t.Dark="dark",t.Earth="earth",t.Fire="fire",t.Light="light",t.Water="water",t.Wind="wind",t))(e||{}),s=(t=>(t.Blaze="blaze",t.Blossom="blossom",t.Breeze="breeze",t.Cascade="cascade",t.Drench="drench",t.Eclipse="eclipse",t.Flower="flower",t.Gleam="gleam",t.Gloom="gloom",t.Gust="gust",t.Ignite="ignite",t.Inferno="inferno",t.Seed="seed",t.Shade="shade",t.Soak="soak",t.Starfall="starfall",t.Tornado="tornado",t.Twinkle="twinkle",t))(s||{}),T=(t=>(t.Four="Four",t.Three="Three",t.Two="Two",t))(T||{}),g=(t=>(t.Train="train",t.Battle="battle",t))(g||{});const G=100,x=["amazwing","cherubud","flagoon","flarva","flitten","galephin","gloominnow","lopilot","luxureef","meadowisp","nebulon","oakindle","silten","smoldit","snakelit","specalf","spookecko","sproutide","voidixie","windeed","wispyre"],F={spookecko:{advantage:[],ascends:3,description:"This mysterious and eerie reptile lurks in the shadows, using its ghastly powers to frighten and confuse opponents.",disadvantage:[e.Light],element:[e.Dark],id:"spookecko",moves:[s.Gloom],name:"Spookecko",next:"shadile",stage:1,stats:{attack:2,defense:2,speed:1},tile:{x:0,y:0}},shadile:{advantage:[],ascends:4,description:"It lurks in the depths of the night, preying on the fears and weaknesses of its opponents with its sinister powers.",disadvantage:[e.Light],element:[e.Dark],id:"shadile",moves:[s.Shade],name:"Shadile",next:"spectraptor",previous:"spookecko",stage:2,stats:{attack:3,defense:2,speed:1},tile:{x:10,y:0}},spectraptor:{advantage:[],description:"If you feel a sudden chill, you may be experiencing the ghostly aura of this sinister raptor, silently stalking its prey.",disadvantage:[e.Light],element:[e.Dark],id:"spectraptor",moves:[s.Eclipse],name:"Spectraptor",previous:"shadile",stage:3,stats:{attack:4,defense:3,speed:1},tile:{x:20,y:0}},smoldit:{advantage:[e.Wind],ascends:7,description:"The smoldering embodiment of lingering spectral energy.",disadvantage:[e.Light,e.Water],element:[e.Dark,e.Fire],id:"smoldit",moves:[s.Blaze],name:"Smoldit",next:"embergeist",stage:1,stats:{attack:1,defense:1,speed:3},tile:{x:0,y:20}},embergeist:{advantage:[e.Wind],description:"Flickering, mysterious flames that haunt their surroundings with an ominous presence.",disadvantage:[e.Light,e.Water],element:[e.Dark,e.Fire],id:"embergeist",moves:[s.Inferno],name:"Embergeist",previous:"smoldit",stage:2,stats:{attack:2,defense:3,speed:4},tile:{x:10,y:20}},specalf:{advantage:[e.Water],ascends:5,description:"Awaiting the return of its doting parent, this bovine animal conceals itself beneath a veil of spectral flora.",disadvantage:[e.Light,e.Wind],element:[e.Dark,e.Earth],id:"specalf",moves:[s.Shade,s.Flower],name:"Specalf",next:"thornox",stage:1,stats:{attack:2,defense:3,speed:1},tile:{x:0,y:40}},thornox:{advantage:[e.Water],description:"It seeks to exact revenge on anyone it can find using its razor-sharp thorns.",disadvantage:[e.Light,e.Wind],element:[e.Dark,e.Earth],id:"thornox",moves:[s.Eclipse,s.Blossom],name:"Thornox",previous:"specalf",stage:2,stats:{attack:3,defense:4,speed:2},tile:{x:10,y:40}},voidixie:{advantage:[],ascends:7,description:"Few have witnessed its otherworldly aura, professing conflicting feelings of curiosity and trepidation.",disadvantage:[e.Dark,e.Light],element:[e.Dark,e.Light],id:"voidixie",moves:[s.Shade,s.Gleam],name:"Voidixie",next:"faeclipse",stage:1,stats:{attack:2,defense:1,speed:2},tile:{x:0,y:60}},faeclipse:{advantage:[],description:"Hauntingly sinister, menacing, and alluring. It has an aura of cosmic destruction.",disadvantage:[e.Dark,e.Light],element:[e.Dark,e.Light],id:"faeclipse",moves:[s.Eclipse,s.Starfall],name:"Faeclipse",previous:"voidixie",stage:2,stats:{attack:4,defense:1,speed:3},tile:{x:10,y:60}},gloominnow:{advantage:[e.Fire],ascends:5,description:"A glint from its shimmering, iridescent scales will catch your eye from deep below the waters.",disadvantage:[e.Earth,e.Light],element:[e.Dark,e.Water],id:"gloominnow",moves:[s.Gloom,s.Soak],name:"Gloominnow",next:"barrabyss",stage:1,stats:{attack:1,defense:1,speed:2},tile:{x:0,y:80}},barrabyss:{advantage:[e.Fire],ascends:8,description:"Be careful where you swim. Legend has it that when you see its eerie, glowing eyes, it's already too late for you.",disadvantage:[e.Earth,e.Light],element:[e.Dark,e.Water],id:"barrabyss",moves:[s.Shade,s.Drench],name:"Barrabyss",next:"umbracuda",previous:"gloominnow",stage:2,stats:{attack:2,defense:1,speed:3},tile:{x:10,y:80}},umbracuda:{advantage:[e.Fire],description:"Its sleek, etherial fins cascade through the water, appearing in and vanishing from the ocean at will.",disadvantage:[e.Earth,e.Light],element:[e.Dark,e.Water],id:"umbracuda",moves:[s.Eclipse,s.Cascade],name:"Umbracuda",previous:"barrabyss",stage:3,stats:{attack:4,defense:1,speed:4},tile:{x:20,y:80}},nebulon:{advantage:[e.Earth],ascends:6,description:"Often mistaken for an unidentified flying object, it has a markedly unassuming face.",disadvantage:[e.Fire,e.Light],element:[e.Dark,e.Wind],id:"nebulon",moves:[s.Shade,s.Gust],name:"Nebulon",next:"nebulisk",stage:1,stats:{attack:1,defense:4,speed:2},tile:{x:0,y:100}},nebulisk:{advantage:[e.Earth],description:"Seemingly extraterrestrial, it is highly skilled in piloting its sleek spacecraft.",disadvantage:[e.Fire,e.Light],element:[e.Dark,e.Wind],id:"nebulisk",moves:[s.Eclipse,s.Tornado],name:"Nebulisk",previous:"nebulon",stage:2,stats:{attack:3,defense:3,speed:3},tile:{x:10,y:100}},snakelit:{advantage:[e.Wind],ascends:4,description:"An emerald, fiery glow emits from this serpentine creature.",disadvantage:[e.Water],element:[e.Fire],id:"snakelit",moves:[s.Ignite],name:"Snakelit",next:"serpyro",stage:1,stats:{attack:2,defense:2,speed:2},tile:{x:0,y:120}},serpyro:{advantage:[e.Wind],ascends:8,description:"It uses the scorching jade flames emitting from its tail to extinguish its opponents.",disadvantage:[e.Water],element:[e.Fire],id:"serpyro",moves:[s.Blaze],name:"Serpyro",next:"pyroconda",previous:"snakelit",stage:2,stats:{attack:3,defense:2,speed:3},tile:{x:10,y:120}},pyroconda:{advantage:[e.Wind],description:"Majestic, some consider it a deity. Its fiery plumage exudes power and grace.",disadvantage:[e.Water],element:[e.Fire],id:"pyroconda",moves:[s.Inferno],name:"Pyroconda",previous:"serpyro",stage:3,stats:{attack:4,defense:2,speed:4},tile:{x:20,y:120}},oakindle:{advantage:[e.Water,e.Wind],ascends:5,description:"A small seedling engulfed in flames.",disadvantage:[],element:[e.Earth,e.Fire],id:"oakindle",moves:[s.Flower,s.Blaze],name:"Oakindle",next:"torchwood",stage:1,stats:{attack:3,defense:1,speed:1},tile:{x:0,y:140}},torchwood:{advantage:[e.Water,e.Wind],description:"It is fiercely loyal to mother nature, using her powers to protect those it considers vulnerable.",disadvantage:[],element:[e.Earth,e.Fire],id:"torchwood",moves:[s.Blossom,s.Inferno],name:"Torchwood",previous:"oakindle",stage:2,stats:{attack:4,defense:1,speed:1},tile:{x:10,y:140}},wispyre:{advantage:[e.Wind],description:"It's playful and mischievous, dazzling its opponents with sublime flames and whimsical charm.",disadvantage:[e.Dark,e.Water],element:[e.Fire,e.Light],id:"wispyre",moves:[s.Inferno,s.Starfall],name:"Wispyre",stage:1,stats:{attack:4,defense:3,speed:4},tile:{x:0,y:160}},flagoon:{advantage:[e.Fire,e.Wind],ascends:4,description:"It releases infernal steam to drive intruders away from its den.",disadvantage:[e.Earth],element:[e.Fire,e.Water],id:"flagoon",moves:[s.Ignite,s.Soak],name:"Flagoon",next:"blazesea",stage:1,stats:{attack:1,defense:2,speed:3},tile:{x:0,y:180}},blazesea:{advantage:[e.Fire,e.Wind],ascends:8,description:"It is widely known that Blazesea should not be approached. It unceasingly combusts as it maintains a cooling aura of water around its body.",disadvantage:[e.Earth],element:[e.Fire,e.Water],id:"blazesea",moves:[s.Blaze,s.Drench],name:"Blazesea",next:"infernocean",previous:"flagoon",stage:2,stats:{attack:3,defense:1,speed:2},tile:{x:10,y:180}},infernocean:{advantage:[e.Fire,e.Wind],description:"It is described as titanic, commanding the destructive power of roaring tides and wildfire.",disadvantage:[e.Earth],element:[e.Fire,e.Water],id:"infernocean",moves:[s.Inferno,s.Cascade],name:"Infernocean",previous:"blazesea",stage:3,stats:{attack:4,defense:2,speed:1},tile:{x:20,y:180}},flarva:{advantage:[e.Earth,e.Wind],ascends:3,description:"On a clear summer night, you can see the faint blue glow of Flarva swarming on the trees.",disadvantage:[e.Water],element:[e.Fire,e.Wind],id:"flarva",moves:[s.Ignite,s.Breeze],name:"Flarva",next:"chrysfire",stage:1,stats:{attack:1,defense:2,speed:1},tile:{x:0,y:200}},chrysfire:{advantage:[e.Earth,e.Wind],ascends:6,description:"Its shell is warm to the touch. Wildfire experts relocate Chrysfire away from forests before they hatch.",disadvantage:[e.Water],element:[e.Fire,e.Wind],id:"chrysfire",moves:[s.Blaze,s.Gust],name:"Chrysfire",next:"ignimoth",previous:"flarva",stage:2,stats:{attack:2,defense:4,speed:1},tile:{x:10,y:200}},ignimoth:{advantage:[e.Earth,e.Wind],description:"It flutters, trailed by delicate blue sparks. Many Chrysfire do not survive relocation, so it is said that an Ignimoth sighting brings one good luck.",disadvantage:[e.Water],element:[e.Fire,e.Wind],id:"ignimoth",moves:[s.Inferno,s.Tornado],name:"Ignimoth",previous:"chrysfire",stage:3,stats:{attack:4,defense:1,speed:2},tile:{x:20,y:200}},meadowisp:{advantage:[e.Water],description:"A stoic spirit of nature. If you look closely, you can find it tailing far behind you as you walk the forest trails.",disadvantage:[e.Wind],element:[e.Earth],id:"meadowisp",moves:[s.Blossom],name:"Meadowisp",stage:1,stats:{attack:4,defense:4,speed:1},tile:{x:0,y:220}},cherubud:{advantage:[e.Water],ascends:5,description:"It has a serene nature and captivating aroma that will bring peace to anyone in its presence.",disadvantage:[e.Dark,e.Wind],element:[e.Earth,e.Light],id:"cherubud",moves:[s.Flower,s.Gleam],name:"Cherubud",next:"angelily",stage:1,stats:{attack:1,defense:2,speed:2},tile:{x:0,y:240}},angelily:{advantage:[e.Water],description:"Its many faces resemble flowers that radiate a pure and heavenly aura. Culturally, it symbolizes a return to happiness.",disadvantage:[e.Dark,e.Wind],element:[e.Earth,e.Light],id:"angelily",moves:[s.Blossom,s.Starfall],name:"Angelily",previous:"cherubud",stage:2,stats:{attack:2,defense:3,speed:3},tile:{x:10,y:240}},sproutide:{advantage:[e.Fire,e.Water],ascends:7,description:"A playful dragon hatchling born from a river, embodying the energy of nature.",disadvantage:[e.Wind],element:[e.Earth,e.Water],id:"sproutide",moves:[s.Flower,s.Drench],name:"Sproutide",next:"floriver",stage:1,stats:{attack:2,defense:1,speed:4},tile:{x:0,y:260}},floriver:{advantage:[e.Fire,e.Water],description:"A revered deity of the river. It manipulates the flow of water where it swims, growing lily pads in its wake.",disadvantage:[e.Wind],element:[e.Earth,e.Water],id:"floriver",moves:[s.Blossom,s.Cascade],name:"Floriver",previous:"sproutide",stage:2,stats:{attack:4,defense:2,speed:2},tile:{x:10,y:260}},windeed:{advantage:[e.Earth,e.Water],ascends:7,description:"It hides among planted beetroots, zipping into the sky before it is picked.",disadvantage:[e.Fire],element:[e.Earth,e.Wind],id:"windeed",moves:[s.Flower,s.Gust],name:"Windeed",next:"zephyroot",stage:1,stats:{attack:1,defense:3,speed:3},tile:{x:0,y:280}},zephyroot:{advantage:[e.Earth,e.Water],description:"A spring festival celebrates the migration of Zephyroot. They carry themselves on the air with a fan of leaves.",disadvantage:[e.Fire],element:[e.Earth,e.Wind],id:"zephyroot",moves:[s.Blossom,s.Tornado],name:"Zephyroot",previous:"windeed",stage:2,stats:{attack:2,defense:4,speed:4},tile:{x:10,y:280}},flitten:{advantage:[],ascends:7,description:"It's known for its mischievous, playful nature. It manipulates your dreams, hoping to be fed when you wake.",disadvantage:[e.Dark],element:[e.Light],id:"flitten",moves:[s.Gleam],name:"Flitten",next:"glimmew",stage:1,stats:{attack:3,defense:2,speed:2},tile:{x:0,y:300}},glimmew:{advantage:[],description:"Nocturnal, its luminescent fur glimmers in the moonlight, charming opponents with its graceful movements.",disadvantage:[e.Dark],element:[e.Light],id:"glimmew",moves:[s.Starfall],name:"Glimmew",previous:"flitten",stage:2,stats:{attack:4,defense:2,speed:3},tile:{x:10,y:300}},silten:{advantage:[e.Fire],ascends:4,description:"It posesses a protective shell that provides for it remarkable resilience and adaptability.",disadvantage:[e.Dark,e.Earth],element:[e.Light,e.Water],id:"silten",moves:[s.Twinkle,s.Soak],name:"Silten",next:"boglow",stage:1,stats:{attack:1,defense:3,speed:2},tile:{x:0,y:320}},boglow:{advantage:[e.Fire],ascends:7,description:"A tiny luminescent creature with a resilient body. It thrives in extreme aquatic environments.",disadvantage:[e.Dark,e.Earth],element:[e.Light,e.Water],id:"boglow",moves:[s.Gleam,s.Drench],name:"Boglow",next:"gleamoss",previous:"silten",stage:2,stats:{attack:2,defense:4,speed:2},tile:{x:10,y:320}},gleamoss:{advantage:[e.Fire],description:"Its shimmering moss-like exterior grants it the ability to regenerate and endure harsh environments. It is not visible to the naked eye.",disadvantage:[e.Dark,e.Earth],element:[e.Light,e.Water],id:"gleamoss",moves:[s.Starfall,s.Cascade],name:"Gleamoss",previous:"boglow",stage:3,stats:{attack:3,defense:4,speed:1},tile:{x:20,y:320}},amazwing:{advantage:[e.Earth],ascends:5,description:"Tales of cupid can usually be attributed to Amazwing. It spreads love and joy as it flies.",disadvantage:[e.Dark,e.Fire],element:[e.Light,e.Wind],id:"amazwing",moves:[s.Twinkle,s.Breeze],name:"Amazwing",next:"featherall",stage:1,stats:{attack:1,defense:1,speed:4},tile:{x:0,y:340}},featherall:{advantage:[e.Earth],ascends:8,description:"It enchants the hearts of those it pierces with its tail feathers.",disadvantage:[e.Dark,e.Fire],element:[e.Light,e.Wind],id:"featherall",moves:[s.Gleam,s.Gust],name:"Featherall",next:"enchantalon",previous:"amazwing",stage:2,stats:{attack:2,defense:2,speed:4},tile:{x:10,y:340}},enchantalon:{advantage:[e.Earth],description:"It is a graceful and affectionate partner, but it lulls its enemies into a false sense of security with its enchanting melodies.",disadvantage:[e.Dark,e.Fire],element:[e.Light,e.Wind],id:"enchantalon",moves:[s.Starfall,s.Tornado],name:"Enchantalon",previous:"featherall",stage:3,stats:{attack:3,defense:3,speed:4},tile:{x:20,y:340}},luxureef:{advantage:[e.Fire],ascends:7,description:"Vibrant coral climbs its body. It is capable of producing captivating displays of bioluminescence.",disadvantage:[e.Earth],element:[e.Water],id:"luxureef",moves:[s.Drench],name:"Luxureef",next:"coraluxe",stage:1,stats:{attack:2,defense:3,speed:2},tile:{x:0,y:360}},coraluxe:{advantage:[e.Fire],description:"It can manipulate the flow of water currents, which often results in conflict with Floriver. Whirlpools form where they clash.",disadvantage:[e.Earth],element:[e.Water],id:"coraluxe",moves:[s.Cascade],name:"Coraluxe",previous:"luxureef",stage:2,stats:{attack:3,defense:4,speed:3},tile:{x:10,y:360}},galephin:{advantage:[e.Earth,e.Fire],ascends:7,description:"Its sleek dolphin-like body allows it to soar through the sky. Funnel clouds form in its trail.",disadvantage:[],element:[e.Water,e.Wind],id:"galephin",moves:[s.Drench,s.Gust],name:"Galephin",next:"typhorca",stage:1,stats:{attack:3,defense:1,speed:3},tile:{x:0,y:380}},typhorca:{advantage:[e.Earth,e.Fire],description:"Gliding through the air with agility, it uses its windswept tail to create powerful gusts and summon storms at sea.",disadvantage:[],element:[e.Water,e.Wind],id:"typhorca",moves:[s.Cascade,s.Tornado],name:"Typhorca",previous:"galephin",stage:2,stats:{attack:3,defense:1,speed:4},tile:{x:10,y:380}},lopilot:{advantage:[e.Earth],ascends:7,description:"Its large ears allow it to effortlessly navigate the winds. Lost travelers are guided by Lopilot to safety.",disadvantage:[e.Fire],element:[e.Wind],id:"lopilot",moves:[s.Gust],name:"Lopilot",next:"aviare",stage:1,stats:{attack:2,defense:2,speed:3},tile:{x:0,y:400}},aviare:{advantage:[e.Earth],description:"A skilled pilot of the skies, it is rare to see Aviare on solid ground. Its fur has evolved to resemble fluffy clouds.",disadvantage:[e.Fire],element:[e.Wind],id:"aviare",moves:[s.Tornado],name:"Aviare",previous:"lopilot",stage:2,stats:{attack:3,defense:2,speed:4},tile:{x:10,y:400}}},H=({players:t})=>a=>{const n=t[a];n.cooldowns={}},z=(t=1)=>Math.ceil(t*2/5)+t+4,k=(t,a,n=[])=>{const i=[];for(let o=t;o<=a;o++)n.includes(o)||i.push(o);if(!i.length)return-1;const r=Math.floor(Math.random()*i.length);return i[r]},_=(t,a)=>a,q=()=>Math.random()-.5,V=(t,a=10)=>{const n=Array(a).fill(null).map(_);return n.sort(q),n.slice(0,t)},$=t=>{const a=x[t],n=F[a];return{...n,stats:{...n.stats,hp:z(1),level:1,xp:0}}},X=t=>x.indexOf(t),Z=t=>{const a=(t==null?void 0:t.map(X))??[],n=k(0,x.length-1,a);return $(n)},J=(t=3)=>V(t,x.length).map($),K=(t=1)=>J(t),B={[s.Blaze]:{element:e.Fire,label:"Blaze",level:2},[s.Blossom]:{element:e.Earth,label:"Blossom",level:3},[s.Breeze]:{element:e.Wind,label:"Breeze",level:1},[s.Cascade]:{element:e.Water,label:"Cascade",level:3},[s.Drench]:{element:e.Water,label:"Drench",level:2},[s.Eclipse]:{element:e.Dark,label:"Eclipse",level:3},[s.Flower]:{element:e.Earth,label:"Flower",level:2},[s.Gleam]:{element:e.Light,label:"Gleam",level:2},[s.Gloom]:{element:e.Dark,label:"Gloom",level:1},[s.Gust]:{element:e.Wind,label:"Gust",level:2},[s.Ignite]:{element:e.Fire,label:"Ignite",level:1},[s.Inferno]:{element:e.Fire,label:"Inferno",level:3},[s.Seed]:{element:e.Earth,label:"Seed",level:1},[s.Shade]:{element:e.Dark,label:"Shade",level:2},[s.Soak]:{element:e.Water,label:"Soak",level:2},[s.Starfall]:{element:e.Light,label:"Starfall",level:3},[s.Tornado]:{element:e.Wind,label:"Tornado",level:3},[s.Twinkle]:{element:e.Light,label:"Twinkle",level:1}},L=30,v=({event:t,game:a,id:n})=>{if(n){const i=a.players[n];i.events.length===L&&i.events.shift(),i.events.push(t)}else a.events.length===L&&a.events.shift(),a.events.push(t)},Q=({event:t,game:a,id:n})=>{const i=l=>v({game:a,event:t,id:l}),{players:r}=a,o=Object.keys(r),d=o.indexOf(n);o.splice(d,1),o.forEach(i)},w=({events:t,game:a,id:n})=>{v({game:a,event:t.public}),v({game:a,event:t.player,id:n}),Q({game:a,event:t.rival,id:n})},M=(t,a)=>n=>{const{players:i}=t,r=i[a];if(!r)return;const{target:o}=r;if(!o)return;const[d]=r.buds;if(!d)return;const{stats:l}=d,c=i[o];if(!(c!=null&&c.buds.length))return;const[h]=c.buds,{advantage:m,disadvantage:p,stats:u}=h,{hp:f=1,defense:y}=u,{attack:C}=l,{element:E,label:A}=B[n],D=m.includes(E),S=p.includes(E),j=k(0,255),R=k(0,2),I=j<=R;let b=C;D&&(b*=.5),S&&(b*=2),I&&(b*=1.5);const P=Math.ceil(b>=y?b*2-y:b*b/y);u.hp=f-P;const N=d.element.join("-"),U=h.element.join("-"),Y=[`<span class="${N}">${d.name}</span> used <span class="${E}">${A}</span> on <span class="${U}">${h.name}</span>!`,I&&'<span class="fire">Critical hit!</span>',D&&`<span class="water">It's ineffective...</span>`,S&&`<span class="earth">It's effective!</span>`].filter(Boolean).join(" ");v({event:Y,game:t})},ee=1,te=(t,a)=>()=>{const{players:n}=t,i=n[a];if(!(i!=null&&i.buds.length))return;const[r]=i.buds,{moves:{length:o},name:d,stats:{level:l=1,xp:c=0}}=r;r.stats.xp=c+ee*(1/o);const h=Math.ceil((l*2-1)*1.2);if(r.stats.xp>=h){r.stats.level=l+1,r.stats.hp=z(r.stats.level);const p=`<span class="${r.element.join("-")}">${d}</span> leveled up to <span class="earth">${r.stats.level}</span>!`;w({game:t,events:{player:p,public:p,rival:`Your rival's ${p}`},id:a})}},ae=t=>(a,[n,{time:i,duration:r}])=>{const o=n;return t-i>=r?[...a,o]:a},se=t=>B[t].element,ne=(t,a)=>{const{duration:n,phase:i,players:r}=t,o=r[a];if(!o||!!!Object.keys(o.cooldowns).length)return;const l=ae(n),c=Object.entries(o.cooldowns).reduce(l,[]),h=p=>delete o.cooldowns[p];c.forEach(h);const m=c.map(se);if(i===g.Train){if(!(o!=null&&o.buds.length))return;const[{stats:{level:p=0}}]=o.buds;if(p<G){const f=te(t,a);c.forEach(f)}const{sounds:u}=o;o.sounds=[...u,...m]}else if(i===g.Battle){const p=M(t,a);c.forEach(p),t.sounds=[...t.sounds,...m]}},ie=(t,a)=>{const{stats:{hp:n=0}}=a,{nextDefeatedBuds:i,nextBuds:r}=t;return n<=0?{...t,nextDefeatedBuds:[...i,a]}:{...t,nextBuds:[...r,a]}},re=(t,a)=>{const{players:n}=t,i=n[a],{buds:r,defeatedBuds:o}=i,{nextBuds:d,nextDefeatedBuds:l}=[...r].reduce(ie,{nextBuds:[],nextDefeatedBuds:[]});i.buds=d,i.defeatedBuds=[...o,...l],l.length&&(i.cooldowns={});const c=({element:h,name:m})=>{const p=h.join("-");v({game:t,event:`<span class="${p}">${m}</span> was defeated!`});const[u]=i.buds,f=(u==null?void 0:u.element.join("-"))??"";u&&v({game:t,event:`<span class="${f}">${u.name}</span> was called out!`})};l.forEach(c)},oe=({gameOver:t})=>t,le=(t,a)=>{const{[a]:n,...i}=t.players;if(!Object.values(i).every(oe)){const o=(n==null?void 0:n.buds.length)===0;o&&!n.gameOver&&v({game:t,event:"A rival wiped out!"}),n.gameOver=o}},de=3,ce=(t,a)=>{const{players:n}=t,i=n[a];if(i&&(i.lastEvent=t.duration,i.buds.length<de)){const r=Z(i.starters);i.buds=[...i.buds,r],i.starters=[...i.starters,r.id];const{element:o,name:d}=r,l=o.join("-");w({game:t,events:{player:`You befriended <span class="${l}">${d}</span>!`,public:`<span class="${l}">${d}</span> was befriended!`,rival:`Your rival befriended <span class="${l}">${d}</span>!`},id:a})}},pe=6e4,he=(t,a)=>{const{duration:n,players:i}=t,r=i[a];if(!r)return;const{lastEvent:o}=r;n-o>pe&&ce(t,a)},W=(t,a)=>{const n=a.indexOf(t),i=[...a];i.splice(n,1);const r=k(0,i.length-1);return i[r]},me=t=>(a,n)=>{const{gameOver:i}=t.players[n],r=i?"LOST":"WON";return{...a,[n]:r}},ue=t=>(a,n,i,r)=>{const o=a[n];return o.target===t&&(o.target=W(n,r)),a},ge=({players:t},a)=>n=>{const i=r=>{const o=t[r];o.target===n&&(o.target=W(r,a))};a.forEach(i)},fe=6e4,O=(t,a,n=0)=>{const i=Math.max(Math.ceil(n/fe),1),r=K(i),[{id:o}]=r;return{buds:r,cooldowns:{},defeatedBuds:[],events:[],gameOver:!1,id:t,lastEvent:0,name:t,ping:0,sounds:[],stars:3e3,starters:[o],target:W(t,a)}},ve=(t,a,n,i)=>({...t,[a]:O(a,i)}),ye=t=>(a,n)=>{ne(t,n);const{phase:i}=t;return i===g.Train?he(t,n):(re(t,n),le(t,n)),t.players[n].gameOver?[...a,n]:a};Rune.initLogic({minPlayers:1,maxPlayers:4,setup:t=>({battleType:T.Four,duration:0,ended:!1,events:[],phase:g.Train,phases:{[g.Train]:60*3*1e3},players:t.reduce(ve,{}),playerIds:t,sounds:[]}),events:{playerJoined:(t,{game:a})=>{const{duration:n,playerIds:i}=a;if(a.playerIds.push(t),a.players[t]=O(t,i,n),i.length>1){const[r]=i,o=a.players[r];o.target||(o.target=W(r,i))}},playerLeft:(t,{game:a})=>{const{playerIds:n}=a,i=n.indexOf(t);n.splice(i,1),delete a.players[t];const r=ue(t);a.players=n.reduce(r,a.players)}},actions:{attack:({move:t,speed:a},{game:n,playerId:i})=>{const r=(6-a)*1e3,{duration:o,phase:d,players:l}=n,c=l[i];if(c){if(c.cooldowns[t]){const{element:h,label:m}=B[t];v({event:`<span class="${h}">${m}</span> has to recharge!`,game:n,id:i})}if(d===g.Train){const h=c.cooldowns[t]??{duration:r};c.cooldowns[t]={...h,time:o}}else c.cooldowns={[t]:{duration:r,time:o}}}},clearSounds:({sounds:t},{game:a,playerId:n})=>{const{phase:i,players:r,sounds:o}=a,d=l=>!t.includes(l);if(i===g.Battle)a.sounds=o.filter(d);else{const l=r[n],{sounds:c}=l;l.sounds=c.filter(d)}},ascend:(t,{game:a,playerId:n})=>{const{players:i}=a,r=i[n];if(!r)return;const[o]=r.buds;if(!o)return;const{ascends:d=G,next:l}=o;if(!l)return;const{stats:{hp:c,level:h=1,xp:m}}=o;if(h<d)return;const p={...F[l],stats:{...F[l].stats,hp:c,level:h,xp:m}};r.buds[0]=p,r.cooldowns={},r.sounds.push("ascend");const{element:u}=p,f=u.join("-"),y=`<span class="${f}">${o.name}</span> ascended to <span class="${f}">${p.name}</span>!`;w({game:a,events:{player:y,public:y,rival:`Your rival's ${y}`},id:n})},switch:(t,{game:a,playerId:n})=>{const{players:i}=a,r=i[n],{cooldowns:o}=r;if(!!Object.keys(o).length)return;const l=r.buds.shift();if(l){r.buds.push(l);const[c]=r.buds,h=l.element.join("-"),m=(c==null?void 0:c.element.join("-"))??"",p=`<span class="${h}">${l==null?void 0:l.name}</span> switched with <span class="${m}">${c==null?void 0:c.name}</span>!`;w({game:a,events:{player:p,public:p,rival:`Your rival's ${p}`},id:n})}},target:({target:t},{game:a,playerId:n})=>{a.players[n].target=t}},update:({allPlayerIds:t,game:a})=>{const n=Rune.gameTime();a.duration=n;const{phases:{[g.Train]:i}}=a;if(n===i){a.phase=g.Battle;const d=H(a);a.playerIds.forEach(d)}const r=ye(a),o=t.reduce(r,[]);if(a.phase===g.Battle)if(o.length===t.length-1){a.ended=!0;const l=me(a);Rune.gameOver({players:t.reduce(l,{})})}else{const l=ge(a,t);o.forEach(l)}}});export{T as B,e as E,g as P,F as b,z as g,B as m};

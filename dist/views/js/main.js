function getAdj(x){switch(x){case"dark":return["dark","morbid","scary","spooky","gothic","deviant","creepy","sadistic","black","dangerous","dejected","haunted","morose","tragic","shattered","broken","sad","melancholy","somber","dark","gloomy","homicidal","murderous","shady","misty","dusky","ghostly","shadowy","demented","cursed","insane","possessed","grotesque","obsessed"];case"color":return["blue","green","purple","grey","scarlet","NeonGreen","NeonBlue","NeonPink","HotPink","pink","black","red","maroon","silver","golden","yellow","orange","mustard","plum","violet","cerulean","brown","lavender","violet","magenta","chestnut","rosy","copper","crimson","teal","indigo","navy","azure","periwinkle","brassy","verdigris","veridian","tan","raspberry","beige","sandy","ElectricBlue","white","champagne","coral","cyan"];case"whimsical":return["whimsical","silly","drunken","goofy","funny","weird","strange","odd","playful","clever","boastful","breakdancing","hilarious","conceited","happy","comical","curious","peculiar","quaint","quirky","fancy","wayward","fickle","yawning","sleepy","cockeyed","dizzy","dancing","absurd","laughing","hairy","smiling","perplexed","baffled","cockamamie","vulgar","hoodwinked","brainwashed"];case"shiny":return["sapphire","opal","silver","gold","platinum","ruby","emerald","topaz","diamond","amethyst","turquoise","starlit","moonlit","bronze","metal","jade","amber","garnet","obsidian","onyx","pearl","copper","sunlit","brass","brassy","metallic"];case"noisy":return["untuned","loud","soft","shrieking","melodious","musical","operatic","symphonic","dancing","lyrical","harmonic","orchestral","noisy","dissonant","rhythmic","hissing","singing","crooning","shouting","screaming","wailing","crying","howling","yelling","hollering","caterwauling","bawling","bellowing","roaring","squealing","beeping","knocking","tapping","rapping","humming","scatting","whispered","whispering","rasping","buzzing","whirring","whistling","whistled"];case"apocalyptic":return["nuclear","apocalyptic","desolate","atomic","zombie","collapsed","grim","fallen","collapsed","cannibalistic","radioactive","toxic","poisonous","venomous","disastrous","grimy","dirty","undead","bloodshot","rusty","glowing","decaying","rotten","deadly","plagued","decimated","rotting","putrid","decayed","deserted","acidic"];case"insulting":return["stupid","idiotic","fat","ugly","hideous","grotesque","dull","dumb","lazy","sluggish","brainless","slow","gullible","obtuse","dense","dim","dazed","ridiculous","witless","daft","crazy","vapid","inane","mundane","hollow","vacuous","boring","insipid","tedious","monotonous","weird","bizarre","backward","moronic","ignorant","scatterbrained","forgetful","careless","lethargic","insolent","indolent","loitering","gross","disgusting","bland","horrid","unseemly","revolting","homely","deformed","disfigured","offensive","cowardly","weak","villainous","fearful","monstrous","unattractive","unpleasant","nasty","beastly","snide","horrible","syncophantic","unhelpful","bootlicking"];case"praise":return["beautiful","intelligent","smart","genius","ingenious","gorgeous","pretty","witty","angelic","handsome","graceful","talented","exquisite","enchanting","fascinating","interesting","divine","alluring","ravishing","wonderful","magnificient","marvelous","dazzling","cute","charming","attractive","nifty","delightful","superior","amiable","gentle","heroic","courageous","valiant","brave","noble","daring","fearless","gallant","adventurous","cool","enthusiastic","fierce","awesome","radical","tubular","fearsome","majestic","grand","stunning"];case"scientific":return["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"];default:return["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"]}}function getNoun(y){switch(y){case"animals":return["flamingo","hedgehog","owl","elephant","pussycat","alligator","dachsund","poodle","beagle","crocodile","kangaroo","wallaby","woodpecker","eagle","falcon","canary","parrot","parakeet","hamster","gerbil","squirrel","rat","dove","toucan","raccoon","vulture","peacock","goldfish","rook","koala","skunk","goat","rooster","fox","porcupine","llama","grasshopper","gorilla","monkey","seahorse","wombat","wolf","giraffe","badger","lion","mouse","beetle","cricket","nightingale","hawk","trout","squid","octopus","sloth","snail","locust","baboon","lemur","meerkat","oyster","frog","toad","jellyfish","butterfly","caterpillar","tiger","hyena","zebra","snail","pig","weasel","donkey","penguin","crane","buzzard","vulture","rhino","hippopotamus","dolphin","sparrow","beaver","moose","minnow","otter","bat","mongoose","swan","firefly","platypus"];case"profession":return["doctor","lawyer","ninja","writer","samurai","surgeon","clerk","artist","actor","engineer","mechanic","comedian","fireman","nurse","RockStar","musician","carpenter","plumber","cashier","electrician","waiter","president","governor","senator","scientist","programmer","singer","dancer","director","mayor","merchant","detective","investigator","navigator","pilot","priest","cowboy","stagehand","soldier","ambassador","pirate","miner","police"];case"fantasy":return["centaur","wizard","gnome","orc","troll","sword","fairy","pegasus","halfling","elf","changeling","ghost","knight","squire","magician","witch","warlock","unicorn","dragon","wyvern","princess","prince","king","queen","jester","tower","castle","kraken","seamonster","mermaid","psychic","seer","oracle"];case"music":return["violin","flute","bagpipe","guitar","symphony","orchestra","piano","trombone","tuba","opera","drums","harpsichord","harp","harmonica","accordion","tenor","soprano","baritone","cello","viola","piccolo","ukelele","woodwind","saxophone","bugle","trumpet","sousaphone","cornet","stradivarius","marimbas","bells","timpani","bongos","clarinet","recorder","oboe","conductor","singer"];case"horror":return["murderer","chainsaw","knife","sword","murder","devil","killer","psycho","ghost","monster","godzilla","werewolf","vampire","demon","graveyard","zombie","mummy","curse","death","grave","tomb","beast","nightmare","frankenstein","specter","poltergeist","wraith","corpse","scream","massacre","cannibal","skull","bones","undertaker","zombie","creature","mask","psychopath","fiend","satanist","moon","fullMoon"];case"gross":return["slime","bug","roach","fluid","pus","booger","spit","boil","blister","orifice","secretion","mucus","phlegm","centipede","beetle","fart","snot","crevice","flatulence","juice","mold","mildew","germs","discharge","toilet","udder","odor","substance","fluid","moisture","garbage","trash","bug"];case"everyday":return["mirror","knife","fork","spork","spoon","tupperware","minivan","suburb","lamp","desk","stereo","television","TV","book","car","truck","soda","door","video","game","computer","calender","tree","plant","flower","chimney","attic","kitchen","garden","school","wallet","bottle"];case"jewelry":return["earrings","ring","necklace","pendant","choker","brooch","bracelet","cameo","charm","bauble","trinket","jewelry","anklet","bangle","locket","finery","crown","tiara","blingBling","chain","rosary","jewel","gemstone","beads","armband","pin","costume","ornament","treasure"];case"places":return["swamp","graveyard","cemetery","park","building","house","river","ocean","sea","field","forest","woods","neighborhood","city","town","suburb","country","meadow","cliffs","lake","stream","creek","school","college","university","library","bakery","shop","store","theater","garden","canyon","highway","restaurant","cafe","diner","street","road","freeway","alley"];case"scifi":return["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"];default:return["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"]}}function generator(adj,noun){var adjectives=getAdj(adj),nouns=getNoun(noun),randomAdjective=parseInt(Math.random()*adjectives.length),randomNoun=parseInt(Math.random()*nouns.length);return"The "+adjectives[randomAdjective].capitalize()+" "+nouns[randomNoun].capitalize()}function randomName(){var randomNumberAdj=parseInt(Math.random()*adjectives.length),randomNumberNoun=parseInt(Math.random()*nouns.length);return generator(adjectives[randomNumberAdj],nouns[randomNumberNoun])}function logAverageFrame(times){for(var numberOfEntries=times.length,sum=0,i=numberOfEntries-1;i>numberOfEntries-11;i--)sum+=times[i].duration;console.log("Average scripting time to generate last 10 frames: "+sum/10+"ms")}function updatePositions(){frame++,window.performance.mark("mark_start_frame");for(var movingPizzas=document.querySelectorAll(".mover"),phases=[],i=0;i<movingPizzas.length;i++){var scrollTop=document.documentElement.scrollTop||document.body.scrollTop,phase=Math.sin(scrollTop/1250+i%5);phases.push(phase)}for(i=0;i<phases.length;i++)movingPizzas[i].style.left=movingPizzas[i].basicLeft+100*phases[i]+"px";if(window.performance.mark("mark_end_frame"),window.performance.measure("measure_frame_duration","mark_start_frame","mark_end_frame"),frame%10==0){logAverageFrame(window.performance.getEntriesByName("measure_frame_duration"))}}var pizzaIngredients={};pizzaIngredients.meats=["Pepperoni","Sausage","Fennel Sausage","Spicy Sausage","Chicken","BBQ Chicken","Chorizo","Chicken Andouille","Salami","Tofu","Bacon","Canadian Bacon","Proscuitto","Italian Sausage","Ground Beef","Anchovies","Turkey","Ham","Venison","Lamb","Duck","Soylent Green","Carne Asada","Soppressata Picante","Coppa","Pancetta","Bresola","Lox","Guanciale","Chili","Beef Jerky","Pastrami","Kielbasa","Scallops","Filet Mignon"],pizzaIngredients.nonMeats=["White Onions","Red Onions","Sauteed Onions","Green Peppers","Red Peppers","Banana Peppers","Ghost Peppers","Habanero Peppers","Jalapeno Peppers","Stuffed Peppers","Spinach","Tomatoes","Pineapple","Pear Slices","Apple Slices","Mushrooms","Arugula","Basil","Fennel","Rosemary","Cilantro","Avocado","Guacamole","Salsa","Swiss Chard","Kale","Sun Dried Tomatoes","Walnuts","Artichoke","Asparagus","Caramelized Onions","Mango","Garlic","Olives","Cauliflower","Polenta","Fried Egg","Zucchini","Hummus"],pizzaIngredients.cheeses=["American Cheese","Swiss Cheese","Goat Cheese","Mozzarella Cheese","Parmesean Cheese","Velveeta Cheese","Gouda Cheese","Muenster Cheese","Applewood Cheese","Asiago Cheese","Bleu Cheese","Boursin Cheese","Brie Cheese","Cheddar Cheese","Chevre Cheese","Havarti Cheese","Jack Cheese","Pepper Jack Cheese","Gruyere Cheese","Limberger Cheese","Manchego Cheese","Marscapone Cheese","Pecorino Cheese","Provolone Cheese","Queso Cheese","Roquefort Cheese","Romano Cheese","Ricotta Cheese","Smoked Gouda"],pizzaIngredients.sauces=["Red Sauce","Marinara","BBQ Sauce","No Sauce","Hot Sauce"],pizzaIngredients.crusts=["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"],String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var adjectives=["dark","color","whimsical","shiny","noisy","apocalyptic","insulting","praise","scientific"],nouns=["animals","everyday","fantasy","gross","horror","jewelry","places","scifi"],selectRandomMeat=function(){return pizzaIngredients.meats[Math.floor(Math.random()*pizzaIngredients.meats.length)]},selectRandomNonMeat=function(){return pizzaIngredients.nonMeats[Math.floor(Math.random()*pizzaIngredients.nonMeats.length)]},selectRandomCheese=function(){return pizzaIngredients.cheeses[Math.floor(Math.random()*pizzaIngredients.cheeses.length)]},selectRandomSauce=function(){return pizzaIngredients.sauces[Math.floor(Math.random()*pizzaIngredients.sauces.length)]},selectRandomCrust=function(){return pizzaIngredients.crusts[Math.floor(Math.random()*pizzaIngredients.crusts.length)]},ingredientItemizer=function(string){return"<li>"+string+"</li>"},makeRandomPizza=function(){for(var pizza="",numberOfMeats=Math.floor(4*Math.random()),numberOfNonMeats=Math.floor(3*Math.random()),numberOfCheeses=Math.floor(2*Math.random()),i=0;i<numberOfMeats;i++)pizza+=ingredientItemizer(selectRandomMeat());for(var j=0;j<numberOfNonMeats;j++)pizza+=ingredientItemizer(selectRandomNonMeat());for(var k=0;k<numberOfCheeses;k++)pizza+=ingredientItemizer(selectRandomCheese());return pizza+=ingredientItemizer(selectRandomSauce()),pizza+=ingredientItemizer(selectRandomCrust())},pizzaElementGenerator=function(i){var pizzaContainer,pizzaImageContainer,pizzaImage,pizzaDescriptionContainer,pizzaName,ul;return pizzaContainer=document.createElement("div"),pizzaImageContainer=document.createElement("div"),pizzaImage=document.createElement("img"),pizzaDescriptionContainer=document.createElement("div"),pizzaContainer.classList.add("randomPizzaContainer"),pizzaContainer.style.width="33.33%",pizzaContainer.style.height="325px",pizzaContainer.id="pizza"+i,pizzaImageContainer.style.width="35%",pizzaImage.src="images/pizza.png",pizzaImage.classList.add("img-responsive"),pizzaImageContainer.appendChild(pizzaImage),pizzaContainer.appendChild(pizzaImageContainer),pizzaDescriptionContainer.style.width="65%",pizzaName=document.createElement("h4"),pizzaName.innerHTML=randomName(),pizzaDescriptionContainer.appendChild(pizzaName),ul=document.createElement("ul"),ul.innerHTML=makeRandomPizza(),pizzaDescriptionContainer.appendChild(ul),pizzaContainer.appendChild(pizzaDescriptionContainer),pizzaContainer},resizePizzas=function(size){window.performance.mark("mark_start_resize");var pizzaSizeLabel=document.querySelector("#pizzaSize");!function(size){for(var pizzas=document.querySelectorAll(".randomPizzaContainer"),dx=function(elem,size){var oldWidth=elem.offsetWidth,windowWidth=document.querySelector("#randomPizzas").offsetWidth,oldSize=oldWidth/windowWidth;return(function(size){switch(size){case"1":return.25;case"2":return.3333;case"3":return.5;default:console.log("bug in sizeSwitcher")}}(size)-oldSize)*windowWidth}(pizzas[0],size),newwidth=pizzas[0].offsetWidth+dx+"px",i=0;i<pizzas.length;i++)pizzas[i].style.width=newwidth}(size),function(size){switch(size){case"1":return void(pizzaSizeLabel.innerHTML="Small");case"2":return void(pizzaSizeLabel.innerHTML="Medium");case"3":return void(pizzaSizeLabel.innerHTML="Large");default:console.log("bug in changeSliderLabel")}}(size),window.performance.mark("mark_end_resize"),window.performance.measure("measure_pizza_resize","mark_start_resize","mark_end_resize");var timeToResize=window.performance.getEntriesByName("measure_pizza_resize");console.log("Time to resize pizzas: "+timeToResize[timeToResize.length-1].duration+"ms")};window.performance.mark("mark_start_generating");for(var pizzasDiv=document.getElementById("randomPizzas"),i=2;i<100;i++)pizzasDiv.appendChild(pizzaElementGenerator(i));window.performance.mark("mark_end_generating"),window.performance.measure("measure_pizza_generation","mark_start_generating","mark_end_generating");var timeToGenerate=window.performance.getEntriesByName("measure_pizza_generation");console.log("Time to generate pizzas on load: "+timeToGenerate[0].duration+"ms");var frame=0;window.addEventListener("scroll",function(){window.requestAnimationFrame(updatePositions)}),document.addEventListener("DOMContentLoaded",function(){for(var movingPizzasContainer=document.querySelector("#movingPizzas1"),i=0;i<200;i++){var elem=document.createElement("img");elem.className="mover",elem.src="images/pizza.png",elem.style.height="100px",elem.style.width="73.333px",elem.basicLeft=i%8*256,elem.style.top=256*Math.floor(i/8)+"px",movingPizzasContainer.appendChild(elem)}window.requestAnimationFrame(updatePositions)});
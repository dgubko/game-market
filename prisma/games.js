const games = [
  {
    name: "The Elder Scrolls IV: Oblivion® Game of the Year Edition Deluxe",
    image:
      "https://www.dsogaming.com/wp-content/uploads/2016/12/Oblivion-new-feature-672x372.jpg",
    description:
      "The Elder Scrolls IV: Oblivion® Game of the Year Edition presents one of the best RPGs of all time like never before. Step inside the most richly detailed and vibrant game-world ever created. With a powerful combination of freeform gameplay and unprecedented graphics, you can unravel the main quest at your own pace or explore the vast world and find your own challenges. Also included in the Game of the Year edition are Knights of the Nine and the Shivering Isles expansion, adding new and unique quests and content to the already massive world of Oblivion. See why critics called Oblivion the Best Game of 2006.",
    price: 14.99,
    salePrice: 5.99,
    rating: 5,
    releaseDate: "Jun 16, 2009",
    genre: "RPG",
    developer: "Bethesda Game Studios®",
    minSystemReq:
      "OS: Windows XP, Windows 2000, Windows XP 64-Bit; Processor: 2 Ghz Intel Pentium 4 or equivalent; Memory: 512 MB; Graphics: 128 MB Direct3D compatible video card and DirectX 9.0 compatible driver; DirectX®: DirectX 9.0c; Hard Drive: 4.6 GB; Sound: DirectX 8.1 compatible",
  },
  {
    name: "The Elder Scrolls V: Skyrim Special Edition",
    image:
      "https://www.einerd.com.br/wp-content/uploads/2017/04/skyrimintro1.2.jpg",
    description:
      "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more – with Mods, there are no limits to what you can experience.",
    price: 39.99,
    salePrice: 19.99,
    rating: 5,
    releaseDate: "Oct 27, 2016",
    genre: "RPG",
    developer: "Bethesda Game Studios",
    minSystemReq:
      "OS: Windows 7/8.1/10 (64-bit Version); Processor: Intel i5-750/AMD Phenom II X4-945; Memory: 8 GB RAM; Graphics: NVIDIA GTX 470 1GB /AMD HD 7870 2GB; Storage: 12 GB available space",
    recSystemReq:
      "OS: Windows 7/8.1/10 (64-bit Version); Processor: Intel i5-2400/AMD FX-8320; Memory: 8 GB RAM; Graphics: NVIDIA GTX 780 3GB /AMD R9 290 4GB; Storage: 12 GB available space",
  },
  {
    name: "Fallout 4",
    image:
      "https://beanstalk-9fcd.kxcdn.com/wp-content/uploads/2022/09/games-like-fallout-4.jpg",
    description:
      "Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4 – their most ambitious game ever, and the next generation of open-world gaming. As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.",
    price: 19.99,
    salePrice: 19.99,
    rating: 4.5,
    releaseDate: "Nov 9, 2015",
    genre: "RPG",
    minSystemReq:
      "Requires a 64-bit processor and operating system; OS: Windows 7/8/10 (64-bit OS required); Processor: Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent; Memory: 8 GB RAM; Graphics: NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent; Storage: 30 GB available space",
    recSystemReq:
      "Requires a 64-bit processor and operating system; OS: Windows 7/8/10 (64-bit OS required); Processor: Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent; Memory: 8 GB RAM; Graphics: NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent; Storage: 30 GB available space",
    developer: "Bethesda Game Studios",
  },
  {
    name: "Fallout 76",
    developer: "Bethesda Game Studios",
    image:
      "https://th.bing.com/th/id/R.ee24a2550bc8f368ced60b6867cb887a?rik=yQIM%2bm6Rc3Dglg&pid=ImgRaw&r=0",
    description:
      "Bethesda Game Studios, the award-winning creators of Skyrim and Fallout 4, welcome you to Fallout 76. Twenty-five years after the bombs fell, you and your fellow Vault Dwellers—chosen from the nation’s best and brightest – emerge into post-nuclear America on Reclamation Day, 2102. Play solo or join together as you explore, quest, build, and triumph against the wasteland’s greatest threats. Explore a vast wasteland, devastated by nuclear war, in this open-world multiplayer addition to the Fallout story. Experience the largest, most dynamic world ever created in the legendary Fallout universe. The Mutation Invasion is here and mutations from Daily Ops' missions have infected Public Events! Play a Mutated Public Event every hour for additional rewards and challenges, and jump back into Daily Ops to earn scaling rewards and experience a new variety of locations, enemies, and mutations.",
    price: 39.99,
    salePrice: 39.99,
    rating: 3.76,
    releaseDate: "Apr 14, 2020",
    genre: "RPG, Dark Comedy",
    minSystemReq:
      "Requires a 64-bit processor and operating system; OS: Windows 8.1/10 (64-bit versions); Processor: Intel Core i5-6600k 3.5 GHz /AMD Ryzen 3 1300X 3.5 GHz or equivalent; Memory: 8 GB RAM; Graphics: NVIDIA GTX 780 3GB /AMD Radeon R9 285 2GB or equivalent; Network: Broadband Internet connection; Storage: 80 GB available space",
    recSystemReq:
      "Requires a 64-bit processor and operating system; OS: Windows 8.1/10 (64-bit versions); Processor: Intel Core i7-4790 3.6 GHz /AMD Ryzen 5 1500X 3.5 GHz; Memory: 8 GB RAM; Graphics: NVIDIA GTX 970 4GB /AMD R9 290X 4GB; Network: Broadband Internet connection; Storage: 80 GB available space",
  },
  {
    name: "Fallout: New Vegas",
    description:
      "Welcome to Vegas. New Vegas. It’s the kind of town where you dig your own grave prior to being shot in the head and left for dead…and that’s before things really get ugly. It’s a town of dreamers and desperados being torn apart by warring factions vying for complete control of this desert oasis. It’s a place where the right kind of person with the right kind of weaponry can really make a name for themselves, and make more than an enemy or two along the way. As you battle your way across the heat-blasted Mojave Wasteland, the colossal Hoover Dam, and the neon drenched Vegas Strip, you’ll be introduced to a colorful cast of characters, power-hungry factions, special weapons, mutated creatures and much more. Choose sides in the upcoming war or declare “winner takes all” and crown yourself the King of New Vegas in this follow-up to the 2008 videogame of the year, Fallout 3. Enjoy your stay.",
    developer: "Obsidian Entertainment",
    image:
      "https://th.bing.com/th/id/R.17fc1a2f39fccd0142e8485812dc5fb8?rik=x8SUd9PTUytf1A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-TtDG9TUcfgg%2fUqbpj-ht-6I%2fAAAAAAAAl18%2fpsLT9ldg4Ps%2fs1600%2fFallout_New_Vegas_(PC)_01.jpg&ehk=%2bgl0VIYCYPwO1%2fZzHq5UaxQhxpYcmc1HEz%2bxMcESXBw%3d&risl=&pid=ImgRaw&r=0",
    price: 9.99,
    salePrice: 5.99,
    minSystemReq:
      "OS: Windows 7/Vista/XP; Processor: Dual Core 2.0GHz; Memory: 2GB RAM; Hard Disk Space: 10GB free space; Video Card: NVIDIA GeForce 6 series, ATI 1300XT series",
    genre: "RPG",
    releaseDate: "Oct 19, 2010",
    rating: 4.55,
  },
  {
    name: "Call of Duty®: Black Ops III",
    description:
      "Call of Duty®: Black Ops III Zombies Chronicles Edition includes the full base game and the Zombies Chronicles content expansion. Call of Duty: Black Ops III combines three unique game modes: Campaign, Multiplayer, and Zombies, providing fans with the deepest and most ambitious Call of Duty ever. The Zombies Chronicles content expansion delivers 8 remastered classic Zombies maps from Call of Duty®: World at War, Call of Duty®: Black Ops and Call of Duty®: Black Ops II. Complete maps from the original saga are fully remastered and HD playable within Call of Duty®: Black Ops III.",
    image:
      "https://th.bing.com/th/id/R.36406f2a8bcef78375bf2235fe88baf3?rik=mdXoKfkN3S1BQw&riu=http%3a%2f%2fedge.alluremedia.com.au%2fm%2fk%2f2015%2f11%2fBlackops3.jpg&ehk=K73qMK%2f8yXpzF7qp8HqZdiiQAgiJ8s2lA%2fi1VcjQje4%3d&risl=&pid=ImgRaw&r=0",
    rating: 3.85,
    genre: "Shooter, Action",
    releaseDate: "Nov 5, 2015",
    developer: "Treyarch, Aspyr (Mac)",
    price: 14.99,
    salePrice: 14.99,
    minSystemReq:
      "OS: Windows 7 64-Bit / Windows 8 64-Bit / Windows 8.1 64-Bit; Processor: Intel® Core™ i3-530 @ 2.93 GHz / AMD Phenom™ II X4 810 @ 2.60 GHz; Memory: 6 GB RAM; Graphics: NVIDIA® GeForce® GTX 470 @ 1GB / ATI® Radeon™ HD 6970 @ 1GB; DirectX: Version 11; Network: Broadband Internet connection; Storage: 100 GB available space; Sound Card: DirectX Compatible",
  },
  {
    name: "Resident Evil 4",
    image:
      "https://video-game-guide-walkthrough.supersoluce.com/wp-content/uploads/2023/03/15/resident-evil-4-remake-guide-walkthrough-vignette.jpg",
    description:
      "Survival is just the beginning.\n\nSix years have passed since the biological disaster in Raccoon City.\n\nAgent Leon S. Kennedy, one of the survivors of the incident, has been sent to rescue the president's kidnapped daughter.\n\nHe tracks her to a secluded European village, where there is something terribly wrong with the locals.\n\nAnd the curtain rises on this story of daring rescue and grueling horror where life and death, terror and catharsis intersect.\n\nFeaturing modernized gameplay, a reimagined storyline, and vividly detailed graphics,\n\nResident Evil 4 marks the rebirth of an industry juggernaut.\n\nRelive the nightmare that revolutionized survival horror.",
    developer: "CAPCOM Co., Ltd.",
    genre: "Action, Adventure",
    price: 59.99,
    salePrice: 39.99,
    releaseDate: "Mar 23, 2023",
    rating: 4.8,
    minSystemReq:
      "Requires a 64-bit processor and operating system; OS: Windows 10 (64 bit); Processor: AMD Ryzen 3 1200 / Intel Core i5-7500; Memory: 8 GB RAM; Graphics: AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM; DirectX: Version 12; Network: Broadband Internet connection; Additional Notes: Estimated performance (when set to Prioritize Performance): 1080p/45fps. ・Framerate might drop in graphics-intensive scenes. ・AMD Radeon RX 6700 XT or NVIDIA GeForce RTX 2060 required to support ray tracing.",
    recSystemReq:
      "Requires a 64-bit processor and operating system; OS: Windows 10 (64 bit)/Windows 11 (64 bit); Processor: AMD Ryzen 5 3600 / Intel Core i7 8700; Memory: 16 GB RAM; Graphics: AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070; DirectX: Version 12; Network: Broadband Internet connection; Additional Notes: Estimated performance: 1080p/60fps ・Framerate might drop in graphics-intensive scenes. ・AMD Radeon RX 6700 XT or NVIDIA GeForce RTX 2070 required to support ray tracing.",
  },
  {
    name: "Counter-Strike: Global Offensive",
    image: "https://fraghero.com/wp-content/uploads/2018/12/csgo.jpeg",
    genre: "Action, Free to Play",
    developer: "Valve, Hidden Path Entertainment",
    releaseDate: "Aug 21, 2012",
    description:
      'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.\n\nCS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).\n\n"Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999," said Doug Lombardi at Valve. "For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS: GO promises to expand on CS\' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac."',
    rating: 4.45,
    price: 0,
    salePrice: 0,
    minSystemReq:
      "OS: Windows® 7/Vista/XP; Processor: Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better; Memory: 2 GB RAM; Graphics: Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0; DirectX: Version 9.0c; Storage: 15 GB available space",
  },
  {
    name: "The Last of Us™ Part I",
    image:
      "https://th.bing.com/th/id/OIP.KTrAFUSPbFiS1QIJ4F3iggHaEK?pid=ImgDet",
    description:
      "Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.\n\nIn a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone. However, what starts as a small job soon transforms into a brutal cross-country journey.",
    genre: "Action, Adventure",
    developer: "Naughty Dog LLC",
    releaseDate: "Mar 28, 2023",
    rating: 4.45,
    price: 59.99,
    salePrice: 59.99,
    minSystemReq:
      "Requires a 64-bit processor and operating system; OS: Windows 10 (Version 1909 or Newer); Processor: AMD Ryzen 5 1500X, Intel Core i7-4770K; Memory: 16 GB RAM; Graphics: AMD Radeon RX 470 (4 GB), AMD Radeon RX 6500 XT (4 GB), NVIDIA GeForce GTX 970 (4 GB), NVIDIA GeForce 1050 Ti (4 GB); Storage: 100 GB available space; Additional Notes: SSD Recommended",
    recSystemReq:
      "Requires a 64-bit processor and operating system; OS: Windows 10 (Version 1909 or Newer); Processor: AMD Ryzen 5 3600X, Intel Core i7-8700; Memory: 16 GB RAM; Graphics: AMD Radeon RX 5700 XT (8 GB), AMD Radeon RX 6600 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB), NVIDIA GeForce RTX 3060 (8 GB); Storage: 100 GB available space; Additional Notes: SSD Recommended",
  },
  {
    name: "Sons Of The Forest",
    image:
      "https://th.bing.com/th/id/R.bd9dae6c319f6fe311ed97ede9069b12?rik=7N37e3rCxIVe0Q&pid=ImgRaw&r=0",
    genre: "Action, Adventure, Indie, Simulation",
    developer: "Endnight Games Ltd",
    releaseDate: "Feb 23, 2023",
    description:
      "Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.",
    price: 29.99,
    salePrice: 29.99,
    rating: 4.6,
    minSystemReq:
      "Requires a 64-bit processor and operating system; OS: 64-bit Windows 10; Processor: INTEL CORE I5-8400 or AMD RYZEN 3 3300X; Memory: 12 GB RAM; Graphics: NVIDIA GeForce GTX 1060 3GB or AMD Radeon RX 570 4GB; DirectX: Version 11; Storage: 20 GB available space; Additional Notes: SSD (Preferred)",
    recSystemReq:
      "Requires a 64-bit processor and operating system; OS: 64-bit Windows 10; Processor: INTEL CORE I7-8700K or AMD RYZEN 5 3600X; Memory: 16 GB RAM; Graphics: NVIDIA GeForce 1080Ti or AMD Radeon RX 5700 XT; DirectX: Version 11; Storage: 20 GB available space; Additional Notes: SSD (Preferred)",
  },
  {
    name: "Forza Horizon 5",
    image:
      "https://cdn.mos.cms.futurecdn.net/F7xhXzpzdzvNaM8MGb8yYn-480-80.png",
    description:
      "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
    genre: "Action, Adventure, Racing, Simulation, Sports",
    developer: "Playground Games",
    releaseDate: "Nov 8, 2021",
    rating: 4.3,
    price: 59.99,
    salePrice: 34.99,
    minSystemReq:
      "Requires a 64-bit processor and operating system; OS: Windows 10 version 15063.0 or higher; Processor: Intel i5-4460 or AMD Ryzen 3 1200; Memory: 8 GB RAM; Graphics: NVidia GTX 970 OR AMD RX 470; DirectX: Version 12; Network: Broadband Internet connection; Storage: 110 GB available space",
    recSystemReq:
      "Requires a 64-bit processor and operating system; OS: Windows 10 version 15063.0 or higher; Processor:  Intel i5-8400 or AMD Ryzen 5 1500X; Memory: 16 GB RAM; Graphics: NVidia GTX 1070 OR AMD RX 590; DirectX: Version 12; Network: Broadband Internet connection; Storage: 110 GB available space",
  },
  {
    name: "STAR WARS Jedi: Fallen Order™",
    image: "https://cdn.apocanow.it/apocanow/uploads/so/17162/coveramp.jpg",
    description:
      "A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a new third-person action-adventure title from Respawn Entertainment. This narratively driven, single-player game puts you in the role of a Jedi Padawan who narrowly escaped the purge of Order 66 following the events of Episode 3: Revenge of the Sith. On a quest to rebuild the Jedi Order, you must pick up the pieces of your shattered past to complete your training, develop new powerful Force abilities and master the art of the iconic lightsaber - all while staying one step ahead of the Empire and its deadly Inquisitors.\n\nWhile mastering your abilities, players will engage in cinematically charged lightsaber and Force combat designed to deliver the kind of intense Star Wars lightsaber battles as seen in the films. Players will need to approach enemies strategically, sizing up strengths and weaknesses while cleverly utilizing your Jedi training to overcome your opponents and solve the mysteries that lay in your path.\n\nStar Wars fans will recognize iconic locations, weapons, gear and enemies while also meeting a roster of fresh characters, locations, creatures, droids and adversaries new to Star Wars. As part of this authentic Star Wars story, fans will delve into a galaxy recently seized by the Empire. As a Jedi hero-turned-fugitive, players will need to fight for survival while exploring the mysteries of a long-extinct civilization all in an effort to rebuild the remnants of the Jedi Order as the Empire seeks to erase the Jedi completely.",
    price: 39.99,
    salePrice: 3.99,
    genre: "Action, Adventure",
    developer: "Respawn Entertainment",
    releaseDate: "Nov 14, 2019",
    rating: 3.9,
    minSystemReq:
      "Requires a 64-bit processor and operating system; OS: 64-bit Windows 7/8.1/10; Processor: AMD FX-6100/Intel i3-3220 or Equivalent; Memory: 8 GB RAM; Graphics: AMD Radeon HD 7750, NVIDIA GeForce GTX 650 or Equivalent; DirectX: Version 11; Storage: 55 GB available space",
    recSystemReq:
      "Requires a 64-bit processor and operating system; OS: 64-bit Windows 7/8.1/10; Processor: AMD Ryzen 7 1700/Intel i7-6700K or Equivalent; Memory: 16 GB RAM; Graphics: AMD RX Vega 56, Nvidia GTX 1070/GTX1660Ti or Equivalent; DirectX: Version 11; Storage: 55 GB available space",
  },
];

module.exports = { games };

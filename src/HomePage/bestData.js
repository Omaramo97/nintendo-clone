const bestData = [
  {
    title: "Nintendo Switch Sports",
    cost: "$39.99",
    system: " Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/n/nintendo-switch-sports-switch/hero",
  },
  {
    title: "Kirby and the Forgotten Land",
    cost: "$59.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/1/13-sentinels-aegis-rim-switch/hero",
  },
  {
    title: "STAR WARS: The Force Unleased",
    cost: "$19.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/dlc/switch-dlc/monster-hunter-rise-dlc/individual/monster-hunter-rise-sunbreak/image",
  },
  {
    title: "Mario Kart 8 Deluxe ",
    cost: "$24.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/fr_CA/games/switch/l/lego-star-wars-the-skywalker-saga-switch/hero",
  },
  {
    title: "Scott Pilgrim vs. The World: The Game - Complete Edition",
    cost: "$14.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/scott-pilgrim-vs-the-world-the-game-complete-edition-switch/hero",
  },
  {
    title: "Minecraft",
    cost: "$29.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero",
  },
  {
    title: "Elder Scrolls V: Skyrim",
    cost: "$59.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/t/the-elder-scrolls-v-skyrim-switch/hero",
  },
  {
    title: "LEGO Star Wars: The Skywalker Saga",
    cost: "$47.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/l/lego-star-wars-the-skywalker-saga-switch/hero",
  },
  {
    title: "Pokemon Legends: Arceus",
    cost: "$59.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero",
  },
  {
    title: "Mario Party Superstars",
    cost: "$59.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-party-superstars-switch/hero",
  },
  {
    title: "Just Dance 2022",
    cost: "$49.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/j/just-dance-2022-switch/hero",
  },
  {
    title: "Stardew Valley",
    cost: "$14.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/stardew-valley-switch/hero",
  },
  {
    title: "Super Smash Bros. Ultimate",
    cost: "$59.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/hero",
  },
  {
    title: "Cuphead",
    cost: "$19.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/cuphead-switch/hero",
  },
  {
    title: "Animal Crossing: New Horizons",
    cost: "$59.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/hero",
  },
  {
    title: "Don't Starve Together",
    cost: "$14.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/d/dont-starve-together-switch/hero",
  },
  {
    title: "Cooking Simulator",
    cost: "$1.99",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/cooking-simulator-switch/hero",
  },
];
export default bestData;
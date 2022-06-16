const data = [
  {
    title: "Mario Super Strikers: Battle League - Pre -order now",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-strikers-battle-league-switch/hero",
  },
  {
    title: "Kirby and the Forgotten Land - Available Now",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/hero",
  },
  {
    title: "Check out Presentation",
    system: " ",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/merchandising/feature-banner/Current%20Events/Indie%20World%20Showcases/INDIE-82-1920x1080_noText_v03",
  },
  {
    title: "Mario Kart 8 Deluxe DLC - Available now",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/merchandising/feature-banner/Current%20Events/Nintendo%20Direct%202.09.2022/ND-202202_Thumbnail-Clean_MK8D-Booster-Course",
  },
  {
    title: "Monster Hunter Rise DLC - Pre-order now",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/dlc/switch-dlc/monster-hunter-rise-dlc/individual/monster-hunter-rise-sunbreak/image",
  },
  {
    title: "Apex Legends new season - Saviors",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/a/apex-legends-switch/hero",
  },
  {
    title: "Splatoon 2 Octo Expansion DLC - Available now",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/merchandising/feature-banner/nso/1920x1080-S2_Octo-Exp",
  },
  {
    title: "Games mom will love - Learn more",
    system: " ",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/merchandising/feature-banner/Current%20Events/mothers-day/1920x1080_ncom_promo_games-mom-will-love",
  },
  {
    title: "Star Wars The Force Unleashed - Availalbe now",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/star-wars-the-force-unleashed-switch/hero",
  },
  {
    title: "Splatoon 3",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/splatoon-3-switch/hero",
  },
  {
    title: "Xenoblade Chronoicles 3 - Pre-order now",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/x/xenoblade-chronicles-3-switch/hero",
  },
  {
    title: "13 Sentinels: Aegis Rim - Available now",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/1/13-sentinels-aegis-rim-switch/hero",
  },
  {
    title: "Metroid Dread - Free update available",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/metroid-dread-switch/hero",
  },
  {
    title: "Lego Star Wars: The Skywalker Saga - Available now",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/fr_CA/games/switch/l/lego-star-wars-the-skywalker-saga-switch/hero",
  },
  {
    title: "Fortnite Season 3 Chapter 2 Resistance",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/merchandising/feature-banner/Fortnite%20Updates/EN_20BR_Lineup_NintendoOfficialBanners_1920x1080",
  },
  {
    title: "Pokemon Legends: Arceus - Available now",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero",
  },
  {
    title: "Nintendo Switch Online + Expansion Pack",
    system: "Nintendo Switch",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/merchandising/feature-banner/nso/1920x1080-NSO_EP_20222204",
  },
];
export default data;

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Ride a Dino Wiki",
  shortName: "Ride a Dino",
  logoText: "RD",
  tagline: "Dino Eggs, Mutations, Hatching & Progression Guides",
  description: "Your ultimate guide to Ride a Dino on Roblox! Discover Dino Egg locations, hatching tips, dinosaur rarity, speed mutations, and collection strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rideadino.top",
  supportEmail: "support@rideadino.top",
  gameUrl: "https://www.roblox.com/games/131652231424227/Ride-a-Dino",
  heroVideoId: "JF_l5dWEois", // Ride a Dino beginner guide: fast money, dinosaurs, stamina & fusion
  social: {
    youtube: "https://www.youtube.com/watch?v=JF_l5dWEois",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

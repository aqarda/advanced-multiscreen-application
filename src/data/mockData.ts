import type { BrowseCategory, Category, FeaturedStory, StoreApp, TodayStory } from "@/types/models";

const closeFriendsImage = require("../../assets/images/today-1.jpeg");

export const APPS: StoreApp[] = [
  {
    id: "photoshare",
    name: "PhotoShare",
    subtitle: "Videos, creators & friends",
    category: "Photo & Video",
    developer: "PhotoShare Inc.",
    iconName: "camera",
    iconColor: "#D62976",
    isInstalled: true,
    hasInAppPurchases: false,
    rating: 4.6,
    ratingsCount: "2.7M",
    ageRating: "13+",
    chartRank: 4,
    description: "Share photos and short videos with the people you follow.",
  },
  {
    id: "streambox",
    name: "StreamBox",
    subtitle: "Series, movies & more",
    category: "Entertainment",
    developer: "StreamBox Media",
    iconName: "play",
    iconColor: "#0B1F4D",
    isInstalled: false,
    hasInAppPurchases: true,
    rating: 4.3,
    ratingsCount: "185K",
    ageRating: "16+",
    chartRank: 12,
    description: "Watch hit series and movies anywhere.",
  },
  {
    id: "ghostchat",
    name: "GhostChat",
    subtitle: "Chat with close friends",
    category: "Social Networking",
    developer: "Ghost Labs",
    iconName: "chatbubble",
    iconColor: "#E0B000",
    isInstalled: true,
    hasInAppPurchases: true,
    rating: 4.5,
    ratingsCount: "1.1M",
    ageRating: "13+",
    chartRank: 7,
    description: "Send disappearing messages and photos.",
  },
  {
    id: "searchly",
    name: "Searchly",
    subtitle: "Search with AI, images & text",
    category: "Utilities",
    developer: "Searchly LLC",
    iconName: "search",
    iconColor: "#3B78E7",
    isInstalled: false,
    hasInAppPurchases: true,
    isAd: true,
    rating: 4.7,
    ratingsCount: "3.4M",
    ageRating: "4+",
    chartRank: 2,
    description: "Find answers fast with AI-powered search.",
  },
  {
    id: "textline",
    name: "TextLine - Phone Call + Texting",
    subtitle: "2nd number & Wi-Fi calling",
    category: "Social Networking",
    developer: "TextLine Co.",
    iconName: "call",
    iconColor: "#2FA8E0",
    isInstalled: false,
    hasInAppPurchases: true,
    rating: 4.4,
    ratingsCount: "320K",
    ageRating: "12+",
    chartRank: 21,
    description: "Get a second phone number for calls and texts.",
  },
  {
    id: "dicego",
    name: "DICE GO!",
    subtitle: "Roll the dice & play together!",
    category: "Board",
    developer: "Board Night Games",
    iconName: "dice",
    iconColor: "#D7372B",
    isInstalled: false,
    hasInAppPurchases: true,
    rating: 4.6,
    ratingsCount: "860K",
    ageRating: "4+",
    chartRank: 3,
    description: "Roll the dice, build your board, and play with friends.",
  },
  {
    id: "castleclash",
    name: "Castle Clash",
    subtitle: "Base building battle strategy",
    category: "Strategy",
    developer: "Fortress Studios",
    iconName: "shield",
    iconColor: "#5B3AA8",
    isInstalled: true,
    hasInAppPurchases: true,
    rating: 4.5,
    ratingsCount: "2.2M",
    ageRating: "9+",
    chartRank: 9,
    description: "Build your village, train your army, and battle for glory.",
  },
  {
    id: "musebot",
    name: "MuseBot",
    subtitle: "Your personal AI agent",
    category: "Productivity",
    developer: "MuseBot AI",
    iconName: "sparkles",
    iconColor: "#2563EB",
    isInstalled: false,
    hasInAppPurchases: true,
    isAd: true,
    rating: 4.2,
    ratingsCount: "48K",
    ageRating: "13+",
    chartRank: 15,
    description: "Turn your goals into a real plan with an AI assistant.",
  },
  {
    id: "taskflow",
    name: "TaskFlow",
    subtitle: "To-do lists & reminders",
    category: "Productivity",
    developer: "Flow Apps",
    iconName: "checkmark-done",
    iconColor: "#34A853",
    isInstalled: false,
    hasInAppPurchases: false,
    rating: 4.8,
    ratingsCount: "95K",
    ageRating: "4+",
    chartRank: 18,
    description: "Plan your day and never miss a task.",
  },
];

export function getAppById(id: string): StoreApp | undefined {
  return APPS.find((app) => app.id === id);
}

function getAppsByIds(ids: string[]): StoreApp[] {
  return APPS.filter((app) => ids.includes(app.id));
}

export const ESSENTIAL_APPS = getAppsByIds([
  "photoshare",
  "streambox",
  "ghostchat",
  "textline",
  "dicego",
  "taskflow",
]);

export const SUGGESTED_APPS = getAppsByIds(["searchly", "textline", "dicego"]);

export const CATEGORIES: Category[] = [
  { id: "sports", name: "Sports", iconName: "football", iconColor: "#34C759" },
  { id: "safari", name: "Safari Extensions", iconName: "compass", iconColor: "#007AFF" },
  { id: "utilities", name: "Utilities", iconName: "calculator", iconColor: "#636366" },
  { id: "productivity", name: "Productivity", iconName: "paper-plane", iconColor: "#5856D6" },
];

export const FEATURED_STORY: FeaturedStory = {
  eyebrow: "GET ORGANIZED",
  title: "Automate Your Admin",
  subtitle: "Apps to streamline tasks",
  image: require("../../assets/images/apps-banner.jpeg"),
  aspectRatio: 1042 / 626,
};

export const TODAY_STORIES: TodayStory[] = [
  { id: "close-friends", image: closeFriendsImage, aspectRatio: 1066 / 1314 },
  {
    id: "muse-spotlight",
    image: require("../../assets/images/today-2.jpeg"),
    aspectRatio: 1066 / 476,
  },
];

export const APP_EVENT = {
  label: "NOW AVAILABLE",
  image: closeFriendsImage,
  aspectRatio: 1068 / 624,
};

export const BROWSE_CATEGORIES: BrowseCategory[] = [
  { id: "top-apps", title: "Top Downloaded Apps", color: "#7FA4E3", iconName: "trophy" },
  { id: "top-games", title: "Top Downloaded Games", color: "#E9A266", iconName: "trophy" },
  { id: "selling-apps", title: "Top-Selling Apps", color: "#7CC377", iconName: "medal" },
  { id: "selling-games", title: "Top-Selling Games", color: "#8E7BEF", iconName: "medal" },
  { id: "productivity", title: "Productivity", color: "#9EC0EC", iconName: "paper-plane" },
  { id: "photo-video", title: "Photo & Video", color: "#EDC67A", iconName: "camera" },
];
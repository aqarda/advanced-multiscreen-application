import type { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

export type IoniconName = ComponentProps<typeof Ionicons>["name"];

export type StoreApp = {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  developer: string;
  iconName: IoniconName;
  iconColor: string;
  isInstalled: boolean;
  hasInAppPurchases: boolean;
  isAd?: boolean;
  rating: number;
  ratingsCount: string;
  ageRating: string;
  chartRank: number;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  iconName: IoniconName;
  iconColor: string;
};

export type FeaturedStory = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  color: string;
  iconName: IoniconName;
};

export type TodayStory = {
  id: string;
  kind: "feature" | "spotlight";
  label?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  color: string;
  appId: string;
};

export type BrowseCategory = {
  id: string;
  title: string;
  color: string;
  iconName: IoniconName;
};
import type { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import type { ImageSourcePropType } from "react-native";

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
  eyebrow: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  aspectRatio: number;
};

export type TodayStory = {
  id: string;
  image: ImageSourcePropType;
  aspectRatio: number;
};

export type BrowseCategory = {
  id: string;
  title: string;
  color: string;
  iconName: IoniconName;
};
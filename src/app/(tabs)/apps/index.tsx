import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppRow from "@/components/AppRow";
import ScreenHeader from "@/components/ScreenHeader";
import SectionHeader from "@/components/SectionHeader";
import { colors, spacing } from "@/constants/theme";
import { CATEGORIES, ESSENTIAL_APPS, FEATURED_STORY } from "@/data/mockData";
import type { Category } from "@/types/models";

const VISIBLE_ESSENTIALS = ESSENTIAL_APPS.slice(0, 3);

type CategoryChipProps = {
  category: Category;
};

function CategoryChip({ category }: CategoryChipProps) {
  return (
    <View style={styles.chip}>
      <Ionicons name={category.iconName} size={20} color={category.iconColor} />
      <Text style={styles.chipText}>{category.name}</Text>
    </View>
  );
}

export default function AppsScreen() {
  const { width: screenWidth } = useWindowDimensions();
  const bannerWidth = screenWidth - spacing.screen * 2;
  const bannerHeight = bannerWidth / FEATURED_STORY.aspectRatio;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView>
        <ScreenHeader title="Apps" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipRow}
        >
          {CATEGORIES.map((category) => (
            <CategoryChip key={category.id} category={category} />
          ))}
        </ScrollView>

        <View style={styles.featured}>
          <Text style={styles.featuredEyebrow}>{FEATURED_STORY.eyebrow}</Text>
          <Text style={styles.featuredTitle}>{FEATURED_STORY.title}</Text>
          <Text style={styles.featuredSubtitle}>{FEATURED_STORY.subtitle}</Text>
          <Image
            source={FEATURED_STORY.image}
            style={[styles.featuredImage, { width: bannerWidth, height: bannerHeight }]}
            resizeMode="cover"
          />
        </View>

        <SectionHeader title="iPhone Essentials" subtitle="Must-have apps for your device" />
        <View style={styles.list}>
          {VISIBLE_ESSENTIALS.map((app, index) => (
            <Link
              key={app.id}
              href={{ pathname: "/apps/[id]", params: { id: app.id } }}
              asChild
            >
              <Pressable>
                <AppRow app={app} showSeparator={index < VISIBLE_ESSENTIALS.length - 1} />
              </Pressable>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  chipRow: {
    paddingHorizontal: spacing.screen,
    gap: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: colors.pillGray,
  },
  chipText: {
    fontSize: 17,
    color: colors.textPrimary,
  },
  featured: {
    paddingHorizontal: spacing.screen,
    marginTop: 20,
  },
  featuredEyebrow: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.accent,
  },
  featuredTitle: {
    fontSize: 24,
    color: colors.textPrimary,
    marginTop: 2,
  },
  featuredSubtitle: {
    fontSize: 24,
    color: colors.textSecondary,
  },
  featuredImage: {
    borderRadius: 16,
    marginTop: 12,
  },
  list: {
    paddingHorizontal: spacing.screen,
    paddingBottom: 24,
  },
});
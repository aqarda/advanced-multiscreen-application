import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppRow from "@/components/AppRow";
import ScreenHeader from "@/components/ScreenHeader";
import SectionHeader from "@/components/SectionHeader";
import { colors, spacing } from "@/constants/theme";
import { BROWSE_CATEGORIES, SUGGESTED_APPS } from "@/data/mockData";
import type { BrowseCategory } from "@/types/models";

const GRID_GAP = 12;
const TILE_ASPECT_RATIO = 1.75;

type BrowseTileProps = {
  category: BrowseCategory;
  width: number;
};

function BrowseTile({ category, width }: BrowseTileProps) {
  return (
    <View
      style={[
        styles.tile,
        { width, height: width / TILE_ASPECT_RATIO, backgroundColor: category.color },
      ]}
    >
      <Ionicons
        name={category.iconName}
        size={36}
        color="rgba(255, 255, 255, 0.9)"
        style={styles.tileIcon}
      />
      <Text style={styles.tileTitle}>{category.title}</Text>
    </View>
  );
}

export default function SearchScreen() {
  const { width: screenWidth } = useWindowDimensions();
  const tileWidth = (screenWidth - spacing.screen * 2 - GRID_GAP) / 2;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView>
        <ScreenHeader title="Search" />


        <View style={styles.searchBar}>
          <Ionicons name="search" size={22} color={colors.textPrimary} />
          <Text style={styles.searchPlaceholder} numberOfLines={1}>
            Games, Apps, Stories, and More
          </Text>
          <Ionicons name="mic" size={22} color={colors.textPrimary} />
        </View>

        <SectionHeader title="Suggested" />
        <View style={styles.list}>
          {SUGGESTED_APPS.map((app, index) => (
            <AppRow
              key={app.id}
              app={app}
              showSeparator={index < SUGGESTED_APPS.length - 1 && !app.isAd}
            />
          ))}
        </View>

        <SectionHeader title="Browse" />
        <View style={styles.grid}>
          {BROWSE_CATEGORIES.map((category) => (
            <BrowseTile key={category.id} category={category} width={tileWidth} />
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
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: spacing.screen,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: colors.background,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 17,
    color: colors.textSecondary,
  },
  list: {
    paddingHorizontal: spacing.screen,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GRID_GAP,
    paddingHorizontal: spacing.screen,
    paddingBottom: 24,
  },
  tile: {
    borderRadius: 16,
    padding: 14,
    justifyContent: "flex-end",
  },
  tileIcon: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.white,
  },
});
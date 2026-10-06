import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppRow from "@/components/AppRow";
import ScreenHeader from "@/components/ScreenHeader";
import SectionHeader from "@/components/SectionHeader";
import { colors, spacing } from "@/constants/theme";
import { ESSENTIAL_APPS } from "@/data/mockData";

const PREVIEW_APPS = ESSENTIAL_APPS.slice(0, 3);

export default function AppsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScreenHeader title="Apps" />
      <SectionHeader title="Suggested" subtitle="Must-have apps for your device" />
      <View style={styles.list}>
        {PREVIEW_APPS.map((app, index) => (
          <Link
            key={app.id}
            href={{ pathname: "/apps/[id]", params: { id: app.id } }}
            asChild
          >
            <Pressable>
              <AppRow app={app} showSeparator={index < PREVIEW_APPS.length - 1} />
            </Pressable>
          </Link>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingHorizontal: spacing.screen,
  },
});
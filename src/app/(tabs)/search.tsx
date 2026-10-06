import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppRow from "@/components/AppRow";
import ScreenHeader from "@/components/ScreenHeader";
import SectionHeader from "@/components/SectionHeader";
import { colors, spacing } from "@/constants/theme";
import { SUGGESTED_APPS } from "@/data/mockData";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScreenHeader title="Search" />
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
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AppIcon from "@/components/AppIcon";
import { colors, spacing } from "@/constants/theme";
import { getAppById } from "@/data/mockData";

export default function AppDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const app = getAppById(id);

  if (!app) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Not Found" }} />
        <Text style={styles.name}>App not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: app.name }} />
      <AppIcon iconName={app.iconName} backgroundColor={app.iconColor} size={120} />
      <Text style={styles.name}>{app.name}</Text>
      <Text style={styles.subtitle}>{app.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.screen,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 17,
    color: colors.textSecondary,
    marginTop: 4,
  },
});
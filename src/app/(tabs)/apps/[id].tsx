import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import AppIcon from "@/components/AppIcon";
import GetButton from "@/components/GetButton";
import SectionHeader from "@/components/SectionHeader";
import { colors, spacing } from "@/constants/theme";
import { APP_EVENT, getAppById } from "@/data/mockData";

type InfoStatProps = {
  label: string;
  value: string;
  caption: string;
};

function InfoStat({ label, value, caption }: InfoStatProps) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statSmall}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statSmall}>{caption}</Text>
    </View>
  );
}

export default function AppDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { width: screenWidth } = useWindowDimensions();
  const app = getAppById(id);

  if (!app) {
    return <Text style={styles.notFound}>App not found</Text>;
  }

  const eventWidth = screenWidth - spacing.screen * 2;

  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.hero, { backgroundColor: app.iconColor }]}>
        <Ionicons name={app.iconName} size={96} color="rgba(255, 255, 255, 0.85)" />
      </View>

      <View style={styles.appHeader}>
        <AppIcon iconName={app.iconName} backgroundColor={app.iconColor} size={118} />
        <View style={styles.appHeaderText}>
          <Text style={styles.name} numberOfLines={2}>
            {app.name}
          </Text>
          <Text style={styles.subtitle} numberOfLines={2}>
            {app.subtitle}
          </Text>
          <View style={styles.buttonRow}>
            <GetButton label={app.isInstalled ? "Open" : "Get"} variant="blue" />
          </View>
        </View>
      </View>

      <View style={styles.statsRow}>
        <InfoStat
          label={`${app.ratingsCount} RATINGS`}
          value={app.rating.toFixed(1)}
          caption="out of 5"
        />
        <InfoStat label="AGE RATING" value={app.ageRating} caption="In-App Controls" />
        <InfoStat label="CHART" value={`#${app.chartRank}`} caption={app.category} />
      </View>

      <SectionHeader title="Events" showChevron={false} />
      <View style={styles.eventSection}>
        <Text style={styles.eventLabel}>{APP_EVENT.label}</Text>
        <Image
          source={APP_EVENT.image}
          style={[
            styles.eventImage,
            { width: eventWidth, height: eventWidth / APP_EVENT.aspectRatio },
          ]}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  notFound: {
    flex: 1,
    paddingTop: 120,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: colors.background,
  },
  hero: {
    height: 220,
    alignItems: "center",
    justifyContent: "center",
  },
  appHeader: {
    flexDirection: "row",
    gap: 16,
    padding: spacing.screen,
  },
  appHeaderText: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 17,
    color: colors.textSecondary,
    marginTop: 4,
  },
  buttonRow: {
    alignItems: "flex-start",
    marginTop: 12,
  },
  statsRow: {
    flexDirection: "row",
    marginHorizontal: spacing.screen,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
  stat: {
    flex: 1,
    alignItems: "center",
  },
  statSmall: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textSecondary,
    marginVertical: 4,
  },
  eventSection: {
    paddingHorizontal: spacing.screen,
    paddingBottom: 24,
  },
  eventLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.accent,
    marginBottom: 8,
  },
  eventImage: {
    borderRadius: 16,
  },
});
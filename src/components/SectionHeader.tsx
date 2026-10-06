import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "@/constants/theme";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  showChevron?: boolean;
};

export default function SectionHeader({
  title,
  subtitle,
  showChevron = true,
}: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>
        {showChevron ? (
          <Ionicons name="chevron-forward" size={22} color={colors.textSecondary} />
        ) : null}
      </View>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.screen,
    marginTop: 24,
    marginBottom: 8,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 17,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
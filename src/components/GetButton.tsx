import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";

type GetButtonProps = {
  label: "Get" | "Open";
  variant?: "gray" | "white" | "blue";
  showInAppPurchases?: boolean;
};

export default function GetButton({
  label,
  variant = "gray",
  showInAppPurchases = false,
}: GetButtonProps) {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.pill, pillVariants[variant]]}>
        <Text style={[styles.label, variant === "blue" && styles.labelOnBlue]}>{label}</Text>
      </View>
      {showInAppPurchases ? <Text style={styles.inAppText}>In-App Purchases</Text> : null}
    </View>
  );
}

const pillVariants = StyleSheet.create({
  gray: { backgroundColor: colors.pillGray },
  white: { backgroundColor: colors.white },
  blue: { backgroundColor: colors.accent },
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  pill: {
    minWidth: 76,
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 999,
    alignItems: "center",
  },
  label: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.accent,
  },
  labelOnBlue: {
    color: colors.white,
  },
  inAppText: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 4,
  },
});
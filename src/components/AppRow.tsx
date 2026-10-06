import { StyleSheet, Text, View } from "react-native";
import AppIcon from "@/components/AppIcon";
import GetButton from "@/components/GetButton";
import { colors } from "@/constants/theme";
import type { StoreApp } from "@/types/models";

type AppRowProps = {
  app: StoreApp;
  showSeparator?: boolean;
};

export default function AppRow({ app, showSeparator = false }: AppRowProps) {
  return (
    <View style={[styles.row, app.isAd && styles.adRow]}>
      <AppIcon iconName={app.iconName} backgroundColor={app.iconColor} size={64} />

      <View style={[styles.details, showSeparator && styles.separator]}>
        <View style={styles.textGroup}>
          <Text style={styles.name} numberOfLines={2}>
            {app.name}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1}>
            {app.subtitle}
          </Text>
          {app.isAd ? (
            <View style={styles.adBadge}>
              <Text style={styles.adBadgeText}>Ad</Text>
            </View>
          ) : null}
        </View>

        <GetButton
          label={app.isInstalled ? "Open" : "Get"}
          variant={app.isAd ? "white" : "gray"}
          showInAppPurchases={app.hasInAppPurchases}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  adRow: {
    backgroundColor: colors.adHighlight,
    borderColor: colors.adHighlightBorder,
    borderWidth: 1,
    borderRadius: 18,
    marginHorizontal: -8,
    paddingHorizontal: 8,
  },
  details: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    paddingVertical: 12,
    gap: 8,
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator,
  },
  textGroup: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  adBadge: {
    alignSelf: "flex-start",
    backgroundColor: colors.adBadge,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginTop: 4,
  },
  adBadgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.white,
  },
});
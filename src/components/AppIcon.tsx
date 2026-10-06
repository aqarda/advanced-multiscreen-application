import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { colors } from "@/constants/theme";
import type { IoniconName } from "@/types/models";

type AppIconProps = {
  iconName: IoniconName;
  backgroundColor: string;
  size?: number;
};

export default function AppIcon({ iconName, backgroundColor, size = 64 }: AppIconProps) {
  return (
    <View
      style={[
        styles.icon,
        { width: size, height: size, borderRadius: size * 0.225, backgroundColor },
      ]}
    >
      <Ionicons name={iconName} size={size * 0.5} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
});
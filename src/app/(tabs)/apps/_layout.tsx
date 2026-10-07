import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { colors } from "@/constants/theme";

export default function AppsStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[id]"
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerBackTitle: "Apps",
          headerRight: () => (
            <Ionicons name="share-outline" size={24} color={colors.accent} />
          ),
        }}
      />
    </Stack>
  );
}
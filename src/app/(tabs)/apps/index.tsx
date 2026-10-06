import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Temporary Test IDs
const TEST_APP_IDS = ["1", "2"];

export default function AppsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <Text style={styles.largeTitle}>Apps</Text>
      <View style={styles.testLinks}>
        {TEST_APP_IDS.map((id) => (
          <Link
            key={id}
            href={{ pathname: "/apps/[id]", params: { id } }}
            asChild
          >
            <Pressable style={styles.testButton}>
              <Text style={styles.testButtonText}>Open test app {id}</Text>
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
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
    },
    largeTitle: {
        fontSize: 34,
        fontWeight: "700",
        marginTop: 8,
    },
    testLinks: {
    marginTop: 24,
    gap: 12,
  },
  testButton: {
    backgroundColor: "#F2F2F7",
    borderRadius: 12,
    padding: 16,
  },
  testButtonText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#007AFF",
  },
});
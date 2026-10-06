import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppsScreen() {
    return (
        <SafeAreaView style={styles.safeArea} edges={["top"]}>
            <Text style={styles.largeTitle}>Today</Text>
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
});
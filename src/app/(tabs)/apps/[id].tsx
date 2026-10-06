import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AppDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'App ${id}'}} />
            <Text style={styles.heading}>App detail</Text>
            <Text style={styles.body}>Route parameter id = {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    heading: {
        fontSize: 22,
        fontWeight: "700",
    },
    body: {
        fontSize: 17,
        marginTop: 8,
        color: "#3C3C43",
    },
});
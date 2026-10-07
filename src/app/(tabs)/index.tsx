import { FlatList, Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "@/components/ScreenHeader";
import { colors, spacing } from "@/constants/theme";
import { TODAY_STORIES } from "@/data/mockData";
import type { TodayStory } from "@/types/models";

type TodayCardProps = {
  story: TodayStory;
};

function TodayCard({ story }: TodayCardProps) {
  const { width: screenWidth } = useWindowDimensions();
  const cardWidth = screenWidth - spacing.screen * 2;
  const cardHeight = cardWidth / story.aspectRatio;

  return (
    <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
      <Image source={story.image} style={styles.cardImage} resizeMode="cover" />
    </View>
  );
}

export default function TodayScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <FlatList
        data={TODAY_STORIES}
        keyExtractor={(story) => story.id}
        renderItem={({ item }) => <TodayCard story={item} />}
        ListHeaderComponent={<ScreenHeader title="Today" />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingBottom: 24,
  },
  card: {
    alignSelf: "center",
    marginBottom: 16,
    borderRadius: 20,
    backgroundColor: colors.background,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
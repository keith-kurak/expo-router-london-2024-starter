import { View, Text, FlatList } from "react-native";
import { useRandomWorksQuery } from "@/data/hooks/useRandomWorksQuery";
import { useMediaQuery } from "@/constants/useMediaQuery";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Artwork } from "@/components/Artwork";

export default function WhatsNewScreen() {
  const query = useRandomWorksQuery();
  const { isSm } = useMediaQuery();
  const { bottom } = useSafeAreaInsets();

  return (
    <FlatList
      key={isSm ? "large" : "small"} // to force a re-render when numColumns changes
      data={query.data}
      numColumns={isSm ? 2 : 1}
      contentContainerStyle={{ paddingBottom: bottom + (isSm ? 0 : 80) }}
      contentContainerClassName="pt-safe lg:w-3/4 lg:self-center"
      ListHeaderComponent={
        <View className="gap-y-2 px-4 py-4">
          <Text className="text-4xl font-semibold">Welcome back!</Text>
          <Text className="font-light tracking-wider">See what's new.</Text>
        </View>
      }
      renderItem={({ item }) => (
        <Artwork exhibitName={item.department} artwork={item.randomWork} />
      )}
    />
  );
}

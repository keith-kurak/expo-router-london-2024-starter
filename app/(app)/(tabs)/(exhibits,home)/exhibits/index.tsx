import { Text, FlatList, Pressable, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { useExhibitsQuery } from "@/data/hooks/useExhibitsQuery";
import { useMediaQuery } from "@/constants/useMediaQuery";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const query = useExhibitsQuery();
  const { bottom } = useSafeAreaInsets();

  const { isSm } = useMediaQuery();

  return (
    <FlatList<{ department: string; imageUrl: string }>
      key={isSm ? "large" : "small"}
      numColumns={isSm ? 2 : 1}
      data={query.data}
      contentContainerStyle={{ paddingBottom: bottom + (isSm ? 40 : 130) }}
      contentContainerClassName="my-safe lg:w-3/4 lg:self-center"
      keyExtractor={(item) => item.department}
      renderItem={({ item }) => (
        <Link asChild href={`/exhibits/${item.department}`}>
          <Pressable className="sm:flex-1 m-4">
            <Image
              className="w-full aspect-square"
              source={{
                uri: item.imageUrl,
              }}
            />
            <View className="absolute bottom-0 right-0 left-0 text-center p-4 bg-black bg-opacity-60">
              <Text className="text-white text-center text-2xl font-bold uppercase tracking-widest">
                {item.department}
              </Text>
            </View>
          </Pressable>
        </Link>
      )}
    />
  );
}

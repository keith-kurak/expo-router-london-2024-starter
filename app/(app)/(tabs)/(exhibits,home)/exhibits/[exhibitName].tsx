import { View, FlatList } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useWorksForExhibitQuery } from "@/data/hooks/useWorksForDepartmentQuery";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LoadingShade } from "@/components/LoadingShade";
import { Artwork } from "@/components/Artwork";
import { useMediaQuery } from "@/constants/useMediaQuery";

export default function ExhibitScreen() {
  const { exhibitName }: { exhibitName: string } = useLocalSearchParams();
  const { isSm } = useMediaQuery();
  const { bottom } = useSafeAreaInsets();

  const query = useWorksForExhibitQuery(exhibitName);

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          title: exhibitName,
        }}
      />
      <FlatList
        key={isSm ? "large" : "small"} // to force a re-render when numColumns changes
        numColumns={isSm ? 2 : 1}
        contentContainerStyle={{ paddingBottom: bottom + (isSm ? 0 : 80) }}
        contentContainerClassName="mb-safe bg-shade-0 lg:w-3/4 lg:self-center"
        data={query.data}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <Artwork artwork={item} />}
      />
      <LoadingShade isLoading={query.isLoading} />
    </View>
  );
}

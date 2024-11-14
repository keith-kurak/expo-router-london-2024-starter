import { ScrollView, View, Text, Linking, Pressable } from "react-native";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMediaQuery } from "@/constants/useMediaQuery";

const venueName = "The Cleveland Museum of Art";
const venueAddress = "11150 East Boulevard, Cleveland, OH, 44106";
const venuePhone = "888-CMA-0033";

export default function VisitScreen() {
  const { bottom } = useSafeAreaInsets();
  const { isSm } = useMediaQuery();
  const onOpenVenue = () => {
    Linking.openURL(
      `https://www.google.com/maps?q=${venueName}, ${venueAddress}`,
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: bottom + (isSm ? 40 : 140) }}
      contentContainerClassName="m-safe sm:w-3/4 sm:self-center py-6"
    >
      <View className="row-y-2 px-4 py-2 gap-2">
        <Text className="text-4xl font-semibold text-center">{venueName}</Text>
        <Pressable onPress={onOpenVenue}>
          <Text className="text-xl text-center underline">{venueAddress}</Text>
        </Pressable>
        <Text className="text-xl text-center mb-4">{venuePhone}</Text>
      </View>
      <Text className="text-xl px-4 py-2 font-semibold bg-black text-white uppercase tracking-widest">
        Admission
      </Text>
      <Text className="text-xl px-4 py-2 mb-4">
        General admission is always free
      </Text>
      <Text className="text-xl px-4 py-2 font-semibold bg-black text-white uppercase tracking-widest">
        Hours
      </Text>
      <View className="row-y-2 px-4 py-2 gap-2 mb-4">
        <DailyHours day="Sunday" hours="10am – 5pm" />
        <DailyHours day="Monday" hours="Closed" />
        <DailyHours day="Tuesday" hours="10am – 5pm" />
        <DailyHours day="Wednesday" hours="10am – 9pm" />
        <DailyHours day="Thursday" hours="10am – 5pm" />
        <DailyHours day="Friday" hours="10am – 9pm" />
        <DailyHours day="Saturday" hours="10am – 5pm" />
      </View>
      <Text className="text-xl px-4 py-2 font-semibold bg-black text-white uppercase tracking-widest mb-4">
        Map
      </Text>
      <Pressable onPress={onOpenVenue}>
        <Image
          className="w-full aspect-square sm:aspect-video sm:self-center"
          source={require("@/assets/images/map.png")}
          contentFit="cover"
        />
      </Pressable>
    </ScrollView>
  );
}

function DailyHours({ day, hours }: { day: string; hours: string }) {
  return (
    <View className="flex-row justify-between items-center">
      <Text className="text-xl">{day}</Text>
      <View className="border-b-shade-2 border-b flex-1 mx-2" />
      <Text className="text-xl font-light">{hours}</Text>
    </View>
  );
}

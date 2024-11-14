import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { stripTags } from "@/lib/utils";

interface ArtworkDetailProps {
  work: any;
}

export const ArtworkDetail = ({ work }: ArtworkDetailProps) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: insets.bottom }}
      contentContainerClassName="bg-white"
    >
      <View className="flex-1">
        <View className="py-4 px-4 h-96 w-96 self-center">
          <Image
            className="flex-1"
            source={{ uri: work && work.images.web.url }}
            contentFit="contain"
            transition={500}
          />
        </View>
        <Text className="font-semibold text-3xl px-4 pt-2">{work?.title}</Text>
        <View className="flex-1">
          <View className="px-4 gap-y-2 py-2">
            {work?.creators.length ? (
              <Text className="text-lg italic font-light mb-2">
                {work.creators[0].description}
              </Text>
            ) : null}
            <View className="flex-row gap-2 flex-wrap">
              <View className="bg-tint-2 px-4 py-2 self-start">
                <Text className="text-l font-bold">{work?.date_text}</Text>
              </View>
              {work?.technique.split(",").map((item: string) => (
                <View className="bg-tint px-4 py-2 self-start" key={item}>
                  <Text className="text-l font-bold text-white whitespace-nowrap line-clamp-1">
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          {work?.description && (
            <>
              <Text className="text-xl font-semibold px-4 py-2">
                Description
              </Text>
              <View className="px-4 gap-y-2 pb-2">
                <Text className="text-lg leading-6 font-light">
                  {stripTags(work.description)}
                </Text>
              </View>
            </>
          )}
          {work?.did_you_know && (
            <>
              <Text className="text-xl font-semibold px-4 py-2">
                Did you know?
              </Text>
              <View className="px-4 gap-y-2 py-2">
                <Text className="text-lg leading-6 font-light">
                  {stripTags(work.did_you_know)}
                </Text>
              </View>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

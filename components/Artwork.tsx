import classNames from "classnames";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

type Props = {
  exhibitName?: string;
  artwork: any;
};

export function Artwork({ exhibitName, artwork }: Props) {
  return (
    <View
      className={classNames("mb-4 sm:mb-0", "px-4 py-2 gap-y-2 sm:basis-1/2")}
    >
      {exhibitName ? (
        <Link asChild href={`/exhibits/${exhibitName}`}>
          <Pressable>
            <View className="flex-row items-center gap-x-2">
              <Text className="text-l uppercase font-bold tracking-widest">
                {exhibitName}
              </Text>
              <View className="flex-1 h-0.5 bg-shade-2" />
            </View>
          </Pressable>
        </Link>
      ) : null}
      <Link asChild href={`/works/${artwork.id}`}>
        <Pressable className="flex-row sm:flex-col gap-x-2 h-48 sm:h-96">
          <Image
            className="flex-1 sm:flex-4 sm:mb-4"
            source={{
              uri: artwork.images.web.url,
            }}
          />
          <View
            className={classNames(
              "flex-1",
              "justify-center sm:justify-normal",
              "items-center sm:items-start"
            )}
          >
            <Text
              className={classNames(
                "text-center sm:text-start",
                "text-xl font-semibold mb-1",
                "line-clamp-4 sm:line-clamp-1"
              )}
            >
              {artwork.title}
            </Text>
            <View className="hidden sm:inline">
              {artwork.creators.length ? (
                <Text numberOfLines={1} className="text-lg italic font-light">
                  {artwork.creators[0].description}
                </Text>
              ) : null}
            </View>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

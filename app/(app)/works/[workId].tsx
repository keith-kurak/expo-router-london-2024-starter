import { View, Pressable, Platform } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useWorkByIdQuery } from "@/data/hooks/useWorkByIdQuery";
import { useFavStatusQuery } from "@/data/hooks/useFavStatusQuery";
import { useFavStatusMutation } from "@/data/hooks/useFavStatusMutation";
import colors from "@/constants/colors";
import { LoadingShade } from "@/components/LoadingShade";
import classNames from "classnames";
import { useAuth } from "@/data/hooks/useAuth";
import { ArtworkDetail } from "@/components/ArtworkDetail";

export default function WorkScreen() {
  const { workId } = useLocalSearchParams<{
    workId: string;
  }>();

  const { authToken } = useAuth();

  // query art API for the work
  const workQuery = useWorkByIdQuery(workId);
  const work = workQuery.data;

  // read fav status
  const favQuery = useFavStatusQuery(workId);
  const isFav = favQuery.data;

  // update fav status
  const favMutation = useFavStatusMutation();

  return (
    <View
      className={classNames(
        "bg-white sm:bg-black",
        "sm:bg-opacity-20",
        "flex-1 justify-center",
        Platform.OS === "android" && "pt-safe",
      )}
    >
      <View className="sm:my-20 sm:w-3/4 sm:self-center flex-1">
        <View className="flex-row align-middle justify-between bg-white px-4 py-4 border-b border-b-shade-2">
          <View className="justify-center px-2">
            <Pressable
              onPress={() => {
                router.back();
              }}
              className="justify-center items-middle"
            >
              <Icon name="close" size={28} />
            </Pressable>
          </View>
          <View className="justify-center px-4">
            {authToken && (
              <Pressable
                className="active:opacity-50"
                disabled={favQuery.isLoading || favMutation.isPending}
                onPress={() => {
                  favMutation.mutate({ workId, status: !isFav });
                }}
              >
                <Icon
                  name={isFav ? "star" : "star-border"}
                  color={colors.tint}
                  size={28}
                />
              </Pressable>
            )}
          </View>
        </View>
        <ArtworkDetail work={work} />
        <LoadingShade isLoading={workQuery.isLoading || favQuery.isLoading} />
      </View>
    </View>
  );
}

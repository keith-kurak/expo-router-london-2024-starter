import React, { useEffect } from "react";
import { View, Platform, Text } from "react-native";
import { Link, Redirect, useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import { useWorkByIdQuery } from "@/data/hooks/useWorkByIdQuery";
import { LoadingShade } from "@/components/LoadingShade";
import classNames from "classnames";
import { ArtworkDetail } from "@/components/ArtworkDetail";
import { useAuth } from "@/data/hooks/useAuth";

export default function WorkScreen() {
  const { workId } = useLocalSearchParams<{
    workId: string;
  }>();

  // query art API for the work
  const workQuery = useWorkByIdQuery(workId);
  const work = workQuery.data;

  const { authToken } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (authToken) {
      router.replace(`/(app)/works/${workId}`, { withAnchor: true });
    }
  }, [authToken, router, workId]);

  // whoops, didn't quite make the cut

  /*if (authToken) {
    return <Redirect href={`/(app)/works/${workId}`} withAnchor />;
  }*/

  return (
    <View
      className={classNames(
        "bg-white",
        "flex-1 justify-center",
        Platform.OS === "android" && "pt-safe"
      )}
    >
      <View className="flex-row items-center justify-between bg-white border-b border-b-shade-2 my-2 mx-4">
        <View className={classNames("h-14 w-56")}>
          <Image
            source={require("@/assets/images/logo.svg")}
            className="w-full h-full"
          />
        </View>
        <Link href="/">
          <Text className="text-lg font-semibold text-primary color-tint">
            {authToken ? "Home" : "Login"}
          </Text>
        </Link>
      </View>
      <View className="flex-1 sm:self-center">
        <ArtworkDetail work={work} />
        <LoadingShade isLoading={workQuery.isLoading} />
      </View>
    </View>
  );
}

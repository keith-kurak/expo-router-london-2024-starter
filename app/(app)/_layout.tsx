import { Stack } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import colors from "@/constants/colors";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.white },
        }}
      />
      <Stack.Screen
        name="works/[workId]"
        options={{
          ...Platform.select({
            web: {
              presentation: "transparentModal",
              animation: "fade",
            },
            default: {
              presentation: "modal",
            },
          }),
          headerShown: false,
        }}
      />
    </Stack>
  );
}

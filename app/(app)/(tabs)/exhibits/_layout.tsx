import React from "react";
import { Stack } from "expo-router";
import colors from "@/constants/colors";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function StackLayout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: colors.white } }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Exhibits",
          headerShown: false,
        }}
      />
    </Stack>
  );
}

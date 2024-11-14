import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useAuth } from "@/data/hooks/useAuth";
import { useRouter } from "expo-router";
import { Button } from "@/components/Button";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const router = useRouter();

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View className="flex-1 justify-center items-center gap-y-6 bg-shade-0">
        <TextField
          label="Email"
          text={email}
          setText={setEmail}
          autofocus={Platform.OS === "web"}
        />
        <TextField
          label="Password"
          text={password}
          setText={setPassword}
          isSecure
        />
        <Button
          onPress={async () => {
            await login(email, password);
            router.replace("/(app)");
          }}
          label="Log in"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

function TextField({
  text,
  setText,
  label,
  isSecure,
  autofocus,
}: {
  text: string;
  setText: (text: string) => void;
  label: string;
  isSecure?: boolean;
  autofocus?: boolean;
}) {
  return (
    <View className="gap-y-1">
      <Text className="text-end text-lg">{label}</Text>
      <View className="border border-black">
        <TextInput
          onChangeText={setText}
          value={text}
          secureTextEntry={isSecure}
          autoFocus={autofocus}
          className="w-72 sm:text-lg p-2 h-12"
        />
      </View>
    </View>
  );
}

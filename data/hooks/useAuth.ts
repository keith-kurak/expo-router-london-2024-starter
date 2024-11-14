import { useAtom } from "jotai";
import { atomWithStorage, createJSONStorage, RESET } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);
const authTokenAtom = atomWithStorage<any>("auth-token", undefined, storage);

const useAuth = () => {
  const [authToken, setAuthToken] = useAtom(authTokenAtom);

  const login = async (email: string, password: string) => {
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      cache: "default",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    await setAuthToken(data.authToken);
  };

  const logout = async () => {
    setAuthToken(RESET);
  };

  return { authToken, login, logout };
};

export { useAuth };

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx";

SplashScreen.preventAutoHideAsync();

const HappyImg = require("../assets/images/emoji2.png");

export default function HomeLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView>
      <View className={clsx("bg-slate-600", "text-red-600", "p-8")}>
        <Ionicons name="md-chevron-back" size={24} color="black" />

        <Text className="bg-red-500 text-blue-500 text-center">Header</Text>
        <Image source={HappyImg} style={{ width: 40, height: 40 }} />
        <Slot />
      </View>
    </SafeAreaView>
  );
}

import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import Appstack from "./src/routes/stackRoute";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const [loadFonts] = useFonts({
    Poppins: require("./src/assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (!loadFonts) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <Appstack />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

//

// export default function App() {
//   return (
//
//   );
// }

const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import AccountDetails from "./screens/AccountDetails";
import AccountDetails2 from "./screens/AccountDetails-2";
import OTPVerification from "./screens/OTPVerification";
import OTPVerificationInit from "./screens/OTPVerificationInit";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  // const [fontsLoaded, error] = useFonts({
  //   "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  //   "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  //   "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  // });

  // if (!fontsLoaded && !error) {
  //   return null;
  // }

  return (
    <>
      <NavigationContainer initialRouteName="Home">
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="AccountDetails" 
              component={AccountDetails} 
            />
            <Stack.Screen 
              name="OTPVerification" 
              component={OTPVerification} 
            />
            <Stack.Screen 
              name="AccountDetails2" 
              component={AccountDetails2} 
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

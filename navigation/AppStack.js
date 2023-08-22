import { SplashScreen } from "expo-router";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ServiceView from "./../screens/ServiceView";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bottom Navigation"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ServiceView"
        component={ServiceView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

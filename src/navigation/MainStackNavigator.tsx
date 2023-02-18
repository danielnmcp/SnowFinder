import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import FiltersScreen from "../screens/FiltersScreen";
import ResortsListScreen from "../screens/ResortsListScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
        <Stack.Screen name="ResortsListScreen" component={ResortsListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
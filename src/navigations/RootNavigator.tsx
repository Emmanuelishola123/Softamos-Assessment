import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashboardTabNavigator } from ".";
import { FirstIntroScreen, LoginScreen, RegisterScreen, SecondIntroScreen, UserLocationScreen, WalletScreen } from "../screens";
import { RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="DashboardTabs"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="DashboardTabs" component={DashboardTabNavigator} />
      <RootStack.Screen name="Wallet" component={WalletScreen} />
      <RootStack.Screen name="UserLocation" component={UserLocationScreen} />
      <RootStack.Screen name="FirstIntroScreen" component={FirstIntroScreen} />
      <RootStack.Screen name="SecondIntroScreen" component={SecondIntroScreen} />
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DashboardStackParamLists } from "./types";
import { CustomBottomTabs } from "../components";
import { UserLocationScreen, WalletScreen } from "../screens";

const TabsStack = createBottomTabNavigator<DashboardStackParamLists>();

const DashboardTabNavigator = () => {
  return (
    <TabsStack.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomBottomTabs {...props} />}
    >
      <TabsStack.Screen name="Wallet" component={WalletScreen} />
      <TabsStack.Screen name="UserLocation" component={UserLocationScreen} />
    </TabsStack.Navigator>
  );
};

export default DashboardTabNavigator;

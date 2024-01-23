
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const renderActiveTabIcon = (routeName: string) => {
  switch (routeName) {
    case "Wallet":
      return <Ionicons name="wallet-outline" size={24} color="white" />
    case 'UserLocation':
      return <Ionicons name="location-outline" size={24} color="white" />
    default:
      break;
  }
}


const renderTabIcon = (routeName: string) => {
  switch (routeName) {
    case "Wallet":
      return <Ionicons name="wallet-outline" size={24} color="white" />
    case 'UserLocation':
      return <Ionicons name="location-outline" size={24} color="white" />
    default:
      break;
  }
}

const CustomBottomTabs = (props: BottomTabBarProps) => {

  return (
    <SafeAreaView edges={["bottom"]} >
      <View
        style={style.tabs}
      >
        {props.state.routes.map((route, i) => {
          const isActive = i === props.state.index;
          return (
            <TabItem
              key={i}
              isActive={isActive}
              routeName={route.name}
              navigation={props.navigation}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default CustomBottomTabs;


const TabItem = ({
  routeName,
  isActive,
  navigation,
}: {
  routeName: string;
  isActive: boolean;
  navigation: any;
}) => {

  const handlePress = () => {
    navigation.navigate(routeName);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={style.tabItem}
    >
      <View
        style={[style.tabItemBtn, isActive ? style.tabItemBtnActive : style.tabItemBtnInactive]}
      >
        {isActive ? renderActiveTabIcon(routeName) : renderTabIcon(routeName)}
        {isActive && (
          <Text
            style={style.tabItemText}
          >
            {routeName}
          </Text>
        )}
      </View>
    </Pressable>
  );
};



const style = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },

  tabItem: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabItemBtn: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    flex: 1,
  },

  tabItemBtnInactive: {
    width: 36,
    backgroundColor: 'transparent',
  },

  tabItemBtnActive: {
    backgroundColor: '#6ab486',
    paddingHorizontal: 12,
    paddingVertical: 8
  }
  ,
  tabItemText: {
    marginLeft: 4,
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  }

})
import {
  BottomTabScreenProps,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from "@react-navigation/native";
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";



export type RootStackParamList = {
  DashboardTabs: BottomTabScreenProps<DashboardStackParamLists>;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  FirstIntroScreen: undefined;
  SecondIntroScreen: undefined;
  Wallet: undefined;
  UserLocation: undefined
};


export type DashboardStackParamLists = {
  Wallet: undefined;
  UserLocation: undefined
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type DashboardStackScreenProps = CompositeScreenProps<
  BottomTabScreenProps<DashboardStackParamLists, "Wallet">,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type DashboardStackScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<DashboardStackParamLists, "Wallet">,
  RootStackNavigationProps<keyof RootStackParamList>
>;
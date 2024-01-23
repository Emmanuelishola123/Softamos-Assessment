import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme } from "react-native";
import {
  NavigationContainer,
  // Theme,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useMemo, useState } from "react";
import { RootNavigator } from "./src/navigations";
import { Theme, darkTheme, defaultTheme } from "./src/utils/theme";
import { ThemeContext } from "./src/context";


export default function App() {
  // Dark mode
  const colorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark');

  const themeContext = useMemo(() => {
    return {
      isDarkTheme,
      setIsDarkTheme
    }
  }, [isDarkTheme]);

  const theme: Theme = useMemo(
    () => isDarkTheme ? { ...darkTheme } : { ...defaultTheme },
    [isDarkTheme]
  );

  return (
    <SafeAreaProvider style={styles.container}>
      <ThemeContext.Provider value={themeContext}>
        <NavigationContainer theme={theme}>
          <RootNavigator />
        </NavigationContainer>
      </ThemeContext.Provider>
      <StatusBar style={isDarkTheme ? 'light' : 'dark'} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

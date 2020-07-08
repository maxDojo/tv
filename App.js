import "react-native-gesture-handler";
import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRegistry, StyleSheet } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import {
  prefReducer,
  prefDefault,
  Preferences as AppPreferences,
} from "./functions";
import { name as appName } from "./app.json";
import RootNavigation from "./routes/drawer";

// declare variables
let theme;
export default function App() {
  const [pref, prefDispatch] = useReducer(prefReducer, prefDefault);
  pref.darkMode == true ? (theme = DarkTheme) : (theme = DefaultTheme);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppPreferences.Provider value={{ pref: pref, dispatch: prefDispatch }}>
          <RootNavigation />
        </AppPreferences.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent((appName) => () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

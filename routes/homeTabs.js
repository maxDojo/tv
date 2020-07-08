import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { withTheme } from "react-native-paper";
import Home from "../screens/home";
import Recent from "../screens/recent";
import Profile from "../screens/profile";

const Tab = createMaterialBottomTabNavigator();

function App({ theme }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 18;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Recent") {
            iconName = focused ? "movie" : "movie-outline";
          } else if (route.name === "Profile") {
            iconName = "account";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      barStyle={{ backgroundColor: theme.colors.surface }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Tab.Screen name="Recent" component={Recent} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default withTheme(App);

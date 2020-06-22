import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// import screens
import Home from "../screens/home";
import Recent from "../screens/recent";
import Profile from "../screens/profile";

const Tab = createBottomTabNavigator();

export default function RootNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "recent") {
            iconName = focused ? "movie" : "movie-outline";
          } else if (route.name === "profile") {
            iconName = "account";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "gray",
      }}
      navigationOption
    >
      <Tab.Screen name="Home" component={Home} title="" />
      <Tab.Screen name="Recent" component={Recent} title="" />
      <Tab.Screen name="Profile" component={Profile} title="" />
    </Tab.Navigator>
  );
}

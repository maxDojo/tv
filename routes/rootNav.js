import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcon } from "react-native-vector-icons";

// import screens
import Home from "../screens/home";
import Recent from "../screens/recent";
import Profile from "../screens/profile";

const Tab = createBottomTabNavigator();

export default function RootNav() {
  return (
    <Tab.Navigator initialRouteName="Home" backBehavior="history">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <MaterialCommunityIcon name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Recent"
        component={Recent}
        options={
          {
            // tabBarIcon: () => <MaterialCommunityIcon name="movie" size={24} />,
          }
        }
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={
          {
            // tabBarIcon: () => <MaterialCommunityIcon name="account" size={24} />,
          }
        }
      />
    </Tab.Navigator>
  );
}

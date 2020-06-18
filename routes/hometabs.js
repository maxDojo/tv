import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Tab1") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Tab2") {
            iconName = focused ? "movie" : "movie-outline";
          } else if (route.name === "Tab3") {
            iconName = "podcast";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
      navigationOption
    >
      <Tab.Screen name="Tab1" component={Tab1} options={{ title: "" }} />
      <Tab.Screen name="Tab2" component={Tab2} options={{ title: "" }} />
      <Tab.Screen name="Tab3" component={Tab3} options={{ title: "" }} />
    </Tab.Navigator>
  );
}

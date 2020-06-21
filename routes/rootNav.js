import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Drawer from "./drawer";

const Stack = createStackNavigator();

export default function RootNav() {
  return (
    <Stack.Navigator screenOptions={{ title: "TV App" }}>
      <Stack.Screen name="drawer" component={Drawer} />
    </Stack.Navigator>
  );
}

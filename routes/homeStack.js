import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./homeTabs";
import Search from "../screens/search";
import Details from "../screens/details";

let Stack = createStackNavigator();
function homeStack() {
  return (
    <Stack.Navigator initialRouteName="home" headerMode="none">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          gestureEnabled: true,
          gestureDirection: "vertical",
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
}

export default homeStack;

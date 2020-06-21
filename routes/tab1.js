import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/header";
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/details";
import PlayBack from "../screens/playBack";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "TV App",
      }}
    >
      <Stack.Screen name="featured" component={HomeScreen} />
      <Stack.Screen name="details" component={DetailsScreen} />
      <Stack.Screen
        name="playback"
        component={PlayBack}
        options={{ header: () => null, tabBarVisible: false }}
      />
    </Stack.Navigator>
  );
}

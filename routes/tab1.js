import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/header";
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/details";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <Header navigation={navigation} title="TV App" />,
      }}
    >
      <Stack.Screen name="featured" component={HomeScreen} />
      <Stack.Screen name="details" component={DetailsScreen} stacked={true} />
    </Stack.Navigator>
  );
}

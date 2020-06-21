import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/header";
import ThirdScreen from "../screens/third";
import DetailsScreen from "../screens/details";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="featured"
        component={ThirdScreen}
        options={{
          title: "TV App",
        }}
      />
      <Stack.Screen name="details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

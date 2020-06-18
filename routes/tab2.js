import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/header";
import SecondScreen from "../screens/second";
import DetailsScreen from "../screens/details";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="featured"
        component={SecondScreen}
        options={{
          headerTitle: () => <Header navigation={navigation} title="TV App" />,
        }}
      />
      <Stack.Screen name="details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

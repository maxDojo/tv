import React from "react";
import { View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import Banner from "../components/banner";
import Shelf from "../components/shelf";

export default function HomeScreen({ navigation }) {
  function goToDetailsScreen() {
    navigation.navigate("details");
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <Button onPress={goToDetailsScreen}>go to details</Button>
        <Banner />
        <Shelf />
        <Shelf />
        <Shelf />
        <Banner />
        <Shelf />
        <Shelf />
      </ScrollView>
    </View>
  );
}

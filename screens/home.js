import React from "react";
import { View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import Banner from "../components/banner";
import Shelf from "../components/shelf";

export default function HomeScreen({ navigation }) {
  const handleOpenBanner = () => {
    navigation.navigate("details");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <Button
          onPress={() => {
            navigation.navigate("playback");
          }}
        >
          playback
        </Button>
        <Banner navigation={navigation} openBanner={handleOpenBanner} />
        <Shelf genre="Action" />
        <Shelf genre="Adventure" />
        <Shelf genre="Horror" />
        <Banner navigation={navigation} />
        <Shelf />
        <Shelf />
      </ScrollView>
    </View>
  );
}

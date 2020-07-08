import React, { useRef } from "react";
import AppView from "../components/appView";
import { Appbar, TextInput, Chip, Title } from "react-native-paper";
import { View } from "react-native";

function search({ navigation }) {
  const inputBarRef = useRef(null);
  return (
    <AppView>
      <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        {/* <Appbar.Content> */}
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Search for Movies"
            // mode="outlined"
            style={{ height: 40 }}
            ref={inputBarRef}
          />
        </View>
        <Appbar.Action icon="magnify" />
        {/* </Appbar.Content> */}
      </Appbar.Header>
      <View>
        <Title>Recent Searches</Title>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Chip icon="close">search item</Chip>
          <Chip icon="close">search item</Chip>
          <Chip icon="close">search item</Chip>
          <Chip icon="close">search item</Chip>
          <Chip icon="close">search item</Chip>
          <Chip icon="close">search item</Chip>
          <Chip icon="close">search item</Chip>
          <Chip icon="close">search item</Chip>
        </View>
      </View>
    </AppView>
  );
}

export default search;

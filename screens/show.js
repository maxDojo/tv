import React from "react";
import AppView from "../components/appView";
import {
  withTheme,
  Switch,
  Appbar,
  List,
  Paragraph,
  ToggleButton,
} from "react-native-paper";
import { Dimensions, View, StyleSheet } from "react-native";
import Player from "../components/player_cc";
import YtPlayer from "../components/ytPlayer";

const { width } = Dimensions.get("window");
function show({ navigation, route }) {
  const { movie, type } = route.params;
  return (
    <AppView>
      {/* <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
        <Appbar.Content title="Movie Details" />
      </Appbar.Header> */}
      <View style={{ flex: 1 }}>
        {type == "youtube" ? (
          <YtPlayer movie={movie} />
        ) : (
          <Player movie={movie} />
        )}
      </View>
      <View
        style={{ alignItems: "center", width: width, backgroundColor: "blue" }}
      >
        <ToggleButton.Row>
          <ToggleButton icon="star" />
          <ToggleButton icon="eye" />
        </ToggleButton.Row>
      </View>
    </AppView>
  );
}

// const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  moviePoster: {},
});
export default withTheme(show);

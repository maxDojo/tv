import React from "react";
import AppView from "../components/appView";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import {
  withTheme,
  Switch,
  Appbar,
  List,
  Paragraph,
  ToggleButton,
} from "react-native-paper";
import { Dimensions, View, ImageBackground, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
function details({ navigation, route }) {
  const { movie } = route.params;
  return (
    <AppView>
      <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
        <Appbar.Content title="Movie Details" />
      </Appbar.Header>
      <View style={{ height: 300, width: width }}>
        {/* <VideoPlayer
          videoProps={{
            shouldPlay: false,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            useNativeControls: true,
            style: { flex: 1 },
            source: {
              uri:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            },
          }}
          inFullscreen={false}
        /> */}
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
const posterWidth = (width * 2) / 3;
const styles = StyleSheet.create({
  moviePoster: {
    height: (posterWidth * 4) / 3,
    width: posterWidth,
    backgroundColor: "teal",
  },
});
export default withTheme(details);

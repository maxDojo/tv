import React, { useRef, useEffect, useState } from "react";
import { Video } from "expo-av";
import { Dimensions, StyleSheet, View, Slider, Text } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

// declare variables
const uri =
  "https://ak.picdn.net/shutterstock/videos/28349836/preview/stock-footage--k-footage-of-a-soccer-player-in-dramatic-play-during-a-soccer-game-on-a-professional-outdoor.webm";
const uri2 =
  "https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0";
const { width } = Dimensions.get("window");

export default function VideoPlayer() {
  const [videoPlayer, setVideoPlayer] = useState(null);
  const playerRef = useRef(null);
  useEffect(() => {
    // playerRef.current = (comp) => {
    setVideoPlayer(playerRef.current);
    // };
  }, []);

  const playerObject = useRef(null);
  function togglePlay() {
    videoPlayer.getStatusAsync().then((v) => {
      v.isPlaying ? videoPlayer.pauseAsync() : videoPlayer.playAsync();
    });
  }
  // useEffect(() => {
  //   playerObject.current.loadAsync({ uri: uri });
  // }, []);
  return (
    <View>
      <Video
        source={require("../assets/back.mp4")}
        rate={1.0}
        volume={1.0}
        resizeMode="cover"
        isMuted={false}
        shouldPlay
        isLooping
        style={styles.video}
        ref={playerRef}
      />
      <View style={styles.overlay}>
        <View style={styles.playButtons}>
          <MaterialCommunityIcons
            style={styles.button}
            size={36}
            name="rewind-10"
          />
          <TouchableOpacity onPress={togglePlay}>
            <MaterialCommunityIcons
              style={styles.button}
              size={36}
              name={
                // playerObject.current.getStatusAsync().shouldPlay
                //   ? "pause"
                //   : "play"
                "play"
              }
            />
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.button}
            size={36}
            name="fast-forward-30"
          />
        </View>
        <View style={styles.bottomPanel}>
          <View style={{ flex: 1 }}>
            <Slider style={{ flex: 1 }} thumbTintColor="red" />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text>current seek</Text>
              <Text>Total Time</Text>
            </View>
          </View>
          <MaterialCommunityIcons
            name="fullscreen"
            size={24}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: width,
    height: (width * 9) / 16,
  },
  overlay: {
    position: "absolute",
  },
  playButtons: {
    width: width,
    position: "absolute",
    top: (width * 9) / 32 - 18,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottomPanel: {
    width: width,
    position: "absolute",
    top: (width * 9) / 16 - 36,
    flexDirection: "row",
  },
  button: {
    color: "white",
  },
});

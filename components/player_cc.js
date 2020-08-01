import React, { Component } from "react";
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

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
      isFullScreen: false,
      duration: 0,
      progress: 0,
    };
    this.togglePlay = this.togglePlay.bind(this);
    this.playerObject = null;
    this.handlePlayerRef = (component) => {
      this.playerObject = component;
    };
  }

  componentDidMount() {
    // const duration = this.playerObject.getStatusAsync({durationMillis})
    this.playerObject.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
  }

  _onPlaybackStatusUpdate = (status) => {
    if (!status.isLoaded) {
      // Update your UI for the unloaded state
      if (status.error) {
        console.log(
          `Encountered a fatal error during playback: ${status.error}`
        );
      }
    } else {
      // Update your UI for the loaded state
      if (this.state.duration !== status.durationMillis) {
        this.setState({ duration: Math.floor(status.durationMillis) });
      }
      this.setState({ progress: Math.floor(status.positionMillis) });

      // if (status.isPlaying) {
      //   // Update your UI for the playing state
      // } else {
      //   // Update your UI for the paused state
      // }

      if (status.isBuffering) {
        // Update your UI for the buffering state
      }

      if (status.didJustFinish && !status.isLooping) {
        // The player has just finished playing and will stop. Maybe you want to play something else?
      }
    }
  };

  togglePlay() {
    this.state.isPaused
      ? this.playerObject.playAsync()
      : this.playerObject.pauseAsync();
    this.setState({ isPaused: !this.state.isPaused });
  }
  seek(position) {
    // this.setState({ progress: position });
    this.playerObject.setStatusAsync({
      positionMillis: position,
    });
  }
  handleFullScreen() {
    // if (this.state.isFullScreen == true)
    // this.playerObject.dismissFullscreenPlayer();
    // else
    // this.playerObject.presentFullscreenPlayer();
    // this.setState({ isFullScreen: !this.state.isFullScreen });
  }
  render() {
    return (
      <View>
        <Video
          source={{ uri: this.props.movie }}
          // source={require("../assets/back.mp4")}
          rate={1.0}
          volume={1.0}
          resizeMode="cover"
          isMuted={false}
          shouldPlay={false}
          isLooping
          style={styles.video}
          ref={this.handlePlayerRef}
        />
        <View style={styles.overlay}>
          <View style={styles.playButtons}>
            <TouchableOpacity
              onPress={() =>
                this.playerObject.getStatusAsync().then((v) =>
                  this.playerObject.setStatusAsync({
                    positionMillis: v.positionMillis - 10000,
                  })
                )
              }
            >
              <MaterialCommunityIcons
                style={styles.button}
                size={36}
                name="rewind-10"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.togglePlay()}>
              <MaterialCommunityIcons
                style={styles.button}
                size={36}
                name={this.state.isPaused ? "play" : "pause"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.playerObject.getStatusAsync().then((v) =>
                  this.playerObject.setStatusAsync({
                    positionMillis: v.positionMillis + 30000,
                  })
                )
              }
            >
              <MaterialCommunityIcons
                style={styles.button}
                size={36}
                name="fast-forward-30"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomPanel}>
            <View style={{ flex: 1 }}>
              {/* <Slider
                style={{ flex: 1 }}
                thumbTintColor="red"
                value={this.state.progress}
                maximumValue={this.state.duration}
                // onValueChange={val=>this.setState({progress: val})}
                onValueChange={(val) => {
                  this.playerObject.setStatusAsync({
                    shouldPlay: false,
                    positionMillis: val * 1000,
                    shouldPlay: true,
                  });
                  this.setState({ progress: val });
                }}
              /> */}
              <Slider
                style={{ flex: 1 }}
                minimumValue={0}
                maximumValue={this.state.duration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                value={this.state.progress}
                onSlidingComplete={(val) => this.seek(val)}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  color: "white",
                }}
              >
                <Text style={{ color: "white" }}>
                  {Math.floor(this.state.progress / 60000)} :{" "}
                  {Math.floor((this.state.progress % 60000) / 1000)}
                </Text>
                <Text style={{ color: "white" }}>
                  {Math.floor(this.state.duration / 60000)} :{" "}
                  {Math.floor((this.state.duration % 60000) / 1000)}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={this.handleFullScreen}>
              <MaterialCommunityIcons
                name="fullscreen"
                size={24}
                style={styles.button}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
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

export default VideoPlayer;

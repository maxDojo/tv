import React, { useRef, useState } from "react";
import { screenWidth } from "../global";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

export default function playback(props) {
  const [isPaused, setIsPaused] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <VideoPlayer
      videoProps={{
        shouldPlay: false,
        resizeMode: Video.RESIZE_MODE_CONTAIN,
        source: {
          uri: "http://techslides.com/demos/sample-videos/small.mp4",
        },
      }}
      showControlsOnLoad={true}
      inFullscreen={false}
      width={screenWidth}
    />
  );
}

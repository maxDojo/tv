import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

function snapCarousel() {
  const carouselRef = useRef(null);
  const renderItem = ({ item, index }) => {
    return (
      <ImageBackground
        style={styles.slide}
        source={{ uri: "../assets/img1.jpg" }}
      >
        <Text style={styles.title}>{item}</Text>
      </ImageBackground>
    );
  };
  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={["i", "two", "three", "four", "five"]}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={140}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    height: 240,
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    color: "red",
  },
});
export default snapCarousel;

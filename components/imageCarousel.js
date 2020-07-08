import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-anchor-carousel";
import { useTheme } from "@react-navigation/native";
import { withTheme } from "react-native-paper";

const { width } = Dimensions.get("window");

const data = [
  {
    uri: "../assets/img1.jpg",
    title: "Lorem ipsum dolor sit amet",
    content: "Neque porro quisquam est qui dolorem ipsum quia ",
  },
  {
    uri: "../assets/img1.jpg",
    title: "Lorem ipsum ",
    content: "Neque porro quisquam est qui dolorem ipsum ",
  },
  {
    uri: "../assets/img1.jpg",
    title: "Lorem ipsum dolor",
    content: "Neque porro quisquam est qui",
  },
  {
    uri: "../assets/img1.jpg",
    title: "Lorem ipsum dolor",
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
  },
  {
    uri: "../assets/img1.jpg",
    title: "Lorem ipsum ",
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor ",
  },
];

function ImageCarousel({ theme, navigation }) {
  const carouselRef = useRef(null);
  const renderItem = ({ item, index }) => {
    const { uri, title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
          navigation.navigate("details", { movie: item });
        }}
      >
        <ImageBackground source={{ uri: uri }} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Lorem</Text>
          </View>
        </ImageBackground>
        {/* <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View> */}
      </TouchableOpacity>
    );
  };
  return (
    <Carousel
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      data={data}
      renderItem={renderItem}
      itemWidth={0.7 * width}
      inActiveOpacity={0.3}
      containerWidth={width}
      ref={carouselRef}
      initialIndex={2}
    />
  );
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "#141518",
  },
  item: {
    borderWidth: 2,
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    borderColor: "white",
    elevation: 3,
    height: 180,
  },
  imageBackground: {
    flex: 4,
    backgroundColor: "#EBEBEB",
    borderWidth: 5,
    borderColor: "white",
  },
  rightTextContainer: {
    marginLeft: "auto",
    marginRight: -2,
    backgroundColor: "rgba(49, 49, 51,0.5)",
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: { color: "white" },
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  contentText: {
    fontSize: 12,
  },
});

export default withTheme(ImageCarousel);

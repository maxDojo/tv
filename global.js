import { StyleSheet, Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({
  movieCard: {
    width: 160,
    height: 200,
  },
  subheading: {
    marginTop: 30,
  },
});

export const screenWidth = Dimensions.get("window").width;

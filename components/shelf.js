import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Title, Button } from "react-native-paper";
import MovieCard from "./movieCard";

export default function shelf({ genre }) {
  return (
    <View style={styles.shelf}>
      <View style={styles.header}>
        <Title>Movies</Title>
        <Button type="outlined">MORE</Button>
      </View>
      <ScrollView horizontal={true}>
        <MovieCard url="http://techslides.com/demos/sample-videos/small.mp4" />
        <MovieCard url="http://techslides.com/demos/sample-videos/small.mp4" />
        <MovieCard url="http://techslides.com/demos/sample-videos/small.mp4" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shelf: {
    marginVertical: 10,
  },
  header: { flexDirection: "row", justifyContent: "space-between" },
});

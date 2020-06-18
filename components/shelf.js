import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Title, Button } from "react-native-paper";
import MovieCard from "./movieCard";

export default function shelf() {
  return (
    <View style={styles.shelf}>
      <View style={styles.header}>
        <Title>Movies</Title>
        <Button type="outlined">MORE</Button>
      </View>
      <ScrollView horizontal={true}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
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

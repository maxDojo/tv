import React from "react";
import { Card, Badge, IconButton, withTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { StyleSheet } from "react-native";

function MovieCard({ theme }) {
  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 5, width: 140 }}>
      <Card.Cover source={{ uri: "../assets/img1.jpg" }} />
      <Badge size={30} style={styles.play}>
        <MaterialCommunityIcons name="play" />
      </Badge>
      {/* <IconButton
        icon="play"
        size={30}
        style={styles.play}
        color={theme.colors.accent}
        animated={true}
      /> */}
    </Card>
  );
}
const styles = StyleSheet.create({
  play: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
export default withTheme(MovieCard);

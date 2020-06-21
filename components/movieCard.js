import * as React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const movieCard = ({ url }) => {
  return (
    <Card style={styles.movieCard}>
      <Card.Cover source={{ uri: "https://picsum.photos/300" }} />
      <TouchableOpacity style={styles.play}>
        {/* <Button icon="play" /> */}
        <MaterialCommunityIcons name="play" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.share}>
        <MaterialCommunityIcons
          name="share"
          size={25}
          style={styles.shareButton}
        />
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    marginHorizontal: 5,
    width: 150,
  },
  play: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 5,
    borderRadius: 15,
    backgroundColor: "tomato",
    width: 30,
    height: 30,
  },
  share: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 5,
    backgroundColor: "transparent",
    height: 25,
  },
  shareButton: {
    color: "tomato",
  },
});

export default movieCard;

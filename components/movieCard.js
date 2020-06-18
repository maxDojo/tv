import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { ScrollView, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const movieCard = () => {
  return (
    <Card style={styles.movieCard}>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions style={styles.actionBar}>
        <View style={styles.left}>
          <MaterialCommunityIcons name="share" size={24} />
        </View>
        <View style={styles.right}>
          <MaterialCommunityIcons name="heart" size={24} />
          <Button type="text">22</Button>
        </View>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    marginHorizontal: 5,
    width: 180,
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  right: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default movieCard;

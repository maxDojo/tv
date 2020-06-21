import React from "react";
import { Card, Button } from "react-native-paper";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function banner({ navigation, openBanner }) {
  return (
    <TouchableOpacity style={styles.banner} onPress={openBanner}>
      <Card>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
        <Card.Cover source={{ uri: "https://picsum.photos/400" }} />
        {/* <Card.Actions>
          <Button>Watch</Button>
          <Button>Save</Button>
        </Card.Actions> */}
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginVertical: 15,
  },
});

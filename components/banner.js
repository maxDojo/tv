import React from "react";
import { Card, Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function banner() {
  return (
    <View styles={styles.banner}>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        {/* <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content> */}
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Watch</Button>
          <Button>Save</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginVertical: 15,
  },
});

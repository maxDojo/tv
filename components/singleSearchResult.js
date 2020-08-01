import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Title, Chip } from "react-native-paper";

function singleSearchResult({
  videoTitle,
  videoPoster,
  videoSource,
  videoRuntime,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageHolder}>
        <Image
          source={{ uri: videoPoster }}
          style={{ width: 120, height: 80 }}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.titleDiv}>
          <Title>{videoTitle}</Title>
        </View>
        <View style={styles.detailsDiv}>
          <Chip icon="">{videoRuntime}</Chip>
          <Chip icon="">{videoSource}</Chip>
        </View>
      </View>
    </View>
  );
}

export default singleSearchResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginVertical: 20,
    backgroundColor: "#ccc",
  },
  imageHolder: {
    flex: 1,
    borderRadius: 5,
  },
  main: {
    flex: 2,
    flexDirection: "column",
  },
  titleDiv: {
    flex: 4,
  },
  detailsDiv: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

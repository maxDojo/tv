import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function searchBar({ navigation }) {
  const [query, setQuery] = useState("");
  // const onChangeSearch = (q) => setQuery(q);
  const goto = () => navigation.navigate("search");

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={goto}
      value={query}
      style={styles}
      icon="menu"
      onIconPress={navigation.openDrawer}
    />
  );
}
const styles = StyleSheet.create({ marginHorizontal: 10, marginVertical: 15 });

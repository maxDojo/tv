import React from "react";
import { List } from "react-native-paper";

function movieList({ children, description, listIcon }) {
  return (
    <List.Item
      title={children}
      description={description}
      left={(props) => <List.Icon {...props} icon={listIcon} />}
    />
  );
}

export default movieList;

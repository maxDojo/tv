import React from "react";
import { View, StatusBar, Dimensions } from "react-native";
import { withTheme } from "react-native-paper";

// Declare Variables
const { currentHeight } = StatusBar;
const { height } = Dimensions.get("window");

function appView({ children, theme }) {
  return (
    <View
      style={{
        paddingTop: currentHeight,
        backgroundColor: theme.colors.background,
        paddingBottom: 78,
        height: height,
      }}
    >
      {children}
    </View>
  );
}

export default withTheme(appView);

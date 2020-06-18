import React, { useState } from "react";
import { Appbar, Button, withTheme } from "react-native-paper";

export default function header(
  { title, subtitle, stacked, navigation },
  props
) {
  return (
    <Appbar.Header statusBarHeight={0}>
      {/* <Appbar.BackAction onPress={navigation.goBack} /> */}
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
}

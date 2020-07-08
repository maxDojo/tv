import React, { useState, useContext } from "react";
import AppView from "../components/appView";
import { withTheme, Switch, Appbar, List } from "react-native-paper";
import { Preferences as AppPreferences } from "../functions";

function settings({ navigation }) {
  const options = useContext(AppPreferences);
  const [isDark, setIsDark] = useState(options.pref.darkMode);
  return (
    <AppView>
      <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
        <Appbar.Content title="Settings" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <List.Item
        title="Dark Mode"
        left={(props) => <List.Icon {...props} icon="settings" />}
        right={(props) => (
          <Switch
            value={isDark}
            onValueChange={() => {
              options.dispatch({
                type: "darkMode",
                value: !options.pref.darkMode,
              });
              setIsDark(!isDark);
            }}
          />
        )}
      />
      <List.Item
        title={options.pref.darkMode}
        left={(props) => <List.Icon {...props} icon="settings" />}
        right={(props) => <Switch value={true} />}
      />
      <List.Item
        title="Settings Item"
        subtitle="Item description"
        left={(props) => <List.Icon {...props} icon="settings" />}
        right={(props) => <Switch value={true} />}
      />
      <List.Item
        title="Settings Item"
        subtitle="Item description"
        left={(props) => <List.Icon {...props} icon="settings" />}
        right={(props) => <Switch value={true} />}
      />
    </AppView>
  );
}

export default withTheme(settings);

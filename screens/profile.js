import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { withTheme, Appbar, Avatar, List, Badge } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// import my components
import AppView from "../components/appView";

// declare variables
const { width } = Dimensions.get("window");

function ProfileScreen({ theme, navigation }) {
  return (
    <AppView>
      <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <ScrollView
        centerContent={true}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="never"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.banner}>
          <View>
            <Avatar.Icon icon="account" size={192} />
            <Badge style={styles.picBadge} size={48}>
              <MaterialCommunityIcons name="camera" />
            </Badge>
          </View>
        </View>
        <View>
          <List.Item
            title="Name"
            description="Johnson"
            left={(props) => <List.Icon {...props} icon="account" />}
            right={(props) => <List.Icon {...props} icon="pencil" />}
          />
          <List.Item
            title="About"
            description="My Name is Johnson"
            left={(props) => <List.Icon {...props} icon="information" />}
            right={(props) => <List.Icon {...props} icon="pencil" />}
          />
          <List.Item
            title="Phone"
            description="08022334455"
            left={(props) => <List.Icon {...props} icon="phone" />}
            right={(props) => <List.Icon {...props} icon="pencil" />}
          />
        </View>
      </ScrollView>
    </AppView>
  );
}
const styles = StyleSheet.create({
  banner: {
    alignItems: "center",
    paddingVertical: 28,
  },
  picBadge: {
    position: "absolute",
    right: 5,
    bottom: 5,
  },
});
export default withTheme(ProfileScreen);

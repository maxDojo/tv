import React from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { withTheme } from "react-native-paper";

import DefaultScreen from "../routes/homeStack";
import Settings from "../screens/settings";
import CustomDrawer from "../components/homeDrawer";
const Drawer = createDrawerNavigator();

function drawer({ theme }) {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        style: { backgroundColor: theme.colors.surface },
        inactiveTintColor: theme.colors.text,
      }}
      initialRouteName="Home"
      drawerType="back"
    >
      <Drawer.Screen name="Home" component={DefaultScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
      {/* <Drawer.Screen name='Home' component={DefaultScreen} />
      <Drawer.Screen name='Home' component={DefaultScreen} /> */}
    </Drawer.Navigator>
  );
}

export default withTheme(drawer);

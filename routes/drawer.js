import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeTabs from "./hometabs.js";
import Tab2 from "./tab2";

function CustomDrawerContent(props, { navigation }) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="WatchList"
        icon="eye"
        onPress={() => {
          navigation.jumpTo("Watchlist");
        }}
      />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

export default function drawer() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerType="slide">
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="WatchList" component={Tab2} />
      <Drawer.Screen name="Explore Languages" component={Tab2} />
      <Drawer.Screen name="Explore Genres" component={Tab2} />
      <Drawer.Screen name="Explore Rentals" component={Tab2} />
      <Drawer.Screen name="My Rentals" component={Tab2} />
      <Drawer.Screen name="Settings" component={Tab2} />
      <Drawer.Screen name="Help and Feedback" component={Tab2} />
    </Drawer.Navigator>
  );
}

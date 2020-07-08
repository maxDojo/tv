import React, { useState } from "react";
import { Appbar, BottomNavigation, Text } from "react-native-paper";

// import my module
import AppView from "../components/appView";

export default function RecentScreen({ navigation }) {
  const MusicRoute = () => <Text>Music</Text>;

  const AlbumsRoute = () => <Text>Albums</Text>;

  const RecentsRoute = () => <Text>Recents</Text>;
  // let navState = {
  //   index: 0,
  //   routes: [
  //     { key: "music", title: "Music", icon: "queue-music" },
  //     { key: "albums", title: "Albums", icon: "album" },
  //     { key: "recents", title: "Recents", icon: "history" },
  //   ],
  // };
  // const [navParams, setNavParams] = useState(navState);
  // const handleIndexChange = (val) => setNavParams({ val });

  // const renderScene = BottomNavigation.SceneMap({
  //   music: MusicRoute,
  //   albums: AlbumsRoute,
  //   recents: RecentsRoute,
  // });
  return (
    <AppView>
      <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
        <Appbar.Content
          title="Recent"
          subtitle="See Your Recently Viewed Titles"
        />
        {/* <Appbar.Action icon="dots-vertical" /> */}
      </Appbar.Header>

      {/* <BottomNavigation
        navigationState={navParams}
        onIndexChange={handleIndexChange}
        renderScene={renderScene}
      /> */}
    </AppView>
  );
}

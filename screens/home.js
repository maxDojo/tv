import React from "react";
import { ScrollView, View, StatusBar } from "react-native";
import { withTheme, Subheading, Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// import my components
import AppView from "../components/appView";
import ImageCarousel from "../components/imageCarousel";
import SearchBar from "../components/searchBar";
import MovieCard from "../components/movieCard";
import MovieList from "../components/movieList";
// import SnapCarousel from "../components/snapCarousel";
import { globalStyles } from "../global";

// define variables
const { currentHeight } = StatusBar;
function HomeScreen({ theme, navigation }) {
  return (
    <AppView>
      <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
        <View style={{ flex: 1, flexDirection: "row", paddingLeft: 24 }}>
          <MaterialCommunityIcons name="television" size={24} />
          <Appbar.Content title="Movie App" />
        </View>
        <Appbar.Action
          icon="magnify"
          onPress={() => {
            navigation.navigate("search");
          }}
        />
      </Appbar.Header>

      <ScrollView
        centerContent={true}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="never"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ImageCarousel navigation={navigation} />
        </View>
        <View>
          {/* <SnapCarousel /> */}
          <View>
            <Subheading style={globalStyles.subheading}>Featured</Subheading>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </ScrollView>
          </View>
          <View>
            <Subheading style={globalStyles.subheading}>Premium</Subheading>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </ScrollView>
          </View>
        </View>
        <Subheading style={globalStyles.subheading}>Genres</Subheading>
        <View>
          <MovieList description="Action Genre" listIcon="sword">
            Action
          </MovieList>
          <MovieList description="Adventure Genre" listIcon="walk">
            Adventure
          </MovieList>
          <MovieList description="Funny Movies" listIcon="face">
            Comedy
          </MovieList>
          <MovieList description="Science Fiction" listIcon="beaker">
            Sci-Fi
          </MovieList>
        </View>
      </ScrollView>
    </AppView>
  );
}

export default withTheme(HomeScreen);

import React, { useRef, useState, useEffect } from "react";
import AppView from "../components/appView";
import { Appbar, TextInput, Chip, Title } from "react-native-paper";
import { View, TouchableOpacity } from "react-native";
import Axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import SearchResult from "../components/singleSearchResult";

function search({ navigation }) {
  const inputBarRef = useRef(null);

  const [ytRes, setYtRes] = useState([]);
  const [q, setQ] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // let videos=[];
  useEffect(() => {
    Axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        // q: navigation.getParam("q"),
        q: q,
        key: "AIzaSyAAEg-MwZElmq1jnqkmp3QYMTSthIbS_js",
        part: "snippet",
        maxResults: 30,
      },
    })
      .then((res) => {
        // res.data.items.map(r=>{
        //   r.id.kind=='youtube#video'?videos.push(r):''
        // })
        setYtRes(res.data);
        // videos=[]
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.log(err);
      });
  }, [q]);

  const selectVideo = (id, type) => {
    navigation.navigate("View", { id: id, type: type });
  };
  const resultHandler = (query) => {
    if (isLoading) {
      // if (query == "") {
      //   return (
      //     <View>
      //       <Title>Recent Searches</Title>
      //       <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      //         <Chip icon="close">search item</Chip>
      //         <Chip icon="close"></Chip>
      //       </View>
      //     </View>
      //   );
      // } else
      return <View></View>;
    } else {
      return (
        <View>
          <FlatList
            data={ytRes.items}
            keyExtractor={(item) => item.etag}
            renderItem={({ item }) => (
              // <View>
              //   <Text>{item.snippet.title}</Text>
              // </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("show", {
                    type: "",
                    movie: `youtube.com/embed/${item.id.videoId}`,
                  });
                }}
              >
                <SearchResult
                  videoPoster={item.snippet.thumbnails.default.url}
                  videoRuntime={10}
                  videoSource={item.id.videoId}
                  videoTitle={item.snippet.title}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  };
  return (
    <AppView>
      <Appbar.Header style={{ marginTop: 0 }}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        {/* <Appbar.Content> */}
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Search for Movies"
            // mode="outlined"
            style={{ height: 40 }}
            ref={inputBarRef}
            value={q}
            onChangeText={(val) => setQ(val)}
          />
        </View>
        <Appbar.Action icon="magnify" />
        {/* </Appbar.Content> */}
      </Appbar.Header>
      {resultHandler(q)}
    </AppView>
  );
}

export default search;

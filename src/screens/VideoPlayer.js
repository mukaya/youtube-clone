import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Constant from "expo-constants";
import { WebView } from "react-native-webview";

const VideoPlayer = ({route}) => {
  const { videoId, title } = route.params;
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View style={{ width: "100%", height: 200 }}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://youtube.com/embed/${videoId}` }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          width: Dimensions.get("screen").width - 50,
          margin: 10,
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    
    </View>
  );
};

export default VideoPlayer;

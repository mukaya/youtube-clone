import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";
import axios from "axios";
import Constant from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch} from 'react-redux';
import { useTheme } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const mycolor = colors.iconColor;
  const {data, loading} = useSelector((state)=>{
    return state.cardData;
  })

  const miniCardData = data;
  const [value, setValue] = useState("");
  //const [miniCardData, setMiniCardData] = useState("");
  //const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&type=video&key=AIzaSyBsZRB7juOuE5B5NgBwY5ZNeaQoE4C4Y7w`
      )
      .then((res) => {
        dispatch({type:"GET_DATA",payload:res.data.items});
        dispatch({type:"LOADING",payload:false});
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginTop:Constant.statusBarHeight,
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
          backgroundColor: colors.headerColor,
        }}
      >
        <Ionicons name="md-arrow-back" style={{color:mycolor}} size={32} onPress={()=>navigation.goBack()}/>
        <TextInput
          placeholder="Search something"
          value={value}
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons name="md-send" size={32} onPress={()=>fetchData()} style={{ color:mycolor}}/>
      </View>
      {loading ? <ActivityIndicator size="large" color="red" style={{marginTop:10}}/> : null}
      <FlatList
        keyExtractor={(item)=>item.id.videoId}
        data={miniCardData}
        renderItem={(item)=>{
            return <MiniCard
                videoId={item.item.id.videoId}
                title={item.item.snippet.title}
                description={item.item.snippet.description}
                chanel={item.item.snippet.channelTitle}
            />
        }}
      />
      {/* <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView> */}
    </View>
  );
};

export default Search;

import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import Header from "../components/Header";
import Card from '../components/Card';
import Constant from 'expo-constants';
import {useSelector, useDispatch} from 'react-redux';

const Home = () =>{
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state)=>{
    return state.cardData;
  })
  return (
    <View style={{flex:1, marginTop: Constant.statusBarHeight}}>
      <Header/>
      {loading ? <ActivityIndicator size="large" color="red" style={{marginTop:10}}/> : null}
      <FlatList
        keyExtractor={(item)=>item.id.videoId}
        data={data}
        renderItem={(item)=>{
            return <Card
                videoId={item.item.id.videoId}
                title={item.item.snippet.title}
                description={item.item.snippet.description}
                chanel={item.item.snippet.channelTitle}
            />
        }}
      />
    </View>
  );
}

export default Home;

import React from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import Constant from 'expo-constants';
import Header from '../components/Header';

const Explore = () => {
    return (
        <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
            <Header/>
            <Text>text navigation</Text>
        </View>
    )
}

export default Explore;
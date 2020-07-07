import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Image,Dimensions, Text, TouchableOpacity} from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme} from '@react-navigation/native';

const MiniCard = (props) =>{
  const navigation = useNavigation();
  const { colors} = useTheme();
  const textcolor = colors.iconColor;
  return (
    <TouchableOpacity onPress = {()=>navigation.navigate('videoPlayer',{videoId:props.videoId,title:props.title})}>
    <View style={{flex:1, flexDirection:'row',margin:10,marginBottom:0}}>
         <Image
        source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        style={{width:'45%', height:100}}
      />
      <View style={{paddingLeft:7}}>
          <Text style={{fontSize:15,width:Dimensions.get('screen').width/2, color:textcolor}} ellipsizeMode="tail" numberOfLines={3}>
              {props.title}
          </Text>
          <Text style={{fontSize:12, color:textcolor}}>{props.channel}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}

export default MiniCard;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector} from 'react-redux';

const Header = () => {
  const navigation = useNavigation();
  const { colors} = useTheme();
  const mycolor = colors.iconColor;
  const dispatch = useDispatch();
  const currentTheme = useSelector((state)=>{
    return state.myDarkMode;
  })
  return (
    
    <View
      style={{
        flexDirection: 'row',
        height: 45,
        backgroundColor:colors.headerColor,
        justifyContent: 'space-between',
        elevation: 4
      }}
    >
      <View style={{
         flexDirection: 'row',
         margin: 5,
         color: mycolor
      }}>
        <Entypo name="youtube" size={32} color="red" />
        <Text style={{fontSize:22, marginLeft:5, fontWeight:'bold',color:mycolor}}>Youtube</Text>
      </View>
      <View style={{flexDirection:'row',  justifyContent:'space-between',width:150, margin:5}}>
          <Ionicons name="md-videocam" size={32} color={mycolor}/>
          <Ionicons name="md-search" size={32} color={mycolor} onPress={()=>navigation.navigate('search')}/>
          <MaterialIcons name="account-circle" size={32} color={mycolor}
          onPress={()=>dispatch({type:"CHANGE_THEME",payload:!currentTheme})}
          />
      </View>
    </View>
  );
};

export default Header;

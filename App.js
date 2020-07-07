import React from 'react';
import { createStore, combineReducers} from 'redux';
import { Provider, useSelector} from 'react-redux';
import { reducer} from './src/redux/reducer';
import { themeReducer} from './src/redux/themeReducer';

import { NavigationContainer, DefaultTheme, DarkTheme, useTheme} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from "./src/screens/Home";
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Suscribe from './src/screens/Suscribe';

import { MaterialIcons} from "@expo/vector-icons";

const customDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:'white'
  }
}
const customDefaultTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    conColor:"black",
    tabIcon:'red'
  }
}
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const rootReducer = combineReducers({
  cardData: reducer,
  myDarkMode: themeReducer
});
const store = createStore(rootReducer);

const RootHome = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;
        if (route.name === 'home') {
          iconName = 'home'
        } else if (route.name === 'explore') {
          iconName = 'explore';
        }else if (route.name === 'subscribe') {
          iconName = 'subscriptions';
        }
        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Suscribe} />
    </Tabs.Navigator>
  );
}
export default function App(){
  return(
    <Provider store={store}>
      <Navigation />
     </Provider>
  )
}
 function Navigation() {
  const currentTheme = useSelector((state)=>{
    return state.myDarkMode;
  })
  return (
      <NavigationContainer theme={currentTheme ?customDarkTheme:customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

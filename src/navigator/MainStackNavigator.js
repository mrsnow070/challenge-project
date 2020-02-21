import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GistScreen from '../screens/GistScreen';
import WebViewScreen from '../screens/WebViewScreen';
import {trimLongString} from '../util/';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={() => ({headerShown: false})}
        component={HomeScreen}
      />

      <Stack.Screen name="Gist" component={GistScreen} />
      <Stack.Screen
        options={({route}) => ({title: trimLongString(route.params.title)})}
        name="WebView"
        component={WebViewScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GistScreen from '../screens/GistScreen';

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
    </Stack.Navigator>
  );
};

export default MainStack;

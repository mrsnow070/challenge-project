import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="to gist" onPress={() => navigation.navigate('Gist')} />
    </View>
  );
};

export default HomeScreen;

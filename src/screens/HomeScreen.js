import React from 'react';
import {View, Text, Button} from 'react-native';
import dummy_json from '../util/dummyGists.json';

const HomeScreen = ({navigation}) => {
  console.log(dummy_json);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="to gist" onPress={() => navigation.navigate('Gist')} />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {View, Text, Button} from 'react-native';
import GistList from '../components/GistList';
import dummy_json from '../util/dummyGists.json';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <GistList data={dummy_json} />
    </View>
  );
};

export default HomeScreen;

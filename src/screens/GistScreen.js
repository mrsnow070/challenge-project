import React from 'react';
import {View, Text} from 'react-native';
import GistFiles from '../components/GistFiles/';
import {useRoute} from '@react-navigation/native';

const GistScreen = () => {
  const {params} = useRoute();
  const {data} = params;
  console.log(data.files);

  return (
    <View>
      <GistFiles files={data.files} />
    </View>
  );
};

export default GistScreen;

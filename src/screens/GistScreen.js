import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const GistScreen = () => {
  const {params} = useRoute();
  const {data} = params;

  return (
    <View>
      <Text>{data.id}</Text>
    </View>
  );
};

export default GistScreen;

import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const WebView = () => {
  const {params} = useRoute();

  return (
    <View>
      <Text>{params.title}</Text>
    </View>
  );
};

export default WebView;

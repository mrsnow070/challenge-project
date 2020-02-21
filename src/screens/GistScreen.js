import React from 'react';
import {View} from 'react-native';
import GistFiles from '../components/GistFiles/';
import {useRoute} from '@react-navigation/native';
import {parseWebViewLink} from '../util/';

const GistScreen = () => {
  const {params} = useRoute();
  const {data} = params;

  return (
    <View>
      <GistFiles files={data.files} htmlUrl={data.html_url} />
    </View>
  );
};

export default GistScreen;

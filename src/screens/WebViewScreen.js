import React from 'react';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

export default () => {
  const {params} = useRoute();
  return (
    <WebView
      originWhitelist={['*']}
      source={{
        uri: params.webViewUrl,
      }}
    />
  );
};

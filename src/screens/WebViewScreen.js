import React from 'react';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

export default () => {
  const {params} = useRoute();
  return (
    <WebView
      originWhitelist={['*']}
      onLoad={() => console.log('end')}
      onLoadEnd={() => console.log('end')}
      onLoadProgress={e => console.log(e)}
      source={{
        uri: params.webViewUrl,
      }}
    />
  );
};

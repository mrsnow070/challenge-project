import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {parseWebViewLink} from '../../util/';

const GistFileItem = ({info, htmlUrl}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.absoluteOpacity}
        onPress={() =>
          navigation.navigate('WebView', {
            title: info.filename,
            webViewUrl: parseWebViewLink(htmlUrl, info.filename),
          })
        }
      />
      <View style={styles.iconWrapper}>
        <Ionicons name="ios-code" style={styles.icon} />
      </View>
      <View style={styles.fileNameWrapper}>
        <Text style={styles.fileNameText}>{info.filename}</Text>
      </View>
      <View>
        <Text>{info.language}</Text>
      </View>
    </View>
  );
};

export default GistFileItem;

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {parseGistData} from '../../util/';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const GistItem = ({gist}) => {
  const {gistFiles, user, comments, description} = parseGistData(gist);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.absoluteOpacity}
        onPress={() => navigation.navigate('Gist', {data: gist})}
      />
      <View style={styles.imageContainer}>
        <Image style={styles.userAvatar} source={{uri: user.avatarUrl}} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.userLoginText}>{user.login}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
        <View style={styles.detailsWrapper}>
          <View style={styles.detailsItem}>
            <Octicons style={styles.icon} name="file-code" />
            <Text style={styles.detailsText}>
              {gistFiles.length} file
              {gistFiles.length > 1 ? 's' : ''}
            </Text>
          </View>

          <View style={styles.detailsItem}>
            <MaterialCommunityIcons style={styles.icon} name="" />
            <Text style={styles.detailsText}>{comments} comments</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GistItem;

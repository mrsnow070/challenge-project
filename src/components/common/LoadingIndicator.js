import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const LoadingIndicator = ({size = 'large'}) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.center}>
        <ActivityIndicator size={size} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoadingIndicator;

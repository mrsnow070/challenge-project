import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Error = ({callback}) => {
  return (
    <View style={styles.container}>
      <Text>Failed to get response from github</Text>
      <TouchableOpacity style={styles.button} onPress={callback}>
        <Text>Reload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    backgroundColor: '#fafbfc',
    borderColor: '#e1e4e8',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Error;

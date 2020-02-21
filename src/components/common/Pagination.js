import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Pagination = ({active, maxLength, setActive}) => {
  const handleActive = bool => {
    bool
      ? active < maxLength
        ? setActive(active + 1)
        : active
      : active === 1
      ? active
      : setActive(active - 1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleActive(false)}>
        <MaterialIcons
          name="navigate-before"
          style={[active === 1 && styles.iconGray]}
          size={50}
        />
      </TouchableOpacity>

      <View style={styles.box}>
        <Text>{active}</Text>
      </View>
      <TouchableOpacity onPress={() => handleActive(true)}>
        <MaterialIcons
          name="navigate-next"
          style={[maxLength === active && styles.iconGray]}
          size={50}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: 'lightblue',
    marginRight: 2,
  },
  iconGray: {
    color: 'gray',
  },
});

export default Pagination;

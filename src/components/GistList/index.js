import React from 'react';
import {FlatList} from 'react-native';
import GistItem from './GistItem';

export default ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => <GistItem gist={item} />}>
      />
    </FlatList>
  );
};

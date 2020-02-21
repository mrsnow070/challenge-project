import React from 'react';
import {FlatList} from 'react-native';
import GistItem from './GistItem';

export default ({data, render}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item, index}) =>
        data.length - 1 === index ? (
          <>
            <GistItem gist={item} />
            {render()}
          </>
        ) : (
          <GistItem gist={item} />
        )
      }
    />
  );
};

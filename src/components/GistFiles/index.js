import React from 'react';
import {ScrollView, Text} from 'react-native';
import GistFileItem from './GistFileItem';
import {getObjectKeys} from '../../util/';

const GistFiles = ({files, htmlUrl}) => {
  const keys = getObjectKeys(files);

  return (
    <ScrollView>
      {keys.map(k => (
        <GistFileItem key={k} htmlUrl={htmlUrl} info={files[k]} />
      ))}
    </ScrollView>
  );
};

export default GistFiles;

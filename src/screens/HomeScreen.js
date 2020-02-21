import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {publicGistsUrl} from '../const/';
import Pagination from '../components/common/Pagination';
import {substactDaysFromDate, chunksFromArray} from '../util/';

import GistList from '../components/GistList';
import dummy_json from '../util/dummyGists.json';
import LoadingIndicator from '../components/common/LoadingIndicator';
import axios from 'axios';

const dummy_chunked = chunksFromArray(dummy_json, 10);

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(1);
  const [dataArray, setDataArray] = useState(dummy_chunked);
  useEffect(() => {
    getGists();
    // setDataArray(dummy_chunked);
  }, []);

  async function getGists() {
    try {
      const {data} = await axios.get(publicGistsUrl, {
        params: {
          since: substactDaysFromDate(5),
        },
      });
      const sorted = data.sort((a, b) => b.comments - a.comments);

      const chunks = chunksFromArray(sorted, 10);

      setDataArray(chunks);

      setIsLoading(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <View>
            <GistList
              data={dataArray[active - 1]}
              render={() => {
                return (
                  <Pagination
                    active={active}
                    setActive={setActive}
                    maxLength={dataArray.length}
                  />
                );
              }}
            />
          </View>
        </>
      )}
    </>
  );
};

export default HomeScreen;

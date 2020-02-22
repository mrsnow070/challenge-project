import React, {useEffect, useState, useCallback} from 'react';
import {View} from 'react-native';
import axios from 'axios';

import LoadingIndicator from '../components/common/LoadingIndicator';
import {substactDaysFromDate, chunksFromArray} from '../util/';
import Pagination from '../components/common/Pagination';
import Error from '../components/common/Error';
import GistList from '../components/GistList';
import {publicGistsUrl} from '../const/';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [active, setActive] = useState(1);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    loadPublicGists();
  }, [loadPublicGists]);

  const handleReload = () => {
    setIsError(false);
    setIsLoading(true);
    loadPublicGists();
  };

  const loadPublicGists = useCallback(async () => {
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
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  return isError ? (
    <Error callback={handleReload} />
  ) : (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;

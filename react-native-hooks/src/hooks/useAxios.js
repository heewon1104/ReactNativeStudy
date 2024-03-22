import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setInProgress(true);
      await axios
        .get(url)
        .then(function (response) {
          console.table(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
          setError(e);
        })
        .finally(function () {
          setInProgress(false);
        });
    };
    getData();
  }, []);

  return { data, error, inProgress };
};

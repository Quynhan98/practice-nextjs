import { SERVER_MESSAGES } from '@constant/messages';
import { getData } from '@services/fetch-api';
import { useState, useEffect } from 'react';

/**
 * Get data from json server
 * @param url url json server
 * @returns data, error, setData, setError
 */
const useGetData = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getList = async () => {
      try {
        const response: T[] = await getData(url);
        setData(response);
      } catch (error) {
        console.error(error);
        setError(SERVER_MESSAGES.SERVER_GET_ERROR);
      }
    };

    getList();
  }, [url]);

  return {
    data,
    error,
    setData,
    setError
  };
};

export default useGetData;

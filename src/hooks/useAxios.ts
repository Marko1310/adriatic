import { AxiosInstance } from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useAxios = <T>(
  axiosInstance: AxiosInstance,
  apiEndpoint: string,
): [T | undefined, boolean, string, () => Promise<void>] => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(apiEndpoint);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [apiEndpoint, axiosInstance]);

  useEffect(() => {
    getData();
  }, [getData]);

  return [data, loading, error, getData];
};

export default useAxios;

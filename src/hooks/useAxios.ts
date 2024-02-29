import { AxiosInstance } from 'axios';
import { useEffect, useState } from 'react';

const useAxios = <T>(
  axiosInstance: AxiosInstance,
  apiEndpoint: string,
): [T | undefined, boolean, string] => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(apiEndpoint);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [axiosInstance, apiEndpoint]);

  return [data, loading, error];
};

export default useAxios;

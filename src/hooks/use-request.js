import { useCallback, useState } from 'react';

const useRequest = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (requestConfig, handleData) => {
    try {
      setIsLoading(true);

      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.header : {},
      });

      if (!response.ok) throw Error('Request failed!');

      const data = await response.json();

      setIsLoading(false);
      handleData(data);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
      setIsLoading(false);
    }
  }, []);

  return {
    sendRequest,
    error,
    isLoading,
  };
};

export default useRequest;

import {Dispatch, SetStateAction, useEffect} from 'react';

const useFetch = (url : string, setData: Dispatch<SetStateAction<never[]>>) => {
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return setData(data.meals);
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useFetch;

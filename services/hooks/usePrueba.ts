import axios from "axios";
import useSWR from "swr";

import { FetcherProps } from "typings/requests";

const fetcherGet = async (url: FetcherProps["url"]) => {
  return await axios.get(url).then((res) => res.data);
};
export const usePrueba = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const { data, error, ...rest } = useSWR(API_URL, fetcherGet);
  return { data, error, ...rest };
};

export default usePrueba;

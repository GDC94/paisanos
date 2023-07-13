import useSWRWrapper from "components/libs/swr/useSWRWrapper";
import { fetcherGet } from "fetchers";

export const usePrueba = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const { data, error, ...rest } = useSWRWrapper({
    key: API_URL,
    fetcher: async () => fetcherGet(API_URL),
  });

  return { data: data, error, ...rest };
};

export default usePrueba;

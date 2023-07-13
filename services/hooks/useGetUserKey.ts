import useSWRWrapper from "components/libs/swr/useSWRWrapper";
import { fetcherGet } from "fetchers/fetcherGet";

export const useGetUserKey = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const { data, error, ...rest } = useSWRWrapper({
    key: API_URL,
    fetcher: async () => fetcherGet(API_URL),
  });

  return { userKey: data, error, ...rest };
};

export default useGetUserKey;

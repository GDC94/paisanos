import useSWRWrapper from "components/libs/swr/useSWRWrapper";
import BASE_URL from "config/baseUrl";
import { useChallengeState } from "context/challengeContext";
import { fetcherGet } from "fetchers/fetcherGet";
import { getUrlMostPopularAunctions } from "services/urls";
import { NFPAISANO } from "typings/responses";

/**
 * @method  useGetMostPopularAunctions custom hook with swr
 *
 * @returns a list with a most popular aunctions
 */

export const useGetMostPopularAunctions = () => {
  const { challengeState } = useChallengeState();
  const { userKey } = challengeState;
  const API_URL = getUrlMostPopularAunctions(BASE_URL);

  const config = {
    headers: {
      apiKey: userKey,
    },
  };
  const { data, error, ...rest } = useSWRWrapper<NFPAISANO[]>({
    key: API_URL,
    fetcher: async () => fetcherGet(API_URL, config),
  });

  return { mostPopularAunctions: data, error, ...rest };
};

export default useGetMostPopularAunctions;

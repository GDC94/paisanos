import useSWRWrapper from "components/libs/swr/useSWRWrapper";
import BASE_URL from "config/baseUrl";
import { useChallengeState } from "context/challengeContext";
import { fetcherGet } from "fetchers";
import { getUrlAllAunctions } from "services/urls";
import { NFPAISANO } from "typings/responses";

/**
 * @method  useGetAunctions custom hook with swr
 * @returns a list with all aunctions
 */

const useGetAunctions = () => {
  const { challengeState } = useChallengeState();
  const { userKey } = challengeState;
  const API_URL = getUrlAllAunctions(BASE_URL);

  const config = {
    headers: {
      apiKey: userKey,
    },
  };
  const { data, error, ...rest } = useSWRWrapper<NFPAISANO[]>({
    key: API_URL,
    fetcher: async () => fetcherGet(API_URL, config),
  });

  return { allAunctions: data, error, ...rest };
};

export default useGetAunctions;

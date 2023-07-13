import useSWR from "swr";
import axios from "axios";
import BASE_URL from "config/baseUrl";
import { useChallengeState } from "context/challengeContext";
import { getUrlAllAunctions } from "services/urls";
import { FetcherProps } from "typings/requests";
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

  const fetcherGet = async (url: FetcherProps["url"]) => {
    return await axios.get(url, config).then((res) => res.data);
  };
  const { data, error, ...rest } = useSWR<NFPAISANO[]>({
    API_URL,
    fetcherGet,
  });

  return { allAunctions: data, error, ...rest };
};

export default useGetAunctions;

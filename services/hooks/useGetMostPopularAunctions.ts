import useSWR from "swr";
import axios from "axios";
import BASE_URL from "config/baseUrl";
import { useChallengeState } from "context/challengeContext";
import { getUrlMostPopularAunctions } from "services/urls";
import { FetcherProps } from "typings/requests";
import { NFPAISANO } from "typings/responses";

/**
 * @method  useGetMostPopularAunctions custom hook with swr
 * @returns a list with a most popular aunctions
 */

const useGetMostPopularAunctions = () => {
  const { challengeState } = useChallengeState();
  const { userKey } = challengeState;
  const API_URL = getUrlMostPopularAunctions(BASE_URL);

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

  return { mostPopularAunctions: data, error, ...rest };
};

export default useGetMostPopularAunctions;

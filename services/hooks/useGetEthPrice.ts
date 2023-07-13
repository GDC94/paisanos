import useSWRWrapper from "components/libs/swr/useSWRWrapper";
import BASE_URL from "config/baseUrl";
import { useChallengeState } from "context/challengeContext";
import { fetcherGet } from "fetchers";
import { getUrlEthPrice } from "services/urls";
import { EthPriceInfoResponse } from "typings/responses";

/**
 * @method  useGetEthPrice custom hook with swr
 *
 * @returns a eth price and eth price in usd
 */

const useGetEthPrice = () => {
  const { challengeState } = useChallengeState();
  const { userKey } = challengeState;
  const API_URL = getUrlEthPrice(BASE_URL);

  const config = {
    headers: {
      apiKey: userKey,
    },
  };
  const { data, error, ...rest } = useSWRWrapper<EthPriceInfoResponse>({
    key: API_URL,
    fetcher: async () => fetcherGet(API_URL, config),
  });

  return { ethPrice: data?.eth, priceInUsd: data?.usd, error, ...rest };
};

export default useGetEthPrice;

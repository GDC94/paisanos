import useSWR from "swr";
import BASE_URL from "config/baseUrl";
import { useChallengeState } from "context/challengeContext";
import axios from "axios";
import { getUrlEthPrice } from "services/urls";
import { EthPriceInfoResponse } from "typings/responses";
import { FetcherProps } from "typings/requests";

/**
 * @method  useGetEthPrice custom hook with swr
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

  const fetcher = async (url: FetcherProps["url"]) => {
    return await axios.get(url, config).then((res) => res.data);
  };

  const { data, error, ...rest } = useSWR<EthPriceInfoResponse>(
    API_URL,
    fetcher,
  );

  return { ethPrice: data?.eth, priceInUsd: data?.usd, error, ...rest };
};

export default useGetEthPrice;

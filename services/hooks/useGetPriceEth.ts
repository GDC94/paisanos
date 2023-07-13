/*
import useSWR from "swr";

const fetcher = async (url: string) => {
  const requestOptions = {
    method: "GET",
    headers: {
      apiKey: "byy2ExX/rnaFuvDXdPOTOjJEQnzYsSJeKVWvP7viU1k=",
    },
  };

  return fetch(url, requestOptions).then((res) => res.json());
};

export const useGetPriceEth = () => {
  const API_URL =
    "http://challenges.us-east-1.elasticbeanstalk.com/nfpaisanos/eth-price";

  const { data, error, ...rest } = useSWR(API_URL, fetcher);

  return { price: data, error, ...rest };
};

export default useGetPriceEth;

import axios from "axios";

export interface EthPrice {
  eth: string;
  usd: string;
}

const headers = {
  headers: {
    apiKey: "byy2ExX/rnaFuvDXdPOTOjJEQnzYsSJeKVWvP7viU1k=",
  },
};

export const getEthPrice = async (): Promise<EthPrice> => {
  const response = await axios.get(
    "http://challenges.us-east-1.elasticbeanstalk.com/nfpaisanos/eth-price",
    headers,
  );
  return response.data;
};
*/
import useSWR from "swr";

export const useGetEthPrice = () => {
  let fetcher;
  const API_URL =
    "http://challenges.us-east-1.elasticbeanstalk.com/nfpaisanos/eth-price";

  const { data, error, ...rest } = useSWR(API_URL, fetcher);

  return { userKey: data, error, ...rest };
};

export default useGetEthPrice;

import CHALLENGE_END_POINT from "./challengeEndPoints";

export const getUrl =
  (url: string) =>
  (BASE_URL: string): string => {
    const API_URL = `${BASE_URL}${url}`;
    return API_URL;
  };

export const getUrlLogin = getUrl(CHALLENGE_END_POINT.LOGIN);

export const getUrlEthPrice = getUrl(CHALLENGE_END_POINT.ETH_PRICE);

export const getUrlMostPopularAunctions = getUrl(
  CHALLENGE_END_POINT.MOST_POPULAR_AUNCTIONS,
);
export const getUrlAllAunctions = getUrl(CHALLENGE_END_POINT.ALL_AUNCTIONS);

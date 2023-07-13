import CHALLENGE_END_POINTS from "./challengeEndPoints";

export const getUrl =
  (url: string) =>
  (BASE_URL: string): string => {
    const API_URL = `${BASE_URL}${url}`;
    return API_URL;
  };

export const getUrlLogin = getUrl(CHALLENGE_END_POINTS.LOGIN);

export const getUrlEthPrice = getUrl(CHALLENGE_END_POINTS.ETH_PRICE);

export const getUrlMostPopularAunctions = getUrl(
  CHALLENGE_END_POINTS.MOST_POPULAR_AUNCTIONS,
);
export const getUrlAllAunctions = getUrl(CHALLENGE_END_POINTS.ALL_AUNCTIONS);

import axios from "axios";
import { FetcherProps } from "typings/requests";

/**
 * Utility: Is an asynchronous function to make the calls with swr-
 *
 * @param url
 * @param headers
 * @return Promise
 */

export const fetcherGet = async (
  url: FetcherProps["url"],
  config?: FetcherProps["config"],
) => {
  return await axios.get(url, config).then((res) => res.data);
};

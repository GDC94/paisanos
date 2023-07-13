import axios from "axios";
import { FetcherProps } from "typings/requests";

/**
 * Utility: Is an asynchronous function to make the calls with swr-
 *
 * @param url
 * @param body
 *
 * @return Promise
 */

export const fetcherPost = async (
  url: FetcherProps["url"],
  body: FetcherProps["body"],
) => {
  return await axios.post(url, body).then((res) => res.data);
};

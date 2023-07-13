import axios from "axios";

/**
 * Utility: Is an asynchronous function to make the calls with swr-
 *
 * @param url
 * @param body
 * @return Promise
 */

export const fetcherUser = (url: string, body: object) => {
  return axios.post(url, { body }).then((res) => res.data);
};

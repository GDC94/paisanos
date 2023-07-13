import axios from "axios";

/**
 *
 * @param url
 * @param body
 * @return Promise
 */

export const fetcherUser = (url: string, body: object) => {
  return axios.post(url, { body }).then((res) => res.data);
};

import axios from "axios";
import useSWR from "swr";
import BASE_URL from "config/baseUrl";
import { getUrlLogin } from "services/urls";
import { FetcherProps, bodyRequestApiKey } from "typings/requests";
import { PostApiKeyResponse } from "typings/responses";

/**
 * @method  useGetUserKey custom hook with swr
 * @returns a user key
 */

const useGetUserKey = () => {
  const API_URL = getUrlLogin(BASE_URL);

  const bodyReq: bodyRequestApiKey = {
    nombre: "German",
    email: "german@challengepaisanos.com",
  };

  const fetcherPost = async (
    url: FetcherProps["url"],
    body: FetcherProps["body"],
  ) => {
    return await axios.post(url, body).then((res) => res.data);
  };

  const { data, error, ...rest } = useSWR(API_URL, () =>
    fetcherPost(API_URL, bodyReq),
  );
  return { userKey: data?.key, welcomeMessage: data?.message, error, ...rest };
};

export default useGetUserKey;

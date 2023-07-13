import useSWRWrapper from "components/libs/swr/useSWRWrapper";
import BASE_URL from "config/baseUrl";
import { fetcherPost } from "fetchers";
import { getUrlLogin } from "services/urls";
import { bodyRequestApiKey } from "typings/requests";
import { PostApiKeyResponse } from "typings/responses";

/**
 * @method  useGetUserKey custom hook with swr
 *
 * @returns a user key
 */

const useGetUserKey = () => {
  const API_URL = getUrlLogin(BASE_URL);
  const BODY: bodyRequestApiKey = {
    nombre: "German",
    email: "german@challengepaisanos.com",
  };
  const { data, error, ...rest } = useSWRWrapper<PostApiKeyResponse>({
    key: API_URL,
    fetcher: async () => fetcherPost(API_URL, BODY),
  });

  return { userKey: data?.key, welcomeMessage: data?.message, error, ...rest };
};

export default useGetUserKey;

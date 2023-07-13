import axios from "axios";
import useSWR from "swr";
import BASE_URL from "config/baseUrl";
import { getUrlLogin } from "services/urls";
import { bodyRequestApiKey } from "typings/requests";
import { PostApiKeyResponse } from "typings/responses";

/**
 * @method  useGetUserKey custom hook with swr
 * @returns a user key
 */

const useGetUserKey = () => {
  const API_URL = getUrlLogin(BASE_URL);
  
  const body: bodyRequestApiKey = {
    nombre: "German",
    email: "german@challengepaisanos.com",
  };

  const fetcherPost = async () => {
    return await axios.post(API_URL, body).then((res) => res.data);
  };

  const { data, error, ...rest } = useSWR<PostApiKeyResponse>({
    API_URL,
    fetcherPost,
  });

  return { userKey: data?.key, welcomeMessage: data?.message, error, ...rest };
};

export default useGetUserKey;

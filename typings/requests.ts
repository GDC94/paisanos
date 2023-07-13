import { AxiosRequestConfig } from "axios";

export interface FetcherProps {
  url: string;
  body: bodyRequestApiKey;
  config: headersChallenge;
}

export interface bodyRequestApiKey {
  nombre: string;
  email: string;
}

export interface headersChallenge extends Partial<AxiosRequestConfig> {
  headers: {
    apiKey: number | string;
  };
}

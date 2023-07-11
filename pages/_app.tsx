import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@emotion/react";
import { theme } from "styles/theme";
import axios from "axios";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        fetcher: (url: string) => axios.get(url).then((res) => res.data),
      }}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

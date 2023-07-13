import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@emotion/react";
import { theme } from "styles/theme";
import ChallengeProvider from "context/challengeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
      }}
    >
      <ChallengeProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChallengeProvider>
    </SWRConfig>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "../src/api";

// initalizing our query client and hydrating the state
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

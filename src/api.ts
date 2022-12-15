import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

import { getSdk } from "../src/generated/graphql"; // this has our queries

const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");
export const { getAllAuthorsQuery } = getSdk(gqlClient); // this is how the graph ql library knows what to hit for our queries

// this is going to share between client and server
// we keep react query from immediately requesting data and no refetching
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

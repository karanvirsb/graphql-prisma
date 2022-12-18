import { dehydrate, useQuery } from "react-query";

import { queryClient, getAllAuthorsQuery } from "../src/api";

export async function getServerSideProps() {
  await queryClient.prefetchQuery(["authors"], () =>
    getAllAuthorsQuery({ cursor: 1, limit: 10 })
  );

  // the dehydrated state is matched in hte page props
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery(["authors"], () =>
    getAllAuthorsQuery({ cursor: 1, limit: 10 })
  );

  return <div>{JSON.stringify(data)}</div>;
}

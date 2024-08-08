import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { cookies } from "next/headers";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_API_URL,
      fetchOptions: { cache: "no-store" },
      credentials: "same-origin",
      headers: {
        Authorization: cookies().get("token")?.value || "",
      },
    }),
  });
});

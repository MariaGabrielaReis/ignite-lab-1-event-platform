import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clgurs75v01cg01tfgu3k00kj/master",
  cache: new InMemoryCache(),
});

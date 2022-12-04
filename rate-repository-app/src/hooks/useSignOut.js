import { useQuery, useApolloClient } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";
import { ME } from "../graphql/mutations";

const useSignOut = () => {
  const apolloClient = useApolloClient();
  const { loading, data } = useQuery(ME);
  const authStorage = useAuthStorage();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  
  if (loading) return [signOut, null]
  return [signOut, data];
};

export default useSignOut;
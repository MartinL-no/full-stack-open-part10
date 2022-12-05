import { useQuery, useApolloClient } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";
import { ME } from "../graphql/queries";

const useSignOut = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const { loading, data } = useQuery(ME);
  const loginStatus = loading ? undefined : data.me;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  
  return [loginStatus, signOut, loading];
};

export default useSignOut;
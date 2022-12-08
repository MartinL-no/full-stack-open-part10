import { useQuery, useApolloClient } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";
import { GET_CURRENT_USER } from "../graphql/queries";

const useSignOut = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const { data } = useQuery(GET_CURRENT_USER);
  const loginStatus = data?.me;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return [loginStatus, signOut];
};

export default useSignOut;

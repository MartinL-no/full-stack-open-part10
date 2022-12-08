import { useMutation, useApolloClient } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";
import { LOGIN } from "../graphql/mutations";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(LOGIN);
  const authStorage = useAuthStorage();

  const signIn = async ({ username, password }) => {
    const response = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(response.data.authenticate.accessToken);
    apolloClient.resetStore();

    return response;
  };

  return [signIn, result];
};

export default useSignIn;

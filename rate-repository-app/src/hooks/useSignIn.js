import { useMutation, useApolloClient } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";
import { LOGIN } from "../graphql/mutations";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(LOGIN);
  const authStorage = useAuthStorage();


  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username , password }});
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    console.log(await authStorage.getAccessToken());

    return mutate({ variables: { username , password }});
  };

  return [signIn, result];
};

export default useSignIn
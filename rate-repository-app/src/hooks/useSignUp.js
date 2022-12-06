import { useMutation } from "@apollo/client";

// import useAuthStorage from "./useAuthStorage";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  // const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREATE_USER);
  // const authStorage = useAuthStorage();


  const useSignUp = async ({ username, password }) => {
    console.log(username, password)
    const { data } = await mutate({ variables: { user: { username, password }}});
    // await authStorage.setAccessToken(data.authenticate.accessToken);
    // apolloClient.resetStore();
    // console.log(await authStorage.getAccessToken());

    // return mutate({ variables: { username , password }});
    return data.createUser;
  };

  return [useSignUp, result];
};

export default useSignUp
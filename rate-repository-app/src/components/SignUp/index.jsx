import { useNavigate } from "react-router-native";

import useSignIn from "../../hooks/useSignIn";
import useSignUp from "../../hooks/useSignUp";
import SignUpContainer from "./SignUpContainer";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      const { data } = await signIn({ username, password });

      if (data) navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;

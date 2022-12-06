import { useNavigate } from 'react-router-native';

import useSignIn from '../../hooks/useSignIn';
import SignInContainer from './SignInContainer';

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });

      if (data) navigate('/');
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  
  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import SignInForm from './SignInForm';
import theme from '../theme';
import AuthStorage from '../utils/authStorage';

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: theme.colors.secondary,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const login = new AuthStorage('login');

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      login.setAccessToken(data.authenticate.accessToken);

      console.log(await login.getAccessToken());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.signInContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
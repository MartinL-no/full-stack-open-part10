import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import theme from '../theme';

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: theme.colors.secondary,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.signInContainer}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
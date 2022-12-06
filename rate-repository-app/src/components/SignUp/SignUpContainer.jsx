import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import theme from '../../theme';
import { SignUpForm } from './SignUpForm';

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: theme.colors.secondary,
  },
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'Username is too short')
    .max(30, 'Username must be less than 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be greater than 5 characters')
    .max(50, 'Password must be less than 50 characters'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
    .required('Password confimation is required'),
});

const SignUpContainer = ({ onSubmit }) => {

  return (
    <View style={styles.signInContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUpContainer;
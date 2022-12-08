import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import theme from "../../theme";
import { SignInForm } from "./SignInForm";

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: theme.colors.secondary,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignInContainer = ({ onSubmit }) => {
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

export default SignInContainer;

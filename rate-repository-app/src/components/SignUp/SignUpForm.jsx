import { View, StyleSheet, Pressable } from "react-native";

import FormikTextInput from "../FormikTextInput";
import FormButton from "../Button";

const styles = StyleSheet.create({
  formContainer: {
    margin: 13,
  },
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry
      />
      <Pressable onPress={onSubmit}>
        <FormButton>Sign in</FormButton>
      </Pressable>
    </View>
  );
};

export { SignUpForm };

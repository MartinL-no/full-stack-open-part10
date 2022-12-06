import { View, StyleSheet, Pressable } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import FormButton from '../FormButton';

const styles = StyleSheet.create({
  formContainer: {
    margin: 13,
  },
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View style={styles.formContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <FormButton>Sign in</FormButton>
      </Pressable>
    </View>
  );
};

export { SignInForm };
import { View, StyleSheet, Pressable } from 'react-native';

import Text from '../Text';
import { FormikTextInput } from './FormikTextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
  formContainer: {
    margin: 13,
  },
  button: {
    backgroundColor: theme.colors.accent,
    marginBottom: 13,
    borderRadius: 3,
    overflow: "hidden",
    padding: 9,
    textAlign: "center"
  }
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View style={styles.formContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text color="textAccent" fontWeight="bold" style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export { SignInForm };
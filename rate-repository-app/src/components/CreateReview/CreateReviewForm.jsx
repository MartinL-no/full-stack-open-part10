import { View, StyleSheet, Pressable } from "react-native";

import FormikTextInput from "../FormikTextInput";
import FormButton from "../Button";

const styles = StyleSheet.create({
  formContainer: {
    margin: 13,
  },
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Repository rating" />
      <FormikTextInput name="text" placeholder="Repository review" multiline />
      <Pressable onPress={onSubmit}>
        <FormButton>Create a review</FormButton>
      </Pressable>
    </View>
  );
};

export { CreateReviewForm };

import { StyleSheet } from "react-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.accent,
    marginBottom: 13,
    borderRadius: 3,
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  }
});

const FormButton = (props) => {
  return (
    <>
      <Text color="textAccent" fontWeight="bold" style={styles.button}>
        {props.children}
      </Text>
    </>
  );
};

export default FormButton
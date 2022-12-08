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
    textAlign: "center",
    flexGrow: 1,
  },
});

const FormButton = ({ style, ...props }) => {
  const buttonStyle = [styles.button, style];

  return (
    <>
      <Text color="textAccent" fontWeight="bold" style={buttonStyle}>
        {props.children}
      </Text>
    </>
  );
};

export default FormButton;

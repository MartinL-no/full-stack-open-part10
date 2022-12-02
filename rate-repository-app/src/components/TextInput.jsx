import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 13,
    border: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 3,
    padding: 8
  }
});

const TextInput = ({ style,  error, ...props }) => {
  const textInputStyle = [style, styles.textInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
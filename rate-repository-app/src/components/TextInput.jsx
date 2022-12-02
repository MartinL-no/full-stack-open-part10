import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';


const TextInput = ({ style,  error, ...props }) => {
  const styles = StyleSheet.create({
    textInput: {
      marginBottom: error ? 5 : 13,
      border: 'solid',
      borderColor: error ? theme.colors.textError : 'grey',
      borderWidth: 1,
      borderRadius: 3,
      padding: 8
    }
  });

  const textInputStyle = [style, styles.textInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
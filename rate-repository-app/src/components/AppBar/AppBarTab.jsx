import { StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  text: {
    marginLeft: 5,
    marginRight: 5,
  },
});

const AppBarTab = (props) => {
  return (
    <>
      <Text style={styles.text} color='textAccent' fontWeight='bold'>{props.children}</Text>
    </>      
  )
};

export { AppBarTab };
import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = (props) => {
  return (
    <Pressable onPress={() => console.log('working')}>
      <Text color='textAccent'>{props.children}</Text>
    </Pressable>
  )
};

export default AppBarTab;
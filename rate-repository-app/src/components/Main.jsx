import { Text, StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList'
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.primary,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
      <Text>Rate Repository Application</Text>
    </View>
  );
};

export default Main;
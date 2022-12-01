import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <AppBarTab>Repositories</AppBarTab>
      </Link>
      <Link to="/signin">
        <AppBarTab>Sign In</AppBarTab>
      </Link>
    </View>
  ) 
};

export default AppBar;
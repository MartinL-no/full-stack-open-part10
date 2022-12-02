import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 12,
    backgroundColor: "#24292e",
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        <Link to="/signin">
          <AppBarTab>Sign In</AppBarTab>
        </Link>
      </ScrollView>
    </View>
  ) 
};

export default AppBar;
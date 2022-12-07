import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import Constants from 'expo-constants';

import useSignOut from '../../hooks/useSignOut';
import { AppBarTab } from './AppBarTab';

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
  const navigate = useNavigate();
  const [loginStatus, signOut] = useSignOut();

  const handleSignOut = () => {
    signOut()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        {!loginStatus && 
        <Link to="/signin">
          <AppBarTab>Sign In</AppBarTab>
        </Link>}
        {!loginStatus &&
        <Link to="/signup">
          <AppBarTab>Sign Up</AppBarTab>
        </Link>}
        {loginStatus && 
          <Pressable onPress={() => navigate('/create-review')}>
            <AppBarTab>Create a review</AppBarTab>
          </Pressable>
        }
        {loginStatus && 
          <Pressable onPress={() => handleSignOut()}>
            <AppBarTab>Sign Out</AppBarTab>
          </Pressable>
        }
      </ScrollView>
    </View>
  ) 
};

export default AppBar;
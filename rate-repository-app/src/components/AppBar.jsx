import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import Constants from 'expo-constants';


import AppBarTab from './AppBarTab';
import { ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

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
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const { data } = useQuery(ME);

  const signOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    console.log(data);
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        {!data.me && <Link to="/signin">
          <AppBarTab>Sign In</AppBarTab>
        </Link>}
        {data.me && 
          <Pressable onPress={() => signOut()}>
            <AppBarTab>Sign Out</AppBarTab>
          </Pressable>
        }
      </ScrollView>
    </View>
  ) 
};

export default AppBar;